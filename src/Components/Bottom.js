import styled from "styled-components"

export default function Bottom (){
    return(
        <DivBottomList> 
        <DivHelp>
            <h1>Stern Store</h1> {/* linkar cada item */}
            <h2>Ajuda</h2>
            <h3>COVID-19</h3>
            <h3>Como Comprar</h3>
            <h3>Pagamento</h3>
            <h3>Reembolso</h3>
        </DivHelp>
        <DivAboutUs>
            <h1>Stern Store</h1>
            <h2>Sobre Nós</h2>          
            <h3>Políticas de Privacidade</h3>
            <h3>Ofertas</h3>
        </DivAboutUs>
        <DivSocialNetworks>
            <h1>Stern Store</h1>
            <h2>Rede Sociais</h2>
            <DivBottomIcons>
                <ion-icon name="logo-whatsapp"></ion-icon> 
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-discord"></ion-icon>
                <ion-icon name="logo-github"></ion-icon>
            </DivBottomIcons>
        </DivSocialNetworks>
    </DivBottomList>
    );
}

const DivBottomList=styled.div`
    width: 100%;
    height: 200px; 
    border-top: 2px solid #bcb7b7; 
    border-bottom: 2px solid #bcb7b7; 
    // position: absolute;
    bottom:0;
    color: gray;
    display:flex;
    justify-content: space-between;
    padding: 0 10%;
    align-items: center;
    // background: #e2e2e2;
    ion-icon{
        font-size:30px;
        margin:0 5px;
        color: gray;
    }
    h1{
        font-family: 'Righteous', cursive;
        font-size: 20px;
        margin-right:10px;
        margin-bottom:10px;
    };
    h2{
        font-family: 'Recursive', sans-serif;
        font-size: 15px;
        margin-bottom:10px; 
    };
    h3{
        font-weight: 100;   
        font-size: 12px;
        font-family: 'Recursive', sans-serif;
        margin-bottom:10px;
    };
`
const DivSocialNetworks=styled.div`
    whidth: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const DivHelp=styled.div`
    whidth: 100%;
    display:flex;
    flex-direction:column;
    display:flex;
    justify-content: center;
    align-items: center;
`
const DivAboutUs=styled.div`
    whidth: 100%;
    display:flex; 
    flex-direction:column;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const DivBottomIcons=styled.div`
`