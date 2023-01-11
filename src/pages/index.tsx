import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { variants } from '../utils/Variants';

export default function Home() {
  return (
    <div>
      <motion.h1
        className="text-4xl sm:text-6xl lg:text-7xl mt-5 md:mt-20 leading-none font-extrabold tracking-tighter text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Contrua sites modernos com agilidade sem sair do HTML
      </motion.h1>


      <motion.div
        className="mt-10 md:mt-20 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1"
        transition={{
          delay: 0.3
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <Card
          href={'/nextjs'}
          imgSrc={'/img/nextjs.svg'}
          layoutId={'nextjs-logo'}
        />

        <Card
          href={'/tailwindcss'}
          imgSrc={'/img/tailwind.svg'}
          layoutId={'tailwind-logo'}
        />

        <Card
          href={'/framermotion'}
          imgSrc={'/img/framermotion.svg'}
          layoutId={'framermotion-logo'}
        />
      </motion.div>
    </div>
  )
} 