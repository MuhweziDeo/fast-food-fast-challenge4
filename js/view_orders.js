let token=localStorage.getItem('token')
let orders=document.getElementById('result');
get('https://fast-foods-api-main.herokuapp.com/api/v2/orders',token).then(
    data=>{
        console.log(data)
        for(const[key,value] of Object.entries(data)){
            let ordersList=value;
            ordersList.forEach(element => {
                let orders=document.getElementById('result');
                orders.innerHTML+=`
                    <div class="card">
                    <img src="http://lorempixel.com/400/200/food" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>status: ${element['status']}</b></h4> 
                        <p>orderID: ${element['orderid']}</p> 
                        <p>ordered By: ${element['user_id']}
                        <br>
                        <button  class="btn btn-primary handleOrderButton" id=${element['order_id']}>Handle</button>
                    </div>
                    </div>
                `
            });
        }
    }
)


//      var results= document.getElementById('result')
//         results.onclick=e=>{       
            
//             // window.location.href = "login.html"
//            var id= e.target.attributes.getNamedItem("id").value;
//             // console.log(c);
//             localStorage.setItem('orderid',id)
//             window.location.href = "orders.html"
//         }
//       }}

    

















