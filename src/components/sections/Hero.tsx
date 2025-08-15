import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        className="relative flex min-h-[86vh] items-center"
        onMouseMove={onMouseMove}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/40 to-background" aria-hidden></div>

        <div className="container relative z-10 mx-auto px-6 py-24">
          <div className="mx-auto max-w-3xl text-center animate-enter">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Sofonias Dawit
            </h1>
            <p className="mt-3 text-lg text-muted-foreground sm:text-xl"><b>
              Turning Complex Problems into Elegant Digital Solutions</b>
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              {/* <a href="#skills"><Button size="lg" variant="hero" className="hover-scale">View My Work</Button></a> */}
              <a href="#contact"><Button size="lg" variant="outline" className="hover-scale">Contact Me</Button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
