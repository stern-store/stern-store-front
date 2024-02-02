import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import Top from "../../Components/Top";
import Bottom from "../../Components/Bottom";
import { BsStarFill, BsStar, BsCart3, BsStarHalf } from 'react-icons/bs';
import { getAllProducts, getCartUser, getRatingById, postCartUser } from "../../Servives/api";
import { useEffect, useState } from "react";

const categoria=["eletronico", "eletro-domesticos", "decoração", "moda", "moveis", "papelaria" ];

export default function Products(){
    const navigate=useNavigate();
    const [allProducts, setAllProducts] = useState ([]);
    const [cart, setCart] = useState([]);
    
    const [ratings, setRatings] = useState ([]);
    const [rating, setRating] = useState (0);
    const BsStarFillIcon = <BsStarFill style={star}/>
    const BsStarIcon = <BsStar style={star}/>
    const BsStarHalfIcon = <BsStarHalf style={star}/>

    useEffect(()=> {
        getAllProducts().then((res)=>{
            // console.log(e.data);
            setAllProducts(res.data);
        }).catch((error)=>{
            console.log(error); // tratar o erro 
        });

        getCartUser().then((res)=>{
            // console.log(res.data);
            setCart(res.data);
        }).catch((error)=>{
            console.log("deu ruim", error);
        });

    }, []);

    function Price (price) {
        const arrayPrice = price.split("");
        arrayPrice.splice([price.length - 2], 0 , ".");
        const newPrice = arrayPrice.join("")
        return newPrice;
    };

    function insertCartUser(producId) {
        postCartUser(producId).then((res)=>{
                console.log(res);
            }).catch((error)=> {
                console.log(error);
            });
    };
    console.log(cart);
    
    function Rating (productId) {
        const arrayRatings = [];
        // console.log("primeirooo", ratings)
        // getRatingById(productId).then((e) => {
        //     if(e.data.rating) {
        //         setRating(e.data.rating);
        //     }
        //     for(let i=0; i<5; i++){
        //         arrayRatings.push(BsStarFillIcon);
        //     }
        // }).catch((e) => {
        //     console.log("Deu Ruimmmmm");
        // });
        //     if(arrayRatings.length != 0){
        //         setRatings(arrayRatings);
        //     };
        return ratings
    };
    // function addCart(productId) {
    // }
 
    return(<DivList>
           <Top/>
            <DivCategory> 
                {categoria.map((e)=>(
                  <div className="category"><h1>{e}</h1></div> 
                ))}    
            </DivCategory>

        <DivMidList>
            {allProducts.map((product, i)=>(
                <DivBox  key={i}>
                    <img onClick={()=>{navigate('/details')}} src={product.image}/>
                    <DivInformations>
                        <h2>{product.title}</h2>
                        <DivValue>
                            <h3>R$ {Price(product.price)}</h3>
                            
                            <div>
                                {Rating(product.id)}
                            </div>
                        
                        </DivValue>
                        <DivButton onClick={()=>{
                                insertCartUser(product.id);
                            }}>
                            <div>
                                <h1>Comprar </h1>
                                <BsCart3 style={cartStyle}/>
                            </div>
                        </DivButton>
                    </DivInformations>
                </DivBox>))}
        </DivMidList>
        <Bottom/>
    </DivList>);
};
const star= {
    color: "#e8d833",
    fontSize: "20px",
    marginLeft: "5px"
};
const cartStyle= {
    color: "#FFFFFF",
    fontSize: "25px",
    marginLeft:"10px",
};
const DivList=styled.div``
const DivCategory=styled.div`
    position: fixed;
    top: 100px;
    width: 100%;
    height: 50px;
    background: #bf0a0d;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    box-shadow: 0px 5px 5px gray;
    // z-index: 1;
    .category{
        width:  200px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .category h1{
        font-size: 20px;
        font-family: 'Righteous', cursive;
        color: white;
    }
    .category h1:hover{
        color: #f8a523;
    }
`;
const DivMidList=styled.div`
    width: 80%;
    height:100%;
    margin: 150px auto;
    display:flex;
    flex-wrap:wrap;
    padding:1% 2%;
`;
const DivBox=styled.div`
    width: 280px;
    height: 400px;
    background: #ffffff;
    margin: 15px;
    padding: 20px;
    border-radius: 20px 0 20px; 0;
        img{
            background: pink;
            width: 100%;
            height: 50%;
            border-radius: 20px 0 20px 0; 
        }
        &:hover{
            background: #e2e2e2;
        }
`;
const DivInformations=styled.div`
    height:50%;
    font-family: 'Recursive', sans-serif;
    padding: 20px 0 0 0;
    h2{
        font-size: 18px;
        font-weight: 500;
    }
    h3{
        font-size: 20px;
        font-weight:700;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;
const DivValue=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3{
        color: green;
    }
`;
 export const DivButton=styled.div`
    width: 100%;
    height: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    background: #ff930f;
    border-radius: 8px;
    cursor: pointer;
    h1{
        font-size: 20px;
        font-weight: 600;
        color: white;
        text-shadow: 1px 1px 2px gray;
    }
    div{
        display: flex;
        align-items:center;
        justify-content: center;
    }
    ion-icon{
        color: white;
        font-size: 30px;
        margin-left:10px;
    }
`;