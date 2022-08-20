import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from 'next-themes';
import PropTypes from 'prop-types';
import Page from '../components/AllPageHeader';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Page>
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
