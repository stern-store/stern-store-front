import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getCartUser, getSearch } from "../Servives/api";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Servives/Auth";

export default function Top(){
    const navigate=useNavigate();
    const [cart, setCart] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { clickSearch, setClickSearch } = useContext(AuthContext);
    const [searchs, setSearchs] = useState([]);
    const { clickSearchsRender, setClickSearchsRender} = useContext(AuthContext);
    const [clickExit, setClickExit] = useState(false);
    const [errorCart, setErrorCart] = useState(0);
    const {clickAlert, setClickAlert} = useContext(AuthContext);
    const {messageAlert, setMessageAlert} = useContext(AuthContext);
    const [DivClickExit, setDivClickExit] = useState(
    <DivExit>
        <div><h2>Deseja mesmo sair?</h2></div>
        <div>
            <DivButtonExistYes onClick={()=>{confirmExit()}} ><h2>Yes</h2></DivButtonExistYes>
            <DivButtonExistNo onClick={()=>{comeBack()}}><h2 style={{color:"#11A8B1"}}>No</h2></DivButtonExistNo>
        </div>
    </DivExit>);

    useEffect(()=> {
        getCartUser().then((res)=>{
            setCart(res.data);
            setErrorCart(0);
        }).catch((error)=>{
            setErrorCart(error.request.status);
        });
    }, []);
    useEffect(()=>{
        if(searchInput.length==0){
            setSearchResults([]);
        }
        if(searchInput.length!=0){
            getSearch(searchInput).then((res)=>{
                setSearchResults(res.data);
                setSearchs(res.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
    },[searchInput]);

    useEffect(()=>{
        if(clickSearch){
            setSearchResults([]);
            setClickSearch(false);
        }
    },[clickSearch]);

    localStorage.setItem("searchs",JSON.stringify(searchs));

    
    function formEvent(event) {
        event.preventDefault();  
    };
    function detailsProduct(producId) {
        localStorage.setItem("productId",producId);
        navigate("/details");
        window.location.reload();
    };
    function exit(){
        if(localStorage.getItem("userId")!=null){
            setClickExit(true);
        }else{
            setMessageAlert("Can't log out, there is no login")
            setClickAlert(true);
        }
    };
    function comeBack() {
        setClickExit(false);
    };
    function confirmExit() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        setClickExit(false);
        navigate("/login");
        window.location.reload();
    };      
    function search(){
        setClickSearchsRender(true);
    };
    function login(){
        if(errorCart===401){
            navigate("/login");
        }else{
            setMessageAlert("User is already logged in");
            setClickAlert(true);
        }   
    };
    // function menu(){
    //     alert("libera o menu ai");
    // };

    return (
        <DivTopList>
            {/* <DivMenu>
               <div>
                    <h6>Menu</h6> <h6>icon</h6>
               </div>
               <div>
                    <h2>aaa</h2> <h3>bbb</h3>
               </div>
            </DivMenu> */}
            {/* <ion-icon onClick={()=>{menu()}} name="menu"></ion-icon> */}
            <h1>Stern Store</h1>
            <DivSearch onSubmit={formEvent} >
                <InputSearch value={searchInput} onChange={(element)=>{setSearchInput(element.target.value)}} placeholder="Pesquisar"></InputSearch>
                <ion-icon onClick={()=>{search()}} name="search-outline" ></ion-icon>
            </DivSearch>
            
            <DivIcons>
                <ion-icon onClick={()=>{navigate("/cart")}} name="cart-outline"></ion-icon>
                <DivCircle><h2>{cart.length}</h2></DivCircle>
                <ion-icon onClick={()=>{login()}} name="person-circle-sharp"></ion-icon>
                <ion-icon name="exit" onClick={()=>{exit()}}></ion-icon>
            </DivIcons>

            {searchResults.slice(0, 5).map((element, key) => {
                return (
                        <DivSearchDetails key={key} onClick={() => { detailsProduct(element.id) }}>
                            <img src={element.image} alt={element.title}></img>
                            <h3>{element.title}</h3>
                        </DivSearchDetails>
                    );
                })}
            {(clickExit)? DivClickExit : <></>}           
        </DivTopList>
        
    );  
}

const DivTopList=styled.div`
    width:100%;
    height:100px;
    position: fixed;
    top:0;
    z-index:1;
    background: #11A8B1;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 25px 3% 0 3%;
    
    h1{
        color: white;   
        font-size:50px;
        font-family: 'Righteous', cursive;
    }
    ion-icon{
        margin-top:10px;
        font-size: 30px;
        cursor: pointer;
        color: white;
    }
`;
const DivSearch=styled.div`
    width:50%;
    height:50px;
    background: #ffffff;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 30px;
    
    ion-icon{
        color: #737373;
        margin-bottom: 10px;
    }
`;
const DivSearchDetails = styled.div`
    width: 40%;
    height: 90px;
    background: #F2F3F4;
    border-radius: 3px;
    top: 75px;
    margin-left: 35%;
    position: initial   ;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
        background: #11A8B1;
    }
    
    img{
        width: 60px;
        height: 60px;
        margin: 0 50px 0 0px;
        background: red;
    }
    h3 {
        color: black;
        font-family: 'Recursive', sans-serif;
        font-size: 16px;
        font-weight:500;
    }
`;
const InputSearch=styled.input`
    font-size: 17px;
    background: transparent;
    width: 95%;
    height: 40px;
    border: 1px solid transparent;
    outline: none;
    
    ::placeholder{
        color: #737373;
    }
`;
const DivIcons=styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
`;
const DivCircle=styled.div`
    width: 17px;
    height: 17px;
    background: #bf0a0d;
    border-radius: 100%;
    position: absolute;
    margin: 0 0 0 20px;
    display: flex;
    justify-content: center;
    align-items:center;

    h2{
        color: #ffffff;
        font-size: 12px;
        font-family: 'Righteous', cursive;
    }

`;
const DivMenu =styled.div`
    width: 300px;
    height: 500px;
    background: #ffffff;
    box-shadow: 0px 6px 5px gray;
    position: absolute;
    display:flex;
    top: 30px;
    left: 40px;
    color: #11A8B1;
    display: flex;
    flex-direction: column;
    z-index:1;
    
    div{
       display: flex;
    }
`;
const DivExit= styled.div`
    position: absolute;
    top: 200px;
    margin-left:30%;
    width: 400px;
    height: 400px;
    background: #11A8B1;
    border-radius: 5px;
    display: flex;
    align-items:center; 
    flex-wrap: wrap;
    justify-content: space-between;
    padding:6%;

    div{
        display: flex;
        align-items:center;
        
    }
    div div {
        display: flex;
        align-items:center;
        justify-content:center;
        cursor: pointer;
    }
    h2{
        color: white;   
        font-size:30px;
        font-family: 'Righteous', cursive;
    }
    
`
const DivButtonExistYes = styled.div`
    width: 100px;
    height: 80px;
    border-radius: 5px;
    background: #0d949b;
    box-shadow: 3px 6px 5px #ffffff;
    &:hover {
        background: #295c60;
    }

`
const DivButtonExistNo = styled.div`
    width: 100px;
    height: 80px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 3px 6px 5px gray;
    margin-left: 40px;

    &:hover {
        background: #d8d4d4;
    }
`