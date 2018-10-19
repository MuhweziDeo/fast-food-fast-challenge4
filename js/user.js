var token=localStorage.getItem('access-token')
// get user orders
fetch('https://fast-foods-api-main.herokuapp.com/api/v2/users/orders',{
    method:'get',
    headers:{
        Authorization:`Bearer ${token}`
    }
}).then(res=>res.json()
).then(response=>{
    var user=localStorage.getItem('logged_in_user')
    console.log(user)
    let loggedInUser=document.getElementById('current_user')
    loggedInUser.innerHTML=`
    <p>Current User: ${user}</p>
    `;
   if (response['message']=='You havent placed any orders yet'){
    let content=document.getElementById('user-orderz')
    content.innerHTML+=`
    <h2>You Havent Placed Any Orders Yet</h2>
    <p>Click Make Order to Get started Now</p>
    `;

   }
   else{
    for(const[key,value] of Object.entries(response)){
        for(var i=0;i<value.length;i++){
            console.log(value[i].orderid)
            let content=document.getElementById('user-orderz')
            content.innerHTML+=`
            <table>
                            <tr>
                                <th>orderID</th>
                                <th>Meal ordered</th>
                                <th>Quantity</th>
                                <th>Order-Status</th>
                                <th>Order date</th>
                            </tr>
                            <tr>
                                <td>${value[i].orderid}</td>
                                <td>${value[i].meal_name}</td>
                                <td>${value[i].quantity}</td>
                                <td>${value[i].status}</td>
                                <td>${value[i].order_date}</td>
                            </tr>
             </table>
            `;

        }
     
       

    }
   }
  
})

// get menu
fetch('https://fast-foods-api-main.herokuapp.com/api/v2/menu', {
    method: 'GET',
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then((res) => {
    return res.json()
})
.then(response => {
    if (response['message']=='No Meals available yet on the Menu'){
        let content = document.getElementById('menu')

           content.innerHTML=`
               <h2>No Meals available yet</h2>
           `
   }
   else{
    for (const [key, value] of Object.entries(response)) {
        for (var i = 0; i < value.length; i++) {
            let content = document.getElementById('menu')

            content.innerHTML += `
    <table id="food-items-table">
                    <tr>
                        <th> Name</th>
                        <th> Price</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>${value[i].meal_name}</td>
                        <td>${value[i].price}</td>
                        <td>${value[i].meal_status}</td>
                      
                    </tr>
                    <tr>
     </table>
     
    `;
        };
    }};

});

// post an order
document.getElementById('order-form').addEventListener('submit',placeOrder)
function placeOrder(event){
    event.preventDefault()
   
    var mealNameData = document.getElementById('meal_name').value;
    var quantityData = document.getElementById('quantity').value;
    var locationData = document.getElementById('location').value;

   var orderData={
        meal:mealNameData,
        quantity:quantityData,
        location:locationData
    }

    fetch('https://fast-foods-api-main.herokuapp.com/api/v2/users/orders',{
        method:'POST',
        headers:{
            'content-Type':'application/json',
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(orderData)
    }).then(res=>res.json()
    ).then(response=>{
        console.log(response)
        alert(response['meaasge'])
        window.location.href = "user_profile_page.html"
    })
}