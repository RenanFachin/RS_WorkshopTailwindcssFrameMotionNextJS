import Link from 'next/link'

interface MenuItemProps {
    text: string;
}

export function MenuItem({ text }: MenuItemProps) {
    return (

        <Link
            href={`/${text.toLowerCase()}`}
            className="tracking-wide hover:text-gray-300"
        >
            {text}
        </Link>


    )
}