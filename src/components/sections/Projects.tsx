import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Github, Globe, Image, Film, Play } from 'lucide-react';
import { useState } from 'react';

// Define proper types for project and media
interface Media {
  type: "video" | "image";
  url: string;
  thumbnail?: string;
}

interface Project {
  title: string;
  description: string;
  media: Media;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    title: "Sifusec",
    description: "Real-time fraud prevention for Solana smart contracts",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?q=80&w=2072"
    },
    github: "https://github.com/pratik-codes/SIFU-Security",
    live: "https://sifusec.vercel.app/"
  },
  {
    title: "React Quiz",
    description: "A modern e-commerce solution built with Next.js and Tailwind CSS",
    media: {
      type: "video",
      url: "https://himanshu-javiya.vercel.app/img/projects/The%20React%20Quiz%20-%20Brave%202024-02-24%2014-26-59%20(online-video-cutter.com).mp4",
      thumbnail: "https://images.unsplash.com/photo-1540835296355-c04f7a063cbb?q=80&w=2070"
    },
    github: "https://github.com/Himanshu8747/ReactQuiz",
    live: "https://react-quiz-eight-sooty.vercel.app/"
  },
  {
    title: "Task Reminder Chrome Extension",
    description: "Collaborative task management with drag-and-drop interface",
    media: {
      type: "image",
      url: "https://himanshu-javiya.vercel.app/img/projects/TaskReminder.png"
    },
    github: "https://github.com/Himanshu8747/Task-Reminder-Chrome-Extension",
    live: "https://taskmanager-demo.site"
  }
];

interface MediaContentProps {
  project: Project;
  index: number;
}

export function Projects() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  // Animation variants for the sparkle effect
  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  };

  // Text animation variants
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Media renderer component to handle both images and videos
  const MediaContent = ({ project, index }: MediaContentProps) => {
    const { media } = project;
    
    if (media.type === "video") {
      return (
        <div className="relative aspect-video overflow-hidden group">
          {playingVideo !== index ? (
            <div 
              className="relative w-full h-full cursor-pointer"
              onClick={() => setPlayingVideo(index)}
            >
              <img 
                src={media.thumbnail || ''} 
                alt={`${project.title} thumbnail`} 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                <Film className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" />
                
                {/* Added video indicator text on hover */}
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-black/70 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center justify-center mx-auto w-max">
                    <Play className="w-4 h-4 mr-1" /> Click to play video
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <video 
              src={media.url} 
              className="w-full h-full object-cover" 
              autoPlay 
              controls
              onEnded={() => setPlayingVideo(null)}
            />
          )}
        </div>
      );
    }
    
    return (
      <div className="relative aspect-video overflow-hidden">
        <img
          src={media.url}
          alt={project.title}
          className="object-cover w-full h-full transition-transform group-hover:scale-110"
        />
        <div className="absolute bottom-2 left-2 bg-black/60 p-1 rounded-md">
          <Image className="w-4 h-4 text-white" />
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full flex flex-col" data-magnetic>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col h-full"
                >
                  <MediaContent project={project} index={index} />
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4" />
                          <span>Live Site</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Text animation */}
        <motion.div 
              variants={textVariants}
              className="flex items-center pt-14 justify-center gap-2 text-xl md:text-2xl font-semibold text-primary"
            >
              <span>More Projects Coming Soon</span>
              <motion.span
                animate={{ 
                  opacity: [0, 1, 0],
                  transition: { 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatDelay: 0.25
                  }
                }}
              >...</motion.span>
            </motion.div>
      </div>
    </section>
  );
}