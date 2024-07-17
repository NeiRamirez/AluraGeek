const productList = () => {
    return fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const createProducts = (name, price, image, id) => {
    return fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({
            name,
            price,
            image,
            id                
        }),
        
    })
    .then((res) => res.json())  
    .catch((err) => console.log(err));
};

const deleteProducto = (id) => {
    return fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
        
    })    
    .catch((err) => console.log(err));
}; 


export const servicesProducts = {
    productList, createProducts, deleteProducto, 
};