var id=localStorage.getItem('orderid')
var token=localStorage.getItem('token')
var username=localStorage.getItem('username')
console.log(id)
// var url=`https://fast-foods-api-main.herokuapp.com/api/v2/orders/${id}`

get(`${baseUrl}orders/${id}`,token,).then(
    data=>{
        for(const[key,value] of Object.entries(data)){
        let content=document.getElementById('order-details')
        if(value.status=='rejected'){
           var actionButton='<button class="btn-primary" id="accept">Accept</button>'

        }
        else if(value.status=='accepted'){
            var actionButton='<button class="btn-primary" id="reject">Cancel</button>'
        }
        else{
            var actionButton='<button class="btn-primary" id="reject">Cancel</button> <button class="btn-primary" id="accept">Accept</button>'
        }
        content.innerHTML=
        `
        <p>orderID: ${value.orderid}</p>
        <p>User_ID: ${value.user_id}</p>
        <p>meal_ordered: ${value.meal_name}</p>
        <p>location: ${value.location}</p>
        <p>status: ${value.status}</p>
        <p>orderDate: ${value.order_date}</p>
        ${actionButton}
        `
        }
           
            var acceptBtn=document.getElementById('accept');
            var rejectBtn=document.getElementById('reject')

         if(acceptBtn){
            acceptBtn.addEventListener('click',acceptOrder=(e)=>{
            e.preventDefault()
           put(`https://fast-foods-api-main.herokuapp.com/api/v2/orders/${id}`,token,{'status':'accepted'}
           ).then(data=>{
               console.log(data)
               window.onchange(location.reload())
           })
            })
            }
            else if (rejectBtn){
                rejectBtn.addEventListener('click',cancelOrder=(e)=>{
                e.preventDefault()
                put(`https://fast-foods-api-main.herokuapp.com/api/v2/orders/${id}`,token,{'status':'rejected'}
                ).then(data=>{
                    console.log(data)   
                    window.onchange(location.reload())   
                })
            })

            }
     

        
        
    }

    
)

