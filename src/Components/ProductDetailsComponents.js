import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Servives/api";
import { Price } from "../Servives/functions";

export function ProductDetails({item}) {
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useState ([]);

    useEffect(()=> {
        getAllProducts().then((res)=>{
            setAllProducts(res.data);
        }).catch((error)=>{
            console.log(error);
        });       
    }, []);
    function otherProduct(producId){
        localStorage.setItem("productId",producId);
        navigate("/details");
        window.location.reload();   
    }

    return(
        <DivProductDetails>
            <DivFeatures>
                <h1>Características do Produto</h1>
                <DivProductFeatures>
                    <DivColor>
                        <h2>cor:</h2>
                        <div style={{background:item.color}}></div>
                    </DivColor>
                        
                    
                    <DivOthers>
                        <h2>dimensões:</h2>
                        <h3> {item.dimentions} </h3>
                    </DivOthers>
                    
                    <DivOthers>
                        <h2>peso:</h2>
                        <h3>{item.weight}</h3>
                    </DivOthers>
                    
                </DivProductFeatures>
            </DivFeatures>
            <DivRatingAndDescription>
                <DivDescription>
                        <h1>Descrição</h1>
                        <h2>
                            {item.description}
                        </h2>
                </DivDescription>
                {/* <DivRating>
                    <h1>Relevância</h1>
                    <h2>gifzinho de avaliações aqui</h2>
                </DivRating> */}
            </DivRatingAndDescription>
            
            <DivRecommendations>
                {allProducts.map((element, key)=>{
                    return(
                    <DivItemsRecommendations key={key} onClick={()=>{otherProduct(element.id)}}>
                        <img src={element.image}></img>
                        <div>
                            <h5>{element.title}</h5>
                            <h6> R$ {Price(String(element.price))}</h6>
                        </div>
                    </DivItemsRecommendations>
                    )
                })}
                
            </DivRecommendations>

        </DivProductDetails>
    )
}
const column =`
    display: flex;
    flex-direction: column;
`
const center = `
    display: flex;
    justify-content: center;
    align-items: center;
`
const justifycenter =`
    display: flex;
    justify-content: center;
`
const DivItemsRecommendations =styled.div`
    width: 250px;
    height: 250px;
    background: #f2f2f2;
    border-radius: 20px 0 20px 0;
    ${column}
    align-items: center;
    padding: 10px;
    margin-right: 30px;
    cursor:pointer;
    img{
        width: 230px;
        height: 150px;
        margin-bottom: 15px;
        border-radius: 20px 0 20px 0;
        
    }div{
        width: 230px;
        height: 60px;
        ${column}
        justify-content: space-between;
    }
    h6{
        font-weight: 700;
        font-size: 18px;  
        color: #ff930f
    }
    h5{
        font-weight: 500;
        font-size: 16px;  
    }
`;

const DivRatingAndDescription = styled.div`
    ${justifycenter}
    justify-content: space-between;
`
const DivProductDetails = styled.div`
    width: 1000px;
    background: #ffffff;
    margin: 40px 0;
    border-radius: 20px 0 20px 0;
    padding: 50px;
    h1{
        font-weight: 700;
        font-size: 18px;  
        margin-bottom:15px; 
    }
`;
const DivFeatures =styled.div``;

const DivDescription= styled.div`
    width: 500px;
    h2{
        font-weight: 500;
        font-size: 18px;
        color: #0c5c5e;
        padding: 0 60px;
    }
`;
const DivRating = styled.div`
    ${column}
    background: green;
    width: 400px;
    height: 400px;
`
const DivProductFeatures = styled.div`
    padding: 0 60px;
    margin-bottom: 60px;
    div{
        display:flex;
        margin-bottom:20px;
    }    
    div div{
        width:15px;
        height:15px;
        margin: 10px;
    }
    h2{
        font-weight: 500;
        font-size: 16px;
        color: #737373;
    }
    h3{
        font-weight: 500;
        font-size: 16px;
        margin-left: 5px;
    }
`
const DivColor = styled.div`
    width: 110px;
    height: 40px;
    border-radius: 5px;
    background: #f2f2f2;
    box-shadow: 0px 5px 5px gray;
    ${center}
`

const DivOthers= styled.div`
    width: 240px;
    height: 40px;
    background: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0px 5px 5px gray;
    ${column}
    ${center}
    
`
const DivRecommendations= styled.div`
    width: 100%;
    height: 300px;
    margin-top: 30px;
    display:flex;
    overflow-x: scroll;
`