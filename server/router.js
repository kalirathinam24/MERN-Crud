const express = require('express');
const router = express.Router();
const InfoRouter = require("./infoSchema")

//create
router.post("/", async(req,res)=>{
    
    const data= new InfoRouter({
        Name:req.body.Name,
        Age:req.body.Age,
        City:req.body.City
    })
    await data.save();

    res.json(data);
})

//getAll
router.get("/", async(req,res)=>{
    const findData = await InfoRouter.find();
    res.json(findData);
})

//update
router.put("/update", async(req,res)=>{
    const update =await InfoRouter.update({_id:req.body._id},{$set:{
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    }})
    res.json(update);
})

//Delete
router.delete("/del/:id", async(req, res)=>{
    const delData = await InfoRouter.findByIdAndDelete(req.params.id).then(e =>{
        res.json({message:"delete"});
    })
})


router.get('/', (req,res)=>{
    res.json("am from router file")
});


module.exports = router