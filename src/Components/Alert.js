import { useContext } from "react";
import styled from "styled-components"
import { AuthContext } from "../Servives/Auth";

export function Alert() {
    const {clickAlert, setClickAlert} = useContext(AuthContext);
    const {messageAlert, setMessageAlert} = useContext(AuthContext);

    function okay(){
        setClickAlert(false);
    }
    
    return <>
    {(clickAlert)? 
    <DivAlert><h2>{messageAlert}</h2>
    <div> <ButtonOk onClick={()=>{okay();}}> <h1>Ok</h1></ButtonOk> </div>
    </DivAlert> : <></>
    }
    </>
}
const ButtonOk = styled.div`
    width: 60px;
    height: 40px; 
    background: #bf0a0d;
    margin-left: 20px;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #295c60;
    }

    h1{
        color: #ffffff;   
        font-size: 17px;
        font-family: 'Righteous', cursive;
        font-weight: 600;
    }

`

const DivAlert = styled.div`
    width: 450px;
    height: 150px; 
    background: #efefef;
    position: fixed;
    border-radius: 10px;
    left:35%;
    top:0;
    z-index:2;
    border: 2px solid #11A8B1;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

    h2{
        color: #295c60; 
        font-size: 20px;
        font-family: 'Recursive', sans-serif;
        font-weight: 600;
    }
`