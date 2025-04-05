const data = {
    name: "Rumit Mehta",
    dob: "25/12/1997",
    contact: {
        phone: "+447740090474",
        email: "rumitmehta@icloud.com",
        linkedin: "https://www.linkedin.com/in/mehta-rumit/",
        location: "Leicester<br/>United Kingdom"
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
            tags: ["Python","Django","Javascript","ResfulAPIs","MySQL", "Azure"]
        },
        {
            title: "Platform Engineer | Site Reliability Engineer",
            company: "Barclays",
            icon:"fa-university",
            location: "Northampton",
            date: "July 2021 – April 2024",
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
            location:"Android Investment Application",
            description: `
                An Android application built to assist users in optimizing their financial health. 
                Developed in Android-Studio via <b>Java and built using Gradle</b>, the app follows modern architectural patterns to ensure maintainability and scalability.
                It <b>utilizes Room, ViewModel with LiveData and lifecycle-aware components.</b> The debt prioritization logic is driven by a combination of interest rate 
                optimization with user-defined goals. Investment suggestions are generated using <b>algorithms that accounts for risk appetite, 
                emergency fund status, and debt-to-income ratio.</b> 
                `,
            tags: ["Java", "PostgreSQL", "Android Studio", "XML", "Algorithms"]
        },
        {
            name: "Multi Bank Analyser",
            location:"Personal Finance Automation Tool",
            description: `
                A <b>Python-based</b> personal finance tool that <b>integrates with APIs from multiple banks</b> to fetch transaction data, automatically categorize spending, 
                and export insights into a structured Excel (.xls) file. Built <b>custom logic to identify trends in income, expenses, and recurring payments.</b> 
                The exported data feeds into dynamic spreadsheets for visualizing trends over time, enabling smarter financial decisions. Used technologies such as 
                <b>requests, pandas, and xlwt</b> for data processing and output generation. 
                `,
            tags: ["Python", "RESTful API", "CSV", "Xlxs", "Pandas", "Numpy", "Excel"]
        },
        {
            name: "Rumit-Mehta.github.io",
            location:"My Personal Website",
            description: `
                Creating this website exposed me to <b>both technical implementation and self-expression.</b> Implementing <b>front-end 
                technologies like HTML, CSS, and JavaScript</b>, and exploring modern frameworks made the development more efficient. Gained 
                experience in <b>responsive design, SEO basics, and optimizing performance for different devices</b>. Beyond technicals, it pushed me to reflect 
                on how to present my personal brand; what content to showcase and maintaing a balance between functionality 
                and aesthetics. The process was extremely rewarding helping me grow as <b>a developer and communicator</b>.
                `,
            tags: ["JavaScript", "HTML", "CSS", "SEO"]
        },
        {
            name: "Banking UI Overhaul",
            location:"Barclays Merchant Services",
            description: `
                <b>Implemented a UI overhaul</b> for several key pages of the merchant services division <b>during my internship at the bank</b>. This project exposed me to a range of modern 
                technologies, including <b>component-based frameworks, responsive design principles, and internal design systems</b>. Collaborating closely with both developers 
                and UX designers, Gained hands-on experience in <b>translating business requirements into intuitive user interfaces</b>, enhancing both customer experience and operational efficiency. 
                his project also gave me valuable exposure to the broader development process, including collaboration with Business Analysts and Product Owners.”
                `,
            tags: ["Python", "React", "JavaScript", "HTML", "CSS", "Jest"]
        }     
    ],
    education: [
        {
            qualification: "GCSE's",
            institution: "Lutterworth College",
            duration: "Sept 2012 – July 2014",
            notes: `
                    <ul class="stats-tabs">
                        <li>
                            <a href="#">
                            3 A*
                            <em>Triple Science</em>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            2 A*
                            <em>Engineering</em>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            A*
                            <em>Religious Education</em>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            A*
                            <em>Maths</em>
                            </a>
                        </li>
                    </ul>
                    <ul class="stats-tabs">
                        <li>
                            <a href="#">
                            A
                            <em>English Literature</em>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            A
                            <em>Gujarati</em>
                            </a>
                        </li>
                    </ul>
                    <ul class="stats-tabs">
                        <li>
                            <a href="#">
                            B
                            <em>English Language</em>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            B
                            <em>Geography</em>
                            </a>
                        </li>
                    </ul>
                    `   
        },
        {
            qualification: "A Levels",
            institution: "Wyggeston & Queen Elizabeth College",
            duration: "Sept 2014 – July 2016",
            notes: `
                <ul class="stats-tabs">
                    <li>
                        <a href="#">
                        A*
                        <em>Maths</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        A
                        <em>Further Maths</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        A
                        <em>Physics</em>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        A
                        <em>Chemistry</em>
                        </a>
                    </li>
                </ul>
                `
            
        },
        {
            qualification: "Bachelors in Chemical Engineering with Computer Science",
            institution: "University of Birmingham",
            duration: "Sept 2016 – July 2020",
            notes: `
                Modules: ML, Data Analysis, Petrochemical Engineering, Achieved 2:1
                `
            
        },
        {
            qualification: "Masters in Advanced Computer Science",
            institution: "University of Birmingham",
            duration: "Sept 2020 – Sept 2021",
            notes: `
                Modules: Machine Learning, Data Structures, Robotics,
                Dissertation on Android Development (Java)
                Achieved Distinction
                `

        },


    ],
    interests: {
        activities: ["Karate (Black Belt)", "MMA", "Muay Thai", "Scuba Diving (PADI Certified)"],
        hobbies: ["Scuba Diving", "Badminton", "Chess", "Hackathons", "Puzzles"],
        mobility: "Full UK driving license, willing to relocate or commute"
    }
};

export default data;