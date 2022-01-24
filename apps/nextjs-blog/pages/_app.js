import React from 'react';
import App from 'next/app';
import {
    applyPolyfills,
    defineCustomElements,
} from '@kangacopter/kanga-components/loader';
import './index.css'

class RootApp extends App {
    componentDidMount() {
        void applyPolyfills().then(() => {
            void defineCustomElements(window);
        });
    }

    render() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { Component, pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }
}

export default RootApp;
