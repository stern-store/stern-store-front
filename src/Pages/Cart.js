import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsChevronDown, BsTrashFill } from 'react-icons/bs';
import { deleteItem, getCartDetails } from "../Servives/api";
import { useContext, useEffect, useState } from "react";
import { Price } from "../Servives/functions";
import { AuthContext } from "../Servives/Auth";
import { Alert } from "../Components/Alert";

function localization(){
    alert("maintenance");
}

export default function Cart(){
    const navigate=useNavigate();
    const [cartUser, setCartUser] = useState ([]);
    const [checkBox, setCheckBox] = useState([]);
    const [total, setTotal] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);
    const {clickAlert, setClickAlert} = useContext(AuthContext);
    const {messageAlert, setMessageAlert} = useContext(AuthContext);

    useEffect(()=> {
        getCartDetails().then((res)=>{
            setCartUser(res.data);
        }).catch((error)=>{
            console.log(error);
        })
    }, []);

    function selectedItem(cartId, price) {
        const itemIndex = checkBox.findIndex(item => item === cartId);
        if (itemIndex === -1) {
            setTotal(total+price);
            setCheckBox([...checkBox, cartId]);
        } else {
            const updatedCheckBox = [...checkBox];
            updatedCheckBox.splice(itemIndex, 1);
            setCheckBox(updatedCheckBox);
            setTotal(total-price);
        }
    }

    function deleteItemCart(cartId) {
        deleteItem(cartId).then((res)=>{
            window.location.reload();
        }).catch((error)=> {
            console.log(error);
        })
    }

    function confirm(){
        if(checkBox.length!=0){
            navigate("/payment");
        }else{
            setMessageAlert("No items selected");
            setClickAlert(true)
        }
    }
    
    useEffect(()=>{
        if(total>0){
            setPriceTotal(Price(String(total)));
        }else{
            setPriceTotal(0);
        }
    }, [total]);

    return(
    <DivCart>
        <Alert/>
        <DivTopCart>
                <DivSpace>
                    <ion-icon onClick={()=>{navigate("/")}} name="arrow-back-outline"></ion-icon>
                    <h1>Stern Store</h1> 
                </DivSpace>
                <DivSpace>
                    <h2>Seu carrinho</h2> 
                    <ion-icon onClick={()=>{window.location.reload()}} name="cart-outline"></ion-icon>
                    <DivCircle><h5>{cartUser.length}</h5></DivCircle>
                </DivSpace>    
                <DivSpace>
                    <h3>Endereço</h3>
                    <ion-icon onClick={()=>{localization()}} name="location-outline"></ion-icon>
                </DivSpace>
        </DivTopCart>
        <DivContainer>
            <DivProducts>
                {cartUser.map((element,key)=>(
                <DivBox key={key}>

                    <DivSubBox>
                        <img src={element.image} onClick={() => {navigate("/details")}}/>
                        <DivBoxInfo>
                            <h1>{element.title}</h1>
                            <h2>R$ {Price(element.price)}</h2>       
                        </DivBoxInfo>
                    </DivSubBox>

                    <DivBoxDecision>
                        <DivCheckBox >
                            <input id="c1" type="checkbox" onClick={()=>{ selectedItem(element.cartId,Number(element.price))}}/>
                        </DivCheckBox>
                        <BsTrashFill style={trash} onClick={()=>{deleteItemCart(element.cartId)}}/>
                    </DivBoxDecision>

                </DivBox>))}

            </DivProducts>
            <DivConfirm>
                    <h1>{checkBox.length} itens</h1>
                    <DivTotal>
                        <h2>Total:</h2>
                        <h3>R$ {priceTotal}</h3>
                    </DivTotal>
                    <ButtonConfirm onClick={()=>{confirm()}}><h4>Confirmar Pedido</h4></ButtonConfirm>
            </DivConfirm>
        </DivContainer>

    </DivCart>)
};
const trash = {
    color: "#FFFFFF",
    fontSize: "20px",
    margin: "0 0 0 10px",
    cursor: "pointer"
}
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
    height: 100%;
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
        cursor:pointer;
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
        font-weight: 600;
        font-size: 20px;
        margin-top: 10px;
        text-shadow: 1px 1px 2px teal;
        color: #ffffff;
    }
`;
const DivBoxDecision=styled.div`
    width: 70px;
    height:100%;
    padding: 16px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    font-family: 'Recursive', sans-serif;
    color: white;   
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

const DivCircle=styled.div`
    width: 17px;
    height: 17px;
    background: #bf0a0d;
    border-radius: 100%;
    position: absolute;
    margin: 0 0 20px 230px;
    display: flex;
    justify-content: center;
    align-items:center; 

    h5{
        color: #ffffff;
        font-size: 12px;
        font-family: 'Righteous', cursive;
    }

`;