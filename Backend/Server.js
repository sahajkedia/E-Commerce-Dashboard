const router = require('express').Router();
// const Consumer = require('./models/ConsumerSchema') 
const Consumer = require('./models') 
router.get('/dashboard', async(req,res,next) => {
    console.log("Requesting file")
    try{
        let consumers = await Consumer.find({})

        res.json({
            consumers : consumers
        }).status(201);
    }catch(c){
        res.status(404).json({
            msg:"Could NOT FIND"
        })
        console.log(c);
    }
})

router.post('/addcustomer', async(req,res,next) => {
    
    const {order_id ,
        customer,
        country,
        address,
        product_title,
        product_description,
        date,
        status} = req.body;
        console.log(req.body)
            
    try{
        let consumer = new Consumer({
            order_id:order_id  ,customer:customer,country:country,address:address,product_title:product_title,product_description:product_description,date:date,status:status
        }) 
        // console.log(consumer)
        consumer.save()
        res.status(201).json({
            message:"Added consumer"
        })
    }catch(c){
        console.log(c)
        res.status(404).json({
            msg:" Could NOT FIND"
        })
    }

})
module.exports = router;