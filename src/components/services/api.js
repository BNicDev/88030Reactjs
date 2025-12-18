export async function GetApi(){
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}



export async function GetSelected(id){
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const SelectedProduct  = await response.json();
    return SelectedProduct;
}
