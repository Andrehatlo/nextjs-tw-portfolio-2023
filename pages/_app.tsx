import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { ThemeProvider } from "next-themes";
import MetaContainer from '../components/MetaContainer';


// Font Awesome 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false //



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' enableSystem={false}>
        <MetaContainer>
          <Component {...pageProps}/>
        </MetaContainer>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
