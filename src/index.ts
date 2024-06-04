import app from './server';
import env from './env';

app.listen(

{
    port: env.PORT,
    host: '0.0.0.0'
    
}
  
 
).then(()=>{
    console.log(`🐱‍🏍 HTTP Server is Running !!! \n http://localhost:${env.PORT}`)
});