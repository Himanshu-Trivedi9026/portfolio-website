import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const projects = [
  { name: "LYRA — Local-first AI Assistant", category: "AI SYSTEMS", description: "A hybrid personal assistant combining conversational interfaces, persistent memory, plugin-based automation, and flexible model routing.", stack: ["Python", "Flask", "LLMs", "Ollama", "RAG"] },
  { name: "Fundora — Crowdfunding Platform", category: "FULL-STACK", description: "A crowdfunding experience with authentication, project discovery, payment processing, and an integrated AI chat assistant.", stack: ["Next.js", "Tailwind", "Supabase", "Razorpay"] },
  { name: "Behavioral Biometric Authentication", category: "APPLIED ML", description: "A browser-based behavioral data collection system capturing keyboard and mouse interaction signals for authentication research.", stack: ["React", "Vite", "JavaScript", "Data Processing"] },
  { name: "AI-driven Health Assistant", category: "GENERATIVE AI", description: "An AI health information assistant built around a conversational interface and a Python API backend.", stack: ["Python", "Flask", "AI", "REST API"] },
  { name: "Unemployment Forecasting Model", category: "MACHINE LEARNING", description: "A forecasting project exploring employment trends through data preparation, analysis, and predictive modelling.", stack: ["Python", "Pandas", "Machine Learning"] },
  { name: "Plant Disease Detection", category: "COMPUTER VISION", description: "An image-based plant disease classification project applying deep learning techniques to agricultural imagery.", stack: ["Python", "Deep Learning", "Computer Vision"] },
];

const skills = [
  ["AI & Generative AI", "Machine Learning · Deep Learning · LLMs · RAG"],
  ["Languages", "Python · Java · JavaScript · TypeScript · SQL"],
  ["Full-Stack", "React · Next.js · Node.js · REST APIs"],
  ["Cloud & Tools", "Cloud platforms · Git · GitHub · Linux"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <nav className="container nav" aria-label="Main navigation">
          <a className="brand" href="#home">HT<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
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
              <a className="button" href="mailto:himanshutrivedi@example.com"><Mail size={14}/> Get in touch</a>
            </div>
          </div>
          <aside className="hero-panel">
            <div className="panel-top"><span>PROFILE / 2026</span><span className="status">Building</span></div>
            <div className="panel-monogram">HT</div>
            <div className="panel-caption">Computer Science · AI Specialization<br/>VIT Bhopal University</div>
            <div className="panel-tags"><span className="tag">AI Engineering</span><span className="tag">Product Development</span><span className="tag">Full-Stack</span></div>
          </aside>
        </section>

        <section className="section" id="about">
          <div className="section-heading"><div><div className="eyebrow">A little about me</div><h2>Curiosity, engineered.</h2></div><p>Focused on building reliable software and intelligent systems that solve real problems.</p></div>
          <div className="about-grid">
            <p className="body-copy">I’m pursuing a B.Tech in Computer Science with an AI specialization at VIT Bhopal. My work spans machine learning, Generative AI, backend systems, and full-stack applications. I enjoy taking ideas from problem definition through implementation, iteration, and deployment — with an emphasis on clean architecture and practical value.</p>
            <div className="info-grid">
              <div className="info-card"><strong>Current focus</strong><span>LLM applications, RAG, AI agents, and applied ML</span></div>
              <div className="info-card"><strong>Engineering</strong><span>Web platforms, APIs, integrations, and automation</span></div>
              <div className="info-card"><strong>Education</strong><span>B.Tech CS — AI specialization</span></div>
              <div className="info-card"><strong>Based at</strong><span>VIT Bhopal University, India</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><div><div className="eyebrow">Technical toolkit</div><h2>Skills & technologies.</h2></div><p>A practical mix of AI foundations, application engineering, and development tooling.</p></div>
          <div className="skill-grid">{skills.map(([title,items])=><article className="skill-card" key={title}><strong>{title}</strong><span>{items}</span></article>)}</div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><div><div className="eyebrow">Selected work</div><h2>Projects with purpose.</h2></div><p>A selection of systems and experiments across AI, machine learning, and full-stack development.</p></div>
          <div className="project-grid">{projects.map((project,index)=><article className="project-card" key={project.name}><div className="project-meta"><span>{project.category}</span><span>0{index+1}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading"><div><div className="eyebrow">Experience & learning</div><h2>Learning by building.</h2></div><p>Early experience across applied AI and cloud technologies.</p></div>
          <div className="timeline">
            <article className="timeline-card"><time>May – June 2025</time><h3>AI Internship · SmartBridge</h3><p>Applied AI learning and project experience through a structured internship programme.</p></article>
            <article className="timeline-card"><time>June – July 2025</time><h3>IBM Cloud Fundamentals</h3><p>Cloud learning experience focused on foundational concepts and IBM Cloud technologies.</p></article>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel"><div><div className="eyebrow">Have a project in mind?</div><h2>Let’s build something meaningful.</h2><p>Open to conversations around AI engineering, full-stack development, and opportunities to collaborate.</p></div><a className="button button-primary" href="mailto:himanshutrivedi@example.com">Start a conversation <ArrowUpRight size={15}/></a></div>
        </section>

        <footer className="footer"><span>© {new Date().getFullYear()} Himanshu Trivedi. Built with intent.</span><span><a href="https://github.com/Himanshu-Trivedi9026" aria-label="GitHub"><Github size={15}/></a>　<a href="https://www.linkedin.com/in/himanshu-trivedi-878aa6373" aria-label="LinkedIn"><Linkedin size={15}/></a></span></footer>
      </div>
    </main>
  );
}