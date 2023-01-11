

import { Card } from "../components/Card";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1
        className="text-4xl sm:text-6xl lg:text-7xl mt-5 md:mt-20 leading-none font-extrabold tracking-tighter text-gray-900"

      >
        Contrua sites modernos com agilidade sem sair do HTML
      </h1>


      <div className="mt-10 md:mt-20 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card
          href={'/nextjs'}
          imgSrc={'/img/nextjs.svg'}
          layoutId={'nextjs'}
        />

        <Card
          href={'/tailwindcss'}
          imgSrc={'/img/tailwind.svg'}
          layoutId={'tailwind'}
        />

        <Card
          href={'/framermotion'}
          imgSrc={'/img/framermotion.svg'}
          layoutId={'framermotion-logo'}
        />
      </div>
    </Layout>
  )
} 