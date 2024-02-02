import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const text = `
Descrição
Controle Compativel com PS3 Playstation 3 Dual Shock Wirelless Sem Fio !

PRODUTO NOVO / NA EMBALAGEM INDIVIDUALIZADA
CABO USB DENTRO DA EMBALAGEM COM CONTROLE PEÇO QUE VERIFIQUE QUANDO COMPRAR

2 Controle Ps3 Doubleshock P3 S/fio + 2 Cabo Carregador
Marca: Doubleshock P3
Modelo: Compatível Ps3 Todos os modelos

Produzido com alta tecnologia, utiliza o recurso dual shock,
máxima vibração em seus jogos tornando-os muito mais reais!
Permite uma conexão segura sem atrasos!
Bateria recarregável, carrega enquanto joga!

* ENVIAMOS CABO USB CARREGADOR DE BRINDE *

CARACTERÍSTICAS
- Wireless
- Compatível com Playstation 3
- Função de Vibração (dualshock)
- Possui 12 botões e 2 alavancas analógicas
- Botão de liga (P3) - Desliga automaticamente sem uso
- Bateria recarregável (cabo usb carregador de brinde)
*O cabo de brinde tem 1 metro *
`
const linkImg = "https://media.istockphoto.com/id/1225329047/pt/foto/green-screen-for-cybersport-game.jpg?s=170667a&w=0&k=20&c=qBMnYvewrhaeCjOKKLF5z8zkistzrNNPB2vR3sqECZg="

const arr= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];



export function ProductDetails() {
    const navigate = useNavigate()
    return(
        <DivProductDetails>
            <DivFeatures>
                <h1>Características do Produto</h1>
                <DivProductFeatures>
                    <DivColor>
                        <h2>cor:</h2>
                        <div></div>
                    </DivColor>
                        
                    
                    <DivOthers>
                        <h2>dimensões:</h2>
                        <h3> 20cm x 30cm</h3>
                    </DivOthers>
                    
                    <DivOthers>
                        <h2>peso:</h2>
                        <h3>não se aplica</h3>
                    </DivOthers>
                    
                </DivProductFeatures>
            </DivFeatures>
            <DivRatingAndDescription>
                <DivDescription>
                        <h1>Descrição</h1>
                        <h2>
                            {text}
                        </h2>
                </DivDescription>
                <DivRating>
                    <h1>Relevância</h1>
                    <h2>gifzinho de avaliações aqui</h2>
                </DivRating>
            </DivRatingAndDescription>
            
            <DivRecommendations>
                {arr.map((e)=>{
                    return(
                    <DivItemsRecommendations onClick={()=>{navigate("/details/1");}}>
                        <img src={linkImg}></img>
                        <div>
                            <h5>fone sony playstation galaxy s2 4xrl8</h5>
                            <h6> R$ 299,90 </h6>
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
        background:blue;
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