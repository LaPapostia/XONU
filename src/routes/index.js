const express=require('express');
const router=express.Router();


router.get('/',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('index',{title:'X-Onu'});
});

router.get('/game',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('game',{title:'Juego'});
});

router.get('/',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('index',{title:'X-Onu'});
});

router.get('/registro',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('registro',{title:'Resgistro'});
});

module.exports=router;