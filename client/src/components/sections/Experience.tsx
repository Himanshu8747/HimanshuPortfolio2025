import { ParallaxContainer } from '../animated/ParallaxContainer';
import { TimelineAnimation } from '../animated/TimelineAnimation';
import { GridBackground } from '../animated/GridBackground';

const experienceData = [
  {
    year: "2022 - Present",
    title: "Senior Frontend Developer",
    institution: "Tech Innovations Inc",
    description: "Leading the frontend development team in creating cutting-edge web applications. Implementing modern UI/UX practices and mentoring junior developers."
  },
  {
    year: "2020 - 2022",
    title: "Frontend Developer",
    institution: "Digital Solutions Corp",
    description: "Developed responsive web applications using React and Next.js. Improved website performance by 40% through optimization techniques."
  },
  {
    year: "2018 - 2020",
    title: "UI/UX Developer",
    institution: "Creative Web Agency",
    description: "Created engaging user interfaces and implemented complex animations. Collaborated with designers to improve user experience."
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
