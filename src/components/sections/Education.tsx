import { ParallaxContainer } from '../animated/ParallaxContainer';
import { TimelineAnimation } from '../animated/TimelineAnimation';
import { GridBackground } from '../animated/GridBackground';

const educationData = [
  {
    year: "2020 - 2022",
    title: "Master's in Computer Applications",
    institution: "Jspm's Rajarshi Shahu College Of Engineering Pune",
    description: "Specialized in Software Development and Frontend Development. Led research projects in UI/UX design patterns."
  },
  {
    year: "2017 - 2020",
    title: "Bachelor's in Computer Applications",
    institution: "Modern College Of Arts, Science and Commerce Pune",
    description: "Graduated with honors. Focus on web technologies and software architecture."
  }
];

export function Education() {
  return (
    <section className="py-20 relative overflow-hidden bg-black/50">
      <GridBackground className="rotate-180" />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Journey</h2>
        <ParallaxContainer className="max-w-4xl mx-auto">
          <TimelineAnimation items={educationData} />
        </ParallaxContainer>
      </div>
    </section>
  );
}