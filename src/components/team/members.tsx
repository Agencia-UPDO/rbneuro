import RevealAnimation from '@/src/components/animation/reveal-animation';
import TeamCard from '@/src/components/shared/ui/card/team-card';
import { Badge } from '@/src/components/shared/ui/badge';
import type { TeamMember } from '@/src/data/team';

const TeamMembers = ({ members }: { members: TeamMember[] }) => (
  <section className="pt-20 md:pt-30 lg:pt-44">
    <div className="main-container">
      <div className="space-y-[70px]">
        <div className="space-y-4 text-center">
          <RevealAnimation delay={0.1}>
            <div className="flex justify-center">
              <Badge badgeText="Our expert" className="text-white/50" />
            </div>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
                Driven by expertise. United by purpose.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="font-inter-tight text-tagline-2 mx-auto w-full max-w-[550px] font-normal text-white/60">
                Our team of AI specialists and strategists is committed to delivering intelligent,
                customized solutions that fuel your growth.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center justify-center gap-y-8 lg:gap-x-8">
          {members.map((member, index) => (
            <RevealAnimation key={member.name} delay={0.1 + index * 0.1}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4">
                <TeamCard
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  href={member.href}
                />
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamMembers;
