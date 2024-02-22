
class ProductManager {

   //static CantidadDeProductos=0

    constructor([]){
        this.Product=[]

    /*(title, description, price, thumbnail, code,stock){
        this.title=title
        this.description=description
        this.price=price
        this.thumbnail=thumbnail
        this.code=code
        this.stock=stock*/

        addProduct(title, description, price, thumbnail, code, stock){
            let existe=this.Product.find(producto=>producto.code===code)
            if(existe){
                console.log(`El producto ${code} ya esta cargado...!!!`)
                return
                }
            let id=1
            if(this.Product.length>0){
                id=this.Product[this.Product.length-1].id+1
            }
            let nuevoProducto={id,title, description, price, thumbnail, code,stock}
            this.Product.push(nuevoProducto)
        }
        ProductManager.CantidadDeProductos++
    }

    static TotalProductos(){
        return this.CantidadDeProductos
    }

    getProduct(){
        return this.Product
    }

    getProductByid(id){
        let Producto=this.Product.find(p=>p.id===id)
        if(!Producto){
            console.log(`No hay productos con el id ${id}...!!!`)
            return
        }
    }

    updateProdut(title, description, price, thumbnail, code, stock){
        let indiceProducto=this.Product.findIndex(producto=>producto.id===id)
        if(existe){
            console.log(`El productocon id ${id} ya esta cargado...!!!`)
            return
            }
        
        let nuevoId=this.Product[this.Product.length-1].id+1
        let nuevoProducto={
            ...this.Product[indiceProducto],
            id:nuevoId
        }
        this.Product.push(nuevoProducto)
    }

    deleteProduct(id) {
        const indiceProducto = this.Product.findIndex(producto=>producto.id === id);
        if (indiceProducto === -1) {
            console.log(`El producto con id ${id} fue eliminado...!!!`);
            return;
        }
    
        this.products.splice(productIndex, 1);
        ProductManager.CantidadDeProductos--
    }
} 

let pm=new ProductManager()

pm.addProduct("Iphone15","8 gb ram","u$d1.900","...","40","100")
pm.addProduct("Iphone14","6 gb ram","u$d1.500","...","30","100")
pm.addProduct("Iphone13","6 gb ram","u$d1.300","...","20","100")
pm.addProduct("Iphone12","4 gb ram","u$d1.100","...","10","100")

pm.updateProdut(1)
pm.updateProdut(2)
pm.updateProdut(3)
pm.updateProdut(4) 

pm.deleteProduct(1)

console.log(pm.getProducs())

console.log(pm.getProducsByid(4))

console.log(pm.deleteProduct(1))

let Producto1 = new ProducManager("Iphone15","12 gb ram","u$d1.500","...","01","100");

const MostrarProducto=(Product=[])=>{
    if(Product.length===0){
        console.log("No se han agregado productos por el momento...!!!")
        return
    } 
}

console.log(ProductManager.CantidadDeProductos)

console.log(ProductManager.TotalProductos())  