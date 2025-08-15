import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = { name, email, message };

    try {
      const response = await fetch("https://formspree.io/f/mqaljewy", { // <-- PASTE YOUR FORMSPREE URL HERE
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
        // Clear form after successful submission
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message || "Something went wrong. Please email me directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-muted-foreground">Let's discuss your project or opportunity</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          {/* The updated form */}
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm">Name</label>
              <Input
                id="name"
                name="name" // Required for Formspree
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm">Email</label>
              <Input
                id="email"
                name="email" // Required for Formspree
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm">Message</label>
              <Textarea
                id="message"
                name="message" // Required for Formspree
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell me about your needs"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full" variant="hero" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <p className="text-xs text-muted-foreground"></p>
          </form>

          <aside className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-muted-foreground">Find me on these platforms</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.linkedin.com/in/sofonias-dawit" className="story-link inline-flex items-center gap-2 rounded-md border px-3 py-2 hover-scale" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com/sofonias-dawit" className="story-link inline-flex items-center gap-2 rounded-md border px-3 py-2 hover-scale" aria-label="GitHub">
                <Github className="h-4 w-4" /> GitHub
              </a>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sofoniasdawit00@mail.com&su=Hello&body=Hi%20there"
                target="_blank"
                rel="noopener noreferrer"
                className="story-link inline-flex items-center gap-2 rounded-md border px-3 py-2 hover-scale"
                aria-label="Email">
                <Mail className="h-4 w-4" /> Email
              </a>

            </div>
            <div className="mt-6 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-4 text-sm">
              <p className="text-foreground/80">Prefer a direct intro call? Email me and we'll schedule a time that works across time zones.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};