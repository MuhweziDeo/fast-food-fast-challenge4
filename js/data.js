// async function post(url,postData,token){
//     const resp=await fetch(url,{
//         method:'POST',
//         body:JSON.stringify(postData),
//         headers:{
//             'content-type':'application/json',
//             'Authorization':`${token}`
//         }
        
//     });

//     console.log(await resp.json())

// }

const post= async(url,postData,token)=>{
    const response=await fetch(url,{
        method:'POST',
        body:JSON.stringify(postData),
        headers:{
            'content-type':'application/json',
            'Authorization':`${token}`
        }
        
    });
    
    const responseData=await response.json()
    console.log(responseData)
    return responseData
}