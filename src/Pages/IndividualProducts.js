import Top from "../Components/Top";
import { ProductDetails } from "../Components/ProductDetailsComponents";
import styled from "styled-components";
import { BsStarFill, BsStar, BsHeartFill, BsHeart, BsTruck, BsCart3, BsChevronDown } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { DivButton } from "./ListProducts";
import { getFavoriteById, getProductById, postCartUser, putFavorite } from "../Servives/api";
import { useContext, useEffect, useState } from "react";
import { Price } from "../Servives/functions";
import { AuthContext } from "../Servives/Auth";
import { Alert } from "../Components/Alert";

function Informations({item}){
    const {clickImage, setClickImage} = useContext(AuthContext);
    const [productId,setProductId ] = useState(localStorage.getItem("productId"));
    const [favoriteTable, setFavoriteTable] = useState([]);
    const [heart, setHeart] = useState(<BsHeart onClick={()=>{favorite()}} style={heartStyle}/>);
    const {clickAlert, setClickAlert} = useContext(AuthContext);
    const {messageAlert, setMessageAlert} = useContext(AuthContext);

    const navigate=useNavigate();
    
    useEffect(()=>{
        getFavoriteById(productId).then((res)=>{
            if(res.data.length !=0){
                if(res.data[0].favorite==true){
                    setHeart(<BsHeartFill onClick={()=>{favorite()}} style={heartStyle}/>)
                }
            }
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    function clickBigImage() {
        setClickImage(true);
    }
    function insertCartUser(producId) {
        postCartUser(producId).then((res)=>{
                window.location.reload();
            }).catch((error)=> {
                console.log(error);
                setMessageAlert("Please login");
                setClickAlert(true);
            });
    };
    function favorite(){
        putFavorite(productId).then((res)=>{
            console.log(res.data);
            window.location.reload();
        }).catch((error)=>{
            console.log(error);
            setMessageAlert("You must be logged in to favorite an item");
            setClickAlert(true);
        })
    }

    return (
        <DivBoxItem>
            <img src={item.image} onClick={()=>{clickBigImage()}}/>
            <DivInfo>
                <div>
                    <DivNameProduct>
                        <h1>{item.title}</h1> 
                        <div>{heart}</div>
                    </DivNameProduct>
                    
                    <DivPayment>
                        <h2> R$ {Price(String(item.price))}</h2>
                        <div> <h3>em até 10x de </h3> <h4> 
                            {/* {Price(String(item.price/10))} */}
                             </h4> <h3>sem júros</h3> </div>
                    </DivPayment>

                    <DivStar>
                        <DivStock>
                            em estoque {item.quantity}
                        </DivStock>
                            {/* <div>
                                    <BsStarFill style={star}/>
                                    <BsStarFill style={star}/>
                                    <BsStarFill style={star}/>
                                    <BsStarFill style={star}/>
                                    <BsStar style={star}/>
                            </div> */}
                    </DivStar>
                </div>
                <div>
                <DivFreight>
                        <div>
                            <h5>chegará entre 28 de fevereiro e 05 de março</h5> 
                            <BsTruck style={{cursor: "pointer"}}/>
                        </div>

                        <div>
                            <h5>rua adailde sobraz, edificio Barros, apartamento,115</h5>
                            <ion-icon style={{cursor: "pointer"}}  name="location-outline"></ion-icon>
                        </div>
                    </DivFreight>

                    <DivAmountAndButton>
                        <DivButton onClick={()=>{insertCartUser(item.productId)}}>
                            <div>
                                <h1>Comprar </h1>
                                <BsCart3 style={cart}/>
                            </div>
                        </DivButton>

                        {/* <DivAmount>
                            <h3>Qtd:</h3> 
                            <h4> 4 </h4>
                            <BsChevronDown/>
                        </DivAmount> */}
                    </DivAmountAndButton>
                </div>
            </DivInfo>
        </DivBoxItem>
    );
}

export default function IndividualProducts () {
    const [productId, setProductId] = useState(localStorage.getItem("productId"));
    const [item, setItem] = useState([]);
    const {clickSearch, setClickSearch } = useContext(AuthContext);
    const {clickImage, setClickImage} = useContext(AuthContext);
    const [bigImage, setBigImage] = useState('');

    window.scroll({
        top: 0,
        left: 100,
        behavior: "smooth",
    })

    function closeSearch(){
        setClickSearch(true);
    };

    useEffect(()=> {
        getProductById(productId).then((res)=>{
            setItem(res.data[0]);
            setBigImage(res.data[0].image);
        }).catch((error)=>{
            console.log(error);
        })
    }, []);
    
    return (
    <DivItemDetails onClick={()=>{closeSearch()}}>
    <Alert/>
        <Top/>
        <DivContainer>
            {(clickImage)? 
                    <DivSpace onClick={()=>{setClickImage(false)}}>
                    <DivImage>
                        <img src={bigImage}/>
                    </DivImage>
                </DivSpace>
                : <></>}
            <Informations item={item}/>
            <ProductDetails item={item}/>
        </DivContainer>
    </DivItemDetails>);
}
const heartStyle = {
    color: "red", 
    fontSize: "25px", 
    marginLeft: "20px", 
    cursor: "pointer"
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
        cursor: pointer;
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
    justify-content: space-between;
    
    div{
        width:50px;
    }
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