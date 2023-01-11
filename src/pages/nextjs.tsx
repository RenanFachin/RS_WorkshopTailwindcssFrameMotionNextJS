import { motion } from "framer-motion";
import Link from "next/link";

export default function nextjs() {
    return (
        <div className="flex flex-col items-center">
            <motion.img
                src="/img/nextjs.svg"
                layoutId="nextjs-logo"
                transition={{ duration: 0.5 }}
            />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
            >
                <Link href="/" legacyBehavior>
                    <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray">
                        Voltar para Home
                    </a>
                </Link>
            </motion.div>
        </div>
    )
}