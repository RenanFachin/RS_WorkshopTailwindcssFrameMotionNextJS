import Image from "next/image";

import { MenuItem } from "./MenuItem";

export function Header() {
    return (
        <header className="flex justify-center py-2 items-center md:py-4 md:justify-between">
            <Image
                src='/img/logo.svg'
                alt="Logo"
                width={150}
                height={33}
            />

            <nav className="hidden md:block space-x-8">
                <MenuItem text="NextJs"/>
                <MenuItem text="Tailwindcss"/>
                <MenuItem text="FramerMotion"/>
            </nav>
        </header>
    )
}