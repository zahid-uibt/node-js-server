
const express=require('express');
const hbs=require('hbs'); 
const port =process.env.port;
var app=express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname +'/views/partials');
hbs.registerHelper('getYear',()=>{
return new Date().getFullYear();
});
app.get('/',(request,response)=>{
 response.render('home.hbs',{
     title:'Home page',
     message:'welcome to home page',
 });
});


app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'About page',
        message:'welcome to About page',
    });
});

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
});