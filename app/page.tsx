'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  BACKEND_PROJECTS,
  FRONTEND_PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  SOCIAL_LINKS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        
        <div className="flex-1">
        
          <p className="text-zinc-600 dark:text-zinc-400 mb-5">
          I’m passionate about building futuristic, high-impact software solutions.
          With a strong foundation in both frontend and backend development,
          I specialize in transforming innovative ideas into seamless, scalable, 
          and efficient multiplatform applications for the past 14 years.
          
          </p>
         
        </div>
      </motion.section>

     
        

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              key={job.id}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
     
        <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-medium">What I Build</h3>
        <div className="flex flex-col space-y-6">
          {BACKEND_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col md:flex-row items-center md:items-stretch bg-zinc-100 dark:bg-zinc-900/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              data-id={project.id}
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                  {project.name}
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="intrinsic"
                  width={400}
                  height={400}
                  objectFit="contain"
                  className="transition-transform group-hover:scale-110 duration-300"
                />
              </div>

            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-medium">Technologies I use</h3>
        <div className="flex flex-col space-y-6">
          {FRONTEND_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col md:flex-row items-center md:items-stretch bg-zinc-100 dark:bg-zinc-900/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              data-id={project.id}
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                  {project.name}
                </h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full h-64 md:h-80 relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform group-hover:scale-110 duration-300"
                />
              </div>

            </div>
          ))}
        </div>
      </motion.section>


      

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline text-yellow-500 dark:text-yellow-400" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
       
      </motion.section>
    </motion.main>
  )
}
