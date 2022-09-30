// // const express = require('express') ;
// // const cors = require('cors') ; 
// // const app = express() ; 
// // app.use(
// //     cors({
// //         origin:"*",
// //         // methods:["GET","POST"]
// //     })
// // )
// // app.get('/fetchData?custom_token=home',(req,res)=>{
// //     res.json()
// // })
// // app.listen(3000)

// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Welcome to CORS server 😁')
// })
// app.get('/cors', (req, res) => {
//     res.send('This has CORS enabled 🎈')
// })
// app.listen(8080, () => {
//     console.log('listening on port 8080')
// })