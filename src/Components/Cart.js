import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const arr=[1,2,3,4,5,6,7,8,9,10];
const quantidade=3;

function localization(){
    alert("Põe a localização ae pra nós");
}


export default function Cart(){
    const navigate=useNavigate();
    function confirm(){
        navigate("/payment");
    }
    return(
    <DivCart>
        <DivTopCart>
                <DivSpace>
                    <ion-icon onClick={()=>{navigate("/")}} name="arrow-back-outline"></ion-icon>
                    <h1>Stern Store</h1> 
                </DivSpace>
                <DivSpace>
                    <h2>Seu carrinho</h2> 
                    <ion-icon onClick={()=>{window.location.reload()}} name="cart-outline"></ion-icon>
                </DivSpace>    
                <DivSpace>
                    <h3>Endereço</h3>
                    <ion-icon onClick={()=>{localization()}} name="location-outline"></ion-icon>
                </DivSpace>
        </DivTopCart>
        <DivContainer>
            <DivProducts>
                {arr.map((e)=>(
                <DivBox>
                    <DivSubBox>
                        <img src="./Logo/lampada.jpeg"/>
                        <DivBoxInfo>
                            <DivBoxInfoTop>
                            <h1>nome do produto</h1>
                            <h2>preço</h2>
                            </DivBoxInfoTop>
                            <div className="amount">
                                <DivAmount>
                                    <h3>Qtd:</h3> 
                                    <h4> {quantidade} </h4>
                                    <ion-icon name="chevron-down"></ion-icon>
                                </DivAmount>
                                <div className="iconTrash">
                                    <ion-icon name="trash-bin"></ion-icon>
                                </div>
                            </div>
                        </DivBoxInfo>
                    </DivSubBox>
                    <DivBoxDecision>
                        <h1>SubTotal</h1>
                        <DivSubTotal>
                            <h2>R$ 20,00</h2>
                            <DivCheckBox>
                                <input id="c1" type="checkbox"/>
                                {/* <label for="c1">Check 1</label> */}
                            </DivCheckBox>
                        </DivSubTotal>
                    </DivBoxDecision>
                </DivBox>))}
            </DivProducts>
            <DivConfirm>
                    <h1>5 itens</h1>
                    <DivTotal>
                        <h2>Total:</h2>
                        <h3>R$ 129,90</h3>
                    </DivTotal>
                    <ButtonConfirm onClick={()=>{confirm()}}><h4>Confirmar Pedido</h4></ButtonConfirm>
            </DivConfirm>
        </DivContainer>

    </DivCart>)
};
const DivCart=styled.div``
const DivTopCart=styled.div`
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
    box-shadow: 0px 5px 5px teal;
    padding: 0 3%;  
    h1{
        color: white;   
        font-size:50px;
        font-family: 'Righteous', cursive;
        margin-left:20px;  
    }
    h2{
        font-size: 30px;
        font-family: 'Recursive', cursive;
        font-weight:900;
        color: white;
        margin-right:20px;
    }
    h3{
        font-size: 20px;
        font-family: 'Recursive', cursive;
        font-weight: 500;
        color: white;
        margin-right:20px;
    }
    ion-icon{
        font-size: 30px;
        cursor: pointer;
        color: white;
    }
`;

const DivSpace=styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;

const DivContainer=styled.div`
    margin-top: 100px;
    whidt: 100%;
    height: 100%; // ajeitaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrr
    display: flex;
`;
const DivProducts=styled.div`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items:center;

`;
const DivBox=styled.div`
    width: 95%;
    height: 200px;
    background: #11A8B1;
    border-radius: 10px 0 10px 0;
    margin: 25px auto;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    box-shadow: 10px 5px 5px teal;   
    img{
        width: 240px;
        height: 170px;
        border-radius: 10px 0 10px 0;
    }
`;
const DivSubBox=styled.div`
  display: flex;
`
const DivBoxInfo=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left:20px;
    h1{
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 20px;
        text-shadow: 1px 1px 2px teal;
        color: white;
    }
    h2{
        font-family: 'Recursive', sans-serif;
        font-weight: 500;
        font-size: 20px;
        margin-top: 10px;
        text-shadow: 1px 1px 2px teal;
        color: white;
    }
    .amount{
        width: 130px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }
    .amount .iconTrash ion-icon{
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
`;
const DivBoxInfoTop=styled.div``
const DivAmount=styled.div`
    width: 80px;
    height: 40px;
    background: #eaeaea;
    box-shadow: 0px 5px 5px teal; 
    border-radius: 12px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Recursive', sans-serif;
    cursor: pointer;
    h4{
        font-weight: 600;
    }
    ion-icon{
        font-size: 20px;
    }
    
`;
const DivBoxDecision=styled.div`
    width: 250px;
    height:100%;
    padding: 16px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    font-family: 'Recursive', sans-serif;
    color: white;   
    h1{
        border-bottom: 2px solid #eaeaea;
        margin-bottom: 10px;
        padding-bottom: 10px;
        font-size: 15px;
    }
    h2{
        font-weight: 600;
        font-size: 20px;
        text-shadow: black 1px 0 10px;
    }
`;
const DivSubTotal=styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const DivCheckBox=styled.div`
    input[type="checkbox"]{
        appearance:none;
        -webkit-appearence:none;
        width: 30px;
        height: 30px;
        background: #eaeaea;
        border-radius: 8px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: center;
        align-items:center;
    }
    input[type="checkbox"]:after{
        content: "\f00c"; //barra inversa
        font-size: 20px;
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        color: white;
        display: none;
    }
    input[type="checkbox"]:hover{
        background: #bfbdbd;
    }
    input[type="checkbox"]:checked{
        background: #bf0a0d;
    }
    input[type="checkbox"]:checked:after{
        display: block;
    }
`;
const DivConfirm=styled.div`
    width: 40%;
    height: 700px;
    position: fixed;
    top: 100px;
    right: 0px;
    padding: 25px 0 0 70px;
    font-family: 'Recursive', sans-serif;
    font-size: 27px;
    h1{
        font-weight: 600;
        color: #0c5c5e;
        margin: 20px 0;
    }
    h2{
        font-weight: 800;
        color: #0c5c5e;
    }
    h3{
        font-weight: 800;
        color: #ff930f;
        text-shadow: 1px 1px 2px teal;
        margin-left: 20px;
    }
`;
const ButtonConfirm=styled.button`
    width: 300px;
    height: 60px;
    background: #ff930f;
    border: 1px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    h4{
        font-family: 'Recursive', sans-serif;
        color: white;
        font-size: 25px;
        font-weight: 800;
    }
`
const DivTotal=styled.div`
    display: flex;
    margin: 20px 0;
`;