import { Progress } from "@/components/ui/progress";
import { Code2, Database, Network } from "lucide-react";

export const Skills = () => {
  const tech = [
    { label: "Website Developer", value: 90 },
    { label: "Java", value: 76 },
    { label: "Python", value: 82 },
    { label: "C#", value: 70 },
    { label: "MySQL", value: 85 },
    { label: "Cisco / Huawei", value: 94 },
    { label: "PHP Developer", value: 88 },
  ];

  const soft = [
    { label: "Problem-solving", value: 90 },
    { label: "Communication", value: 88 },
    { label: "Adaptability", value: 90 },
    { label: "Time Management", value: 94 },
  ];

  const getIcon = (label: string) => {
    if (label.includes("MySQL")) return Database;
    if (label.includes("Cisco")) return Network;
    return Code2;
  };

  return (
    <section id="skills" className="scroll-mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold">Skills</h2>
          <p className="mt-2 text-muted-foreground">Technical and professional strengths</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Technical Skills</h3>
            <div className="space-y-4">
              {tech.map((s) => {
                const Icon = getIcon(s.label);
                return (
                  <div key={s.label}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2"><Icon className="text-muted-foreground" aria-hidden="true" />{s.label}</span>
                      <span className="text-muted-foreground">{s.value}%</span>
                    </div>
                    <Progress value={s.value} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Professional Skills</h3>
            <div className="space-y-4">
              {soft.map((s) => (
                <div key={s.label}>
                  <div className="mb-1 flex items-center justify-between text-sm"><span>{s.label}</span><span className="text-muted-foreground">{s.value}%</span></div>
                  <Progress value={s.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
