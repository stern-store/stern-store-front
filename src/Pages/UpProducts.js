import { useState } from "react";
import styled from "styled-components";
import { deleteCategory, postCategory } from "../Servives/api";



export function UpProducts () {
    const [insertCategories, setInsertCategories] = useState('');
    const [deleteCategories, setDeleteCategories] = useState('');
    const [deleteNameProduct, setDeleteNameProduct] = useState('');

    function formEvent(event) {
        event.preventDefault();
    };

    function insertCategory() {
        postCategory(insertCategories).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error.data);
        });
    }
    function deleteCategoryName() {
        deleteCategory(deleteCategories).then((res)=>{
            console.log(res.data);
        }).catch((error)=>{
            console.log(error.data);
        });
    }

    function deleteProduct() {
        console.log(deleteNameProduct);
    }

    return(<DivContainer onSubmit={formEvent}>
        <DivInfo>
            <h3> Insert </h3>
            <h1>Product's name (max 200)</h1>
            <InputsInfo placeholder="Product's name" ></InputsInfo>

            <h1>Price (Integer: $5,99 {`=>`} 599 )</h1>
            <InputsInfo placeholder="Price" ></InputsInfo>

            <h1>Description</h1>
            <InputsInfo placeholder="Description" ></InputsInfo>

            <h1>Image</h1>
            <InputsInfo placeholder="Image" ></InputsInfo>

            <h1>Color (white {`=> `}#ffffff)</h1>
            <InputsInfo placeholder="Color" ></InputsInfo>

            <h1>Dimentions (max 20 or not applicabe)</h1>
            <InputsInfo placeholder="Dimentions" ></InputsInfo>

            <h1>Weight (max 20) </h1>
            <InputsInfo placeholder="Weight" ></InputsInfo>

            <h1>Stock (Integer)</h1>
            <InputsInfo placeholder="Stock" ></InputsInfo>

            <h1>category (Integer) </h1>
            <InputsInfo placeholder="Categories" ></InputsInfo>

            <ButtonProduct> <h2>Enter</h2></ButtonProduct>

            <h1>categories (category) </h1>
            <InputsInfo placeholder="Category"  onChange={(element)=>{setInsertCategories(element.target.value)}} ></InputsInfo>
            <ButtonProduct onClick={()=>{insertCategory();}}> <h2>Enter</h2></ButtonProduct>

            <h3>Delete</h3>

            <h1>categories (category) </h1>
            <InputsInfo placeholder="Category"  onChange={(element)=>{setDeleteCategories(element.target.value)}} ></InputsInfo>
            <ButtonProduct onClick={()=>{deleteCategoryName();}}> <h2>Enter</h2></ButtonProduct>

            <h1>Product's name (max 200)</h1>
            <InputsInfo placeholder="Product's name" onChange={(element)=>{setDeleteNameProduct(element.target.value)}}></InputsInfo>
            <ButtonProduct onClick={()=>{deleteProduct();}}> <h2>Enter</h2></ButtonProduct>

        </DivInfo>
    </DivContainer>)
}

const DivContainer= styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`
const DivInfo = styled.div`
    width: 800px;
    height: 800px;
    background: #11A8B1;
    display: flex;
    align-items: center;
    flex-direction:column;
    padding: 40px;
    border-radius: 15px;
    border: 2px solid #326b70;
    overflow-y: scroll;
 
    h1{
        font-family: 'Recursive', sans-serif;
        font-weight: 600;
        font-size: 20px;
        color: #ffffff;
        margin-top: 25px;
        margin-bottom: 5px;
    }
    h3 {
        font-family: 'Recursive', sans-serif;
        font-weight: 800;
        font-size: 30px;
        color: #ffffff;
        margin-bottom: 5px;
        margin-top:10px;
    }
`
const InputsInfo = styled.input`
    width: 400px;
    height: 22px;
    outline: none;
`
const ButtonProduct= styled.div`
    width: 60px;
    height: 20px;
    background: #326b70;
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    cursor: pointer;

    h2{
        font-family: 'Recursive', sans-serif;
        margin-top: -10px;
    }
`