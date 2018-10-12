var id=localStorage.getItem('orderid')
var token=localStorage.getItem('access-token')
console.log(id)
var url=`https://fast-foods-api-main.herokuapp.com/api/v2/orders/${id}`

console.log(url)

fetch(url,{
    method:'GET',
    headers:{
        Authorization:`Bearer ${token} `
    }
}).then(res=>res.json())
.then(response=>{
    for (const[key,value] of Object.entries(response)){
        let content=document.getElementById('order-details')
        content.innerHTML=`
        <p>orderID: ${value.orderid}</p>
        <p>User_ID: ${value.user_id}</p>
        <p>meal_ordered: ${value.meal_name}</p>
        <p>location: ${value.location}</p>
        <p>status: ${value.status}</p>
        <p>orderDate: ${value.order_date}</p>
        <button class="btn-primary" id="accept">Accept</button>
        <button class="btn-danger" id="reject">Reject</button>
        `;
    }
});