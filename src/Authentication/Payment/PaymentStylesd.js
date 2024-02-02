import styled from "styled-components";

export const DivPayment=styled.div``;
export const DivTopPayment=styled.div`

    width: 100%;
    height: 100px;
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
    ion-icon{
        font-size: 30px;
        cursor: pointer;
        color: white;
    }
`;
export const DivSpace=styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
`;
export const DivContainerPayment=styled.div`
    font-family: 'Recursive', cursive;
    margin: 110px auto 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const DivPaymentDetails=styled.div`
    width: 1000px;
    height:550px;
    margin: 10px auto;
    p{
        font-size: 30px;
        font-weight: 800;
        text-align: center;
        margin-bottom: 20px;
        color: #4f151c;
    }
`
export const DivPaymentForm=styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

`;
export const DivPix=styled.div`
    color: white;
    // color: #ff930f;
    background: #ff930f;
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    border-radius: 5px;
    margin: 5px;
    // border: 1px solid #ff930f;
    h1{
        font-size: 25px;
        font-weight: 600;
        margin-left: 15px;
    }
    ion-icon{
        font-size: 30px;
    }
`;
export const DivTicket=DivPix;
export const DivCard=DivPix;
export const FormCardData=styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    // background: red;
    align-items: center;
    h3{
        font-size:20px;
        font-weight: 500;
        color: #4f151c;
    }
    h4{
        font-size: 18px;
    }
`;
export const InputCardData=styled.input`
    width: 90%;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #ff930f;
    background: transparent;
    margin-bottom: 15px;
    outline:none;
`;
export const ButtonCardData=styled.button`
    font-family: 'Recursive', cursive;
    width: 300px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid transparent;
    background: #ff930f;
    margin-top:30px;
    h2{
        font-size: 25px;
        font-weight: 600;
        color: #ffffff;
        font-family: 'Recursive', cursive;
    }
`;

export const DivButtonSelected=styled.div`
    width: 200px;
    height:40px;
    background: #e2e2e2;
    border: 1px solid black;
    padding: 0 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    margin-top: -15px;
`;
export const InputCardDataDate=styled.input`
    width: 30%;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #ff930f;
    background: transparent;
    margin-bottom: 15px;
    outline:none;
`
export const InputCardDataCVV=styled.input`
    width: 20%;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #ff930f;
    background: transparent;
    margin-bottom: 15px;
    outline:none;
`
export const DivInputs=styled.div`
    width:90%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`