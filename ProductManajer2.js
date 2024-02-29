class ProductManager{

    constructor(){
        this.Product=[]
    }

    addProduct(id,title, description, price, thumbnail, code,stock){

        let nuevoProducto={}
        this.Product.push(nuevoProducto)

    }

    getProduct(){
        return this.Product
    }



}

const pm1=new ProductManager()

console.log(pm1.getProduct())