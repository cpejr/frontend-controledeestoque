import {azulPadrao, fontCinzaEscuro, brancoPadrao, fontPadrao} from '../../StylePadrao/stylePadrao'

const styles = {

    NovoUsuarioContainer: {
        height: '100%',
    },

    iconRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '35%',
    },

    formContainer: {
        display: 'flex',
        height:  '65%',
        width: '100%'
    },

    infosContainer: {
        width: '50%',
        display: 'flex', 
        flexDirection: 'column',
        
    },

    inputField: {
        borderRadious: '0px',
        marginLeft: '10%',
        marginBottom: '7%',
        border: '1px solid #707070',
        backgroundColor: brancoPadrao,
        height: '12%',
        width: '70%',
        fontSize: '120%',
        fontFamily: fontPadrao,
        color: fontCinzaEscuro,
        paddingLeft: '2%',
        borderRadius:'10px'

    }, 

    userTypeAndSendContainer:{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },

    userTyperContainer: {
        height: '40%', 
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },

    handMadeRadio: {
        border: '1px solid #707070',
        backgroundColor: brancoPadrao,
        height: '33%',
        width: '60%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        borderRadius:'20px',
        margin: '7px'
    },
    
    emptyCircle: {
        margin: '10%',
        height: '2vh',
        width: '2vh',
        borderRadius: '50%',
        border: '1px solid black'
    },

    filledCircle: {
        margin: '10%',
        height: '2vh',
        width: '2vh',
        borderRadius: '50%',
        border: '1px solid black',
        backgroundColor: azulPadrao,
    },

    sendButton: {
        marginTop: '10%',
        backgroundColor: azulPadrao,
        padding: '1%',
        paddingLeft: '8%',
        paddingRight: '8%',
        borderRadius: '5vh',
        color: '#ffff',
        cursor: 'pointer',
        fontSize: '160%'
    },

    sendButtonLocked: {
        marginTop: '10%',
        backgroundColor: '#707070',
        padding: '1%',
        paddingLeft: '8%',
        paddingRight: '8%',
        borderRadius: '5vh',
        color: '#ffff',
        cursor: 'pointer',
        fontSize: '160%'
    },

};
export default styles;