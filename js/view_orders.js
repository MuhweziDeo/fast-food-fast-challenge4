
var token=localStorage.getItem('access-token')

fetch('https://fast-foods-api-main.herokuapp.com/api/v2/orders',{
    method:'GET',
        headers:{
       Authorization:`Bearer ${token}`
}
})
.then((res) => { return res.json() })
.then(response=>{
 var orders=[];
 for (const [key, value] of Object.entries(response)) {
    for (var i = 0; i <value.length; i++) {
        orders.push(value[i])
    };
  };

function ui(value){
 for (var i = 0;i <value.length; i++){
        let content = document.getElementById('result')

        content.innerHTML+= `
        <div>
        <h2>Order ${value[i].orderid} </h1>
        <p>orderID: ${value[i].orderid}</p>
        <p>userID: ${value[i].user_id}</p>
        <p>Meal: ${value[i].meal_name}</p>
        <p>order-status: ${value[i].status}</p>
        <p>quantity:${value[i].quantity}</p>
        <p>location:${value[i].location}</p>
        <p> Date:${value[i].order_date}</p>
        <button class='btn btn-primary' id='${value[i].orderid}'>Accept</button>
        <button class='btn btn-danger' id='reject'>Reject</button>
     
        </div> 
        
        ` 
    };
};
ui(orders);
});


















