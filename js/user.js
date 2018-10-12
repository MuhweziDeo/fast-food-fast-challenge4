var token=localStorage.getItem('access-token')
// get user orders
fetch('https://fast-foods-api-main.herokuapp.com/api/v2/users/orders',{
    method:'get',
    headers:{
        Authorization:`Bearer ${token}`
    }
}).then(res=>res.json()
).then(response=>{
    console.log(response)
    for(const[key,value] of Object.entries(response)){
        for(var i=0;i<value.length;i++){
            console.log(value[i].orderid)
            let content=document.getElementById('user-orderz')
            console.log(content)
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
})