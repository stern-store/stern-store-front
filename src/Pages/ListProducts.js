import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom"
import Top from "../Components/Top";
import Bottom from "../Components/Bottom";
import { BsCart3} from 'react-icons/bs';
import { getAllProducts, getCartUser, getCategories, getProductsByCategory, postCartUser } from "../Servives/api";
import { useContext, useEffect, useState } from "react";
import { Price } from "../Servives/functions";
import { AuthContext } from "../Servives/Auth";
import { Alert } from "../Components/Alert";


export default function Products(){
    const navigate=useNavigate();
    const [allProducts, setAllProducts] = useState ([]);
    const [categories, setCategories] = useState([]);
    const { clickSearch, setClickSearch } = useContext(AuthContext);
    const { clickSearchsRender, setClickSearchsRender} = useContext(AuthContext);
    const {clickAlert, setClickAlert} = useContext(AuthContext);
    const {messageAlert, setMessageAlert} = useContext(AuthContext);

    useEffect(()=> {
        getAllProducts().then((res)=>{
            setAllProducts(res.data);
        }).catch((error)=>{
            console.log(error);
        });       
        getCategories().then((res)=>{
            setCategories(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    useEffect(()=>{
        if(clickSearchsRender){
            setAllProducts(JSON.parse(localStorage.getItem("searchs")));
            setClickSearchsRender(false);
        }
    },[clickSearchsRender]);

    function insertCartUser(producId) {
        postCartUser(producId).then((res)=>{
                window.location.reload();
            }).catch((error)=> {
                console.log(error);
                setMessageAlert("Please login");
                setClickAlert(true);
            });
    };
    function detailsProduct(producId) {
        localStorage.setItem("productId",producId);
        navigate("/details");
    };
    function clickCategory(categoryId){
        getProductsByCategory(categoryId).then((res)=>{
            setAllProducts(res.data);
        }).catch((error)=>{
            console.log(error);
        });
    };
    function closeSearch(){
        setClickSearch(true);
    };

    return(<DivList onClick={()=>{closeSearch()}}>
        <Alert/>
           <Top/>
            <DivCategory className="scroll"> 
                {categories.map((element, key)=>{
                        return <div key={key} onClick={()=>{clickCategory(element.id)}} className="category"><h1>{element.category}</h1></div>
                })}
            
            </DivCategory>

        <DivMidList>
            {allProducts.map((product, key)=>(
                <DivBox  key={key}>
                    <img onClick={()=>{detailsProduct(product.id);}} src={product.image}/>
                    <DivInformations>
                        <h2>{product.title}</h2>
                        <DivValue>
                            <h3>R$ {Price(String(product.price))}</h3>  
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
const DivList=styled.div`
    .scroll::-webkit-scrollbar-track {
        background: none;
      }
      .scroll::-webkit-scrollbar {
        width: 10px; 
        height: 5px;             
      }
      .scroll::-webkit-scrollbar-thumb {
        background-color: orange;    
        border-radius: 20px;       
      }
      
`
const DivCategory=styled.div`
    position: fixed;
    top: 100px;
    width: 100%;
    height: 55px;
    background: #bf0a0d;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    box-shadow: 0px 5px 5px gray;
    overflow-x: scroll;
    overflow-y: hidden;

    // z-index: 1;
    .category{
        width: 300px;
        margin: 0 50px;
        cursor: pointer;
    }
    .category h1{
        font-size: 20px;
        font-family: 'Righteous', cursive;
        color: white;
    }
    .category::-webkit-scrollbar-track {
        background: orange;
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
            cursor: pointer;
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