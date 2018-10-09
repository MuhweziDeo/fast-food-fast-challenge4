
var token=localStorage.getItem('access-token')
var url="https://fast-foods-api-main.herokuapp.com/api/v2/orders"
fetch(url,{
    method:'GET',
    headers:{
        Authorization:`Bearer ${token}`
    }
        })
     .then(response => response.json())
  .then(data => {
    console.log(data)
  });
















