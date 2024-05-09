import { useNavigate } from "react-router-dom";
import { ButtonEnter, 
    DivCoustumer,
    DivLinks,
    DivLogin,
    FormLogin,
    InputEmail,
    InputPassword } from "./LoginStyled";
import { useState } from "react";
import { postLogin } from "../../Servives/api";

export default function Login(){
    const navigate=useNavigate();
    const [validation, setValidation] = useState("");
    const [signIn, setSignIn] = useState(
        {
            email:"",
            password:""
        }
    );

    function formEvent(event) {
        event.preventDefault();
    };

    function enterLogin(email,password) {
        postLogin(email,password)
            .then((response)=>{
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("userId", response.data.userId);
                navigate("/");
                window.location.reload();
            })
            .catch((error)=>{
                console.log(error);
                setValidation("Unauthorized");
            });
    };

    return(
    <DivLogin>
        <DivCoustumer> <h6>Stern Store</h6></DivCoustumer>
            <h4>Stern</h4>
            <h5>Store</h5>
            <img src="../Logo/bolsa3-removebg-preview.png"/>
        <FormLogin onSubmit={formEvent}>
            <p>Entrar</p>
            <InputEmail placeholder="email" type="email" onChange={(element)=>{setSignIn({...signIn, email: element.target.value})}}></InputEmail>
            <InputPassword placeholder="password" type="password" onChange={(element)=> {setSignIn({...signIn, password: element.target.value})}}></InputPassword>
            <ButtonEnter onClick={()=>{enterLogin(signIn.email,signIn.password)}}>Entrar <ion-icon name="arrow-redo"></ion-icon></ButtonEnter>
            
            <DivLinks>
                <h1 onClick={()=>{navigate("/security")}}>Esqueci minha senha</h1>
                <h3 onClick={()=>{navigate("/register")}} >Cadastre-se</h3>
            </DivLinks>
            <h2>{validation}</h2>
            <h3 onClick={()=>{navigate("/")}}>Entrar sem Login</h3>
        </FormLogin>
        
    </DivLogin>);
};