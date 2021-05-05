//traditional method of fetching api endpoints

// const api = 'https://jsonplaceholder.typicode.com/todos'

// //create a request - new - to interact with server
// const req = new XMLHttpRequest()


// req.onload = ()=>{
          
//           //if success status
//           if(req.status === 200){
//                     console.log('server is ok')
//                     //  console.log(req.response)
        
//         //If a member contains nested objects, the nested objects are transformed before the parent object is.
//                   const data = JSON.parse(req.response)
//                   console.log(data)
//           }
//           else{
//                     console.log('something went wrong')
//           }
// }


// //open the gate and send the gate
// req.open('GET',api)
// req.send()


//............................................................................................

// //fetch api call new method

// const api = 'https://jsonplaceholder.typicode.com/todos'

// const res = fetch(api,{
//           method : 'GET'
// })

// // console.log(res)

// res.then((res)=>{
//           // console.log(res.json())
//           return res.json()
// }).then((data)=>{
//           console.log(data)
// })




//............................................................


// then() catch()  <<<<<<<<<<<<<<<<<<<<<<<<<<<<


//fetch api with (if error) and (.catch error)

// const api = 'https://jsonplaceholder.typicode.com/todos'

// const res = fetch(api,{
//           method : 'GET'
// })

// // console.log(res)

// res.then((res)=>{
//           // console.log(res.json())
          
//           if(res.status === 200){
//                     return res.json()
//           }
//           else{
//                     console.log('404')
//                     throw new Error('this is a bad server')
//           }
// }).then((data)=>{
//           console.log(data)
// }).catch((error)=>{
//           console.log(error.message)
// })



//............................................................................


//fetch api simpler method


// const api = 'https://jsonplaceholder.typicode.com/todos'

// const res = fetch(api).then((res)=>{
//           // console.log(res.json())
          
//           if(res.status === 200){
//                     return res.json()
//           }
//           else{
//                     console.log('404')
//                     throw new Error('this is a bad server')
//           }
// }).then((data)=>{
//           console.log(data)
// }).catch((error)=>{
//           console.log(error.message)
// })



//.......................................................................

//try() catch()


//async and await method


// const api = 'https://jsonplaceholder.typicode.com/todos'

// async function userData(){
//           const data = await fetch(api)
// console.log(data)

// if(data.status === 200){
//           const result = await data.json()
//           console.log(result)
// }
// }

// userData()


//.................................................................

//async and await method error handling
//to avoid app break


const api = 'https://jsonplaceholder.typicode.com/todos'

async function fetchData(){

          try{
                    const data = await fetch(api)
                    console.log(data)
                    
                    if(data.status === 200){
                              const result = await data.json()
                              console.log(result)
                    }
          }
          catch(error){
                    console.log(error.message)
          }
}

fetchData()


