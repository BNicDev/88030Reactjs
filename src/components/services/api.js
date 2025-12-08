const GetApi =()=>{
    return fetch('https://fakestoreapi.com/products'
)
        .then((response)=>{
            if(!response.ok){
                throw new Error(`error en la peticion: ${response.status} ${response.statusText}`)
            }
            return response.json()
        })
        .catch((error)=>{
            console.log('error de api ', error.message)
            throw error
        })
}

export default GetApi