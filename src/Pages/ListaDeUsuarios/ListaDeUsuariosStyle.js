import {
  fontSizePadrao,
  azulPadrao,
  fontCinzaEscuro,
  brancoPadrao,
  fontPadrao,
} from "../../StylePadrao/stylePadrao";

const styles = {
  userTypeContainer: {
    display: "block",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    minHeight: "25%",
    width: "22%",
    paddingLeft: "38%",
  },
  userContainer: {
    backgroundColor: "#ffff",
    height: "15vh",
    width: "18vh",
    border: "1px solid #707070",
    margin: "2vh",
    marginBottom: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#043741",
    fontSize: "3vh",
    textTransform: "uppercase",
    textAlign: "center",
    paddingLeft: "2vh",
    paddingRight: "2vh",
    cursor: "pointer",
  },
  listitem:{
    fontFamily: fontPadrao,
    fontSize: fontSizePadrao,
    backgroundColor: brancoPadrao,
    
  },
  userTypeHeader: {
    alignSelf: "center",
    fontSize: "3vh",
    fontWeight: "600",
    color: "#043741",
    marginTop: "3vh",
    marginRight: "4vh",
  },

  inputField: {
    textAlign: "left",
    borderRadious: "0px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2%",
    border: "1px solid #707070",
    backgroundColor: brancoPadrao,
    height: "12%",
    width: "35%",
    fontSize: "120%",
    fontFamily: fontPadrao,
    color: fontCinzaEscuro,
    marginTop: "4%",
    paddingLeft: "0.5%",
  },
};

export default styles;
