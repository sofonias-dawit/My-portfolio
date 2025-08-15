import { Github, Link as LinkIcon, Code2, Database, Globe, Server } from "lucide-react";
import proj1 from "@/assets/project-1.jpg";
import proj2 from "@/assets/project-2.jpg";
import proj3 from "@/assets/project-3.jpg";
import proj4 from "@/assets/project-4.jpg";
import proj5 from "@/assets/project-5.jpg";
import proj6 from "@/assets/project-6.jpg";

const projects = [
  { title: "Project Alpha", img: proj1, desc: "Enterprise-grade web platform focused on performance and security.", stack: [Code2, Globe], gh: "#", live: "#" },
  { title: "Data Insights", img: proj2, desc: "Analytics dashboard with real-time data pipelines.", stack: [Database, Server], gh: "#", live: "#" },
  { title: "Secure Portal", img: proj3, desc: "Auth-first app with robust RBAC and audit trails.", stack: [Server, Code2], gh: "#", live: "#" },
  { title: "Commerce Core", img: proj4, desc: "Headless commerce backend with scalable APIs.", stack: [Globe, Database], gh: "#", live: "#" },
  { title: "Ops Toolkit", img: proj5, desc: "DevOps utilities for CI/CD and container orchestration.", stack: [Server, Code2], gh: "#", live: "#" },
  { title: "ML Service", img: proj6, desc: "Service wrapping ML models with clean APIs.", stack: [Database, Globe], gh: "#", live: "#" },
];

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold">Projects</h2>
          <p className="mt-2 text-muted-foreground">Selected work across web, data, and infrastructure</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]">
              <img src={p.img} alt={`${p.title} thumbnail`} className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {p.stack.map((Icon, i) => (
                      <Icon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.gh} aria-label={`${p.title} GitHub`} className="story-link flex items-center gap-1 text-sm"><Github className="h-4 w-4" /> GitHub</a>
                  <a href={p.live} aria-label={`${p.title} Live demo`} className="story-link flex items-center gap-1 text-sm"><LinkIcon className="h-4 w-4" /> Live</a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 translate-y-6 bg-gradient-to-t from-background/90 via-background/60 to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
