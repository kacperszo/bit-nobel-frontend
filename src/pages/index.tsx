import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Button} from "antd";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Nobel Explorer</title>
                <meta name="description"
                      content="Explore the captivating stories of Nobel Prize winners for inspiration. Immerse yourself in the rich history woven by these exceptional individuals. "/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="author" content="Kacper Szot"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="App">
                <Button type="primary">Button</Button>
            </div>
        </>
    )
}
