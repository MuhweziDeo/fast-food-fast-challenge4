
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
        // console.log(value[i])
        orders=value[i]
       
        var id=value[i].orderid

        let content = document.getElementById('result')

        content.innerHTML+= `
        <div id="${id}">
        <p> orderID: ${value[i].orderid}</p>
        <p>order-status: ${value[i].status}</p>
        <button class="btn-primary" id="${id}" >View More Details</button>
        </div>    
        `;
      
      
    };


 var results= document.getElementById('result')
    results.onclick=e=>{       
        
        // window.location.href = "login.html"
       var id= e.target.attributes.getNamedItem("id").value;
        // console.log(c);
        localStorage.setItem('orderid',id)
        window.location.href = "orders.html"
    }
  };

});
    

















