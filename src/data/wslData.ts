export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  title: string;
  address: string;
  building: string;
  phone: string;
  whatsapp: string;
  email: string;
  poBox?: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface Destination {
  id: string;
  country: string;
  code: string;
  tagline: string;
  overview: string;
  image: string;
  popularUniversities: string[];
  intakes: string[];
  averageTuition: string;
  workRights: string;
  visaProcessingTime: string;
  scholarshipOpportunities: string;
  keyRequirements: string[];
}

export interface VisaService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  iconName: string;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  initials: string;
  origin: string;
  destination: string;
  university: string;
  program: string;
  visaCategory: string;
  intake: string;
  quote: string;
  approvalImage?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  office: string;
  experience: string;
  bio: string;
  specialization: string[];
}

export interface InstagramShowcase {
  id: string;
  caption: string;
  category: string;
  videoUrl?: string;
  thumbnail: string;
  instagramUrl: string;
  date: string;
  viewsOrLikes: string;
}

export const WSL_OFFICES: OfficeLocation[] = [
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    title: 'WSL Consultants Dubai (HQ)',
    address: 'Office No. 201-54, 2nd Floor, R308 Building (Adidas Building), Near Burjuman Mall',
    building: 'R308 Building (Adidas Building)',
    phone: '+971 54 771 0629',
    whatsapp: '+971547710629',
    email: 'info@wslconsultants.ae',
    poBox: 'P.O. Box 624699, Dubai, UAE',
    hours: 'Monday – Saturday: 10:00 AM – 7:00 PM (GST)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7766023306913!2d55.30219617604473!3d25.24443902978939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43398939b4b9%3A0xe96022e39ea49d01!2sBurJuman!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae'
  },
  {
    id: 'lahore',
    city: 'Lahore',
    country: 'Pakistan',
    title: 'WSL Consultants Lahore',
    address: '38-M, First Floor, Rakhshanda Heights, Near Kharak Stop, Multan Road, Gulberg',
    building: 'Rakhshanda Heights',
    phone: '+92 300 070 1444',
    whatsapp: '+923000701444',
    email: 'info@wslconsultants.ae',
    hours: 'Monday – Saturday: 10:00 AM – 6:30 PM (PKT)',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.831557022285!2d74.28859!3d31.51139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919037c22955555%3A0x6b1897c83f1cb2f4!2sMultan%20Rd%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk'
  }
];

export const WSL_DESTINATIONS: Destination[] = [
  {
    id: 'austria',
    country: 'Austria',
    code: 'AT',
    tagline: 'World-Renowned European Education with Low Tuition Costs',
    overview: 'Austria ranks among the safest and most culturally rich destinations globally. Public universities offer prestigious degree programs with highly subsidized tuition fees for international students.',
    image: '/src/assets/images/wsl_dest_austria_1792299790020.jpg',
    popularUniversities: ['University of Vienna', 'TU Wien', 'Johannes Kepler University Linz', 'University of Graz', 'MODUL University Vienna'],
    intakes: ['Winter (October)', 'Summer (March)'],
    averageTuition: '€726 – €1,500 per semester (Public universities)',
    workRights: 'Up to 20 hours/week during studies; 12-month post-study job search visa',
    visaProcessingTime: '8 – 12 weeks for Austrian National Visa D / Residence Permit',
    scholarshipOpportunities: 'OeAD Austrian Federal Scholarships, Ernst Mach Grant, University merit waivers',
    keyRequirements: ['Recognized secondary school diploma or Bachelor degree', 'English (IELTS 6.0+) or German certificate', 'Legalized and apostilled academic credentials', 'Proof of funds in personal bank account']
  },
  {
    id: 'italy',
    country: 'Italy',
    code: 'IT',
    tagline: 'Centuries of Academic Excellence & 100% Regional Scholarships',
    overview: 'Italy boasts some of the oldest and most prestigious institutions in the world. With government regional scholarships (such as DSU and LAZIODISCO) covering tuition and living allowances, studying in Italy is uniquely accessible.',
    image: '/src/assets/images/wsl_dest_italy_1792299790340.jpg',
    popularUniversities: ['Politecnico di Milano', 'Sapienza University of Rome', 'University of Bologna', 'University of Padua', 'Politecnico di Torino'],
    intakes: ['Autumn (September/October)'],
    averageTuition: '€1,000 – €3,500/year (Waived with regional DSU scholarships)',
    workRights: '20 hours/week during semester; up to 40 hours during vacations',
    visaProcessingTime: '4 – 8 weeks via Italian Embassy VFS',
    scholarshipOpportunities: 'DSU Regional Grant (up to €7,000/year + free meals/housing), Invest Your Talent in Italy, MAECI scholarships',
    keyRequirements: ['Pre-enrollment through Universitaly portal', 'Declaration of Value (DOV) or CIMEA Statement of Comparability', 'IELTS 6.0+ or English medium certificate', 'Schengen study visa financial documents']
  },
  {
    id: 'canada',
    country: 'Canada',
    code: 'CA',
    tagline: 'Globally Acclaimed Universities with Direct Post-Graduation Work Rights',
    overview: 'Canada remains a top choice for students seeking top-tier research, diverse multicultural communities, and clear pathways to post-graduation work permits (PGWP).',
    image: '/src/assets/images/wsl_dest_canada_1792299791186.jpg',
    popularUniversities: ['University of Toronto', 'UBC Vancouver', 'McGill University', 'York University', 'Seneca Polytechnic'],
    intakes: ['Fall (September)', 'Winter (January)', 'Spring (May)'],
    averageTuition: 'CAD $18,000 – $36,000/year',
    workRights: '20-24 hours/week off-campus during terms; full-time during breaks; up to 3-year PGWP',
    visaProcessingTime: '6 – 10 weeks via IRCC Canada Portal',
    scholarshipOpportunities: 'Vanier CGS, International Major Entrance Scholarships, University bursaries',
    keyRequirements: ['Letter of Acceptance (LOA) with Provincial Attestation Letter (PAL)', 'IELTS 6.5+ or PTE Academic', 'GIC (Guaranteed Investment Certificate) proof of funds', 'Statement of Purpose (SOP)']
  },
  {
    id: 'united-kingdom',
    country: 'United Kingdom',
    code: 'GB',
    tagline: 'Fast-Track 1-Year Master Degrees & Graduate Route Visa',
    overview: 'The UK provides prestigious academic credentials with concentrated course durations, enabling students to enter global industry faster with 2-year Graduate Route work permissions.',
    image: '/src/assets/images/wsl_hero_cinematic_1792299790302.jpg',
    popularUniversities: ['University of Manchester', 'King’s College London', 'University of Birmingham', 'Coventry University', 'University of Hertfordshire'],
    intakes: ['September/October', 'January/February'],
    averageTuition: '£14,000 – £24,000/year',
    workRights: '20 hours/week during term-time; 2-year Graduate Route post-study work visa',
    visaProcessingTime: '3 – 4 weeks (Priority 5-day service available)',
    scholarshipOpportunities: 'Chevening, Great Scholarships, Commonwealth awards, University vice-chancellor discounts',
    keyRequirements: ['CAS (Confirmation of Acceptance for Studies)', 'IELTS Academic for UKVI 6.0+ or MOI exemption', '28-day financial evidence holding maintenance funds', 'TB test clearance where applicable']
  },
  {
    id: 'united-states',
    country: 'United States',
    code: 'US',
    tagline: 'Global Hub for Research, Innovation & STEM OPT Work Extensions',
    overview: 'American higher education provides unmatched flexibility, cutting-edge campus facilities, and up to 36 months of STEM OPT work permissions for eligible graduates.',
    image: '/src/assets/images/wsl_visa_consultation_1792299791395.jpg',
    popularUniversities: ['Arizona State University', 'Northeastern University', 'SUNY Buffalo', 'University of South Florida', 'Purdue University'],
    intakes: ['Fall (August)', 'Spring (January)'],
    averageTuition: '$20,000 – $42,000/year',
    workRights: '20 hours/week on campus; 12 months OPT + 24 months STEM extension',
    visaProcessingTime: 'F-1 interview appointment slot + 5-7 business days processing',
    scholarshipOpportunities: 'Merit-based institutional aid, Graduate Assistantships (RA/TA), Fulbright',
    keyRequirements: ['Form I-20 issued by SEVP-approved school', 'SEVIS I-901 fee payment receipt', 'DS-160 confirmation and embassy interview appointment', 'Strong ties and genuine non-immigrant intent evidence']
  },
  {
    id: 'czech-republic',
    country: 'Czech Republic',
    code: 'CZ',
    tagline: 'Heart of Central Europe with Historic Universities & Low Living Costs',
    overview: 'Located at the crossroads of Europe, the Czech Republic offers accredited English-taught degrees at Charles University, Czech Technical University, and other historic institutions with minimal tuition.',
    image: '/src/assets/images/wsl_dest_austria_1792299790020.jpg',
    popularUniversities: ['Charles University Prague', 'Czech Technical University (CTU)', 'Masaryk University', 'University of Chemistry and Technology Prague'],
    intakes: ['Autumn (September/October)'],
    averageTuition: '€2,000 – €6,000/year for English programs (Czech-taught programs are free)',
    workRights: 'Part-time student employment permitted; post-study job seeker visa',
    visaProcessingTime: '60 – 90 days via Ministry of the Interior of the Czech Republic',
    scholarshipOpportunities: 'Visegrad Scholarship Program, South Moravian Center for International Mobility',
    keyRequirements: ['Nostrification (equivalence recognition of previous education)', 'Confirmed university acceptance letter', 'Super-legalized criminal record extract', 'Accommodation contract in Czech Republic']
  }
];

export const WSL_SERVICES: VisaService[] = [
  {
    id: 'student-visa',
    title: 'Study Abroad & Student Visa Consultancy',
    shortDesc: 'Comprehensive, step-by-step guidance from university course selection and acceptance to embassy visa filing and interview coaching.',
    fullDesc: 'We guide you through the complete higher education lifecycle. From choosing the optimal degree in Europe, the UK, USA, or Canada to securing your official letter of acceptance, preparing financial evidence, and preparing for embassy visa interviews.',
    deliverables: [
      'Comprehensive academic profile review and course mapping',
      'Direct admissions filing with accredited international universities',
      'Statement of Purpose (SOP) and CV optimization',
      'Embassy appointment booking and dossier verification',
      'Mock visa interview simulations and document checklists'
    ],
    idealFor: 'High school graduates, university students, and professionals seeking Bachelor’s, Master’s, or PhD programs abroad.',
    iconName: 'GraduationCap'
  },
  {
    id: 'university-admissions',
    title: 'Direct University Admissions & Placement',
    shortDesc: 'Guaranteed adherence to institutional deadlines and official university entry criteria with fast-track processing.',
    fullDesc: 'Navigating international portals like UCAS, Universitaly, or North American portals can be daunting. We liaise directly with institutional admission boards to guarantee complete submissions, credit recognition, and official offer letters.',
    deliverables: [
      'Pre-evaluation of transcripts and grade conversion',
      'Direct communication with university international offices',
      'Fast-track submission for priority intake deadlines',
      'Follow-up until conditional and unconditional offer letters are secured',
      'Enrollment deposit and CAS / I-20 / LOA issuance support'
    ],
    idealFor: 'Students who want error-free applications and maximum acceptance probability at top universities.',
    iconName: 'Building2'
  },
  {
    id: 'scholarship-guidance',
    title: 'Scholarship & Financial Aid Advisory',
    shortDesc: 'Identify and apply for 100% regional European grants, merit waivers, and government scholarships that significantly reduce study costs.',
    fullDesc: 'Many international destinations offer substantial financial aid. In Italy, regional scholarships (DSU, LAZIODISCO) provide full tuition waivers and up to €7,000 annual living stipends. In Austria, public tuition is heavily subsidized. We ensure your family income paperwork (ISEE Parificato) is perfectly documented.',
    deliverables: [
      'Targeted scholarship matching based on nationality, academic record, and financial background',
      'Italian ISEE Parificato documentation drafting and CAF submission',
      'Austrian Ernst Mach & OeAD application guidance',
      'Motivation letters tailored for merit-based faculty discounts',
      'University housing subsidy and cafeteria discount applications'
    ],
    idealFor: 'Deserving students seeking to minimize tuition and living expenses during international study.',
    iconName: 'Award'
  },
  {
    id: 'document-legalization',
    title: 'Document Legalization, Apostille & Attestation',
    shortDesc: 'Complete consular legalization, apostille stamps, Ministry of Foreign Affairs (MOFA) attestation, and certified sworn translations.',
    fullDesc: 'Consulates strictly reject incomplete or un-legalized educational records. We handle the entire bureaucratic process: Board / HEC verifications, Ministry of Foreign Affairs (MOFA) attestations, Italian Consular Declaration of Value (DOV), CIMEA certifications, and sworn translations.',
    deliverables: [
      'MOFA UAE and Pakistan educational document attestations',
      'Hague Apostille stamping for European member countries',
      'Italian Declaration of Value (DOV) or CIMEA comparability certificates',
      'Sworn Italian, German, or French certified translations',
      'Consular pre-checks before final visa appointment'
    ],
    idealFor: 'Applicants who need certified paperwork compliant with embassy and university standards.',
    iconName: 'FileCheck'
  },
  {
    id: 'visit-tourist-visa',
    title: 'Visit & Tourist Visa Guidance',
    shortDesc: 'Meticulous visa file preparation for Schengen, UK, USA, and Canada visit visas for parents, tourists, and business visitors.',
    fullDesc: 'Whether visiting family, attending a student graduation ceremony, or traveling for tourism, we ensure your travel itinerary, employment ties, bank statements, and cover letters meet consular scrutiny to minimize refusal risk.',
    deliverables: [
      'Personalized document checklist tailored to your employment or business profile',
      'Day-by-day confirmed travel itinerary and flight/hotel reservation proofs',
      'Compelling cover letters proving genuine visitor intent and home ties',
      'VFS, Gerrys, or US Embassy appointment coordination',
      'Comprehensive financial statement audits'
    ],
    idealFor: 'Parents attending graduation, vacation travelers, and business professionals.',
    iconName: 'Compass'
  },
  {
    id: 'pre-departure-support',
    title: 'Pre-Departure Briefing & Relocation Support',
    shortDesc: 'Airport guidance, student accommodation booking, foreign exchange, local SIM activation, and residency registration abroad.',
    fullDesc: 'Our commitment does not end with your visa stamp. We guide our students through the critical first 30 days in their destination: securing student dorms, opening European bank accounts, activating health insurance, and applying for local residency cards (Permesso di Soggiorno / Aufenthaltsbewilligung).',
    deliverables: [
      'Pre-departure orientation on customs, packing, and transit regulations',
      'Assistance with verified student dormitories and private shared apartments',
      'Guidance on mandatory foreign health insurance policies',
      'Post-arrival residency card application templates',
      'Connection with senior WSL alumni already studying in that city'
    ],
    idealFor: 'First-time travelers and parents seeking total peace of mind for their children abroad.',
    iconName: 'PlaneTakeoff'
  }
];

export const WSL_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Initial Profile Evaluation',
    desc: 'Our senior counselors in Dubai or Lahore assess your academic transcripts, English proficiency, budget, and destination preferences to establish a realistic success pathway.',
    timeline: 'Day 1 – 2'
  },
  {
    step: '02',
    title: 'University & Course Selection',
    desc: 'We present a tailored portfolio of accredited European or Western universities matching your career aspirations, application deadlines, and scholarship eligibility.',
    timeline: 'Day 3 – 5'
  },
  {
    step: '03',
    title: 'Application & Admission Offer',
    desc: 'We organize your Statements of Purpose, CV, and verified transcripts, lodging direct applications with university portals until conditional and unconditional offers are issued.',
    timeline: 'Week 2 – 4'
  },
  {
    step: '04',
    title: 'Document Legalization & Financial Dossier',
    desc: 'We manage Ministry attestations, Apostille stamps, Italian DOV / CIMEA verifications, and compile an unassailable financial proof dossier compliant with embassy rules.',
    timeline: 'Week 4 – 8'
  },
  {
    step: '05',
    title: 'Embassy Filing & Mock Interviews',
    desc: 'We secure priority embassy / VFS appointment slots and conduct intensive mock interview preparation to ensure you answer consular officers with confidence.',
    timeline: 'Week 8 – 12'
  },
  {
    step: '06',
    title: 'Visa Grant & Pre-Departure Briefing',
    desc: 'Upon visa issuance, we celebrate your success, coordinate your student accommodation, guide you on currency exchange, and connect you with local alumni abroad.',
    timeline: 'Final Milestone'
  }
];

export const WSL_SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    studentName: 'Zainab Fatima',
    initials: 'ZF',
    origin: 'Dubai, UAE',
    destination: 'Italy',
    university: 'Politecnico di Milano',
    program: 'M.Sc. Sustainable Architecture',
    visaCategory: 'Italian National Type D Study Visa',
    intake: 'Autumn Intake',
    quote: 'WSL Consultants Dubai handled my Universitaly pre-enrollment and DSU regional scholarship flawlessly. Not only was my visa approved in 3 weeks, but I also received a full tuition waiver and €6,800 annual stipend.',
    approvalImage: '/src/assets/images/wsl_student_success_story_1792299830701.jpg'
  },
  {
    id: 'story-2',
    studentName: 'Hamza Tariq',
    initials: 'HT',
    origin: 'Lahore, Pakistan',
    destination: 'Austria',
    university: 'University of Vienna',
    program: 'B.Sc. Data Science & AI',
    visaCategory: 'Austrian Residence Permit Student',
    intake: 'Winter Semester',
    quote: 'The team at WSL was transparent from day one. Austrian visa documentation is notoriously strict with legalization and police certificates, but WSL guided me through every stamp and bank verification step without a single error.',
    approvalImage: '/src/assets/images/wsl_dest_austria_1792299790020.jpg'
  },
  {
    id: 'story-3',
    studentName: 'Omar Al-Hashimi',
    initials: 'OA',
    origin: 'Sharjah, UAE',
    destination: 'Canada',
    university: 'University of Toronto',
    program: 'Master of Engineering (Aerospace)',
    visaCategory: 'Canadian Study Permit (PAL Approved)',
    intake: 'Fall Intake',
    quote: 'With recent Canadian visa cap policies, having WSL’s expertise in securing my Provincial Attestation Letter (PAL) and structuring my Statement of Purpose made all the difference. Approved on first submission!',
    approvalImage: '/src/assets/images/wsl_dest_canada_1792299791186.jpg'
  },
  {
    id: 'story-4',
    studentName: 'Ayesha Mehmood',
    initials: 'AM',
    origin: 'Abu Dhabi, UAE',
    destination: 'Czech Republic',
    university: 'Charles University Prague',
    program: 'General Medicine (MD English)',
    visaCategory: 'Long-term Study Visa Czech Republic',
    intake: 'Autumn Intake',
    quote: 'Getting into Charles University for Medicine was my dream. WSL handled my Nostrification in Prague and guided me through the entrance exam registration and Embassy interview prep. Forever grateful to the Dubai team.',
    approvalImage: '/src/assets/images/wsl_visa_consultation_1792299791395.jpg'
  },
  {
    id: 'story-5',
    studentName: 'Bilal Ahmed',
    initials: 'BA',
    origin: 'Lahore, Pakistan',
    destination: 'United Kingdom',
    university: 'University of Manchester',
    program: 'M.Sc. Advanced Computer Science',
    visaCategory: 'UK Student Visa (Tier 4)',
    intake: 'September Intake',
    quote: 'WSL’s counseling is truly student-first. They helped me get an unconditional offer letter within 10 days and prepped my UKVI 28-day financial evidence. My visa arrived in under 15 working days.',
    approvalImage: '/src/assets/images/wsl_hero_cinematic_1792299790302.jpg'
  }
];

export interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  category: string;
  duration: string;
  views: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
}

export const WSL_TEAM: TeamMember[] = [
  {
    id: 'saba-tanveer',
    name: 'Saba Tanveer',
    role: 'Chief Executive Officer & Founder',
    office: 'Dubai Head Office & Global Operations',
    experience: '14+ Years in International Education & Consular Affairs',
    bio: 'Saba Tanveer founded WSL Consultants with the mission of providing honest, dependable, and highly professional study-abroad guidance to students across the UAE and South Asia. Direct contact: info@wslconsultants.ae.',
    specialization: ['European Higher Education Policies', 'Consular Affairs & Visa Law', 'Strategic University Partnerships', 'Student Welfare Abroad']
  },
  {
    id: 'tanveer-abbas',
    name: 'Tanveer Abbas',
    role: 'Managing Director & Head of Immigration Strategy',
    office: 'Dubai HQ & Pakistan Operations',
    experience: '14+ Years Advisory in Consular Legalization & Diplomatic Channels',
    bio: 'Leading WSL’s case assessment and immigration compliance divisions, Tanveer Abbas oversees file compilation, legal attestations, and consular readiness. Direct contact: info@wslconsultants.ae.',
    specialization: ['Immigration Case Assessment', 'Apostille & Legal Attestation Protocols', 'Schengen & North American Visa Regulations', 'Operational Management']
  },
  {
    id: 'infal-butt',
    name: 'Infal Butt',
    role: 'Branch Manager',
    office: 'Dubai Burjuman Office',
    experience: '8+ Years in Branch Operations & University Placements',
    bio: 'Oversees daily admissions counseling, client relations, and quality control at WSL Dubai. Direct contact: info@wslconsultants.ae.',
    specialization: ['Admissions Operations', 'Student Counseling', 'Application Tracking', 'Embassy Coordination']
  },
  {
    id: 'iqra-sohail',
    name: 'Iqra Sohail',
    role: 'Assistant Branch Manager',
    office: 'Dubai Burjuman Office',
    experience: '6+ Years in Client Advisory & Case Management',
    bio: 'Direct counseling, file compilation, and document verification for European and Western university applicants at our Dubai Burjuman office.',
    specialization: ['Client Advisory', 'Document Pre-checks', 'VFS & Embassy Booking', 'Student Orientation']
  }
];

export const WSL_YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'yt-1',
    videoId: 'qg_2E8T5hD4',
    title: 'How Mr. Mushahid Rasool Got His Austria Student Visa Approved from Pakistan',
    category: 'Austria Student Visa',
    duration: '12:45',
    views: '48K views',
    description: 'Detailed breakdown of the Austrian National Visa D / Aufenthaltsbewilligung Student process, legalized documents, and admission at top Austrian universities.',
    youtubeUrl: 'https://www.youtube.com/@WSLConsultants',
    thumbnail: '/src/assets/images/wsl_dest_austria_1792299790020.jpg'
  },
  {
    id: 'yt-2',
    videoId: '8W1d_JmZgKk',
    title: 'Answering Study in Italy Queries - Pre-Enrollment Rules, Documents & Full Process',
    category: 'Italy & DSU Scholarships',
    duration: '18:20',
    views: '84K views',
    description: 'Complete guidance on Universitaly pre-enrollment, Declaration of Value (DOV), CIMEA comparability certificate, and 100% regional DSU scholarships.',
    youtubeUrl: 'https://www.youtube.com/@WSLConsultants',
    thumbnail: '/src/assets/images/wsl_dest_italy_1792299790340.jpg'
  },
  {
    id: 'yt-3',
    videoId: 'Z6x9M2wV1a0',
    title: 'Austria Study Visa In Low Budget After Previous European Refusals! WSL Success Case',
    category: 'Visa After Refusals',
    duration: '14:10',
    views: '62K views',
    description: 'Real client case study overcoming previous refusals by presenting impeccable financial solvency and verified educational attestations.',
    youtubeUrl: 'https://www.youtube.com/@WSLConsultants',
    thumbnail: '/src/assets/images/wsl_student_success_story_1792299830701.jpg'
  },
  {
    id: 'yt-4',
    videoId: '9Ym2V1aX8c3',
    title: 'Czech Republic Study Visa Approved With 8 Years Gap! Miss Sana Khalid Case Study',
    category: 'Czech Republic & Schengen',
    duration: '15:35',
    views: '53K views',
    description: 'Overcoming long study gaps with strong career progression evidence and Charles University English-taught degree admissions.',
    youtubeUrl: 'https://www.youtube.com/@WSLConsultants',
    thumbnail: '/src/assets/images/wsl_visa_consultation_1792299791395.jpg'
  },
  {
    id: 'yt-5',
    videoId: 'k1M3a8X9y0w',
    title: 'How WSL Consultants Works Behind the Scenes | Student Admissions & Visa Processing',
    category: 'Behind The Scenes',
    duration: '22:15',
    views: '110K views',
    description: 'Exclusive look inside the Dubai and Lahore operations: document verification teams, mock visa interview rooms, and diplomatic attestation protocols.',
    youtubeUrl: 'https://www.youtube.com/@WSLConsultants',
    thumbnail: '/src/assets/images/wsl_leadership_board_1792299829974.jpg'
  },
  {
    id: 'yt-6',
    videoId: '3a8X9y0wM1k',
    title: 'USA Student Visa Costs, I-20 & F-1 Visa Embassy Interview Tips',
    category: 'USA & North America',
    duration: '16:50',
    views: '71K views',
    description: 'Everything you need to know about SEVIS I-901 fees, DS-160 filing, funding proofs, and consular interview preparation.',
    youtubeUrl: 'https://www.youtube.com/@WSLConsultants',
    thumbnail: '/src/assets/images/wsl_dest_canada_1792299791186.jpg'
  }
];

export const WSL_INSTAGRAM_REELS: InstagramShowcase[] = [
  {
    id: 'reel-1',
    caption: 'Big Visa Approval Alert! Celebrating another Italian Type D Study Visa grant with DSU Scholarship confirmation in Dubai.',
    category: 'Visa Approvals',
    thumbnail: '/src/assets/images/wsl_student_success_story_1792299830701.jpg',
    instagramUrl: 'https://www.instagram.com/wsluae/',
    date: 'Official Reel @wsluae',
    viewsOrLikes: '14.2k views'
  },
  {
    id: 'reel-2',
    caption: 'Why Austria is the top choice for UAE residents in 2025: Low tuition fees, English-taught programs, and peaceful lifestyle.',
    category: 'Study Abroad Guides',
    thumbnail: '/src/assets/images/wsl_dest_austria_1792299790020.jpg',
    instagramUrl: 'https://www.instagram.com/wsluae/',
    date: 'Official Reel @wsluae',
    viewsOrLikes: '22.8k views'
  },
  {
    id: 'reel-3',
    caption: 'Inside our Dubai Office: Meet our senior counselors at R308 Adidas Building, near Burjuman Mall.',
    category: 'Office & Consultations',
    thumbnail: '/src/assets/images/wsl_visa_consultation_1792299791395.jpg',
    instagramUrl: 'https://www.instagram.com/wsluae/',
    date: 'Official Reel @wsluae',
    viewsOrLikes: '18.5k views'
  },
  {
    id: 'reel-4',
    caption: 'Student journey from admission to visa stamping: Step-by-step documentation timeline for Canadian universities.',
    category: 'Student Journey',
    thumbnail: '/src/assets/images/wsl_dest_canada_1792299791186.jpg',
    instagramUrl: 'https://www.instagram.com/wsluae/',
    date: 'Official Reel @wsluae',
    viewsOrLikes: '31.1k views'
  }
];

export const WSL_FAQS = [
  {
    q: 'Why should I choose WSL Consultants over applying on my own?',
    a: 'International university admissions and embassy visa applications require strict adherence to evolving legal criteria, quota caps, attestation chains (MOFA, Apostille, DOV), and precise financial documentation. With 14+ years of experience and over 10,000 successful files, WSL Consultants ensures zero-error filings, direct liaison with universities, and personalized guidance that maximizes your admission and visa approval probabilities.'
  },
  {
    q: 'Can I study in Europe with low tuition or scholarships?',
    a: 'Yes. Countries like Italy and Austria offer some of the most affordable public university education in the world. In Italy, our students frequently qualify for 100% regional DSU scholarships which include free tuition, subsidized meals, and up to €7,000 in annual stipends. In Austria, public tuition fees for international students are generally subsidized between €726 and €1,500 per semester.'
  },
  {
    q: 'Can I work while studying abroad as an international student?',
    a: 'In most European and Western destinations, international students are legally allowed to work part-time (typically up to 20 hours per week during term time and 40 hours during holidays). Additionally, countries like Canada, the UK, Austria, and Germany offer post-study work visas (ranging from 12 months up to 3 years) upon graduation.'
  },
  {
    q: 'How does the free consultation process work at WSL?',
    a: 'You can book an appointment at our Dubai office (near Burjuman Mall) or our Lahore office, or connect remotely via phone or WhatsApp. We conduct an in-depth profile review of your academic transcripts, English proficiency, and financial budget, providing a transparent, personalized roadmap of eligible universities and visa requirements.'
  },
  {
    q: 'Does WSL assist with document attestation and legalization?',
    a: 'Yes. Document legalization is one of our core competencies. We coordinate MOFA attestations, Hague Apostilles, Italian Declarations of Value (DOV), CIMEA equivalency certificates, and certified sworn translations so your application is strictly compliant before embassy submission.'
  }
];
