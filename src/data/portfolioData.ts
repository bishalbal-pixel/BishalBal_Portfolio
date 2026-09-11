import { 
  Project, 
  SkillItem, 
  MartialArtsInfo, 
  LeadershipRole, 
  ExperienceItem, 
  EducationItem, 
  AchievementItem,
  SocialLinks 
} from '../types';

export const personalInfo = {
  name: "Bishal Bal",
  roleTitle: "Software Engineering Student • Martial Artist • Leader",
  location: "Kathmandu, Nepal",
  shortBio: "I’m a Software Engineering student from Nepal with a background in Automobile Engineering, a passion for technology, and a strong foundation in discipline, leadership and martial arts.",
  status: "Open to Software Engineering Internships & Collaborative Projects",
  college: "PCPS College (Patan College for Professional Studies)",
  karateRank: "3rd Dan Black Belt",
  quote: "Discipline is doing what must be done, even when motivation fades — from the dojo mat to the codebase."
};

export const socialLinks: SocialLinks = {
  email: "bishalbal4858@gmail.com",
  phone: "+977 98XXXXXXXX",
  linkedin: "https://linkedin.com/in/bishal-bal",
  github: "https://github.com/bishalbal",
  instagram: "https://instagram.com/bishalbal",
  location: "Kathmandu, Nepal"
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Martial Arts", href: "#martial-arts" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const journeyMilestones = [
  {
    year: "2020 – 2023",
    title: "Diploma in Automobile Engineering",
    institution: "Technical Institute of Engineering",
    description: "Built rigorous mechanical troubleshooting, thermodynamics, systems-level logic, and hands-on precision diagnostics foundation."
  },
  {
    year: "Childhood – Present",
    title: "Kyokushin Karate Journey & 3rd Dan",
    institution: "Nepal Kyokushin Karate",
    description: "Dedicated over 12 continuous years mastering full-contact martial arts, advancing to 3rd Dan Black Belt, and representing Nepal internationally."
  },
  {
    year: "2022 – Present",
    title: "Youth Leadership & Community Service",
    institution: "Leo District Council 325L",
    description: "Founded and led as Charter President for Leo Club of Kathmandu Temple Valley, progressing to Region Coordinator coordinating hundreds of volunteers."
  },
  {
    year: "2023 – Present",
    title: "BSc Software Engineering",
    institution: "PCPS College",
    description: "Transitioned engineering precision into modern software architecture, algorithms, full-stack web applications, Python/Django, and AI prompt engineering."
  }
];

export const skillsData: SkillItem[] = [
  // Technology
  {
    name: "Python",
    category: "tech",
    description: "Data structures, algorithms, object-oriented design, script automation, and backend logic.",
    proficiency: "Advanced",
    iconName: "FileCode"
  },
  {
    name: "Django",
    category: "tech",
    description: "Robust MVC architecture, ORM query optimization, authentication, and REST APIs.",
    proficiency: "Intermediate",
    iconName: "Server"
  },
  {
    name: "JavaScript (ES6+)",
    category: "tech",
    description: "Modern asynchronous workflows, DOM manipulation, modular architecture, and API consumption.",
    proficiency: "Intermediate",
    iconName: "Code"
  },
  {
    name: "HTML5 & Semantic Web",
    category: "tech",
    description: "Accessible, search-optimized structure following modern W3C standards.",
    proficiency: "Advanced",
    iconName: "Layout"
  },
  {
    name: "CSS3 & Tailwind CSS",
    category: "tech",
    description: "Utility-first modern styling, responsive layouts, micro-animations, and fluid design systems.",
    proficiency: "Advanced",
    iconName: "Palette"
  },
  {
    name: "Prompt Engineering",
    category: "tech",
    description: "System instructions, structured output schemas, few-shot prompting, and generative AI tool integration.",
    proficiency: "Intermediate",
    iconName: "Cpu"
  },
  {
    name: "Git & GitHub",
    category: "tools",
    description: "Version control branching, pull requests, collaborative workflows, and release tagging.",
    proficiency: "Advanced",
    iconName: "GitBranch"
  },
  {
    name: "Responsive Web Design",
    category: "tech",
    description: "Mobile-first layouts, adaptive viewports, touch targets, and cross-browser resilience.",
    proficiency: "Advanced",
    iconName: "Smartphone"
  },
  {
    name: "REST APIs & JSON",
    category: "tech",
    description: "Client-server data interchange, status codes, endpoints, and error handling protocols.",
    proficiency: "Intermediate",
    iconName: "Network"
  },

  // Professional Skills
  {
    name: "Leadership",
    category: "professional",
    description: "Guiding teams with accountability, clear strategic direction, and leading by example.",
    proficiency: "Advanced",
    iconName: "Award"
  },
  {
    name: "Effective Communication",
    category: "professional",
    description: "Articulating complex technical concepts, conflict resolution, and stakeholder updates.",
    proficiency: "Advanced",
    iconName: "MessageSquare"
  },
  {
    name: "Teamwork & Collaboration",
    category: "professional",
    description: "Thriving in multidisciplinary student squads, dojo councils, and youth committees.",
    proficiency: "Advanced",
    iconName: "Users"
  },
  {
    name: "Teaching & Mentorship",
    category: "professional",
    description: "Instructing hundreds of martial arts students, tailoring pedagogy to individual growth curves.",
    proficiency: "Advanced",
    iconName: "BookOpen"
  },
  {
    name: "Event Management",
    category: "professional",
    description: "Organizing district tournaments, community donation drives, and youth seminars.",
    proficiency: "Advanced",
    iconName: "Calendar"
  },
  {
    name: "Project Coordination",
    category: "professional",
    description: "Defining milestones, tracking deliverables, risk mitigation, and executing on schedule.",
    proficiency: "Advanced",
    iconName: "CheckSquare"
  },
  {
    name: "Public Speaking",
    category: "professional",
    description: "Addressing district conventions, youth assemblies, and leading technical presentations.",
    proficiency: "Intermediate",
    iconName: "Mic"
  }
];

export const projectsData: Project[] = [
  {
    id: "dojang-os",
    title: "Dojang — Karate Academy Management System",
    category: "Web Development",
    tagline: "Full-stack martial arts academy platform for belt grading, attendance, and student analytics",
    description: "Inspired by hands-on dojo operations, this platform streamlines student enrollment, belt syllabus progression tracking, tournament registration, and monthly fee management. Features an intuitive dashboard for instructors and students alike.",
    keyFeatures: [
      "Custom belt rank syllabus viewer with video references",
      "Automated attendance tracking and eligibility checks for grading exams",
      "Event and tournament roster management with bracket exports",
      "Role-based access controls for head sensei, assistant instructors, and students"
    ],
    technologies: ["Python", "Django", "JavaScript", "Tailwind CSS", "SQLite/PostgreSQL"],
    githubUrl: "https://github.com/bishalbal/dojang-management-system",
    liveUrl: "https://github.com/bishalbal/dojang-management-system",
    featured: true,
    accentGradient: "from-cyan-500/20 to-blue-600/20",
    metrics: "Managing 150+ student records & syllabus tracks"
  },
  {
    id: "autodiag-hub",
    title: "AutoDiagnostics & Fleet Maintenance Portal",
    category: "Software Projects",
    tagline: "Vehicle telemetry diagnostic logger bridging mechanical engineering & software",
    description: "Leveraging my Automobile Engineering background, this application digitizes workshop job-cards, OBD-II error code lookups, scheduled preventative maintenance logs, and component wear predictions for local garages.",
    keyFeatures: [
      "Standard OBD-II diagnostic fault code search engine with symptom troubleshooting guides",
      "Service interval scheduler based on mileage and operational duty cycles",
      "Digital job card issuance for mechanical teams with parts inventory tracking",
      "Exportable vehicle service history PDFs for vehicle owners"
    ],
    technologies: ["Python", "Django REST", "JavaScript", "HTML5/CSS3", "Bootstrap"],
    githubUrl: "https://github.com/bishalbal/auto-diagnostics-portal",
    liveUrl: "https://github.com/bishalbal/auto-diagnostics-portal",
    featured: true,
    accentGradient: "from-blue-600/20 to-indigo-600/20",
    metrics: "Indexed 300+ diagnostic codes & maintenance trees"
  },
  {
    id: "promptcraft-studio",
    title: "PromptCraft AI — Prompt Evaluation Playground",
    category: "AI / Prompt Engineering",
    tagline: "Developer workbench for systematically designing, testing, and refining LLM prompts",
    description: "A specialized developer tool built to experiment with prompt engineering patterns (zero-shot, few-shot, Chain-of-Thought). Enables users to benchmark response quality, token economics, and structured JSON outputs.",
    keyFeatures: [
      "Side-by-side prompt output diffing with token usage metrics",
      "Pre-built template library for code generation, text extraction, and summarization",
      "System prompt versioning and schema validation for JSON responses",
      "Export prompt configurations directly as Python or JavaScript SDK payloads"
    ],
    technologies: ["JavaScript", "Python", "REST APIs", "Tailwind CSS", "Prompt Engineering"],
    githubUrl: "https://github.com/bishalbal/promptcraft-ai",
    liveUrl: "https://github.com/bishalbal/promptcraft-ai",
    featured: true,
    accentGradient: "from-teal-500/20 to-cyan-500/20",
    metrics: "Curated 20+ engineering prompt templates"
  },
  {
    id: "leo-district-portal",
    title: "Leo District 325L Youth Community Hub",
    category: "Web Development",
    tagline: "Centralized coordination portal for district events, volunteer hours, and blood drives",
    description: "Developed to support Leo District Council 325L, providing clubs across Nepal a single platform to register events, log community service impact hours, coordinate regional blood donation camps, and broadcast leadership notices.",
    keyFeatures: [
      "Interactive district event calendar with online participant RSVP",
      "Blood donor directory with urgent blood group notification alerts",
      "Community impact leaderboard tracking youth volunteer hours",
      "News bulletin and press release distribution channel"
    ],
    technologies: ["JavaScript", "HTML5", "Tailwind CSS", "Python API", "Git"],
    githubUrl: "https://github.com/bishalbal/leo-district-325l-portal",
    liveUrl: "https://github.com/bishalbal/leo-district-325l-portal",
    featured: false,
    accentGradient: "from-sky-500/20 to-blue-500/20",
    metrics: "Connecting youth leaders across regional clubs"
  },
  {
    id: "katasense-visualizer",
    title: "KataSense — Martial Arts Stance Analyzer",
    category: "AI / Prompt Engineering",
    tagline: "Interactive digital guide breaking down Kyokushin karate stances and technique timing",
    description: "An educational interactive web module aimed at novice martial artists to study official Kyokushin Kata footwork, chamber positions, and strike trajectories with frame-by-frame instructional breakdowns.",
    keyFeatures: [
      "Step-by-step visual choreography for Pinan, Taikyoku, and Yantsu katas",
      "Key technical checkpoints highlighted for tournament grading prep",
      "Interactive Japanese terminology flashcards with authentic pronunciations",
      "Instructor feedback logbook for student technique drills"
    ],
    technologies: ["JavaScript", "HTML5 Canvas", "Tailwind CSS", "Responsive Design"],
    githubUrl: "https://github.com/bishalbal/katasense-visualizer",
    liveUrl: "https://github.com/bishalbal/katasense-visualizer",
    featured: false,
    accentGradient: "from-cyan-600/20 to-slate-700/20",
    metrics: "Interactive kata syllabus reference"
  },
  {
    id: "portfolio-v1",
    title: "Personal Engineering Portfolio & Tech Log",
    category: "Personal Projects",
    tagline: "High-performance portfolio highlighting software engineering, martial arts, and leadership",
    description: "Designed from the ground up to showcase a unique intersection of discipline, technology, and leadership. Clean dark mode, zero-lag responsive design, accessible contrast, and modular data architecture.",
    keyFeatures: [
      "Performance-first architecture with fast load times",
      "Custom responsive components built without bloat",
      "High-contrast dark design system with cyan accents",
      "Easily configurable data architecture for rapid content updates"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
    githubUrl: "https://github.com/bishalbal/portfolio",
    liveUrl: "https://github.com/bishalbal/portfolio",
    featured: false,
    accentGradient: "from-slate-800/40 to-cyan-950/40",
    metrics: "100 Lighthouse Performance score ready"
  }
];

export const martialArtsInfo: MartialArtsInfo = {
  title: "Kyokushin Karate",
  subtitle: "Discipline Beyond Technique",
  rank: "3rd Dan Black Belt (Sandan)",
  experienceYears: "12+ Years",
  role: "Martial Arts Instructor & Competitor",
  competitions: "National & Regional Championships Representative for Nepal",
  philosophy: "Kyokushin translates to 'The Ultimate Truth'. In full-contact karate, there are no shortcuts. When facing exhaustion, cold mornings, or difficult opponents, you learn that mental discipline and relentless resilience matter more than natural talent. This exact mindset governs how I solve complex software bugs and drive leadership initiatives.",
  corePrinciples: [
    {
      title: "Osu (押忍) — Perseverance Under Pressure",
      description: "Pushing forward past physical and intellectual comfort zones to solve difficult challenges."
    },
    {
      title: "Rigorous Precision & Form",
      description: "Clean basics repeated thousands of times yield effortless execution — just like clean, refactored code."
    },
    {
      title: "Humility in Growth",
      description: "Regardless of rank or accomplishments, always maintaining the open, eager mindset of a white belt."
    },
    {
      title: "Mentorship & Respect",
      description: "True mastery is proven through your ability to elevate and protect those coming behind you."
    }
  ],
  stats: [
    {
      value: "3rd Dan",
      label: "Black Belt Rank",
      sublabel: "Sandan Certified"
    },
    {
      value: "12+ Years",
      label: "Continuous Training",
      sublabel: "From Childhood to Present"
    },
    {
      value: "500+",
      label: "Students Mentored",
      sublabel: "Schools & Community Dojos"
    },
    {
      value: "Nepal Rep",
      label: "Championships",
      sublabel: "National & Regional Arenas"
    }
  ]
};

export const leadershipData: LeadershipRole[] = [
  {
    role: "Region Coordinator",
    organization: "Leo District Council 325L, Nepal",
    period: "Recent / Current Tenure",
    description: "Serving at the district executive level, coordinating multi-club initiatives, strategic planning, and youth mobilization across the region.",
    highlights: [
      "Direct oversight and mentorship for multiple Leo Clubs across Kathmandu Valley",
      "Coordinated regional leadership development summits and community impact campaigns",
      "Streamlined inter-club reporting and youth engagement metrics"
    ]
  },
  {
    role: "Charter President & Past President",
    organization: "Leo Club of Kathmandu Temple Valley Kyokushin Karate",
    period: "Charter Tenure – Past President",
    description: "Founded the club from inception, uniting young martial artists and community youth under the banner of civic service, self-defense awareness, and societal upliftment.",
    highlights: [
      "Chartered a new active club and recruited over 30 initial foundational youth members",
      "Spearheaded free self-defense and anti-bullying workshops for school students in Kathmandu",
      "Led blood donation drives, winter clothes distribution, and environmental cleanups",
      "Mentored the incoming executive board to ensure sustainable organizational succession"
    ]
  },
  {
    role: "Youth Engagement & Event Organizer",
    organization: "Community & Sports Development Projects",
    period: "Ongoing",
    description: "Organizing sports clinics, public demonstrations, and educational seminars to channel youth energy into constructive physical and mental disciplines.",
    highlights: [
      "Organized multi-school karate demonstrations promoting discipline and healthy lifestyles",
      "Collaborated with local ward representatives on community welfare drives"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Martial Arts Instructor",
    organization: "Uniglobe School, Kathmandu",
    type: "Martial Arts Teaching",
    period: "Teaching Tenure",
    location: "Kathmandu, Nepal",
    description: "Lead comprehensive martial arts training sessions for primary and secondary school students, building physical fitness, respect, and self-confidence.",
    responsibilities: [
      "Design age-appropriate training curriculums balancing discipline, fitness, and safety",
      "Coach students through belt grading exams, kata practice, and kumite basics",
      "Instill core life skills: focus, emotional regulation, teamwork, and sportsmanship"
    ],
    skillsGained: ["Pedagogy", "Classroom Management", "Public Speaking", "Mentorship"]
  },
  {
    id: "exp-2",
    role: "Martial Arts Teacher",
    organization: "Ace School, Kathmandu",
    type: "Martial Arts Teaching",
    period: "Teaching Tenure",
    location: "Kathmandu, Nepal",
    description: "Instructed students in fundamental and intermediate Kyokushin Karate disciplines, emphasizing character building and physical conditioning.",
    responsibilities: [
      "Instructed regular physical education martial arts modules",
      "Prepared talented students for inter-school competitions and belt promotions",
      "Communicated student progress and character development with school administration and parents"
    ],
    skillsGained: ["Student Engagement", "Curriculum Planning", "Safety Management"]
  },
  {
    id: "exp-3",
    role: "Region Coordinator & Youth Leader",
    organization: "Leo District Council 325L",
    type: "Leadership",
    period: "2022 – Present",
    location: "Nepal",
    description: "Directing regional operations, coordinating service projects, and mentoring youth club presidents across Kathmandu.",
    responsibilities: [
      "Supervise execution of large-scale humanitarian drives, blood camps, and environment initiatives",
      "Facilitate leadership training workshops for young members",
      "Maintain district communication channels, agendas, and project documentation"
    ],
    skillsGained: ["Strategic Planning", "Project Management", "Team Leadership", "Conflict Resolution"]
  },
  {
    id: "exp-4",
    role: "Software Engineering Project Developer",
    organization: "PCPS College & Independent Projects",
    type: "Software / Tech",
    period: "2023 – Present",
    location: "Kathmandu, Nepal",
    description: "Developing full-stack web applications, exploring AI prompt architectures, and applying engineering principles to solve real community and organizational problems.",
    responsibilities: [
      "Architect backend logic and database structures using Python and Django",
      "Build mobile-responsive frontends with modern HTML, CSS, JavaScript, and Tailwind",
      "Implement prompt engineering workflows to enhance productivity and application intelligence"
    ],
    skillsGained: ["Python", "Django", "JavaScript", "Prompt Engineering", "Git"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "BSc Software Engineering",
    institution: "PCPS College (Patan College for Professional Studies)",
    period: "2023 – Present (Current)",
    status: "In Progress",
    location: "Lalitpur / Kathmandu, Nepal",
    description: "Undergraduate degree program focusing on software engineering principles, algorithms, data structures, full-stack application development, database management systems, and software testing methodologies.",
    highlights: [
      "Core modules: Object-Oriented Programming, Database Systems, Web Application Development, Software Engineering Architecture",
      "Actively applying coursework to real-world community platforms and dojo management systems",
      "Engaged in technical seminars, coding challenges, and collaborative sprint projects"
    ]
  },
  {
    degree: "Diploma in Automobile Engineering",
    institution: "Technical Institute of Engineering",
    period: "2020 – 2023",
    status: "Completed",
    location: "Nepal",
    description: "Comprehensive 3-year technical engineering diploma covering mechanical systems, automotive electronics, thermodynamics, workshop practice, fluid mechanics, and systematic diagnostics.",
    highlights: [
      "Gained deep technical understanding of hardware, mechanical systems, sensor integrations, and diagnostic workflows",
      "Hands-on workshop troubleshooting: engine overhauls, electrical wiring circuits, and hydraulic systems",
      "Developed an analytical engineering mindset that seamlessly translated into computational problem-solving and software architecture"
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Kyokushin Karate 3rd Dan Black Belt (Sandan)",
    category: "Martial Arts",
    year: "Achieved",
    organization: "Nepal Kyokushin Karate Association",
    description: "Attained prestigious 3rd Dan Black Belt status after over a decade of rigorous physical, technical, and mental evaluation.",
    badge: "3rd Dan"
  },
  {
    id: "ach-2",
    title: "Nepal Representative in Martial Arts Competitions",
    category: "Martial Arts",
    year: "National & Regional",
    organization: "Martial Arts Federation",
    description: "Selected and represented Nepal in competitive full-contact karate championships, demonstrating technical prowess and tenacity on the mat.",
    badge: "National Competitor"
  },
  {
    id: "ach-3",
    title: "Leo District Council 325L Region Coordinator Appointment",
    category: "Leadership",
    year: "Recent",
    organization: "Lions Clubs International / Leo District 325L",
    description: "Appointed to regional leadership for proven organizational execution, dedication to community upliftment, and youth empowerment.",
    badge: "District Executive"
  },
  {
    id: "ach-4",
    title: "Charter President — Leo Club Kathmandu Temple Valley Kyokushin Karate",
    category: "Leadership",
    year: "Charter Year",
    organization: "Leo Club International",
    description: "Successfully chartered and launched a high-impact community youth club blending martial arts discipline with civic responsibility.",
    badge: "Charter President"
  },
  {
    id: "ach-5",
    title: "School Teaching & Mentorship Impact",
    category: "Community",
    year: "Ongoing",
    organization: "Uniglobe School & Ace School",
    description: "Instructed hundreds of young students, fostering self-defense awareness, anti-bullying confidence, and lifelong healthy habits.",
    badge: "Lead Instructor"
  },
  {
    id: "ach-6",
    title: "Automobile to Software Transition Excellence",
    category: "Academic",
    year: "2023",
    organization: "PCPS College",
    description: "Successfully graduated from mechanical engineering diploma and accelerated into BSc Software Engineering, building complex web and Python systems.",
    badge: "Engineering Transition"
  }
];
