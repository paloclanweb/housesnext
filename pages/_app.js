import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js';

// <> es un React.Fragment
function MyApp({ Component, pageProps, navigation }) {
    // console.log(navigation);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}



export default MyApp
