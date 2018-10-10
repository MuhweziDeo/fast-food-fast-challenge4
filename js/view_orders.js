
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
// console.log(orders)
 for (const [key, value] of Object.entries(response)) {
    // console.log(key, value);
    for (var i = 0; i <value.length; i++) {
        // console.log(value[i])
        orders.push(value[i])
     
    };
  };
function ui(value){
 for (var i = 0;i <value.length; i++){
    console.log(value)
        let content = document.getElementById('result')

        content.innerHTML+= `
        <div>
        <table>

        <tr>
        <th>orderId</th>
        <th>user_id<th>
        </tr>
        
        <tr>
        <td> ${value[i].orderid}</td>
        <td> ${value[i].user_id}</td>
        <tr>
        </table>
        </div> 
        
        `  
    };
};
ui(orders);
});