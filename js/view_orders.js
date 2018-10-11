
var token=localStorage.getItem('access-token')
url='https://fast-foods-api-main.herokuapp.com/api/v2/orders'
let urls=[]

fetch(url,{
    method:'GET',
        headers:{
       Authorization:`Bearer ${token}`
}
})
.then((res) => { return res.json() })
.then(response=>{

 for (const [key, value] of Object.entries(response)) {
    for (var i = 0; i <value.length; i++) {
        var id=value[i].orderid
        urls.push(`https://fast-foods-api-main.herokuapp.com/api/v2/orders/${id}`);
        let content = document.getElementById('result')
        // console.log(urls)
        url=`https://fast-foods-api-main.herokuapp.com/api/v2/orders/${value[i].orderid}`
        content.innerHTML+= `
        <div>
        <h2>Order ${value[i].orderid} </h1>
        <p><a href="${url}" id='${value[i].orderid}'> orderID: ${value[i].orderid}<a/></p>
        <p>order-status: ${value[i].status}</p>
    
        </div>    
        `
    };
    
  };


});
    
   


















