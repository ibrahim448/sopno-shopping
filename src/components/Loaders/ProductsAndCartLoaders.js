import { localStorageData } from "../../utilities/FakecartDb";

export const productsAndCartLoader = async()=>{
    //get Products 
    const productsData = await fetch("products.json");
    const products = await productsData.json();

    //get cart fake db
    const savedCart = localStorageData();
    // console.log("id", savedCart)

    const myCart = [];

    for(const id in savedCart){
    //    console.log(id)
    const addedProduct = products.find(product => product.id === id)
    if(addedProduct){
        const quantity = savedCart[id]
        addedProduct.quantity = quantity;
        myCart.push(addedProduct);
    }        
        
    }


    return {products, myCart};
}