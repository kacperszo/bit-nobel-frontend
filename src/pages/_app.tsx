import '@/styles/globals.css'
import React from 'react';
import {ConfigProvider} from 'antd';
import theme from "@/theme/themeConfig";
import type {AppProps} from 'next/app';

const App = ({Component, pageProps}: AppProps) => (
    <ConfigProvider theme={theme}>
        <Component {...pageProps} />
    </ConfigProvider>
);

export default App;