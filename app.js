let express = require('express');
let app = express();

const mongoose = require('mongoose');

let morgan = require('morgan');
let dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 9870;
const hostname = 'localhost';
let cors = require('cors');
let bodyParser = require('body-parser');
const superagent = require('superagent');
const request = require('request');
let mongoUrl = process.env.MongoLiveURL


app.use(morgan('common'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/',(req,res) => {
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=dfe87c299d59609b9dd5">Login With Git</a>')
})

const AuthController = require('./controller/authController');
app.use('/api/auth',AuthController);

const BrandController = require('./controller/brandController');
app.use('/api',BrandController)

const DiscountController = require('./controller/discountController');
app.use('/api',DiscountController)

const CollectionCategoryController = require('./controller/collectionCategoryController');
app.use('/api',CollectionCategoryController)

const ImageCollectionController = require('./controller/imageCollectionController');
app.use('/api',ImageCollectionController)

const GenderController = require('./controller/genderController');
app.use('/api',GenderController)

const ColorController = require('./controller/colorController');
app.use('/api',ColorController)

const SizeController = require('./controller/sizeController');
app.use('/api',SizeController)

const OccasionController = require('./controller/occasionController');
app.use('/api',OccasionController)

const ProductController = require('./controller/productController');
app.use('/api',ProductController)

const ProductCategoryController = require('./controller/productCategoryController');
app.use('/api',ProductCategoryController)

const ProductTypeController = require('./controller/productTypeController');
app.use('/api',ProductTypeController)

const OrderController = require('./controller/orderController');
app.use('/api',OrderController)

app.get('/oauth',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message: 'Error While Login'
        })
    }

    superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_id:'dfe87c299d59609b9dd5',
        client_secret:'895498e9b1aa93aaf2e0db281e09a93f63b58182',
        code:code
    })
    .set('Accept','application/json')
    .end((err,result) => {
        if(err) throw err;
        let access_token = result.body.access_token;
        let option = {
            uri:'https://api.github.com/user',
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Authorization':`token ${access_token}`,
                'User-Agent':'mycode'
            }
        }
        request(option,(err,response,body) => {
            res.send(body)
        })
    })
})

mongoose.connect(mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(client => {
    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`)
    });
}).catch(err => {
    console.log(err);
})




