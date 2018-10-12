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
    };

document.getElementById('accept').addEventListener('click',accept_order)
function accept_order(){
accept_data={
    status:'accepted'
}
fetch(url,{
    method:'PUT',
    headers:{
        'content-Type':'application/json',
        Authorization:`Bearer ${token}`

    },
    body:JSON.stringify(accept_data)
}).then(res=>res.json())
.then(response=>{
    alert(response['message'])
    window.location.href = "admin_dashboard.html"
})
};

document.getElementById('reject').addEventListener('click',reject_order)
function reject_order(){
reject_data={
    status:'rejected'
}
fetch(url,{
    method:'PUT',
    headers:{
        'content-Type':'application/json',
        Authorization:`Bearer ${token}`

    },
    body:JSON.stringify(reject_data)
}).then(res=>res.json())
.then(response=>{
    alert(response['message'])
    window.location.href = "admin_dashboard.html"
})
}


});