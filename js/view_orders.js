let token=localStorage.getItem('token')
let username=localStorage.getItem('username')
let orders=document.getElementById('result');

get('https://fast-foods-api-main.herokuapp.com/api/v2/orders',token).then(
    data=>{
        for(const[key,value] of Object.entries(data)){
            let ordersList=value;
           
            let orderNumber =ordersList.length
            let total=document.getElementById('order-total');

            total.innerHTML=`<p>Total orders: ${orderNumber} </p>`

            ordersList.forEach(element => {
                let orders=document.getElementById('result');
                orders.innerHTML+=
                `
                    <div class="card" id='order-info'>
                    <img src="http://lorempixel.com/400/200/food" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>status: ${element['status']}</b></h4> 
                        <p>orderID: ${element['orderid']}</p> 
                        <p>ordered By: ${element['user_id']}
                        <br>
                        <button type='submit'  class="btn btn-primary handleOrderButton" id=${element['orderid']}>Handle</button>
                    </div>
                    </div>
                `
            }
        )};
        var orderDetail= document.getElementById('result')
        orderDetail.onclick=e=>{  
            
            var orderID=e.target.attributes.getNamedItem('id').value
            localStorage.setItem('orderid',orderID)
            window.location.href = "orders.html"
                    
        }
    }
   
)

    

    

















