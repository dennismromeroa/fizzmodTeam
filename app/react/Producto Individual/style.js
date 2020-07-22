import styled from "styled-components";
import { device } from '../../utils/mediaQuerys';

///////// HEADER ////////////////
export const Header = styled.div`
  background-color: #E8EAF6;
  width: 100%;
  height: 48px;
`;

export const Img = styled.img`
height: 24px;
width: 24px;
`;

export const Cuadro = styled.div`
display: flex;
height: 100%;
width: 250px;
justify-content: center;
align-items: center;
position: relative;
margin-left: auto;
margin-right: auto;
`;

export const Marca = styled.h1`
height: 21px;
width: 69px;
color: #273947;
font-family: Roboto;
font-size: 18px;
letter-spacing: 0;
  line-height: 21px;
  text-align: right;
  margin-right: 7px;
  margin-left: 7px;
`;

export const Gramaje = styled.h1`
height: 21px;
  width: 82px;
  color: #F13B70;
  font-family: Roboto;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: right;
`;

/////////// CONTENEDOR ////////////////

export const ContGral = styled.div`
width: 100%;
height: 100vh;
`;

export const Cont = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-top:70px;
@media ${device.mobile} {
  flex-direction: column;
  margin-top:0px;
}
`;

////// LADO IZQUIERDO /////////////

export const ColIzq = styled.div`
    display: flex;    
    width: 50%;
    height: auto;
    flex-direction: row; 
    justify-content: center;
    @media ${device.mobile} {
    width: 90%;
}
`;

export const CuadroGrill = styled.div`
  display: flex;    
  width: 50%;
  height: auto;
  flex-direction: row;
  border: 1px solid #939598;
  border-radius:10%;
  margin: 4px 6px 4px 0px;
`

export const ContainerGrillCuadros = styled.div`
  display: flex;    
  width: 60%;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
`

export const NumCuadrados = styled.div`
  display: flex;    
  width: 50%;
  height: 60px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 3px solid #A27BDB;
  font-size: 25px;
  color: #273947;
  font-family: Roboto;
  font-weight: 900;
  letter-spacing: 0;
  @media ${device.mobile} {
  font-size: 20px;
  height: 30px;
}
  
`

////// FOTO PRODUCTO ////////////////
export const DivFoto = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  height: auto;
  float: right;
  @media ${device.mobile} {
  width: 60%;
  max-width: 450px;
  }  
`;

export const FotoProd = styled.img`
height: auto;
width: 100%;
`;

///////// COLUMNA IZQ CON ICONOS ///////////////
export const ColuIconos = styled.div`
height: auto;
width: 15%;
display: flex;
float: left;
flex-direction: column;
text-align:-webkit-center;
justify-content:space-between;
@media ${device.mobile} {
  width: 22%;
  justify-content:space-around;
}
`;

export const IconoNum = styled.img`
  margin-left: auto;
  margin-right: auto;  
  height: 20%;
  width: 55%;
`;

export const IconoNumDos = styled.div`
padding-top: 220%;
margin-left: auto;
margin-right: auto; 
display: flex;
flex-direction: column;
`;

export const ContInfo = styled.div`
display: flex;
flex-direction: column;
@media ${device.mobile} {
  flex-direction: row;
  align-items:center;
}
`;

export const ContDer = styled.div`
width: 75%;
`;

export const StockLetras = styled.div`
  margin-left: auto;
  margin-right: auto;  
  height: 18px;
  color: #1DB779;
  font-family: Roboto;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const ContStock = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  color:#1DB779;
  @media ${device.mobile} {
  font-size: 14px;
  margin-bottom:5px;
}
`;

export const StockCien = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid #1DB779;
  color:#1DB779;
  padding: 3px 10px 3px 10px;
  @media ${device.mobile} {
    font-size: 15px;
    padding: 1px 5px 1px 5px;
}
`;

export const Sup = styled.div``;

//////// LADO DERECHO ///////////////////
export const ColDerecha = styled.div`
    display: flex;    
    width: 50%;
    height: auto;
    flex-direction: column;
    @media ${device.mobile} {
    width: 90%;
}
`;

export const DivGrande = styled.div`

`;

export const ContMarca = styled.div`
display:flex;
display:row;
@media ${device.mobile} {
    display: column;
    align-items:center;
    margin-top:0px;
    margin-bottom:0px;
}
`;

//////////// COLUMNA CON ICONOS GLOBOS ////////////
export const DivGlobos = styled.div`
margin-top: 20px;
display: flex;
float: right;
flex-direction: column;
width: 25%;
align-items: center;
@media ${device.mobile} {
margin-top: 15px;
}
`;

export const ImagenGlobo = styled.img`
height: 68px;
width: 70px;
@media ${device.mobile} {
width: 65%;
height: auto;
}
`;


export const ImgAmarilla = styled.img`
@media ${device.tablet} {
  height: auto;
  width: 50px;
}
  height: auto;
  width: 60px;
  background-color: #FFEB3B;
  border-radius: 50px;
  padding: 6px;
  margin-top:5px;
`;

/////media query/////
export const ImgH = styled.img`
@media ${device.tablet} {
  
  height: 40px;
  width: 40px;
 
}
  height: 60px;
  width: 60px;
`;



//////////// MARCA Y DESCRIPCION ///////////////
export const MarcaH1 = styled.h1`
  margin-top:15px;
  padding-bottom:20px;
  color: #2979FF;
  font-family: Roboto;
  font-size: 22px;
  letter-spacing: 0;
  line-height: 15px;
  @media ${device.mobile} {
  margin-top:15px;
  margin-bottom:15px;
  font-size: 15px;
  height: 2px;
  width:50%;
}

`;

export const Descri = styled.div`
  margin-top:20px;
  color: #939598;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 25px;
  @media ${device.mobile} {
  font-size: 15px;
  margin-top:10px;
  margin-bottom:10px;
}
`;


///////////// PRECIOS ////////////////////
export const Tachado = styled.div`
margin-top: 20px;
color: #939598;
font-family: Roboto;
font-size: 15px;
font-weight: 300;
letter-spacing: 0;
line-height: 14px;
text-decoration: line-through;
@media ${device.mobile} {
  width:50%;
  margin-top: 7px;
  margin-bottom: 7px;
}
`;

export const Precio = styled.div`
  margin-top: 20px;
  color: #2979FF;
  font-family: Roboto;
  font-size: 25px;
  font-weight: bold;
  @media ${device.mobile} {
  font-size: 20px;
  width:50%;
  margin-top: 0px;
}
`;

/////////////// FILA CON CODIGO DE BARRAS, CODIGO Y PESO ///////////////
export const ContBarras = styled.div`
display:flex;
flex-direction: row;
margin-top:15px;
align-items:center;
@media ${device.mobile} {
margin-top:0px;
}
`;

export const BarritasCont = styled.div`
height: 25px;
width: 48px;
@media ${device.mobile} {
width: 15%;
height: auto;
}
`

export const Barritas = styled.img`
height: 100%;
width: auto;
`;

export const CodProdu = styled.div`
  color: #273947;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 19px;
  margin-right:25px;
  @media ${device.mobile} {
  height: auto;
  font-size: 15px;
  margin-right:0px;
  } 
`;

export const ImgBarrita = styled.img`
border-right:1px solid;
margin-right: 5px;
margin-left: 5px;
height: 30px;

`;

export const ImBalanza = styled.img`
margin-left: 3%;
height: 26px;
width: 26px;
`;

export const PesoProdu = styled.div`
  margin-left: 3%;  
  height: 18px;
  color: #273947;
  font-family: Roboto;
  font-size: 19px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

/////////// FILA CON ICONOS DE PESO ///////////////
export const ContImagenes = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: flex-end;
    @media ${device.mobile} {
    margin-top: 10px;
    margin-bottom: 10px;
}
`;

export const CuadritoUno = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around; 
  box-sizing: border-box;
  height: 55px;
  width: 167px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
`;

export const PesoCuadro = styled.h1`
  margin-top: 10%;  
  height: 18px;
  width: 85px;
  color: #273947;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
`;

export const CuadritoDos = styled.div`
  box-sizing: border-box;
  height: 55px;
  width: 57px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.11);
  margin-left: 2%;
  align-items: center;
`;

export const ImgBalanzasUno = styled.img`
margin-top: 7%;
height: 28px;
width: 28px;
`;

export const ImgBalanzasMas = styled.img`
margin: 11%;
height: 34px;
width: 34px;
`;
///////// COLOCA EL PRODUCTO SOBRE LA BALANZA //////////////
export const Instrucciones = styled.h1`
margin-top: 15px;
color: #273947;
font-family: Roboto;
font-size: 16px;
`;


/////////// RECUADRO CON CANTIDAD PRODUCTO NORMAL Y STOCK///////////

export const RecuadroCantidadNormal = styled.div`
  //margin-top: 5%;  
  display: flex;  
  box-sizing: border-box;
  height: 55px;
  width: 220px;
  border: 1px solid #939598;
  border-radius: 3px;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: space-around;  
`;

export const H1Cantidad = styled.h1`
  height: 16px;
  margin-left: 10%;
  color: #939598;
  font-family: Roboto;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 16px;
  margin-right: 10%;
`;

export const H1CantidadNum = styled.h1`

height: 18px;
//margin-left: 10%;
//width: 9px;
color: #939598;
font-family: Roboto;
font-size: 19px;
font-weight: bold;
letter-spacing: 0;
line-height: 18px;
`;

export const ContFlechitas = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`;

export const FlechitaDesplegable = styled.img`
  //margin-left: 28%;  
  height: 20px;
  width: 20px;
`;

export const DivImageStock = styled.div`
margin-left: 10%;
display: flex;
flex-direction: column;
`;



/////////// FILA BOTONES DE ABAJO PRODUCTO NORMAL ///////////
export const BotonesNormal = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  text-align: center;    
`;


export const OmitirNormal = styled.div`
  display: flex;  
  border-radius: 3px;
  background-color: #FF4343;
  color: #ffffff;
  border:1px solid #FF4343;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-right: 7px;
  align-items: center;
  justify-content: center;
`;

export const CruzOmitir = styled.img`
  height: 30px;
  width: auto;
`;

/////////// FILA BOTONES DE ABAJO PROD. PESABLE ////////////
export const Botones = styled.div`
    display: flex;
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    @media ${device.mobile} {
    margin-bottom:15px;
}     
`;

export const BotIzq = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:75%;
  @media ${device.mobile} {
  width:90%;
}
`;

export const BotDer = styled.button`
  display: flex;
  align-items: center;
  justify-content:center;
  border:0px solid #1DB779;
  background:none;
`;

export const Omitir = styled.button`
  width:40%;
  height:70px;
  border-radius: 3px;
  background-color: #FF4343;
  color: #ffffff;
  border:1px solid #FF4343;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-right: 5px;
  @media ${device.mobile} {
  width:35%;
  height:40px;
  padding: 3px 10px 3px 10px;
}
`;

export const BotonTeclado = styled.button`
  border-radius: 3px;
  border:0px solid #1DB779;
  background:none;
  `;

export const Teclado = styled.img`
  width:auto;
  height:70px;
  @media ${device.mobile} {
  height:40px;
}
`;

export const Siguiente = styled.button`
  width:40%;
  height:70px;
  border-radius: 3px;
  background-color: #1DB779;
  border:1px solid #1DB779;
  color: #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: center;
  margin-left: 5px;
  @media ${device.mobile} {
  width:35%;
  height:40px;
}
  `;

export const PlusCircle = styled.img`
@media ${device.tablet} {
  height: auto;
  width: 40px;
}
  height: auto;
  width: 60px;
  background-color: #273947;
  border-radius: 50px;
  padding: 6px;
`;
