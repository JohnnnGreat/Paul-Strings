/* ─── Types ──────────────────────────────────────────────────── */

export type MusicRelease = {
  slug: string;
  title: string;
  type: "Single" | "EP" | "Album";
  year: number;
  genre: string;
  coverImage: string;
  description: string;
  audioUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  soundcloudUrl?: string;
  youtubeUrl?: string;
};

export type DataProject = {
  slug: string;
  title: string;
  category: "Data Analysis" | "Visualization" | "Machine Learning" | "Dashboard";
  tools: string[];
  previewImage: string;
  summary: string;
  problem: string;
  result: string;
  impact?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type Skill = {
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

/* ─── Music Releases ─────────────────────────────────────────── */

export const musicReleases: MusicRelease[] = [
  {
    slug: "strings-and-silence",
    title: "Strings & Silence",
    type: "EP",
    year: 2024,
    genre: "Fingerstyle / Acoustic",
    coverImage: "/images/music/strings-and-silence.jpg",
    description:
      "A 5-track fingerstyle exploration of space and texture. Each piece built around a single guitar, unedited.",
    audioUrl: "/audio/guitar-sample.mp3",
    spotifyUrl: "#",
    soundcloudUrl: "#",
    youtubeUrl: "#",
  },
  {
    slug: "pulse",
    title: "Pulse",
    type: "Single",
    year: 2024,
    genre: "Jazz / Fusion",
    coverImage: "/images/music/pulse.jpg",
    description:
      "Rhythm as a conversation. A jazz fusion piece that plays with time signatures and expectation.",
    audioUrl: "/audio/guitar-sample.mp3",
    spotifyUrl: "#",
    appleMusicUrl: "#",
  },
  {
    slug: "data-blues",
    title: "Data Blues",
    type: "Single",
    year: 2023,
    genre: "Blues / Experimental",
    coverImage: "/images/music/data-blues.jpg",
    description:
      "What if a blues scale was a dataset? This track is literally composed from data patterns translated into notes.",
    audioUrl: "/audio/guitar-sample.mp3",
    spotifyUrl: "#",
    soundcloudUrl: "#",
  },
];

/* ─── Data Projects ──────────────────────────────────────────── */

export const dataProjects: DataProject[] = [
  {
    slug: "music-streaming-trends",
    title: "Music Streaming Trend Analysis",
    category: "Data Analysis",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    previewImage: "/images/data/music-streaming.jpg",
    summary: "Analyzed 3M+ streaming data points to uncover genre growth patterns across Africa.",
    problem: "Record labels lacked granular insight into which genres were gaining traction in emerging markets.",
    result: "Identified a 340% YoY growth in Afrobeats streaming, informing 3 label signing decisions.",
    impact: "340% growth identified",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "audio-sentiment-dashboard",
    title: "Audio Sentiment Dashboard",
    category: "Dashboard",
    tools: ["Python", "Tableau", "NLP", "Spotify API"],
    previewImage: "/images/data/audio-sentiment.jpg",
    summary: "Built an interactive dashboard mapping emotional tone across 500 song lyrics.",
    problem: "Music therapists needed a way to quickly identify song sentiment for playlist curation.",
    result: "Dashboard reduced playlist curation time by 60% across 3 therapy practices.",
    impact: "60% time reduction",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    slug: "concert-attendance-forecast",
    title: "Concert Attendance Forecast",
    category: "Machine Learning",
    tools: ["Python", "Scikit-learn", "SQL", "Power BI"],
    previewImage: "/images/data/concert-forecast.jpg",
    summary: "Predictive model for live event attendance using weather, artist, and market data.",
    problem: "Venue managers were over/under-staffing events due to inaccurate attendance estimates.",
    result: "87% forecast accuracy, saving an average of ₦240K per event in staffing costs.",
    impact: "87% accuracy",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "spotify-wrapped-clone",
    title: "Personal Spotify Wrapped Clone",
    category: "Visualization",
    tools: ["Python", "D3.js", "Spotify API", "Next.js"],
    previewImage: "/images/data/spotify-wrapped.jpg",
    summary: "Built a personalised year-in-review data story using my own Spotify listening history.",
    problem: "Wanted a deeper, more visual breakdown than Spotify's official Wrapped feature.",
    result: "Interactive data story shared by 2K+ people on social media.",
    impact: "2K+ shares",
    githubUrl: "#",
    liveUrl: "#",
  },
];

/* ─── Skills ─────────────────────────────────────────────────── */

export const musicSkills: Skill[] = [
  { name: "Classical Guitar", level: "Expert" },
  { name: "Fingerstyle", level: "Expert" },
  { name: "Jazz Guitar", level: "Advanced" },
  { name: "Music Theory", level: "Advanced" },
  { name: "Composition", level: "Advanced" },
  { name: "Live Performance", level: "Expert" },
  { name: "Studio Recording", level: "Intermediate" },
];

export const dataSkills: Skill[] = [
  { name: "Python", level: "Advanced" },
  { name: "SQL", level: "Advanced" },
  { name: "Tableau", level: "Advanced" },
  { name: "Power BI", level: "Intermediate" },
  { name: "Data Visualization", level: "Advanced" },
  { name: "Statistical Analysis", level: "Advanced" },
  { name: "Machine Learning", level: "Intermediate" },
];

export const sharedSkills: Skill[] = [
  { name: "Pattern Recognition" },
  { name: "Storytelling" },
  { name: "Creative Problem Solving" },
  { name: "Attention to Detail" },
  { name: "Communication" },
];

/* ─── Stats ──────────────────────────────────────────────────── */

export const stats = [
  { label: "Years Playing Guitar", value: 8, suffix: "+" },
  { label: "Data Projects", value: 20, suffix: "+" },
  { label: "Streaming Platforms", value: 5, suffix: "" },
  { label: "Years in Data", value: 3, suffix: "+" },
];
