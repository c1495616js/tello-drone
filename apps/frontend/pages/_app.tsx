import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1rem;
    background: #193549;
    color: white;
  }
`;

const PageStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Tello Drone</title>
      </Head>
      <div className="app">
        <main>
          <PageStyles>
            <GlobalStyle />
            <Component {...pageProps} />
          </PageStyles>
        </main>
      </div>
    </>
  );
};

export default CustomApp;
