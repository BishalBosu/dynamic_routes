const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );


module.exports = class Cart{
    static addProduct(id){
        //fetch previous cart
        fs.readFile()
        //analyze the cart => find existing items
        //add new product/ increase quantity
    }


}