import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js';
import getConfig from 'next/config';
import fetch from 'isomorphic-unfetch';


// <> es un React.Fragment
function MyApp({ Component, pageProps, navigation }) {
    // console.log(navigation);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {/* <Header navigation={navigation} /> */}
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}


export default MyApp
