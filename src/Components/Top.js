import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function exit(){
    alert("Deseja mesmo sair?");// deslogar o usuário;
};
function menu(){
    alert("libera o menu ai");
};
function search(){
    alert("pesquisa ai pra mim");
};

export default function Top(){
    const navigate=useNavigate();
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
            <ion-icon onClick={()=>{menu()}} name="menu"></ion-icon>
            <h1>Stern Store</h1>
            <DivSearch>
                <ion-icon onClick={()=>{search()}} name="search-outline"></ion-icon>
                <InputSearch placeholder="Pesquisar"></InputSearch>
            </DivSearch>
            <DivIcons>
                <ion-icon onClick={()=>{navigate("/cart")}} name="cart-outline"></ion-icon>
                <ion-icon onClick={()=>{navigate("/login")}} name="person-circle-sharp"></ion-icon>
                <ion-icon name="exit"></ion-icon>
            </DivIcons>
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
    align-items:center;
    justify-content: space-between;
    padding: 0 3%;
    h1{
        color: white;   
        font-size:50px;
        font-family: 'Righteous', cursive;
    }
    ion-icon{
        font-size: 30px;
        cursor: pointer;
        color: white;
    }
`;
const DivSearch=styled.div`
    width:60%;
    height:50px;
    background: #ffffff;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 30px;
    ion-icon{
        color: #737373;
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
