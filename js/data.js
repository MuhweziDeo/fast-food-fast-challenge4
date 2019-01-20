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
            'Authorization':`Bearer ${token}`
        }
        
    });
    
    const responseData=await response.json()
    console.log(responseData)
    return responseData
}


const get=async(url,token)=>{
    const response=await fetch(url,{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`
        }
    });
    const responseData=await response.json()
    console.log(responseData)
    return responseData

}

const put=async(url,token,updateData)=>{
    const response=await fetch(url,{
        'method':'PUT',
        body:JSON.stringify(updateData),
        'headers':{
            'content-type':'application/json',
            "Authorization":`Bearer ${token}` }
    });

    const responseData=await response.json()
    return responseData
}