import '@/styles/globals.css'
import React from 'react';
import {ConfigProvider, Layout} from 'antd';
import theme from "@/theme/themeConfig";
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => (

    <>
    <ConfigProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ConfigProvider>
    </>
);

export default App;