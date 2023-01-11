import { motion } from 'framer-motion'
import Link from 'next/link'
import { variants } from '../utils/Variants';

interface CardProps {
    href: string;
    imgSrc: string;
    layoutId: string;
}



export function Card({ href, imgSrc, layoutId }: CardProps) {
    return (
        <Link href={href}>
            <motion.div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-slate-50 transition" variants={variants}
            >
                <motion.img
                    className='w-full h-full'
                    src={imgSrc}
                    layoutId={layoutId}
                />
            </motion.div>
        </Link>

    )
}