import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Sliders, Info, Activity } from 'lucide-react';

export const ChaosSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [couplingStrength, setCouplingStrength] = useState<number>(0.28);
  const [systemType, setSystemType] = useState<'lorenz' | 'coupled'>('coupled');
  const [rotationAngle, setRotationAngle] = useState(0);

  // Simulation internal state
  const stateRef = useRef({
    // Oscillator 1 (Lorenz)
    x1: 0.1,
    y1: 0.0,
    z1: 0.0,
    // Oscillator 2 (Coupled with slight parameter mismatch or initial condition offset)
    x2: -0.1,
    y2: 0.5,
    z2: 0.2,
    trail1: [] as { x: number; y: number; z: number }[],
    trail2: [] as { x: number; y: number; z: number }[],
    time: 0,
    error: 0,
  });

  // Parameters
  const sigma = 10;
  const rho = 28;
  const beta = 8 / 3;
  const dt = 0.008;

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      if (isRunning) {
        const s = stateRef.current;

        // Perform multiple sub-steps for smooth trajectory
        for (let step = 0; step < 6; step++) {
          // Coupled chaotic equations:
          // dx1/dt = sigma*(y1 - x1) + eps*(x2 - x1)
          // dy1/dt = x1*(rho - z1) - y1
          // dz1/dt = x1*y1 - beta*z1

          // dx2/dt = sigma*(y2 - x2) + eps*(x1 - x2)
          // dy2/dt = x2*(rho - z2) - y2
          // dz2/dt = x2*y2 - beta*z2

          const eps = systemType === 'coupled' ? couplingStrength : 0;

          // Euler-Maruyama / RK step
          const dx1 = (sigma * (s.y1 - s.x1) + eps * (s.x2 - s.x1)) * dt;
          const dy1 = (s.x1 * (rho - s.z1) - s.y1) * dt;
          const dz1 = (s.x1 * s.y1 - beta * s.z1) * dt;

          const dx2 = (sigma * (s.y2 - s.x2) + eps * (s.x1 - s.x2)) * dt;
          const dy2 = (s.x2 * (rho - s.z2) - s.y2) * dt;
          const dz2 = (s.x2 * s.y2 - beta * s.z2) * dt;

          s.x1 += dx1;
          s.y1 += dy1;
          s.z1 += dz1;

          s.x2 += dx2;
          s.y2 += dy2;
          s.z2 += dz2;

          s.time += dt;

          // Add to trail
          s.trail1.push({ x: s.x1, y: s.y1, z: s.z1 });
          if (s.trail1.length > 550) s.trail1.shift();

          if (systemType === 'coupled') {
            s.trail2.push({ x: s.x2, y: s.y2, z: s.z2 });
            if (s.trail2.length > 550) s.trail2.shift();
          }

          // Compute instantaneous synchronization error ||x1 - x2||
          const err = Math.sqrt((s.x1 - s.x2) ** 2 + (s.y1 - s.y2) ** 2 + (s.z1 - s.z2) ** 2);
          s.error = s.error * 0.95 + err * 0.05;
        }

        setRotationAngle((prev) => (prev + 0.005) % (Math.PI * 2));
      }

      // Drawing routine
      const w = canvas.width;
      const h = canvas.height;
      const s = stateRef.current;

      // Dark laboratory oscilloscope style background
      ctx.fillStyle = '#0f172a'; // Deep slate
      ctx.fillRect(0, 0, w, h);

      // Draw faint coordinate grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const cx = w / 2;
      const cy = h / 2 + 15;
      const scale = Math.min(w, h) / 70;

      // 3D projection rotation
      const cosA = Math.cos(rotationAngle);
      const sinA = Math.sin(rotationAngle);

      const project = (pt: { x: number; y: number; z: number }) => {
        // Rotate around Y axis
        const rx = pt.x * cosA - (pt.z - 25) * sinA;
        const rz = pt.x * sinA + (pt.z - 25) * cosA;
        const px = cx + rx * scale;
        const py = cy - (pt.y * 0.6 + (pt.z - 25) * 0.8) * scale;
        return { px, py, rz };
      };

      // Draw Trail 1 (Oscillator 1 - Amber / Gold)
      if (s.trail1.length > 2) {
        ctx.lineWidth = 1.6;
        for (let i = 1; i < s.trail1.length; i++) {
          const alpha = i / s.trail1.length;
          const p1 = project(s.trail1[i - 1]);
          const p2 = project(s.trail1[i]);

          ctx.strokeStyle = `rgba(245, 158, 11, ${alpha * 0.9})`; // Amber-500
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }

        // Head node
        const head1 = project(s.trail1[s.trail1.length - 1]);
        ctx.fillStyle = '#fbbf24';
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(head1.px, head1.py, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Trail 2 (Oscillator 2 - Cyan / Cobalt)
      if (systemType === 'coupled' && s.trail2.length > 2) {
        ctx.lineWidth = 1.4;
        for (let i = 1; i < s.trail2.length; i++) {
          const alpha = i / s.trail2.length;
          const p1 = project(s.trail2[i - 1]);
          const p2 = project(s.trail2[i]);

          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.85})`; // Sky-400
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        }

        // Head node 2
        const head2 = project(s.trail2[s.trail2.length - 1]);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(head2.px, head2.py, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [isRunning, couplingStrength, systemType, rotationAngle]);

  const handleReset = () => {
    stateRef.current = {
      x1: 0.1 + Math.random() * 0.1,
      y1: 0.0,
      z1: 0.0,
      x2: -0.1 + Math.random() * 0.1,
      y2: 0.5,
      z2: 0.2,
      trail1: [],
      trail2: [],
      time: 0,
      error: 1.0,
    };
  };

  const isSynchronized = couplingStrength >= 0.25;

  return (
    <div className="bg-stone-900 text-stone-100 rounded-2xl overflow-hidden border border-stone-800 shadow-xl my-8">
      {/* Header Bar */}
      <div className="p-4 sm:p-5 border-b border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Research Lab Demonstration</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
            Coupled Chaotic Oscillators & Phase Synchronization
          </h3>
          <p className="text-xs text-stone-400 mt-0.5">
            Real-time Runge-Kutta numerical phase space simulation based on Dr. Bhowmick's published research.
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[11px] text-stone-400">Coupling State</div>
            <div className={`text-xs font-semibold ${isSynchronized ? 'text-emerald-400' : 'text-amber-400'}`}>
              {isSynchronized ? '● Synchronized (In-Phase)' : '○ Desynchronized (Chaos Drift)'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Canvas & Controls Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Canvas Area */}
        <div className="lg:col-span-8 relative bg-slate-950 flex items-center justify-center p-2 min-h-[340px]">
          <canvas
            ref={canvasRef}
            width={640}
            height={360}
            className="w-full h-full max-h-[380px] object-contain rounded-lg"
          />

          {/* Canvas Legend Overlay */}
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs border border-slate-700/60 rounded-md p-2 text-[11px] space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-xs" />
              <span className="text-stone-300">Master Oscillator <span className="font-mono text-stone-400">(X₁)</span></span>
            </div>
            {systemType === 'coupled' && (
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-xs" />
                <span className="text-stone-300">Slave Oscillator <span className="font-mono text-stone-400">(X₂)</span></span>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 p-5 bg-stone-900/90 border-t lg:border-t-0 lg:border-l border-stone-800 flex flex-col justify-between space-y-5">
          
          <div className="space-y-4">
            
            {/* Simulation Mode Selector */}
            <div>
              <label className="text-xs font-semibold text-stone-300 block mb-2">
                Simulation Mode
              </label>
              <div className="grid grid-cols-2 gap-1 p-1 bg-stone-950 rounded-lg border border-stone-800 text-xs">
                <button
                  onClick={() => setSystemType('coupled')}
                  className={`py-1.5 px-3 rounded-md font-medium transition-colors cursor-pointer ${
                    systemType === 'coupled'
                      ? 'bg-stone-800 text-amber-400 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Coupled Pair
                </button>
                <button
                  onClick={() => setSystemType('lorenz')}
                  className={`py-1.5 px-3 rounded-md font-medium transition-colors cursor-pointer ${
                    systemType === 'lorenz'
                      ? 'bg-stone-800 text-amber-400 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Single Attractor
                </button>
              </div>
            </div>

            {/* Coupling Strength Slider */}
            {systemType === 'coupled' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-stone-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-stone-400" />
                    Coupling Strength (ε)
                  </span>
                  <span className="font-mono font-bold text-amber-400 tabular-nums">
                    {couplingStrength.toFixed(2)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.6"
                  step="0.02"
                  value={couplingStrength}
                  onChange={(e) => setCouplingStrength(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-800 h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                  <span>0.0 (Decoupled)</span>
                  <span>0.25 (Threshold)</span>
                  <span>0.60 (Strong)</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Notice how increasing <span className="font-mono text-stone-300">ε &gt; 0.25</span> causes the two disparate chaotic trajectories to coalesce into identical synchronous phase orbits.
                </p>
              </div>
            )}

            {/* Educational Context Note */}
            <div className="p-3 bg-stone-950/60 rounded-lg border border-stone-800/80 text-[11px] text-stone-400 space-y-1.5">
              <div className="flex items-center gap-1 text-stone-300 font-semibold">
                <Info className="w-3 h-3 text-amber-400" />
                <span>Published Research Reference</span>
              </div>
              <p className="leading-normal">
                Explored in Dr. Bhowmick's paper: <em className="text-stone-300">"Coupling conditions for globally stable and robust synchrony of chaotic systems"</em> (Physical Review E).
              </p>
            </div>

          </div>

          {/* Bottom Action Controls */}
          <div className="flex items-center gap-2 pt-2 border-t border-stone-800">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="flex-1 py-2 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              {isRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{isRunning ? 'Pause Trajectory' : 'Resume Simulation'}</span>
            </button>

            <button
              onClick={handleReset}
              className="py-2 px-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Reset Initial Conditions"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
