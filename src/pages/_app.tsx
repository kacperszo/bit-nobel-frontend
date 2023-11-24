import '@/styles/globals.css'
import React from 'react';
import {ConfigProvider, Layout} from 'antd';
import theme from "@/theme/themeConfig";
import type {AppProps} from 'next/app';
import {Header} from "antd/es/layout/layout";

const App = ({Component, pageProps}: AppProps) => (

    <>
        <ConfigProvider theme={theme}>
            <Layout style={{
                width: "100vw",
                minHeight: "100vh",
            }}>
                <Component {...pageProps} />
            </Layout>
        </ConfigProvider>
    </>
);

export default App;