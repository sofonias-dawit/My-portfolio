import headshot from "@/assets/headshot.jpg";

export const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="font-display text-3xl font-semibold">About</h2>
            <p className="mt-2 text-muted-foreground">A trusted profile that opens doors in the corporate world.</p>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[280px,1fr]">
            <img src={headshot} alt="Professional headshot of Your Name, software engineer" className="mx-auto aspect-square w-56 rounded-xl object-cover shadow-[var(--shadow-elegant)]" loading="lazy" />
            <div className="animate-fade-in">
              <p className="text-lg leading-relaxed text-foreground/90">
                Hi, I'm <b>Sofonias Dawit</b>, an IT professional with expertise in software development, networking, and database management. I specialize in creating secure, efficient, and scalable solutions tailored to modern business needs. With a passion for technology and a commitment to continuous learning, I strive to deliver exceptional results in every project I undertake.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  "Web Development",
                  "Networking",
                  "Mobile App Dev",
                  "Database Mgmt",
                ].map((s) => (
                  <div key={s} className="rounded-md border bg-card px-3 py-2 text-center text-sm shadow-sm">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
