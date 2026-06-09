import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/ui/ScrollReveal";
import { musicSkills, dataSkills, sharedSkills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">

        <ScrollReveal className="mb-12">
          <p className="text-xs font-figtree font-500 text-subtle uppercase tracking-widest mb-3">Skills</p>
          <h2
            className="font-figtree font-800 text-text leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            What I bring to the table
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-px bg-border">

          {/* Music */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="p-6 bg-bg h-full">
              <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-5">Music</p>
              <StaggerReveal stagger={0.07} delay={0.3}>
                {musicSkills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-sm font-figtree font-400 text-muted">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs font-figtree font-500 text-accent">{skill.level}</span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>

          {/* Bridge */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="p-6 bg-surface h-full">
              <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-2">The Intersection</p>
              <p className="text-xs font-figtree font-400 text-muted mb-5">
                Skills that live where music meets data.
              </p>
              <div className="flex flex-col gap-2">
                {sharedSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-3 border border-border text-sm font-figtree font-500 text-text text-center bg-bg"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Data */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="p-6 bg-bg h-full">
              <p className="text-[10px] font-figtree font-600 text-subtle uppercase tracking-widest mb-5">Data</p>
              <StaggerReveal stagger={0.07} delay={0.4}>
                {dataSkills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <span className="text-sm font-figtree font-400 text-muted">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs font-figtree font-500 text-muted">{skill.level}</span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
