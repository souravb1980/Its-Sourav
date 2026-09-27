export interface Publication {
  id: string;
  index: number;
  title: string;
  authors: string;
  journal: string;
  details: string;
  year: number;
  impactFactor?: string;
  issn?: string;
  url?: string;
  topics: string[];
}

export interface CourseResource {
  id: string;
  title: string;
  category: 'programming' | 'embedded' | 'core_electronics' | 'applied_science';
  description: string;
  url: string;
  type: 'drive' | 'cloud_tool' | 'colab' | 'video' | 'tutorial' | 'national_portal';
  badge?: string;
}

export interface ExamPaper {
  id: string;
  title: string;
  framework: 'CBCS' | 'CCF';
  year: number;
  season: 'Odd' | 'Even';
  url: string;
}

export interface PracticalManual {
  id: string;
  title: string;
  framework: 'CBCS' | 'CCF';
  semester: string;
  url: string;
  description: string;
}

export interface SyllabusItem {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
}

export const PROFESSOR_INFO = {
  name: "Dr. Sourav Kumar Bhowmick",
  designation: "Assistant Professor",
  department: "Department of Electronics",
  institution: "Asutosh College, Kolkata",
  affiliation: "Affiliated to University of Calcutta",
  address: "92, S.P. Mukherjee Road, Kolkata - 700026, West Bengal, India",
  email: "souravb1980@gmail.com",
  googleSiteUrl: "https://sites.google.com/site/souravkb1980/home",
  bio: "Welcome! I am an Assistant Professor in the Department of Electronics at Asutosh College, Kolkata. I received my Master's degree in Electronic Science from Jadavpur University, followed by a Ph.D. jointly from Jadavpur University and the CSIR - Indian Institute of Chemical Biology (IICB). My research spans Experimental Nonlinear Dynamics, Chaos Theory, Chaos Synchronization, Complex Networks, and Nonlinear Phenomena in Electronic Circuits.",
  announcement: "Welcome to my academic portal! Visit the Courses section for syllabus & study materials, and explore CBCS & Curriculum & Credit Framework (CCF) sections for University of Calcutta electronics question papers & laboratory manuals.",
  education: [
    {
      degree: "Ph.D. in Science",
      institution: "Jadavpur University & CSIR-Indian Institute of Chemical Biology (IICB)",
      title: "Observation of synchronization in coupled chaotic oscillators",
      url: "https://shodhganga.inflibnet.ac.in/handle/10603/237065",
      details: "Comprehensive experimental and theoretical investigations into chaotic oscillators, phase synchronization, mixed-lag synchrony, and network coupling."
    },
    {
      degree: "M.Sc. in Electronic Science",
      institution: "Jadavpur University, Kolkata",
      details: "Advanced electronic circuits, instrumentation, signal processing, and communication theory."
    },
    {
      degree: "B.Sc. (Honours)",
      institution: "Vidyasagar University",
      details: "Secured 3rd Position in University Merit List (National Scholarship Awardee)."
    }
  ],
  researchProject: {
    title: "Boolean Chaos: experimental study",
    grant: "DST-SERB Start-Up Research Grant (Young Scientists)",
    agency: "Department of Science and Technology - Science and Engineering Research Board (DST-SERB), Govt. of India",
    fileNo: "YSS/2014/000687",
    amount: "₹ 20,78,000.00",
    tenure: "2016 – 2019",
    status: "Completed successfully"
  },
  experience: [
    {
      role: "Assistant Professor",
      organization: "Department of Electronics, Asutosh College, Kolkata",
      period: "24th July 2019 – Present",
      type: "Full-time Faculty"
    },
    {
      role: "Lecturer",
      organization: "Department of Electronics, Asutosh College, Kolkata",
      period: "1st August 2013 – 23rd July 2019",
      type: "Faculty"
    },
    {
      role: "Technician (UGC-IMF Scheme)",
      organization: "Jadavpur University, Kolkata",
      period: "August 2006 – March 2007",
      type: "UGC Instrument Maintenance Facility (Operation, repair & maintenance of precision lab instruments)"
    }
  ],
  awards: [
    {
      title: "UGC National Eligibility Test (NET)",
      issuer: "University Grants Commission (UGC)",
      year: "Qualified June 2012 & December 2012",
      subject: "Electronic Science"
    },
    {
      title: "National Scholarship Award",
      issuer: "Government of India / Vidyasagar University",
      year: "Ranked 3rd in B.Sc.",
      subject: "Merit Scholarship"
    }
  ],
  facultyDevelopment: [
    {
      course: "Online Refresher Course in Artificial Intelligence Tools in Teaching and Learning",
      institution: "Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur",
      dates: "01 – 13 September 2025"
    },
    {
      course: "Refresher Course in Research Methodology in Science and Technology",
      institution: "University of Calcutta",
      dates: "07 – 22 February 2022"
    },
    {
      course: "UGC-Sponsored Faculty Induction Programme",
      institution: "University of Calcutta",
      dates: "03 – 30 March 2021"
    }
  ],
  conferencesOrganized: [
    {
      title: "International IEEE Workshop on Nonlinear Dynamics of Electronic Systems (NDES)",
      role: "Treasurer",
      dates: "March 9 – 11, 2011",
      location: "Kolkata, India"
    },
    {
      title: "International Symposium on Complex Dynamical Systems and Applications (CDSA I & II)",
      role: "Organizer",
      dates: "Dec 4–6, 2009 (Digha) & Jan 9–10, 2012 (Presidency College, Kolkata)",
      location: "West Bengal, India"
    }
  ]
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    index: 1,
    title: "Distance synchrony in coupled systems",
    authors: "Sayan Acharya, Gourab Kumar Sar, Sukanta Samanta, Dibakar Ghosh, Sourav K. Bhowmick",
    journal: "Chaos, Solitons & Fractals",
    details: "115347 (2024)",
    year: 2024,
    impactFactor: "5.3",
    issn: "0960-0779",
    url: "https://www.sciencedirect.com/science/article/pii/S0960077924008993?dgcid=author",
    topics: ["Distance Synchrony", "Coupled Oscillators", "Nonlinear Systems"]
  },
  {
    id: "pub-2",
    index: 2,
    title: "Mixed synchronization in multiplex networks of counter-rotating oscillators",
    authors: "Palash Kumar Pal, Sourav K. Bhowmick, Partha Karmakar, Dibakar Ghosh",
    journal: "Chaos, Solitons & Fractals",
    details: "114067 (2023)",
    year: 2023,
    impactFactor: "5.3",
    issn: "0960-0779",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0960077923009700?via%3Dihub",
    topics: ["Multiplex Networks", "Counter-Rotating Oscillators", "Mixed Synchronization"]
  },
  {
    id: "pub-3",
    index: 3,
    title: "Coupling conditions for globally stable and robust synchrony of chaotic systems",
    authors: "Suman Saha, Arindam Mishra, E. Padmanaban, Sourav K. Bhowmick, Prodyot K. Roy, Bivas Dam, Syamal K. Dana",
    journal: "Physical Review E",
    details: "95, 062204 (2017)",
    year: 2017,
    impactFactor: "2.284",
    issn: "2470-0045",
    url: "https://doi.org/10.1103/PhysRevE.95.062204",
    topics: ["Chaotic Systems", "Global Stability", "Robust Synchrony"]
  },
  {
    id: "pub-4",
    index: 4,
    title: "Mixed-lag synchronization in coupled counter-rotating oscillators",
    authors: "Bidesh K. Bera, Sourav K. Bhowmick, Dibakar Ghosh",
    journal: "International Journal of Dynamics and Control (Springer)",
    details: "4, 461–469 (2016)",
    year: 2016,
    impactFactor: "2.8",
    issn: "2163-5870",
    url: "https://link.springer.com/article/10.1007/s40435-015-0197-7",
    topics: ["Mixed-Lag", "Counter-Rotating", "Time-Delay Dynamics"]
  },
  {
    id: "pub-5",
    index: 5,
    title: "Restoration of oscillation in network of mixed oscillators",
    authors: "Soumen Majhi, Bidesh K. Bera, Sourav K. Bhowmick, Dibakar Ghosh",
    journal: "Physics Letters A",
    details: "380(43), 3617-3624 (2016)",
    year: 2016,
    impactFactor: "2.7",
    issn: "0375-9601",
    url: "https://doi.org/10.1016/j.physleta.2016.08.036",
    topics: ["Amplitude Death", "Oscillation Revival", "Complex Networks"]
  },
  {
    id: "pub-6",
    index: 6,
    title: "Transition from homogeneous to inhomogeneous steady states in multiplex networks",
    authors: "Bidesh K. Bera, C. R. Hens, Sourav K. Bhowmick, Pinaki Pal, Dibakar Ghosh",
    journal: "Physics Letters A",
    details: "380(1-2), 130-134 (2016)",
    year: 2016,
    impactFactor: "2.7",
    issn: "0375-9601",
    url: "https://doi.org/10.1016/j.physleta.2015.09.044",
    topics: ["Multiplex Networks", "Inhomogeneous States", "Pattern Formation"]
  },
  {
    id: "pub-7",
    index: 7,
    title: "Targeting engineering synchronization in chaotic systems",
    authors: "Sourav K. Bhowmick, Dibakar Ghosh",
    journal: "International Journal of Modern Physics C",
    details: "27(05), 1650056 (2016)",
    year: 2016,
    impactFactor: "1.3",
    issn: "0129-1831",
    url: "https://doi.org/10.1142/S0129183116500066",
    topics: ["Engineering Synchronization", "Chaotic Circuits", "Control Theory"]
  },
  {
    id: "pub-8",
    index: 8,
    title: "Targeting engineering synchronization in chaotic systems (Part II)",
    authors: "Sourav K. Bhowmick, Dibakar Ghosh",
    journal: "International Journal of Modern Physics C",
    details: "27(06), 1650066 (2016)",
    year: 2016,
    impactFactor: "1.3",
    issn: "0129-1831",
    url: "https://doi.org/10.1142/S0129183116500066",
    topics: ["Circuit Control", "Target Synchronization", "Nonlinear Dynamics"]
  },
  {
    id: "pub-9",
    index: 9,
    title: "Linear generalized synchronization using bidirectional coupling",
    authors: "Mauparna Nandan, Sourav K. Bhowmick, Pinaki Pal",
    journal: "International Journal of Nonlinear Sciences and Numerical Simulation",
    details: "16(3-4), 161-167 (2015)",
    year: 2015,
    impactFactor: "2.1",
    issn: "1565-1339",
    url: "https://doi.org/10.1515/ijnsns-2014-0027",
    topics: ["Generalized Synchronization", "Bidirectional Coupling", "Numerical Simulation"]
  },
  {
    id: "pub-10",
    index: 10,
    title: "Generalized counter-rotating oscillators: Mixed synchronization and its application in secure communication",
    authors: "Sourav K. Bhowmick, Bidesh K. Bera, Dibakar Ghosh",
    journal: "Communications in Nonlinear Science and Numerical Simulation",
    details: "22(1-3), 692-704 (2015)",
    year: 2015,
    impactFactor: "3.9",
    issn: "1007-5704",
    url: "https://doi.org/10.1016/j.cnsns.2014.09.024",
    topics: ["Secure Communication", "Counter-Rotating", "Cryptosystems"]
  },
  {
    id: "pub-11",
    index: 11,
    title: "Targeting induced engineering synchronization in coupled chaotic oscillators",
    authors: "Sourav K. Bhowmick, Pousali Roy, Syamal K. Dana, Dibakar Ghosh, K. Murali, Sudeshna Sinha",
    journal: "International Journal of Bifurcation and Chaos",
    details: "24(05), 1450068 (2014)",
    year: 2014,
    impactFactor: "2.4",
    issn: "0218-1274",
    url: "https://doi.org/10.1142/S021812741450014X",
    topics: ["Bifurcation and Chaos", "Targeting", "Electronic Oscillators"]
  },
  {
    id: "pub-12",
    index: 12,
    title: "How to generate Chaotic Pulse?",
    authors: "Sourav K. Bhowmick",
    journal: "International Journal of Nonlinear Science",
    details: "17(1), 77-84 (2014)",
    year: 2014,
    impactFactor: "1.2",
    issn: "1749-3889",
    url: "http://www.internonlinearscience.org/upload/papers/IJNS-Vol17-No1-Paper-9-how%20to%20.pdf",
    topics: ["Chaotic Pulse Generation", "Electronic Design", "Nonlinear Circuits"]
  },
  {
    id: "pub-13",
    index: 13,
    title: "Diverse routes of transition to synchronized state in non-locally coupled oscillators",
    authors: "C. R. Hens, P. Pal, Sourav K. Bhowmick, P. K. Roy, A. Sen, S. K. Dana",
    journal: "Physical Review E",
    details: "89, 032901 (2014)",
    year: 2014,
    impactFactor: "2.288",
    issn: "1550-2376",
    url: "https://doi.org/10.1103/PhysRevE.89.032901",
    topics: ["Non-local Coupling", "Chimera States", "Phase Transitions"]
  },
  {
    id: "pub-14",
    index: 14,
    title: "How to induce multiple delays in coupled chaotic oscillators?",
    authors: "Sourav K. Bhowmick, Dibakar Ghosh, Prodyot K. Roy, Jurgen Kurths, Syamal K. Dana",
    journal: "CHAOS: An Interdisciplinary Journal of Nonlinear Science",
    details: "23, 043115 (2013)",
    year: 2013,
    impactFactor: "2.188",
    issn: "1089-7682",
    url: "https://doi.org/10.1063/1.4828515",
    topics: ["Multiple Delays", "Chaotic Oscillators", "AIP Chaos"]
  },
  {
    id: "pub-15",
    index: 15,
    title: "Experimental evidence of synchronization of time-varying dynamical network",
    authors: "Sourav K. Bhowmick, R. E. Amritkar, Syamal K. Dana",
    journal: "CHAOS: An Interdisciplinary Journal of Nonlinear Science",
    details: "22, 023105 (2012)",
    year: 2012,
    impactFactor: "2.188",
    issn: "1089-7682",
    url: "https://doi.org/10.1063/1.3701949",
    topics: ["Experimental Evidence", "Time-Varying Networks", "Hardware Validation"]
  },
  {
    id: "pub-16",
    index: 16,
    title: "Lag synchronization and scaling of chaotic attractor in coupled system",
    authors: "Sourav K. Bhowmick, Pinaki Pal, Prodyot K. Roy, Syamal K. Dana",
    journal: "CHAOS: An Interdisciplinary Journal of Nonlinear Science",
    details: "22, 023151 (2012)",
    year: 2012,
    impactFactor: "2.188",
    issn: "1089-7682",
    url: "https://doi.org/10.1063/1.4731263",
    topics: ["Lag Synchronization", "Attractor Scaling", "Coupled Systems"]
  },
  {
    id: "pub-17",
    index: 17,
    title: "Mixed synchronization of chaotic oscillators using scalar coupling",
    authors: "Sourav K. Bhowmick, Chittaranjan Hens, Dibakar Ghosh, Syamal K. Dana",
    journal: "Physics Letters A",
    details: "376, 2490-2497 (2012)",
    year: 2012,
    impactFactor: "1.831",
    issn: "0375-9601",
    url: "https://doi.org/10.1016/j.physleta.2012.06.031",
    topics: ["Scalar Coupling", "Mixed Synchronization", "Electronic Implementation"]
  },
  {
    id: "pub-18",
    index: 18,
    title: "Synchronization of counter rotating oscillators",
    authors: "Sourav K. Bhowmick, Dibakar Ghosh, Syamal K. Dana",
    journal: "CHAOS: An Interdisciplinary Journal of Nonlinear Science",
    details: "21, 033118 (2011)",
    year: 2011,
    impactFactor: "2.188",
    issn: "1089-7682",
    url: "https://doi.org/10.1063/1.3624943",
    topics: ["Counter Rotating", "Limit Cycles", "Circuit Realization"]
  },
  {
    id: "pub-19",
    index: 19,
    title: "Design strategies for the creation of aperiodic nonchaotic attractors",
    authors: "Amitabha Nandi, Sourav K. Bhowmick, Syamal K. Dana, Ram Ramaswamy",
    journal: "CHAOS: An Interdisciplinary Journal of Nonlinear Science",
    details: "19, 033116 (2009)",
    year: 2009,
    impactFactor: "2.27",
    issn: "1089-7682",
    url: "https://doi.org/10.1063/1.3194250",
    topics: ["Nonchaotic Attractors", "Strange Nonchaotic", "Design Strategies"]
  }
];

export const COURSE_RESOURCES: CourseResource[] = [
  {
    id: "py-gemini",
    title: "Python: সৌরভ স্যার (Custom AI Mentor)",
    category: "programming",
    description: "Dr. Bhowmick's personalized Gemini AI interactive programming mentor tailored for electronics students.",
    url: "https://gemini.google.com/gem/17jcV73oVe8YALhfs_bvImxVcmKcW8MGc?usp=sharing",
    type: "cloud_tool",
    badge: "AI Powered Mentor"
  },
  {
    id: "py-colab",
    title: "Python Laboratory Google Colab",
    category: "programming",
    description: "Cloud-hosted executable Jupyter notebooks covering numerical electronics simulations and algorithmic exercises.",
    url: "https://colab.research.google.com/drive/1DjLTHRHUvrgKD7ABD_-Kgf1oAQqRe7jR?usp=sharing",
    type: "colab",
    badge: "Interactive Lab"
  },
  {
    id: "py-folder",
    title: "Python Programming Materials",
    category: "programming",
    description: "Official lecture notes, sample programs, syntax guides, and laboratory assignments.",
    url: "https://drive.google.com/drive/folders/1oUtCz_rrU1LhzF64bLKIHu6bpETTaDHl?usp=sharing",
    type: "drive",
    badge: "Google Drive"
  },
  {
    id: "py-w3",
    title: "Python Interactive Tutorial",
    category: "programming",
    description: "Core syntax reference, data structures, and practical coding exercises for beginners.",
    url: "https://www.w3schools.com/python/",
    type: "tutorial"
  },
  {
    id: "py-video",
    title: "Python Programming Video Course",
    category: "programming",
    description: "Recommended video lecture series breaking down Python fundamentals from ground up.",
    url: "https://youtu.be/8i4r8R8ZOAU?si=tOV2zxRrFekRbUKz",
    type: "video"
  },
  {
    id: "scilab-mathlab",
    title: "Math Lab (Scilab on Cloud)",
    category: "programming",
    description: "Web-based executable Scilab numerical computation environment without local installation.",
    url: "https://cloud.scilab.in/",
    type: "cloud_tool",
    badge: "Cloud Runner"
  },
  {
    id: "scilab-folder",
    title: "Scilab Course Repository",
    category: "programming",
    description: "Scilab scripts for differential equations, circuit simulation, and matrix algebra.",
    url: "https://drive.google.com/drive/folders/10zClUlHbn6txq9XBpefhrRRfI1SrpLk2?usp=sharing",
    type: "drive"
  },
  {
    id: "scilab-spoken",
    title: "Scilab Spoken-Tutorial",
    category: "programming",
    description: "IIT Bombay Spoken Tutorial series covering basic and advanced scientific computing in Scilab.",
    url: "https://spoken-tutorial.org/tutorial-search/?search_foss=Scilab&search_language=",
    type: "tutorial"
  },
  {
    id: "c-spoken",
    title: "C & Advanced C Spoken Tutorial",
    category: "programming",
    description: "Audio-video tutorials in C programming from beginner to pointer manipulation and dynamic memory.",
    url: "https://spoken-tutorial.org/tutorial-search/?search_foss=Advance+C&search_language=",
    type: "tutorial"
  },
  {
    id: "math-found",
    title: "Mathematical Foundation & Numerical Analysis",
    category: "applied_science",
    description: "Practical manuals and worksheets for numerical methods, differential equations, and data fitting.",
    url: "https://drive.google.com/drive/folders/1_zM_4BILbqTUL2MIsVr2R1JFNF0unih7?usp=sharing",
    type: "drive"
  },
  {
    id: "math-found-prac",
    title: "Mathematical Foundation (Practical)",
    category: "applied_science",
    description: "Step-by-step practical experiment guide for applied mathematics in electronics.",
    url: "https://drive.google.com/drive/folders/1HM5kMOQXTtNPTpV0a39OTCECig6-Qk8e?usp=share_link",
    type: "drive"
  },
  {
    id: "arduino-prog",
    title: "Arduino Microcontroller Programming",
    category: "embedded",
    description: "Sketches, circuit diagrams, sensor interfacing, and hardware project blueprints.",
    url: "https://drive.google.com/drive/folders/1OPtcxa2gCTfmCk5NuXLH5iwJ9bZzqklS?usp=sharing",
    type: "drive",
    badge: "Hardware & IoT"
  },
  {
    id: "arduino-folder2",
    title: "Arduino Code Archive & Labs",
    category: "embedded",
    description: "Extended code examples for analog/digital I/O, timers, PWM, and display interfaces.",
    url: "https://drive.google.com/drive/folders/16puuAaJA91gqg72W8UEImWH0_C9_ljBi?usp=sharing",
    type: "drive"
  },
  {
    id: "arduino-spoken",
    title: "Arduino Spoken Tutorial Series",
    category: "embedded",
    description: "Self-paced guided audio-video lessons for building embedded systems with Arduino boards.",
    url: "https://spoken-tutorial.org/tutorial-search/?search_foss=Arduino&search_language=English",
    type: "tutorial"
  },
  {
    id: "pspice-sim",
    title: "PSpice Circuit Simulation",
    category: "embedded",
    description: "PSpice netlists, schematic captures, and AC/DC/transient circuit analysis files.",
    url: "https://drive.google.com/drive/folders/1mvum5cZY9lac8dGy7-A0Vq2Bz8Afo-TQ?usp=sharing",
    type: "drive"
  },
  {
    id: "pcb-design",
    title: "Printed Circuit Board (PCB) Design",
    category: "core_electronics",
    description: "Schematic design, PCB trace layout rules, gerber export, and etching guidelines.",
    url: "https://drive.google.com/drive/folders/1cLCUierU6ZEbzFSkDFUXAui5K2_t0jPz?usp=sharing",
    type: "drive"
  },
  {
    id: "optical-fibre",
    title: "Optical Fibre Communication",
    category: "core_electronics",
    description: "Lightwave propagation, dispersion, optical transmitters, receivers, and link budget design.",
    url: "https://drive.google.com/drive/folders/1MrMrEEFsNSLaQQ02HZX7bDg-Uu48WG0O?usp=sharing",
    type: "drive"
  },
  {
    id: "instrumentation",
    title: "Electronic Instrumentation & Measurements",
    category: "core_electronics",
    description: "Transducers, bridge circuits, CRO operation, precision measurement devices, and calibration.",
    url: "https://drive.google.com/drive/folders/1cLCUierU6ZEbzFSkDFUXAui5K2_t0jPz?usp=sharing",
    type: "drive"
  },
  {
    id: "photonics",
    title: "Photonics & Optoelectronics",
    category: "core_electronics",
    description: "Semiconductor lasers, photodiodes, optical waveguides, and quantum electronics principles.",
    url: "https://drive.google.com/drive/folders/1cLCUierU6ZEbzFSkDFUXAui5K2_t0jPz?usp=sharing",
    type: "drive"
  },
  {
    id: "hardware-prac",
    title: "Hardware Practical Manual",
    category: "core_electronics",
    description: "Hands-on bench experiments: op-amps, multivibrators, regulated power supplies, and filter circuits.",
    url: "https://drive.google.com/drive/folders/18OJI9DnRXfYdSSaWuU5zw_uIdbwNcFTI?usp=sharing",
    type: "drive"
  },
  {
    id: "epg-pathshala-1",
    title: "e-PG Pathshala: Electronic Science Part 1",
    category: "applied_science",
    description: "MHRD INFLIBNET national curriculum modules in electronic science and semiconductor devices.",
    url: "https://epgp.inflibnet.ac.in/Home/ViewSubject?catid=uUIVj2W71X+8mppiIHe0+A==",
    type: "national_portal",
    badge: "MHRD INFLIBNET"
  },
  {
    id: "epg-pathshala-2",
    title: "e-PG Pathshala: Electronic Science Part 2",
    category: "applied_science",
    description: "Advanced post-graduate learning modules for communications, VLSI, and signal processing.",
    url: "https://epgp.inflibnet.ac.in/Home/ViewSubject?catid=+4mIqRALksfwQH9v8YSMrw==",
    type: "national_portal",
    badge: "MHRD INFLIBNET"
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy: Solar Photovoltaic Systems",
    category: "applied_science",
    description: "Solar cells, IV characteristics, charge controllers, inverters, and grid-tied systems.",
    url: "https://drive.google.com/drive/folders/1V9Hdf0fGNoakP7hodB2aXivGurTluLLR?usp=sharing",
    type: "drive"
  },
  {
    id: "domestic-appl",
    title: "Domestic Applications of Electronics",
    category: "applied_science",
    description: "Home appliances, power conditioning, safety mechanisms, and consumer electronics repair.",
    url: "https://drive.google.com/drive/folders/1dU7Z1GSOQpu8KIhMnyD0gHVNJKFuMP9Z?usp=sharing",
    type: "drive"
  },
  {
    id: "cbcc-el",
    title: "Electronics Choice-Based Credit Course (CBCC)",
    category: "core_electronics",
    description: "Interdisciplinary elective materials for non-major students pursuing electronics.",
    url: "https://drive.google.com/drive/folders/1O4FtHB8CMUKIhV30jDPWyIixFCfz3mHc?usp=drive_link",
    type: "drive"
  },
  {
    id: "eltd-course",
    title: "Electronics (ELTD) Course Materials",
    category: "core_electronics",
    description: "Specialized lecture notes and reference readings for department ELTD papers.",
    url: "https://drive.google.com/drive/folders/1_m_CV0M40fPCF1aPwq3eL92Y0xalO6BG?usp=sharing",
    type: "drive"
  }
];

export const CBCS_QUESTION_PAPERS: ExamPaper[] = [
  { id: "cbcs-p-2018-odd", title: "University of Calcutta Electronics - Odd Semester 2018", framework: "CBCS", year: 2018, season: "Odd", url: "https://drive.google.com/drive/folders/1oRG08aPiICip5OmnKvfFdXUu7uqLZ8gS?usp=sharing" },
  { id: "cbcs-p-2019-even", title: "University of Calcutta Electronics - Even Semester 2019", framework: "CBCS", year: 2019, season: "Even", url: "https://drive.google.com/drive/folders/1rrfn1DNCUpXAnx5yU5qXkV6LEe7j4g48?usp=sharing" },
  { id: "cbcs-p-2019-odd", title: "University of Calcutta Electronics - Odd Semester 2019", framework: "CBCS", year: 2019, season: "Odd", url: "https://drive.google.com/drive/folders/1YqUm6DawmlpEB_7312hhdFFS-L57ZFs3?usp=sharing" },
  { id: "cbcs-p-2020-even", title: "University of Calcutta Electronics - Even Semester 2020", framework: "CBCS", year: 2020, season: "Even", url: "https://drive.google.com/drive/folders/1Ywfgh-PAmz2seTHkj1KOQOzez0iPiejT?usp=sharing" },
  { id: "cbcs-p-2020-odd", title: "University of Calcutta Electronics - Odd Semester 2020", framework: "CBCS", year: 2020, season: "Odd", url: "https://drive.google.com/drive/folders/1Ywfgh-PAmz2seTHkj1KOQOzez0iPiejT?usp=sharing" },
  { id: "cbcs-p-2021-even", title: "University of Calcutta Electronics - Even Semester 2021", framework: "CBCS", year: 2021, season: "Even", url: "https://drive.google.com/drive/folders/1oMHG2p9pPtClGHmIxRmx6fulcuVl8WOp?usp=sharing" },
  { id: "cbcs-p-2021-odd", title: "University of Calcutta Electronics - Odd Semester 2021", framework: "CBCS", year: 2021, season: "Odd", url: "https://drive.google.com/drive/folders/1llDe-VK1szCeJm1hcl0lt9eDbV7YJfsc?usp=sharing" },
  { id: "cbcs-p-2022-even", title: "University of Calcutta Electronics - Even Semester 2022", framework: "CBCS", year: 2022, season: "Even", url: "https://drive.google.com/drive/folders/1Io3DCEFV5u_s-jmkjO925geqWMmCfZsI?usp=sharing" },
  { id: "cbcs-p-2022-odd", title: "University of Calcutta Electronics - Odd Semester 2022", framework: "CBCS", year: 2022, season: "Odd", url: "https://drive.google.com/drive/folders/1F3rDxTupxSCcYncCJmZ7jXg3xMcot6Rc?usp=sharing" },
  { id: "cbcs-p-2023-even", title: "University of Calcutta Electronics - Even Semester 2023", framework: "CBCS", year: 2023, season: "Even", url: "https://drive.google.com/drive/folders/1oGYw_dfl68rjAdoUdApWeTLl3-qBgRKZ?usp=sharing" },
  { id: "cbcs-p-2023-odd", title: "University of Calcutta Electronics - Odd Semester 2023", framework: "CBCS", year: 2023, season: "Odd", url: "https://drive.google.com/drive/folders/1Vw_-4g5btFn3QOxX9aWllt2973lV4WWI?usp=sharing" },
  { id: "cbcs-p-2024-even", title: "University of Calcutta Electronics - Even Semester 2024", framework: "CBCS", year: 2024, season: "Even", url: "https://drive.google.com/drive/folders/1ixfXtgKDBmqDlGq132DdD_FeCL1xBUZG?usp=sharing" },
  { id: "cbcs-p-2024-odd", title: "University of Calcutta Electronics - Odd Semester 2024", framework: "CBCS", year: 2024, season: "Odd", url: "https://drive.google.com/drive/folders/1Pd7maVuP2r3iCn5B7AjQCAybrUB0xeC0?usp=sharing" },
  { id: "cbcs-p-2025-even", title: "University of Calcutta Electronics - Even Semester 2025", framework: "CBCS", year: 2025, season: "Even", url: "https://drive.google.com/drive/folders/19ucBTuJN007dzhdH_1xduu6VM9SlPkSF?usp=sharing" }
];

export const CCF_QUESTION_PAPERS: ExamPaper[] = [
  { id: "ccf-p-2023-odd", title: "Calcutta University CCF - Odd Semester 2023", framework: "CCF", year: 2023, season: "Odd", url: "https://drive.google.com/drive/folders/1No_hP9FvWNvEpYnmoHlB7MZdwg9dWrcj?usp=sharing" },
  { id: "ccf-p-2024-even", title: "Calcutta University CCF - Even Semester 2024", framework: "CCF", year: 2024, season: "Even", url: "https://drive.google.com/drive/folders/1ANV9965b8xtNZxaxEURAmR0BdVmwDauq?usp=sharing" },
  { id: "ccf-p-2024-odd", title: "Calcutta University CCF - Odd Semester 2024", framework: "CCF", year: 2024, season: "Odd", url: "https://drive.google.com/drive/folders/1182t7WRGtCDVtEEYXcekqIT5sC3YTFxs?usp=sharing" },
  { id: "ccf-p-2025-even", title: "Calcutta University CCF - Even Semester 2025", framework: "CCF", year: 2025, season: "Even", url: "https://drive.google.com/drive/folders/1Dli3psZTUCvfXi3Gp-viWk0XUDOshWyB?usp=sharing" },
  { id: "ccf-p-2025-odd", title: "Calcutta University CCF - Odd Semester 2025", framework: "CCF", year: 2025, season: "Odd", url: "https://drive.google.com/drive/folders/1d-ZtsNODEWnXVGV4iA-DEaxPkBjkA7A9?usp=sharing" },
  { id: "ccf-p-2026-even", title: "Calcutta University CCF - Even Semester 2026", framework: "CCF", year: 2026, season: "Even", url: "https://drive.google.com/drive/folders/16T5ag05kBvYtfgdK-O2l-07kGdA8LJqU?usp=sharing" }
];

export const PRACTICAL_MANUALS: PracticalManual[] = [
  // CBCS Practical Manuals
  { id: "cbcs-m-1", title: "Semester I Practical Manual (CBCS)", framework: "CBCS", semester: "Semester I", url: "https://drive.google.com/drive/folders/1Tuy2rYomJmjL_kDWklMLD98P2Gzs8ABz?usp=drive_link", description: "Basic circuit laws, network theorems, voltmeter/ammeter loading, diode characteristics." },
  { id: "cbcs-m-2", title: "Semester II Practical Manual (CBCS)", framework: "CBCS", semester: "Semester II", url: "https://drive.google.com/drive/folders/1SybPgfFz4aPex7lLzv5GZmxocRXt4UKS?usp=sharing", description: "BJT characteristics, CE amplifier, FET characteristics, rectifier filter circuits." },
  { id: "cbcs-m-3", title: "Semester III Practical Manual (CBCS)", framework: "CBCS", semester: "Semester III", url: "https://drive.google.com/drive/folders/1T0F55CBGXIR_GqIc7BC27GCCqgdtDUPh?usp=sharing", description: "Operational amplifiers (inverting, non-inverting, adder, differentiator, integrator)." },
  { id: "cbcs-m-4", title: "Semester IV Practical Manual (CBCS)", framework: "CBCS", semester: "Semester IV", url: "https://drive.google.com/drive/folders/1E2CvlHwzGP5qJZzR8RiVfzmsgnrFfORq?usp=sharing", description: "Digital electronics, combinational circuits, multiplexers, encoders, sequential flip-flops." },
  { id: "cbcs-m-5", title: "Semester V Practical Manual (CBCS)", framework: "CBCS", semester: "Semester V", url: "https://drive.google.com/drive/folders/1Bw5uqZz6oXrw-UBhWigYa7gzMvepmFox?usp=sharing", description: "Microprocessor 8085 programming, peripheral interfacing, assembly language routines." },
  { id: "cbcs-m-6", title: "Semester VI Practical Manual (CBCS)", framework: "CBCS", semester: "Semester VI", url: "https://drive.google.com/drive/folders/135wA2IXsEPvDxAgoILz_J_gJd6RoRw6y?usp=sharing", description: "Advanced communication, modulation/demodulation kits, DSP algorithms, instrumentation." },

  // CCF Practical Manuals
  { id: "ccf-m-1", title: "Semester I Practical Manual (CCF-NEP)", framework: "CCF", semester: "Semester I", url: "https://drive.google.com/drive/folders/1BtfiqP6T4Bomd18-StMw500xgR8Kg5Bg?usp=sharing", description: "New 4-year undergraduate syllabus laboratory module for foundation circuit analysis." },
  { id: "ccf-m-2", title: "Semester II Practical Manual (CCF-NEP)", framework: "CCF", semester: "Semester II", url: "https://drive.google.com/drive/folders/1epcZK64OJqASDgZlOlf6S6KEabFUDl6_?usp=sharing", description: "Semiconductor device characterization, transistor amplifiers and frequency response." },
  { id: "ccf-m-4", title: "Semester IV Practical Manual (CCF-NEP)", framework: "CCF", semester: "Semester IV", url: "https://drive.google.com/drive/folders/1hYpKfWpMSaUO0_qVlR6baNfD8k-bxXHr?usp=sharing", description: "Analog & digital integrated circuits, timer IC 555, waveform generators and active filters." }
];

export const SYLLABUS_DOCS: SyllabusItem[] = [
  {
    id: "syl-major",
    title: "University of Calcutta Electronics Major Syllabus (CSR-123)",
    category: "Curriculum Regulation",
    url: "https://www.caluniv.ac.in/ccf-ug/files/Eletronic-CSR-123.pdf",
    description: "Official Gazette Notification CSR/123/2023 containing detailed semester-wise syllabus, credit allocations, and course objectives."
  },
  {
    id: "syl-minor",
    title: "Electronics Minor Syllabus (CCF-UG)",
    category: "Minor Subject",
    url: "https://drive.google.com/drive/folders/1B-PKkL-u2wWrkYli8pocKGTDWG41ShEE?usp=sharing",
    description: "Curriculum pathways and elective course distributions for students taking Electronics as a Minor subject."
  },
  {
    id: "syl-7-8",
    title: "Semester 7 & Semester 8 Honours with Research Syllabus",
    category: "Advanced 4th Year",
    url: "https://drive.google.com/drive/folders/10R2ACR0wu0gVaHKPq-O_d3yg6dVQ2Djx?usp=sharing",
    description: "4th year B.Sc. (Honours with Research) course structure, dissertation guidelines, and advanced specializations."
  },
  {
    id: "syl-structure",
    title: "CCF-UG Electronics Complete Course Structure",
    category: "Academic Framework",
    url: "https://drive.google.com/drive/folders/1Ld4Fw0vcq1jBzgRDQ-kqg-vbOs177aUa?usp=sharing",
    description: "Comprehensive credit framework breakdown across Major, Minor, MDC, SEC, AEC, and Internship requirements."
  },
  {
    id: "syl-modalities",
    title: "University Examination Modalities & Evaluation Scheme",
    category: "Exam Regulation",
    url: "https://drive.google.com/file/d/1WwdY-vzy47FKe1ZPEZ--NnocVckTjDL3/view?usp=sharing",
    description: "Internal assessment weightage, tutorial evaluation criteria, practical viva guidelines, and theoretical question patterns."
  },
  {
    id: "syl-paper-code",
    title: "CBCS Paper Code Mapping & Subject Reference Guide",
    category: "Reference Guide",
    url: "https://drive.google.com/file/d/1dNY14k6mFtWRtnRySoehXKI7OjWrLX53/view?usp=sharing",
    description: "Official code directory linking paper codes to course names across 3-year CBCS degree programmes."
  }
];
