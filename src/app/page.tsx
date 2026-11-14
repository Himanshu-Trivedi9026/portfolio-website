import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, ExternalLink, Mail, Download } from "lucide-react";

const basePath = "/portfolio-website";
const asset = (path: string) => `${basePath}/assets/${path}`;

const projects = [
  { name: "LYRA — Local-first AI Assistant", category: "AI SYSTEMS", description: "A hybrid personal assistant with voice and text interaction, persistent memory, plugin-based automation, model switching, and resilient fallback behaviour.", stack: ["Python", "Flask", "LLMs", "Ollama", "Hugging Face"], repo: "lyra-ai-assistant" },
  { name: "Fundora — Crowdfunding Platform", category: "FULL-STACK", description: "A crowdfunding platform with authentication, project discovery, Supabase data, Razorpay payments, and an integrated AI chat experience.", stack: ["Next.js", "Tailwind", "Supabase", "Razorpay"], repo: "Fundora" },
  { name: "Behavioral Biometric Authentication", category: "APPLIED ML", description: "A research prototype combining browser behaviour capture, frozen preprocessing, a Siamese CNN-GRU encoder, and continuous verification. Model efficacy is not yet established on real enrolment data.", stack: ["React", "Vite", "JavaScript", "Data Processing"], repo: "behavioral-biometric-authentication" },
  { name: "AI-driven Health Assistant", category: "GENERATIVE AI", description: "A conversational health information assistant built around a Python API backend.", stack: ["Python", "Flask", "AI", "REST API"], repo: "AI-driven-health-assistant" },
  { name: "Unemployment Forecasting Model", category: "MACHINE LEARNING", description: "A forecasting project exploring employment trends through data preparation, analysis, and predictive modelling.", stack: ["Python", "Pandas", "Machine Learning"], repo: "Unemployment_Forecasting_Model" },
  { name: "Plant Disease Detection", category: "COMPUTER VISION", description: "An image-based plant disease classification project applying deep learning techniques to agricultural imagery.", stack: ["Python", "Deep Learning", "Computer Vision"], repo: "AI-Plant-Disease-Detection" },
  { name: "Last-Mile Delivery Tracker", category: "FULL-STACK / LOGISTICS", description: "A role-based logistics platform for order lifecycle management, configurable delivery pricing, zone detection, agent assignment, live tracking, rescheduling, and customer notifications.", stack: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Resend", "Twilio"], repo: "last-mile-delivery-tracker" },
  { name: "SAMARTH AI — Business Intelligence", category: "AI / DATA INTELLIGENCE", description: "An AI-powered business intelligence system for duplicate-business detection, Unified Business Identity generation, explainable similarity scoring, CSV ingestion, activity intelligence, and human review workflows.", stack: ["React", "FastAPI", "Python", "Pandas", "Entity Matching", "Recharts"], repo: "samarth-ai-prototype" },
  { name: "Chemical Equipment Parameter Visualizer", category: "ENGINEERING / DATA VISUALIZATION", description: "A hybrid web and desktop application that analyzes chemical-equipment CSV data, computes operational statistics, visualizes flowrate, pressure, and temperature, and exports analytical PDF reports.", stack: ["Django REST Framework", "React", "Python", "PyQt5", "Chart.js", "SQLite"], repo: "Chemical-Equipment-Visualizer" },
];

const skills = [
  ["AI & Generative AI", "Machine Learning · Deep Learning · LLMs · RAG · AI Agents · Computer Vision", "icons/aiml.png"],
  ["Languages", "Python · Java · JavaScript · TypeScript · SQL", "icons/python.png"],
  ["Full-Stack & Backend", "React · Next.js · Node.js · FastAPI · Flask · Django · REST APIs", "icons/react.png"],
  ["Data & Developer Tools", "PostgreSQL · Supabase · Pandas · Git · GitHub · Linux · Cloud", "icons/cloud.png"],
];

const certificates = [
  ["Artificial Intelligence Internship", "SmartBridge · July 2025", "certificates/ai-internship.png"],
  ["Introduction to Cloud", "Adroit Technologies · June 2025", "certificates/ibmcloud.png"],
  ["Project Completion", "SmartBridge · July 2025", "certificates/project-completion.png"],
  ["Certificate Course in C Language & Python", "Data Expert · August 2023", "certificates/PythonandC-Certificate.jpg"],
  ["Java Programming", "VITyarthi · April 2025", "certificates/Javacertificate.png"],
  ["Fundamentals of AI and ML", "VITyarthi · May 2024", "certificates/AIML.png"],
  ["Getting Started with AI", "IBM · July 2025", "certificates/gettingstartedwithai.png"],
  ["Journey to Cloud", "IBM · July 2025", "certificates/journeytocloud.png"],
  ["Introduction to Machine Learning", "NPTEL / SWAYAM · January–April 2025", "certificates/nptel.png"],
  ["Web Development Mentorship Program", "Deevelo X / Launched Global · March–April 2025", "certificates/webdev.png"],
  ["MATLAB Onramp", "MathWorks · August 2023", "certificates/matlab.png"],
];

const badgesUrl = "https://www.cloudskillsboost.google/public_profiles/38a8d82c-cdd8-4d86-9c12-cd56d0bd271f";

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#home">HT<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a>
          </div>
          <a className="button" href="https://github.com/Himanshu-Trivedi9026" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a>
        </nav>
      </header>

      <div className="container">
        <section className="hero" id="home">
          <div>
            <div className="eyebrow">AI/ML · Generative AI · Full-Stack</div>
            <h1>Building useful things with <span className="gradient-text">intelligence.</span></h1>
            <p className="lead">I’m Himanshu Trivedi — a Computer Science student and developer interested in turning AI research and modern software engineering into practical products.</p>
            <div className="actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={15}/></a>
              <a className="button" href={asset("resume/ResumeHimanshu.pdf")} target="_blank" rel="noreferrer"><Download size={14}/> View resume</a>
            </div>
          </div>
          <aside className="hero-panel">
            <div className="panel-top"><span>PROFILE / 2026</span><span className="status">Building</span></div>
            <Image className="profile-photo" src={asset("images/profile.jpg")} alt="Himanshu Trivedi" width={142} height={142} unoptimized />
            <div className="panel-caption">Computer Science · AI Specialization<br/>VIT Bhopal University · Class of 2027</div>
            <div className="panel-tags"><span className="tag">AI Engineering</span><span className="tag">Product Development</span><span className="tag">Full-Stack</span></div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading"><div><div className="eyebrow">A little about me</div><h2>Curiosity, engineered.</h2></div><p>Focused on building reliable software and intelligent systems that solve real problems.</p></div>
          <div className="about-grid">
            <div><p className="body-copy">I’m pursuing a B.Tech in Computer Science with an AI specialization at VIT Bhopal. My work spans machine learning, Generative AI, backend systems, and full-stack applications. I enjoy taking ideas from problem definition through implementation, iteration, and deployment — with an emphasis on clean architecture and practical value.</p><p className="body-copy">I’m particularly interested in LLM applications, retrieval-augmented generation, AI agents, and building end-to-end products that combine intelligent backends with thoughtful user experiences.</p></div>
            <div className="about-visual"><Image src={asset("images/about.png")} alt="Illustration from my original portfolio" width={620} height={360} unoptimized /></div>
            <div className="info-grid">
              <div className="info-card"><strong>Current focus</strong><span>LLM applications, RAG, AI agents, and applied ML</span></div>
              <div className="info-card"><strong>Engineering</strong><span>Web platforms, APIs, integrations, and automation</span></div>
              <div className="info-card"><strong>Education</strong><span>B.Tech CS — AI specialization</span></div>
              <div className="info-card"><strong>Expected graduation</strong><span>2027 · VIT Bhopal, India</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><div><div className="eyebrow">Technical toolkit</div><h2>Skills & technologies.</h2></div><p>A practical mix of AI foundations, application engineering, and development tooling.</p></div>
          <div className="skill-grid">{skills.map(([title,items,icon])=><article className="skill-card" key={title}><Image src={asset(icon)} alt="" width={30} height={30} unoptimized /><strong>{title}</strong><span>{items}</span></article>)}</div>
          <div className="tool-icons" aria-label="Technologies"><Image src={asset("icons/html.png")} alt="HTML" width={28} height={28} unoptimized /><Image src={asset("icons/css.png")} alt="CSS" width={28} height={28} unoptimized /><Image src={asset("icons/js.png")} alt="JavaScript" width={28} height={28} unoptimized /><Image src={asset("icons/react.png")} alt="React" width={28} height={28} unoptimized /><Image src={asset("icons/python.png")} alt="Python" width={28} height={28} unoptimized /><Image src={asset("icons/java.png")} alt="Java" width={28} height={28} unoptimized /><Image src={asset("icons/git.png")} alt="Git" width={28} height={28} unoptimized /><Image src={asset("icons/github.png")} alt="GitHub" width={28} height={28} unoptimized /><Image src={asset("icons/dsa.webp")} alt="Data structures and algorithms" width={28} height={28} unoptimized /></div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><div><div className="eyebrow">Selected work</div><h2>Projects with purpose.</h2></div><p>A selection of systems and experiments across AI, machine learning, logistics, and full-stack development. Explore source code for implementation details.</p></div>
          <div className="project-grid">{projects.map((project,index)=><article className="project-card" key={project.name}><div className="project-meta"><span>{project.category}</span><span>0{index+1}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div><a className="project-link" href={`https://github.com/Himanshu-Trivedi9026/${project.repo}`} target="_blank" rel="noreferrer">View repository <ExternalLink size={13}/></a></article>)}</div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><div><div className="eyebrow">Experience & learning</div><h2>Learning by building.</h2></div><p>Applied learning experiences across AI and cloud technologies.</p></div>
          <div className="timeline">
            <article className="timeline-card"><time>May – June 2025</time><h3>Artificial Intelligence Intern · SmartBridge</h3><p>AI internship programme in partnership with Google, with hands-on exposure to machine learning models and applied AI technologies.</p></article>
            <article className="timeline-card"><time>June – July 2025</time><h3>Cloud Computing Trainee · IBM</h3><p>IBM Cloud fundamentals training covering cloud infrastructure, virtual servers, object storage, Kubernetes concepts, security, networking, and cloud-native services.</p></article>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="section-heading"><div><div className="eyebrow">Recognition & credentials</div><h2>Milestones along the way.</h2></div><p>Hackathon participation, technical learning, and certificates that document continued growth.</p></div>
          <div className="timeline">
            <article className="timeline-card"><time>2025 · NASSCOM Tech Developer Hackathon</time><h3>Shortlisted · Final 20 teams</h3><p>Advanced to the final 20 teams in the NASSCOM Tech Developer Hackathon.</p></article>
            <article className="timeline-card"><time>2025 · Inya.ai / Gnani.ai Buildathon</time><h3>Shortlisted</h3><p>Selected for the shortlisted stage of the buildathon.</p></article>
            <article className="timeline-card"><time>2025 · AI for Bharat Hackathon</time><h3>Shortlisted</h3><p>Selected for the shortlisted stage of the AI for Bharat Hackathon.</p></article>
            <article className="timeline-card"><time>Google Cloud Skills Boost</time><h3>24 learning badges</h3><p>Completed a collection of cloud and technology learning activities. <a className="inline-link" href={badgesUrl} target="_blank" rel="noreferrer">View public badge profile <ExternalLink size={12}/></a></p></article>
          </div>
          <h3 className="subheading">Certificates</h3>
          <div className="certificate-grid">{certificates.map(([title,issuer,image])=><a className="certificate-card" href={asset(image)} target="_blank" rel="noreferrer" key={image}><Image src={asset(image)} alt={`${title} certificate preview`} width={420} height={280} loading="lazy" unoptimized /><span className="certificate-title">{title}</span><span className="certificate-issuer">{issuer}</span><span className="certificate-open">View certificate <ExternalLink size={12}/></span></a>)}</div>
          <h3 className="subheading">Internship scorecards</h3>
          <div className="scorecard-grid">
            <a className="scorecard-card" href={asset("scorecards/ai-google-scorecard.png")} target="_blank" rel="noreferrer"><Image src={asset("scorecards/ai-google-scorecard.png")} alt="Artificial Intelligence internship scorecard" width={800} height={520} loading="lazy" unoptimized /><span>Artificial Intelligence · SmartBridge / Google</span><small>Open scorecard <ExternalLink size={12}/></small></a>
            <a className="scorecard-card" href={asset("scorecards/cloud-ibm-scorecard.png")} target="_blank" rel="noreferrer"><Image src={asset("scorecards/cloud-ibm-scorecard.png")} alt="IBM Cloud internship scorecard" width={800} height={520} loading="lazy" unoptimized /><span>Cloud Fundamentals · IBM</span><small>Open scorecard <ExternalLink size={12}/></small></a>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel"><div><div className="eyebrow">Have a project in mind?</div><h2>Let’s build something meaningful.</h2><p>Open to conversations around AI engineering, full-stack development, and opportunities to collaborate.</p><p className="contact-email"><Mail size={14}/> <a href="mailto:trivedihimanshu.019@gmail.com">trivedihimanshu.019@gmail.com</a></p></div><div className="contact-actions"><a className="button button-primary" href="mailto:trivedihimanshu.019@gmail.com">Email me <ArrowUpRight size={15}/></a><a className="button" href="https://www.linkedin.com/in/himanshu-trivedi-878aa6373" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={14}/></a></div></div>
        </section>

        <footer className="footer"><span>© {new Date().getFullYear()} Himanshu Trivedi. Built with intent.</span><span><a href="https://github.com/Himanshu-Trivedi9026" aria-label="GitHub"><Github size={15}/></a>　<a href="https://www.linkedin.com/in/himanshu-trivedi-878aa6373" aria-label="LinkedIn"><Linkedin size={15}/></a></span></footer>
      </div>
    </main>
  );
}