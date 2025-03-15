import { ParallaxContainer } from '../animated/ParallaxContainer';
import { TimelineAnimation } from '../animated/TimelineAnimation';
import { GridBackground } from '../animated/GridBackground';

const educationData = [
  {
    year: "2020 - 2022",
    title: "Master's in Computer Science",
    institution: "Stanford University",
    description: "Specialized in Machine Learning and Human-Computer Interaction. Led research projects in UI/UX design patterns."
  },
  {
    year: "2016 - 2020",
    title: "Bachelor's in Software Engineering",
    institution: "MIT",
    description: "Graduated with honors. Focus on web technologies and software architecture. Active member of the Web Development Club."
  },
  {
    year: "2014 - 2016",
    title: "Associate's Degree in Web Development",
    institution: "Community College of Technology",
    description: "Foundation in web technologies and design principles. Received Excellence in Web Design award."
  }
];

export function Education() {
  return (
    <section className="py-20 relative overflow-hidden bg-black/50">
      <GridBackground className="rotate-180" /> {/* Rotated for variety */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Journey</h2>
        <ParallaxContainer className="max-w-4xl mx-auto">
          <TimelineAnimation items={educationData} />
        </ParallaxContainer>
      </div>
    </section>
  );
}