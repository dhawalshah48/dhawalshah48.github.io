/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: false, // Change this to false if you don't want Splash screen.
};


//SEO Related settings
const seo = {
    title: "Dhawal Shah — AI/ML Engineer",
    description:
          "AI/ML Engineer with 5+ years of experience building production ML systems and agentic LLM infrastructure. M.S. in Computer Science (AI specialization), Iowa State University. Open to AI Engineer / ML Engineer / MLOps / LLMOps roles.",
    og: {
          title: "Dhawal Shah Portfolio",
          type: "website",
          url: "https://dhawalshah48.github.io/",
    },
};

//Home Page
const greeting = {
    title: "Dhawal Shah",
    logo_name: "DhawalShah",
    nickname: "",
    subTitle:
          "AI/ML Engineer with 5+ years of experience building production ML systems and agentic LLM infrastructure. M.S. in Computer Science (AI specialization), Iowa State University. Targeting AI Engineer / Machine Learning Engineer / MLOps / LLMOps roles.",
    resumeLink:
                  "https://github.com/dhawalshah48/dhawalshah48/blob/main/Dhawal_Shah_ML_Resume_generic.pdf",
    portfolio_repository: "https://github.com/dhawalshah48/dhawalshah48.github.io",
    githubProfile: "https://github.com/dhawalshah48",
};

const socialMediaLinks = [
    /* Your Social Media Link */
  {
        name: "Github",
        link: "https://github.com/dhawalshah48",
        fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
        backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhawalshah04/",
        fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
        backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
        name: "Gmail",
        link: "mailto:dhawalshah48@gmail.com",
        fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
        backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  ];

const skills = {
    data: [
      {
              title: "AI & Machine Learning",
              fileName: "DataScienceImg",
              skills: [
                        "⚡ Building and deploying production ML systems for document classification, entity extraction, and NLP",
                        "⚡ Fine-tuning and evaluating LLMs (RLHF: PPO, DPO, GRPO) and vision transformers",
                        "⚡ Research in LLM compression — KV cache compression, structured pruning, ablation design and statistical significance testing",
                      ],
              softwareSkills: [
                {
                            skillName: "Python",
                            fontAwesomeClassname: "ion-logo-python",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#3776AB",
                            },
                },
                {
                            skillName: "PyTorch",
                            fontAwesomeClassname: "logos-pytorch",
                            style: {
                                          backgroundColor: "transparent",
                            },
                },
                {
                            skillName: "Hugging Face",
                            fontAwesomeClassname: "simple-icons:huggingface",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#FFD21E",
                            },
                },
                {
                            skillName: "Pandas",
                            fontAwesomeClassname: "simple-icons:pandas",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#150458",
                            },
                },
                {
                            skillName: "NumPy",
                            fontAwesomeClassname: "simple-icons:numpy",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#013243",
                            },
                },
                      ],
      },
      {
              title: "Agentic AI & Backend",
              fileName: "FullStackImg",
              skills: [
                        "⚡ Designing typed multi-agent orchestration with LangGraph — deterministic transitions, tool calling, human-in-the-loop checkpoints",
                        "⚡ Building provider-agnostic LLM routing layers across OpenAI, Anthropic, Ollama, and open models",
                        "⚡ Building backend services and APIs with FastAPI, PostgreSQL, and async Python",
                      ],
              softwareSkills: [
                {
                            skillName: "FastAPI",
                            fontAwesomeClassname: "simple-icons:fastapi",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#009688",
                            },
                },
                {
                            skillName: "PostgreSQL",
                            fontAwesomeClassname: "simple-icons:postgresql",
                            style: {
                                          color: "#336791",
                            },
                },
                {
                            skillName: "Redis",
                            fontAwesomeClassname: "simple-icons:redis",
                            style: {
                                          color: "#DC382D",
                            },
                },
                {
                            skillName: "LangChain",
                            fontAwesomeClassname: "simple-icons:langchain",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#1C3C3C",
                            },
                },
                {
                            skillName: "OpenAI",
                            fontAwesomeClassname: "simple-icons:openai",
                            style: {
                                          backgroundColor: "transparent",
                                          color: "#412991",
                            },
                },
                      ],
      },
      {
              title: "Cloud & DevOps",
              fileName: "CloudInfraImg",
              skills: [
                        "⚡ Deploying and operating services on AWS (EKS, EC2, SageMaker, S3)",
                        "⚡ Containerizing and orchestrating workloads with Docker and Kubernetes",
                        "⚡ Building CI/CD pipelines (GitHub Actions) with automated test suites as PR merge gates",
                      ],
              softwareSkills: [
                {
                            skillName: "AWS",
                            fontAwesomeClassname: "simple-icons:amazonaws",
                            style: {
                                          color: "#FF9900",
                            },
                },
                {
                            skillName: "Docker",
                            fontAwesomeClassname: "simple-icons:docker",
                            style: {
                                          color: "#1488C6",
                            },
                },
                {
                            skillName: "Kubernetes",
                            fontAwesomeClassname: "simple-icons:kubernetes",
                            style: {
                                          color: "#326CE5",
                            },
                },
                {
                            skillName: "GitHub Actions",
                            fontAwesomeClassname: "simple-icons:githubactions",
                            style: {
                                          color: "#2088FF",
                            },
                },
                {
                            skillName: "Terraform",
                            fontAwesomeClassname: "simple-icons:terraform",
                            style: {
                                          color: "#7B42BC",
                            },
                },
                      ],
      },
      {
              title: "MLOps & Research Engineering",
              fileName: "DesignImg",
              skills: [
                        "⚡ Running ablation studies, statistical significance testing, and reproducibility audits for ML research",
                        "⚡ Instrumenting ML/agent systems with OpenTelemetry for traces, metrics, and logs",
                        "⚡ Experiment tracking and model versioning with ClearML; human-in-the-loop annotation with Label Studio",
                      ],
              softwareSkills: [
                {
                            skillName: "Git",
                            fontAwesomeClassname: "simple-icons:git",
                            style: {
                                          color: "#F05032",
                            },
                },
                {
                            skillName: "OpenTelemetry",
                            fontAwesomeClassname: "simple-icons:opentelemetry",
                            style: {
                                          color: "#425CC7",
                            },
                },
                {
                            skillName: "Jira",
                            fontAwesomeClassname: "simple-icons:jira",
                            style: {
                                          color: "#0052CC",
                            },
                },
                {
                            skillName: "Pytest",
                            fontAwesomeClassname: "simple-icons:pytest",
                            style: {
                                          backgroundColor: "white",
                                          color: "#0A9EDC",
                            },
                },
                      ],
      },
        ],
};

// Education Page
const competitiveSites = {
    competitiveSites: [],
};

const degrees = {
    degrees: [
      {
              title: "Iowa State University",
              subtitle: "M.S. in Computer Science — Artificial Intelligence",
              logo_path: "isu_logo.svg",
              alt_name: "Iowa State University",
              duration: "Aug 2024 - Aug 2026",
              descriptions: [
                        '⚡ GPA: 3.9/4.0. Thesis: "Low-Rank KV Cache Compression in LLMs: A Second-Order Output Metric and Its Limits," advised by Dr. Ali Jannesari.',
                        "⚡ Graduate research on automated neural network pruning and LLM compression — multi-agent pruning frameworks and attention-aware KV cache compression.",
                        "⚡ Thesis compute ran on NCSA Delta under an NSF ACCESS allocation.",
                      ],
              website_link: "https://www.iastate.edu/",
      },
      {
              title: "Institute of Engineering and Technology, DAVV, Indore",
              subtitle: "B.E. in Computer Engineering",
              logo_path: "davv_logo.svg",
              alt_name: "DAVV, Indore",
              duration: "Aug 2016 - Apr 2020",
              descriptions: [
                        "⚡ CGPA: 8.84/10.",
                        "⚡ Capstone project: owned system design and backend (Node.js, Express, MongoDB) for a MEAN-stack vendor/order-management e-commerce platform with Google Maps API pickup integration.",
                      ],
              website_link: "",
      },
        ],
};

const certifications = {
    certifications: [],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Work History",
    description:
          "5+ years building production ML systems and, most recently, agentic LLM infrastructure — across enterprise (Avalara), early-stage product work (Hermamind, Digitenium), and applied research (Iowa State University).",
    header_image_path: "experience.svg",
        sections: [
            {
                                title: "Work",
                                work: true,
                                experiences: [
                                    {
                                                                title: "Founding AI Engineer",
                                                                company: "Hermamind Inc.",
                                                                company_url: "https://github.com/dhawalshah48",
                                                                logo_path: "hermamind_logo.svg",
                                                                duration: "Jan 2026 - Aug 2026",
                                                                location: "Remote",
                                                                description:
                                                                                                "Founding engineer on a friend's AI-assisted B2B RFQ-to-quote platform, working directly with the CEO/co-founder. Built a LangGraph agent orchestration layer with typed Pydantic state, deterministic transitions, tool invocation, and human-approval checkpoints -- reducing invalid execution outcomes by 100% and improving end-to-end task reliability from 25% to 100% across an adversarial test suite. Designed a typed tool execution framework for SQL-backed customer/product/pricing capabilities, eliminating failed tool executions and hallucinated recommendations across 10 tool-call scenarios. Built a provider-agnostic model routing layer across OpenAI, Anthropic, Ollama, and Qwen, cutting inference cost ~93% while holding task success at 100% across routing comparisons. Architected multi-tenant persistence with PostgreSQL, FastAPI, and Alembic, and shipped a GitHub Actions CI/CD pipeline with a 200+ test suite. Has a standing offer to return remotely after this engagement.",
                                                                color: "#0879bf",
                                    },
                                    {
                                                                title: "Senior Software Engineer, Machine Learning",
                                                                company: "Avalara Technologies",
                                                                company_url: "https://www.avalara.com/",
                                                                logo_path: "avalara_logo.svg",
                                                                duration: "Jul 2023 - Aug 2024",
                                                                location: "India",
                                                                description:
                                                                                                "Built and deployed production document-AI models (Random Forest, Donut, LayoutXLM, LiLT, spaCy) for classification and entity extraction across multiple document types and tax jurisdictions. Replaced a third-party OCR/classification API with in-house models, cutting inference cost ~90% (benchmarked vs. AWS Comprehend on a 500-document evaluation set) while improving classification accuracy. Owned the model deployment pipeline on AWS SageMaker/EKS, including monitoring and rollback. Led onboarding for 8 new engineers -- 50+ hours of mentoring and code review -- and served as the team's point of contact for ML infrastructure decisions.",
                                                                color: "#1F70C1",
                                    },
                                    {
                                                                title: "Software Engineer, Machine Learning",
                                                                company: "Avalara Technologies",
                                                                company_url: "https://www.avalara.com/",
                                                                logo_path: "avalara_logo.svg",
                                                                duration: "Jul 2020 - Jun 2023",
                                                                location: "India",
                                                                description:
                                                                                                "Automated 30% of 100,000+ manual document-processing decisions across 4 teams, cutting per-document processing time from 10 minutes to 1 minute and freeing up analyst hours for higher-value review. Built a model abstraction layer that auto-served the best candidate model per task based on confidence and historical accuracy, enabling safe rollout of new models without client-facing downtime. Operated services on AWS (SageMaker, EKS, EC2); used ClearML for experiment tracking and Label Studio for human-in-the-loop annotation and active-learning label collection.",
                                                                color: "#1F70C1",
                                    },
                                                    ],
            },
            {
                                title: "Internships",
                                experiences: [
                                    {
                                                                title: "AI Engineer Intern",
                                                                company: "Digitenium",
                                                                company_url: "https://github.com/dhawalshah48",
                                                                logo_path: "digitenium_logo.svg",
                                                                duration: "Jun 2025 - Aug 2025",
                                                                location: "Remote",
                                                                description:
                                                                                                "Built a Python simulation framework (pandas) modeling asset allocation and redemption flows for a decentralized liquidity protocol, running scenario sweeps across market conditions to validate protocol stability; projected ~20% improvement in asset velocity based on simulated redemption patterns.",
                                                                color: "#9b1578",
                                    },
                                                    ],
            },
                    ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description:
          "A mix of applied research (LLM compression, neural network pruning) and production agentic/ML systems. See pinned repos below for code, figures, and reproducibility logs.",
    avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
    title: "Research",
    description: "Graduate research in LLM efficiency and compression.",
    avatar_image_path: "projects_image.svg",
};

const publications = {
    data: [
      {
              id: "kv-cache-fisher-thesis",
              name: 'M.S. Thesis — Low-Rank KV Cache Compression in LLMs: A Second-Order Output Metric and Its Limits',
              createdAt: "2026-08-01T00:00:00Z",
              description:
                        "Iowa State University. Code, figures, and raw result logs are public.",
              url: "https://github.com/dhawalshah48/kv-cache-fisher-thesis",
      },
      {
              id: "varrate-kv-compression",
              name: "VarRate: Variable-Rate KV Cache Compression",
              createdAt: "2026-07-01T00:00:00Z",
              description:
                        "Co-author, AAAI'27 submission (under review). Owned the ablation/validation suite and reproducibility work.",
              url: "https://github.com/dhawalshah48/kv-cache-fisher-thesis",
      },
        ],
};

    const projects = {
            data: [
                {
                                id: "kv-cache-fisher-thesis",
                                name: "kv-cache-fisher-thesis",
                                description:
                                                    "M.S. thesis code: low-rank KV cache compression in LLMs -- baselines, ablations, and reproducibility logs.",
                                createdAt: "2026-08-01T00:00:00Z",
                                url: "https://github.com/dhawalshah48/kv-cache-fisher-thesis",
                                languages: [{ name: "Python", skillName: "python", iconifyClass: "logos:python" }],
                },
                {
                                id: "h1b-startup-finder",
                                name: "h1b-startup-finder",
                                description:
                                                    "Automated daily scraper and scoring pipeline for YC-backed startups hiring ML/AI roles with H1B sponsorship, built with Apify and GitHub Actions.",
                                createdAt: "2026-08-15T00:00:00Z",
                                url: "https://github.com/dhawalshah48/h1b-startup-finder",
                                languages: [{ name: "Python", skillName: "python", iconifyClass: "logos:python" }],
                },
                {
                                id: "nlp-projects",
                                name: "NLP-Projects",
                                description:
                                                    "Coursework projects (ISU COMS-5790): text classification, word-cloud and TF-IDF analysis, and NLP data processing pipelines.",
                                createdAt: "2024-12-01T00:00:00Z",
                                url: "https://github.com/dhawalshah48/NLP-Projects",
                                languages: [{ name: "Jupyter Notebook", skillName: "jupyter", iconifyClass: "logos:jupyter" }],
                },
                    ],
    };

// Contact Page
const contactPageData = {
    contactSection: {
          title: "Contact Me",
          profile_image_path: "projects_image.svg",
          description:
                  "I'm open to AI Engineer / Machine Learning Engineer / MLOps / LLMOps roles — reach out and I'll typically reply within a day or two.",
    },
    blogSection: {
          title: "Writing",
          subtitle:
                  "I don't currently maintain a blog. For updates on my research and projects, check my GitHub or connect on LinkedIn.",
          link: "https://github.com/dhawalshah48",
          avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
          title: "Location",
          subtitle: "Ames, Iowa, USA",
          locality: "Ames",
          country: "USA",
          region: "Iowa",
          postalCode: "",
          streetAddress: "",
          avatar_image_path: "address_image.svg",
          location_map_link: "https://www.google.com/maps/place/Ames,+Iowa",
    },
    phoneSection: {
          title: "",
          subtitle: "",
    },
};

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
        projects,
    publicationsHeader,
    publications,
    contactPageData,
};
