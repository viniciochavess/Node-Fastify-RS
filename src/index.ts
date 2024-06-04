import app from './server';

app.listen(

{
    port: 3333,
    host: '0.0.0.0'
    
}
  
 
).then(()=>{
    console.log('🐱‍🏍 HTTP Server is Running !!!')
});