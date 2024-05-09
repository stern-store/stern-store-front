import { useNavigate } from "react-router-dom";
import { ButtonCardData, DivButtonSelected,
    DivCard,
    DivContainerPayment,
    DivInputs,
    DivPayment,
    DivPaymentDetails,
    DivPaymentForm,
    DivPix,
    DivSpace,
    DivTicket,
    DivTopPayment,
    FormCardData,
    InputCardData,
    InputCardDataCVV, 
    InputCardDataDate } from "./PaymentStylesd";

export default function Payment(){
    const navigate=useNavigate();
    return (
    <DivPayment>
        <DivTopPayment>
            <DivSpace>
                <ion-icon onClick={()=>{navigate("/")}} name="arrow-back-outline"></ion-icon>
                <h1>Stern Store</h1> 
            </DivSpace>   
            <DivSpace>
                <ion-icon name="exit"></ion-icon>
            </DivSpace>
        </DivTopPayment>
        <DivContainerPayment>
            <DivPaymentDetails>
                <p>FORMA DE PAGAMENTO</p>
                <DivPaymentForm>
                    <DivPix><ion-icon src="./Logo/pix.svg"/><h1>Pix</h1> </DivPix>
                    <DivTicket><ion-icon src="./Logo/barcode-solid.svg"/><h1>Boleto</h1></DivTicket>
                    <DivCard><ion-icon src="./Logo/credit-card-regular.svg"/><h1>Cartão</h1></DivCard>
                </DivPaymentForm>
                <p>CARTÃO DE CRÉDITO</p>
                <FormCardData>
                    <InputCardData placeholder="nome do titular do cartão" type="text" required/>
                    <InputCardData placeholder="número do cartão" type="text" required/>
                    <DivInputs>
                        <InputCardDataDate placeholder="dd/mm" type="text" required/>
                        <InputCardDataCVV placeholder="CVV" type="text" required/>
                        <DivButtonSelected> <h4>2x de 233,99</h4><ion-icon name="chevron-down-outline"></ion-icon></DivButtonSelected>
                    </DivInputs>
                    
                    <ButtonCardData><h2>PAGAR COM CARTÃO</h2></ButtonCardData> 
                </FormCardData>
            </DivPaymentDetails>
        </DivContainerPayment>
    </DivPayment>
    )
};