import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function exit(){
    alert("Deseja mesmo sair?");
    // deslogar o usuário;
};
function menu(){
    alert("libera o menu ai");
};
function search(){
    alert("pesquisa ai pra mim");
};
function info(e){
    console.log(e) //colocar rota do produto especifico, por parametro;
};
export default function List(){
    const navigate=useNavigate();
    return(<DivList>
        <DivTopList>
            <ion-icon onClick={()=>{menu()}} name="menu"></ion-icon>
            <h1>Stern Store</h1>
            <DivSearch>
                <ion-icon onClick={()=>{search()}} name="search-outline"></ion-icon>
                <InputSearch placeholder="Pesquisar"></InputSearch>
            </DivSearch>
            <DivIcons>
                <ion-icon onClick={()=>{navigate("/cart")}} name="cart-outline"></ion-icon>
                <ion-icon onClick={()=>{navigate("/login")}} name="person-circle-sharp"></ion-icon>
                <ion-icon name="exit"></ion-icon>
            </DivIcons>
            </DivTopList>
            <DivCategory> Categorias </DivCategory>

        <DivMidList>
            {arr.map((e)=>(<DivBox>
                {/* <img src="../Logo/lampada.jpeg"/> */}
                <img onClick={()=>{info(e)}} src="https://i.pinimg.com/originals/37/3c/2e/373c2e3be98fac4f43917730e62a6555.jpg"/>
                <DivInformations>
                    <h2>titulo</h2>
                    <DivValue>
                        <h3>R$ 20,00</h3>
                        <div><h4> em estoque {e}</h4></div>
                        
                    </DivValue>
                    <DivButton>
                        <div><h1>Comprar </h1><ion-icon name="cart-outline"></ion-icon></div>
                        
                    </DivButton>
                </DivInformations>

            </DivBox>))}
        </DivMidList>

        <DivBottomList> 
            <DivHelp>
                <h1>Stern Store</h1> {/* linkar cada item */}
                <h2>Ajuda</h2>
                <h3>COVID-19</h3>
                <h3>Como Comprar</h3>
                <h3>Pagamento</h3>
                <h3>Reembolso</h3>
            </DivHelp>
            <DivAboutUs>
                <h1>Stern Store</h1>
                <h2>Sobre Nós</h2>          
                <h3>Políticas de Privacidade</h3>
                <h3>Ofertas</h3>
            </DivAboutUs>
            <DivSocialNetworks>
                <h1>Stern Store</h1>
                <h2>Rede Sociais</h2>
                <DivBottomIcons>
                    <ion-icon name="logo-whatsapp"></ion-icon> 
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-discord"></ion-icon>
                    <ion-icon name="logo-github"></ion-icon>
                </DivBottomIcons>
            </DivSocialNetworks>
        </DivBottomList>
    </DivList>);
};

const DivList=styled.div``
const DivTopList=styled.div`
    width:100%;
    height:100px;
    position: fixed;
    top:0;
    z-index:1;
    background: #11A8B1;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-between;
    padding: 0 3%;
    // box-shadow: 0px 5px 5px teal;
    h1{
        color: white;   
        font-size:50px;
        font-family: 'Righteous', cursive;
    }
    ion-icon{
        font-size: 30px;
        cursor: pointer;
        color: white;
    }
`
const DivSearch=styled.div`
    width:60%;
    height:50px;
    background: #ffffff;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 30px;
    ion-icon{
        color: #737373;
    }
`
const InputSearch=styled.input`
    font-size: 17px;
    background: transparent;
    width: 95%;
    height: 40px;
    border: 1px solid transparent;
    outline: none;
    ::placeholder{
        color: #737373;
    }
`
const DivIcons=styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
`

const DivCategory=styled.div`
    position: fixed;
    top: 100px;
    width: 100%;
    height: 50px;
    background: #bf0a0d;
    z-index: 1;
`;


const DivMidList=styled.div`
    width: 80%;
    height:100%; // caso n tenha nada 100vh;
    // background-color: #C5EEF0;
    margin: 150px auto;
    display:flex;
    flex-wrap:wrap;
    padding:1% 2%;
    // margin-top:100px;
    // overflow-y: scroll;  só mobile
`

const DivBox=styled.div`
    width: 300px;
    height: 400px;
    padding: 20px;
    // background: #11A8B1;
    background: #ffffff;
    // border: 3px solid #11A8B1;
    margin: 15px;
    border-radius: 20px 0 20px; 0;
    // box-shadow: 0px 0px 5px gray;
        img{
            background: pink;
            width: 100%;
            height: 50%;
            border-radius: 20px 0 0 0; 
        }
`
const DivInformations=styled.div`
    height:50%;
    font-family: 'Recursive', sans-serif;
    padding: 20px 0 0 0;
    h2{
        font-size: 18px;
        font-weight: 500;
    }
    h3{
        font-size: 20px;
        font-weight:700;
    }
    // text-shadow: 1px 1px 2px teal;
    // color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const DivValue=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3{
        color: #ff930f;
    }
    div{
        color: green;
        width: 150px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        box-shadow:  0px 0px 10px gray; 
        background: white;
    }
`
const DivButton=styled.div`
    width: 100%;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #ff930f;
    border-radius: 8px;
    cursor: pointer;
    h1{
        font-size: 20px;
        font-weight: 600;
        color: white;
        text-shadow: 1px 1px 2px gray;
    }
    div{
        display: flex;
        align-items:center;
        justify-content: center;
    }
    ion-icon{
        color: white;
        font-size: 30px;
        margin-left:10px;
    }
`
const DivBottomList=styled.div`
    width: 100%;
    height: 200px; 
    border-top: 2px solid #bcb7b7; 
    border-bottom: 2px solid #bcb7b7; 
    // position: absolute;
    bottom:0;
    color: gray;
    display:flex;
    justify-content: space-between;
    padding: 0 10%;
    align-items: center;
    // background: #e2e2e2;
    ion-icon{
        font-size:30px;
        margin:0 5px;
        color: gray;
    }
    h1{
        font-family: 'Righteous', cursive;
        font-size: 20px;
        margin-right:10px;
        margin-bottom:10px;
    };
    h2{
        font-family: 'Recursive', sans-serif;
        font-size: 15px;
        margin-bottom:10px; 
    };
    h3{
        font-weight: 100;   
        font-size: 12px;
        font-family: 'Recursive', sans-serif;
        margin-bottom:10px;
    };
`
const DivSocialNetworks=styled.div`
    whidth: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const DivHelp=styled.div`
    whidth: 100%;
    display:flex;
    flex-direction:column;
    display:flex;
    justify-content: center;
    align-items: center;
`
const DivAboutUs=styled.div`
    whidth: 100%;
    display:flex; 
    flex-direction:column;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const DivBottomIcons=styled.div`
`

    // font-family: 'Rubik Dirt', cursive;
    // font-family: 'Recursive', sans-serif;
    // font-weight: 700;
    // font-size: 16px; <img src="../Logo/bolsa-removebg-preview.png"/>
        // text-shadow: 1px 1px 2px teal;
        // text-shadow: black 1px 0 10px;
        // box-shadow: 0px 5px 5px teal; 
        // box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
// cores   #0c6a6d #108d93 #0c5c5e  