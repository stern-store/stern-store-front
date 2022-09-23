import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate=useNavigate();
    let validation;
    // validation=<h2>usuário não autorizado</h2>;
    return(
    <DivLogin>
        <DivCoustumer> <h6>Stern Store</h6></DivCoustumer>
            <h4>Stern</h4>
            <h5>Store</h5>
            <img src="../Logo/bolsa3-removebg-preview.png"/>
        <FormLogin>
            <p>Entrar</p>
            <InputEmail placeholder="email"></InputEmail>
            <InputPassword placeholder="password"></InputPassword>
            <ButtonEnter onClick={()=>{navigate("/")}}>Entrar <ion-icon name="arrow-redo"></ion-icon></ButtonEnter>
            
            <DivLinks>
                <h1 onClick={()=>{navigate("/security")}}>Esqueci minha senha</h1>
                <h3 onClick={()=>{navigate("/register")}} >Cadastre-se</h3>
            </DivLinks>
            {validation} 
        </FormLogin>
        
    </DivLogin>);
};
const DivCoustumer=styled.div`
    width: 100%;
    height: 300px;
    background: #11A8B1;
    position: fixed;
    top:0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DivLogin=styled.div`
    height:100vh;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
         //se for menor que 830px ativar do display flex column
         width: 350px;
         position: relative;
         z-index:2;
    }
    h4{
        color: white;
        font-size: 50px;
        font-family: 'Righteous', cursive;
        position: Absolute;
        z-index:3;
        margin-left: -410px;
        margin-top: 70px;
        transform: rotate(-5deg);
    }
    h5{
        color: white;   
        font-size: 50px;
        font-family: 'Righteous', cursive;
        position: Absolute;
        z-index:3;
        margin-top: 180px;
        margin-left: -400px;
        transform: rotate(-5deg);
    }
    h6{
        font-family: 'Righteous', cursive;
        font-size: 80px;
        color: white;
        margin-left: 350px;
    }
    p{
        color: #ff930f;
        font-size: 25px;
        font-weight:700;
        margin-bottom: 30px;
    }
`
const FormLogin=styled.form`
    width: 450px;
    height: 450px;
    display: flex;
    background: #fff;
    border: 5px double #b7b7b7;
    flex-direction: column;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
    font-family: 'Recursive', sans-serif;
    h1{
        color: #b7b7b7;
        font-size: 15px;
        font-weight: 500;
        margin-top: 25px;
        cursor: pointer;
    }
    h3{
        color: #ff930f;
        font-size: 15px;
        font-weight: 500;
        margin-top: 25px;
        cursor: pointer;
    }
    h2{
        font-size: 15px;
        font-weight: 500;
        margin-top: 25px;
        color: red;
        cursor: pointer;
        
    }
`;
const InputEmail=styled.input`
    font-size: 17px;
    width: 80%;
    height: 50px;
    outline: none;
    background: #ffffff;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 1px solid #ff930f;
    padding-left:25px;
    ::placeholder{
        color: #737373;
    }
`;
const InputPassword=InputEmail;
const ButtonEnter=styled.button`
    width: 80%;
    height: 50px;
    margin-top: 30px;
    border-radius: 10px;
    border: 1px solid transparent;
    background: #ff930f;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Recursive', sans-serif;
    font-size: 20px;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    ion-icon{
        margin-left: 15px;
    }
`;
const DivLinks=styled.div`
    width: 100%;    
    display: flex;
    justify-content: space-between;
    padding: 0 15%;
`