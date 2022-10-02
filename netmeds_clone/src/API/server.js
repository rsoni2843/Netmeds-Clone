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

// useEffect(()=>{
    
  //     getMedicine(data)
  //     .then(res=>{
  //       // console.log(res) ;
  //       setMedicine(res) 
  //     })
  //     .catch(err=>{console.log(err)})
    // useEffect(()=>{
    //   getMedicine()
    //   .then(res=>{
    //     console.log(res)
    //   })
    // },[])
    
    
  // },[data])
  // useEffect(()=>{
  //   getMedicine()
  //   .then(res=>{
  //     setData(res.data.data.products)
  //   })
  // },[])

  // const handleChange = (val) =>{
  //   getMedicine(val)
  //   // .then(res=>setData(res.data.data.products))
  // }
  // const optFn = useCallback(debounce(handleChange),[]);
  // console.log(main)
  // console.log(data)


    // const [medicine,setMedicine] = useState([]) ; 
  // const handleKeyDown = (e)=>{
  //   if(e.key === "Enter"){
  //     e.preventDefault() ; 
  //     setData(data);
  //      navigate('/medicine')
  //     // <Redirect to={'/medicine'}></Redirect>
  //   }
  // }


    // console.log(ent)
  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 1000);
  //   };
  // };