const data = {
    name: "Rumit Mehta",
    dob: "25/12/1997",
    contact: {
        phone: "+447740090474",
        email: "rumitmehta@icloud.com",
        linkedin: "https://www.linkedin.com/in/mehta-rumit/"
    },
    title: " Full-Stack Developer | DevOps Engineer ",
    summary:
      "A Software Engineer with 4+ years of experience within financial and healthcare industries and a keen interest in all things FinTech. Have a strong background in both DevOps and Development from my time at Barclays. Currently contracting to improve my skills by constantly taking on new projects; some of which include creating a website for IMS software which is being used by the NHS. Experienced in collaborating with teams worldwide and passionate about mentoring junior devs in gratitude to those who guided me to this point.",
    technicalSkills: {
        languages: ["Python", "Java", "JavaScript", "React", "MATLAB", "HTML", "CSS", "JSON", "YAML"],
        ci_cd_tools: ["Jenkins", "Chef", "Docker", "GIT"],
        databases: ["ElasticSearch", "MongoDB", "PostgreSQL", "MySQL"],
        cloud_infrastructure: ["AWS (EC2, CloudFormation, Lambda, SQS)", "Terraform"]
    },
    work: [
        {
            title: "Fullstack Developer",
            company: "Pathhub",
            icon:"fa-medkit",
            location: "Remote",
            date: "May 2024 – Current",
            highlights: [
            "<b>Built a cutting-edge pathology IMS website</b> with Django & Python, <b>featuring AI tools</b>, annotation, and scalable slide viewers.",
            `Operated within an agile framework, <b>consistently closing tickets</b> and driving the project forward—contributing to the successful deployment that helped <b>secure a £1M contract.</b>`,
            `
            Took on <b>additional responsibilities as a Business Analyst and Product Owner</b>, including creating and triaging tickets, liaising with stakeholders, 
            and acting as the primary point of contact across the organization.
            `
            ],
            tags: ["Python","Javascript","Django","ResfulAPIs","MySQL", "Azure"]
        },
        {
            title: "Platform Engineer | Site Reliability Engineer",
            company: "Barclays",
            icon:"fa-university",
            location: "Northampton",
            date: "September 2022 – April 2024",
            highlights: [
                `
                One of my core responsibilities was optimizing infrastructure costs without compromising on performance. 
                Leveraging <b>AWS, Elasticsearch, and Terraform</b>, I aggregated internal metrics across all team-managed clusters to identify over-provisioned 
                resources. This approach enabled me to right-size infrastructure and <b>significantly reduce operational expenses</b>.
                `,
                `
                Created and managed multiple Elasticsearch clusters using Terraform, deploying logging and monitoring services for the bank. 
                A highlight was designing and <b>launching the bank’s first cross-cluster search</b> allowing internal teams to query data across a 
                growing fleet of Elasticsearch clusters. This project gave me hands-on experience with various AWS services as well as all the different 
                Elasticsearch products
                `,
                `
                Developed several <b>Python scripts integrated into Jenkins CI/CD pipeline</b>. These automated workflows focused on test 
                execution and dynamically generating pull request comments, providing clear feedback on build success or failure directly to end-users.
                `,
                `
                Automated client onboarding workflows and daily tasks using <b>Linux, Chef, and Jenkins</b>, while managing 
                Elasticsearch operations for internal teams. A key project involved <b>aggregating thousands of datasets</b> from global clusters into a 
                unified dashboard for a bank-wide coverage report.
                `,
                `
                <b>Optimized inefficient SQL queries</b> by writing Python scripts to filter and aggregate large relational databases. The results were 
                exported daily into documents and transformed via Logstash, <b>improving performance and data handling at scale</b>.
                `
            ],
            tags: ["ELK", "Terraform", "AWS CloudFormation", "Docker", "Lambda", "Python", "Jenkins", "Bash", "YAML", "Chef"]
        },
        {
            title: "Software Developer Intern",
            company: "Barclays",
            icon:"fa-university",
            location: "Northampton",
            date: "July 2020 – September 2020",
            highlights: [
            "Developed React frontend for merchant services selection app.",
            "Shadowed API development with RAML; added Jest/Enzyme tests.",
            "Gained agile methodology exposure and team structure understanding."
            ],
            tags:["HTML","React", "RESTful APIs", "Javascript", "Agile"]
        }
    ],
    projects: [
        {
            name: "Growify",
            description: "Masters dissertation project — An Android app to manage finances, investments, and automate budgeting.",
            technologies: ["Java", "PostgreSQL", "Android Studio"],
            duration: "Sept 2020 – Sept 2021"
        }
    ],
    education: [
        {
            institution: "University of Birmingham",
            degrees: [
            {
                title: "Masters in Advanced Computer Science",
                duration: "Sept 2020 – Sept 2021",
                notes: [
                "Modules: Machine Learning, Data Structures, Robotics",
                "Dissertation on Android Development (Java)",
                "Achieved Distinction"
                ]
            },
            {
                title: "Bachelors in Chemical Engineering with Computer Science",
                duration: "Sept 2016 – Sept 2020",
                notes: [
                "Modules: ML, Data Analysis, Petrochemical Engineering",
                "Achieved 2:1"
                ]
            }
            ]
        },
        {
            institution: "Wyggeston & Queen Elizabeth College",
            degrees:
            {
                title: "A Levels",
                duration: "2014 – 2016",
                notes: [
                    "Maths – A*",
                    "Further Maths – A",
                    "Chemistry – A",
                    "Physics – A"
                ]
            }
        }
    ],
    interests: {
        activities: ["Karate (Black Belt)", "MMA", "Muay Thai", "Scuba Diving (PADI Certified)"],
        hobbies: ["Scuba Diving", "Badminton", "Chess", "Hackathons", "Puzzles"],
        mobility: "Full UK driving license, willing to relocate or commute"
    }
};

export default data;