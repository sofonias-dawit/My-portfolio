import { Button } from "@/components/ui/button";

export const Resume = () => {
  return (
    <section id="resume" className="scroll-mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold">Resume</h2>
          <p className="mt-3 text-muted-foreground">
            Results-driven software engineer with a strong foundation in systems design, secure architectures, and scalable delivery. You can review my resume(CV) below.
          </p>
          <div className="mt-6">
  <a
    href="https://drive.google.com/file/d/10n75AyDLOG7E-Wsv63VTbORvAGyWoXK3/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" variant="default">
      View My Resume
    </Button>
  </a>
</div>
          
        </div>
      </div>
    </section>
  );
};
