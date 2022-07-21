import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Page from '../components/Page'
import { ThemeProvider } from 'next-themes'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Page>
        <Component {...pageProps}/>
      </Page>
      
    </ThemeProvider>
  );
}

export default MyApp
