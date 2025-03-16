import { ParallaxContainer } from '../animated/ParallaxContainer';
import { TimelineAnimation } from '../animated/TimelineAnimation';
import { GridBackground } from '../animated/GridBackground';

const experienceData = [
  {
    year: "2022 - Present",
    title: "Frontend Developer",
    institution: "Tekvision - Think Accessibility",
    description: "Contributing to the frontend development team by building cutting-edge web applications with modern UI/UX practices. Focused on accessibility, performance optimization, and mentoring junior developers to enhance code quality and best practices."
  }
];

export function Experience() {
  return (
    <section className="py-20 relative overflow-hidden bg-black/50">
      <GridBackground />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Corporate Experience</h2>
        <ParallaxContainer className="max-w-4xl mx-auto">
          <TimelineAnimation items={experienceData} />
        </ParallaxContainer>
      </div>
    </section>
  );
}
