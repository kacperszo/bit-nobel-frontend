import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Layout} from "antd";
import React, {useState} from "react";
import YearSelector from "@/components/YearSelector";
import {LanguageSelector} from "@/components/languageSelector";

const {Header, Content, Footer, Sider} = Layout;
const inter = Inter({subsets: ['latin']})

export default function Home() {
    const [lang, setLang] = useState("en")
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
            <Header
                style={{
                    position: 'absolute',
                    top: 0,
                    zIndex: 1,
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyItems: 'center',
                    justifyContent: 'right',
                    backgroundColor: "transparent"
                }}>
                <LanguageSelector onSelect={setLang} value={lang}/>
            </Header>
            <div
                style={{
                    position: "relative",
                    display: 'flex',
                    alignItems: 'center',
                    height: "100vh",
                    justifyItems: "center",
                    justifyContent: "center"
                }}>

                <YearSelector lang={lang}/>

            </div>
        </>
    )
}
