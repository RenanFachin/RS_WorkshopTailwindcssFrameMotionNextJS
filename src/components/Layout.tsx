import { ReactNode } from "react"
import { Header } from "./Header"

interface Props {
    children: ReactNode
}

export function Layout({children}: Props){
    return(
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
            <Header />
            {children}
        </div>
    )
}