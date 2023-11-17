import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Button, Card, Select} from "antd";
import {useEffect, useState} from "react";
import {nobelPrizesGet} from "@/api/NobelPrizeAPI";
import {getYearRangeFromPrizesResult} from "@/utils/getYearRangeFromPrizesResult";
import {Layout, Menu, theme} from 'antd';
import {router} from "next/client";
import YearSelector from "@/components/YearSelector";

const {Header, Content, Footer, Sider} = Layout;
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
            <Layout
                style={{
                    position: "relative",
                    display: 'flex',
                    width: "100vw",
                    minHeight: "100vh",
                    alignItems: 'center',
                    justifyItems: "center",
                    justifyContent: "center"
                }}>

                <YearSelector/>

            </Layout>
        </>
    )
}
