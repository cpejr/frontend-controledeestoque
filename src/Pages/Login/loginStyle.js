import {isMobile} from "../../isMobile";
import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao, fontSizePadrao} from '../../StylePadrao/stylePadrao'

const styles = {
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: azulPadrao,
        flexDirection: 'column',
        display: 'flex'
    },
    formContainer: {
        height: '100%',
        width: isMobile ? '50%' : '25%',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: azulPadrao,
        flexDirection: 'column',
        display: 'flex'
    },
    logo: {
        marginBottom: '2%',
        height: '15%',
    },

    inputField: {
        borderRadius: '50px',
        // marginLeft: '10%',
        marginBottom: isMobile ? '10%' : '7%',
        border: '1px solid #707070',
        backgroundColor: brancoPadrao,
        height: '10%',
        width: '100%',
        fontSize: '120%',
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '5%',
        alignItems: 'center',
        outline: '0px'
    },

    typoDiv: {
        marginBottom: '1%',
        width: '25%',
    },

    typoStyle: {
        color: brancoPadrao,
        fontFamily: fontPadrao,
        fontSize: '120%',
        alignItems: "left"
    },

    buttonEsqueciSenha: {
        textDecoration: "underline",
        fontFamily: "DM Sans, sans-serif",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "26px",
        textAlign: "left",
        color: "#FFFFFF",
        padding: '0',
        alignSelf: isMobile ? '' : 'start',
        display: 'flex',
        marginTop: isMobile ? '20%' : '',
    },
    buttonLogin: {
        borderRadius: '50px',
        marginTop: '8%',
        backgroundColor: brancoPadrao,
        height: '7%',
        width: '50%',
        fontSize: fontSizePadrao,
        fontFamily: fontPadrao,
        color: azulPadrao,
        alignItems: 'center',

    },
};
export default styles;