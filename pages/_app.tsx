import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { ThemeProvider } from "next-themes";
import MetaContainer from '../components/MetaContainer';


import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' enableSystem={false}>
        <MetaContainer>
          <Component {...pageProps} />
        </MetaContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
