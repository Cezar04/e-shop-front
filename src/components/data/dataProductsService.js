import axios from "axios";

const URL = "http://localhost:8080//api/products/"

const getAllProducts =()=>{
    return  axios.get(URL+"list")
};

const getSingleProduct =(prodId)=>{
    return axios.get(URL+"detail/"+prodId)
};

const addProd = (productName,category,categoryType,productImage,description,price,stock)=>{
    return axios.post(URL+"add",{
        productName,
        category,
        categoryType,
        productImage,
        description,
        price,
        stock
    });
}


export default{
    getAllProducts,
    getSingleProduct,
    addProd,
};
