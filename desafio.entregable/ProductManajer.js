
const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.productIdCounter = 1;
        this.loadFromFile();
    }

    addProduct(productData) {
        if (!productData.title || !productData.description || !productData.price || !productData.thumbnail || !productData.code || !productData.stock) {
            console.log("Por favor completar todos los campos***.");
            return;
        }

        const existingProduct = this.getProductByCode(productData.code);
        if (existingProduct) {
            console.log(`El producto con el código ${productData.code} ya existe.`);
            return;
        }

        productData.id = this.productIdCounter++;
        this.saveToFile(productData);
        console.log(`Has agregado el producto ${productData.title}.`);
    }

    getProductByCode(code) {
        const products = this.getAllProducts();
        return products.find(product => product.code === code);
    }

    getAllProducts() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.log("Ha ocurrido un error al cargar los productos.", error.message);
            return [];
        }
    }

    getProductById(id) {
        const products = this.getAllProducts();
        const product = products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("No se ha encontrado el producto.");
            return null;
        }
    }

    saveToFile(productData) {
        try {
            let products = this.getAllProducts();
            products.push(productData);
            fs.writeFileSync(this.path, JSON.stringify(products, null, 2));
            console.log("El producto se ha guardado correctamente");
        } catch (error) {
            console.log("Ha ocurrido un error al guardar el producto.", error.message);
        }
    }

    loadFromFile() {
        try {
            const data = fs.readFileSync(this.path, 'utf8');
            this.products = JSON.parse(data);
            console.log("Se ha cargado el producto");
        } catch (error) {
            console.log("Ha ocurrido un error al cargar los productos.", error.message);
            this.products = []; 
        }
    }
}