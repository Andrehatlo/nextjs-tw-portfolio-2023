import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/globals.scss';
import { ThemeProvider } from "next-themes";
import MetaContainer from '../components/MetaContainer';
import { AnimatePresence } from 'framer-motion'
import PageLoader from '../components/PageLoader';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    // Used for page transition
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return (
      <>
        { loading ? 
        <PageLoader /> : 
        <ThemeProvider attribute='class' enableSystem={false}>
          <MetaContainer>
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
              <Component {...pageProps}/>
            </AnimatePresence>
          </MetaContainer>
        </ThemeProvider>
        }
      </>
  )
}

export default MyApp;