import { useNavigate } from "react-router-dom";
import { ButtonRegister,
    DivCoustumer,
    DivLinks,
    DivRegister,
    FormRegister,
    InputEmail,
    InputName,
    InputPassword,
    InputPasswordConfirm } from "./RegisterStyled";
import { useState } from "react";
import { postRegister } from "../../Servives/api";

export default function Register(){
    const navigate=useNavigate();
    const [validation, setValidation] = useState("");
    const [signUp, setSignUp]= useState(
        {
            name: "",
            email: "",
            password: "",
            confirmpassword:""
        }
    );

    function formEvent(event) {
        event.preventDefault();
    };

    function createRegister(name,email,password){
        postRegister(name,email,password)
            .then((response)=>{console.log(response)
                setValidation("");
                navigate("/login");
            })
            .catch((response)=>{console.log(response)
                if(response.response.data.message){
                    setValidation(response.response.data.message);
                };
            });
    };

    return(
    <DivRegister onSubmit={formEvent}>
        <DivCoustumer> <h6>Stern Store</h6></DivCoustumer>
            <h4>Stern</h4>
            <h5>Store</h5>
            <img src="../Logo/bolsa3-removebg-preview.png"/>
        <FormRegister>
            <p>Registrar</p>
            <InputName placeholder="name" onChange={(element)=>{ setSignUp({...signUp, name:element.target.value}) }} required/>
            <InputEmail placeholder="email" onChange={(element)=>{ setSignUp({...signUp, email:element.target.value}) }} type="email" required/>
            <InputPassword placeholder="password" onChange={(element)=>{ setSignUp({...signUp, password:element.target.value}) }} type="password" required/>
            <InputPasswordConfirm placeholder="confirm password" onChange={(element)=>{ setSignUp({...signUp, confirmpassword
                :element.target.value}) }} type="password" required/>

            <ButtonRegister onClick={()=>{ 
                setValidation("");
                    if(signUp.password != signUp.confirmpassword){
                        setValidation("Passwords need to be the same");
                    }if(signUp.email.length < 5){
                        setValidation("Please exnter a valid email");
                    }if(signUp.password.length < 4 || signUp.confirmpassword.length < 4 ){
                        setValidation("Password must contain more than 4 characters");
                    }if(signUp.name.length < 2){
                        setValidation("Name must contain more than 2 characters");
                    }if(signUp.password === signUp.confirmpassword && signUp.email.length >= 5 && signUp.name.length >= 2){
                    createRegister(signUp.name, signUp.email, signUp.password);
                    }  
                }}>Registrar <ion-icon name="arrow-redo"></ion-icon></ButtonRegister>

            
            <DivLinks onClick={()=>{navigate("/login")}}>
                <div>
                    <h1>já tem uma conta?</h1>
                    <h3 >Entre</h3>
                </div>
            </DivLinks>
            <h2>{validation}</h2>
        </FormRegister>
        
    </DivRegister>);
};