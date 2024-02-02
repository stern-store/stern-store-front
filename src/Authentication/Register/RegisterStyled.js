import styled from "styled-components";

export const DivCoustumer=styled.div`
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

export const DivRegister=styled.div`
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
        margin-bottom:10px;
    }
`
export const FormRegister=styled.form`
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
        margin-top: 15px;
        cursor: pointer;
    }
    h3{
        color: #ff930f;
        font-size: 15px;
        font-weight: 500;
        margin-top: 15px;
        cursor: pointer;
    }
    h2{
        font-size: 15px;
        font-weight: 500;
        margin-top: 15px;
        color: red;
        cursor: pointer;
        
    }
`;
export const InputEmail=styled.input`
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
export const InputPassword=InputEmail;
export const InputPasswordConfirm=InputEmail;
export const InputName=InputEmail;
export const ButtonRegister=styled.button`
    width: 80%;
    height: 50px;
    margin-top: 5px;
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
export const DivLinks=styled.div`   
    display: flex;
    padding: 0 15%;
    div{
        display:flex;
    }
    div h3{
        margin-left: 10px;
        cursor: pointer; 
    }
`