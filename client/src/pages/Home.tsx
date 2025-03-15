import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { MagneticCursor } from '@/components/animated/MagneticCursor';

export default function Home() {
  return (
    <main className="relative">
      <MagneticCursor />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
}