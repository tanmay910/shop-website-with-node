//const { getOrders } = require('../controllers/shop');
// const { getdb } = require('../utility/databases');

const getDb = require('../utility/databases').getdb;



class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }


    save() {

        const db = getDb();
        return db.collection('products').insertOne(this).then(
            (result) => {
                console.log(result);
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        )
    }

    static fetchAll() {

        const db = getDb();

        return db.collection('products').find().toArray()
            .then(
                (products) => {

                    return products;

                }
            ).catch(
                (err) => {
                    console.log(err);
                });
    }

    static findById(prodId) {
        const db = getDb();
        return db.collection('products').find({ _id: prodId }).next().then(
            products =>{
                return products;
            }
        ).catch((err) => {
            console.log(err);

        })
    }



};

module.exports = Product;
