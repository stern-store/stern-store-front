import Top from "../../Components/Top";

import { ProductDetails } from "../../Components/ProductDetailsComponents";

import styled from "styled-components";
import { BsStarFill, BsStar, BsHeartFill, BsHeart, BsTruck, BsCart3, BsChevronDown } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

import { DivButton } from "../ListProducts/ListProducts";

const linkImg = "https://media.istockphoto.com/id/1225329047/pt/foto/green-screen-for-cybersport-game.jpg?s=170667a&w=0&k=20&c=qBMnYvewrhaeCjOKKLF5z8zkistzrNNPB2vR3sqECZg="

function Informations(){
    const navigate=useNavigate()
    return (
        <DivBoxItem>
            <img src={linkImg} onClick={()=>{alert("mostra a imagem ai namoral")}}/>
            <DivInfo>
                <div>
                    <DivNameProduct>
                        <h1>Alexa Versão 4000 texto aqui lalalala blablabla muita coisa aaaaaaaaaaaaaaaaaa aaaaaaaaa</h1> 
                        <BsHeart style={{color: "red", fontSize: "40px", marginLeft: "20px", cursor: "pointer"}}/>
                    </DivNameProduct>
                    
                    <DivPayment>
                        <h2> R$ 500,00 </h2>
                        <div> <h3>em até 10x de </h3> <h4> 50,00</h4> <h3>sem júros</h3> </div>
                    </DivPayment>

                    <DivStar>
                        <DivStock>
                            em estoque 4
                        </DivStock>
                        <div>
                                <BsStarFill style={star}/>
                                <BsStarFill style={star}/>
                                <BsStarFill style={star}/>
                                <BsStarFill style={star}/>
                                <BsStar style={star}/>
                        </div>
                    </DivStar>
                </div>
                <div>
                <DivFreight>
                        <div>
                            <h5>chegará entre 28 de fevereiro e 05 de março</h5> 
                            <BsTruck style={{cursor: "pointer"}}/>
                        </div>

                        <div>
                            <h5>rua professor luiz claudio sobreira correia</h5>
                            <ion-icon style={{cursor: "pointer"}}  name="location-outline"></ion-icon>
                        </div>
                    </DivFreight>

                    <DivAmountAndButton>
                        <DivButton style={{width: "250px"}}>
                            <div>
                                <h1>Comprar </h1>
                                <BsCart3 style={cart}/>
                            </div>
                        </DivButton>

                        <DivAmount>
                            <h3>Qtd:</h3> 
                            <h4> 4 </h4>
                            <BsChevronDown/>
                        </DivAmount>
                    </DivAmountAndButton>
                </div>
            </DivInfo>
        </DivBoxItem>
    );
}
const star= {
    color: "#e8d833",
    fontSize: "20px",
    marginLeft: "5px"
};
const cart= {
    color: "#FFFFFF",
    fontSize: "25px",
    marginLeft:"10px",
};

export default function IndividualProducts () {
    return (
    <DivItemDetails>
        <Top/>
        <DivContainer>

            {/* <DivSpace>
                <DivImage>
                    <img src={linkImg}/>
                </DivImage>
            </DivSpace> */}

            <Informations/>
            <ProductDetails/>
        </DivContainer>
    </DivItemDetails>);
}


const column =`
    display: flex;
    flex-direction: column;
`;
const center = `
    display: flex;
    justify-content: center;
    align-items: center;
`;
const DivItemDetails = styled.div` 
    width: 100%;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;
const DivContainer = styled.div`
    padding-top: 130px;
    ${center}
    flex-direction: column;
`;
const DivBoxItem = styled.div`
    width: 1000px;
    height: 500px;
    background: #ffffff;
    border-radius: 20px 0 20px 0;
    ${center}

    img {
        width: 500px;
        height: 400px;
        border-radius: 20px 0 20px 0;
    };
`;
const DivInfo = styled.div`
    width:400px;
    height: 400px;
    padding: 0 0 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const DivStock = styled.div`
    color: green;
    width: 140px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    box-shadow:  0px 0px 10px gray; 
    background: white;
`;
const DivAmount=styled.div`
    width: 90px;
    height: 40px;
    background: #eaeaea;
    box-shadow: 0px 5px 5px gray;
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
const DivNameProduct=styled.div`
    display: flex;
    font-weight: 500;
    h1{
        font-size: 19px;
    }
`;
const DivPayment= styled.div`
    ${column}
    margin: 20px 0;
    
    div{
        display: flex;
    }
    h2{
        font-weight: 800;
        font-size: 25px;
        color: #ff930f;
        margin-bottom: 5px;
    }
    h3, h4{
        font-weight: 500;
        font-size: 18px;
    }
    h3{
        color: #777777;
    }
    h4{
        color: #ff930f;
        margin: 0 5px;
    }
`;

const DivFreight= styled.div`
    margin: 0 0 20px 0;
    div{
        display: flex;
    }
    h5{
        margin: 0 10px 10px 0;
    }
`;

const DivAmountAndButton= styled.div`
    display: flex;
    justify-content: space-between;
`;
const DivStar = styled.div`
    display: flex;
    justify-content: space-between;
`;
const DivImage = styled.div`
    padding: 10px;
    background-color: gray;
    z-index: 1;
    img{
        width: 1100px;
    }
`;
const DivSpace = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(141, 141, 141, 0.718);
    position:fixed;
    top:0;
    z-index: 2;
    ${center}
`