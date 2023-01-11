import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return(
        <Html lang="pt-br">
            <Head>
                <meta name="description" content="Desenvolvimento de uma aplicação utilizando tailwindcss, frameMotion e NextJS"/>
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}