const express=require("express");
const path=require("path");
const app=express();
const port=80;


// const fs=require('fs');
//static filess serving
app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
//end points
app.get('/', (req, res)=>{
    
    const params = {  }
    res.status(200).render('index.pug', params);
})
app.get('/home', (req, res)=>{
    
    const params = {  }
    res.status(200).render('index.pug', params);
})

 app.get('/contact', (req, res)=>{
  
     const params = {  }
     res.status(200).render('contact.pug', params);
 })
 app.get('/services', (req, res)=>{
  
    const params = {  }
    res.status(200).render('services.pug', params);
})
app.get('/classes', (req, res)=>{
  
    const params = {  }
    res.status(200).render('classes.pug', params);
})
//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});