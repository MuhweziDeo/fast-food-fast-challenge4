
window.onload=function signup(){
    document.getElementById('signup').addEventListener('submit', signup_user)
    function signup_user(event){
        event.preventDefault()
        var usernameData=document.getElementById('username').value;
        var passwordData=document.getElementById('password').value;
        var confirmData=document.getElementById('Confrim-password').value;
        var loginData={
            username:usernameData,
            password:passwordData,
            confirm:confirmData
        };
    
        fetch('https://fast-foods-api-main.herokuapp.com/api/v2/auth/signup',{
            method:'post',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(loginData)
    
        }).then(res=>res.json())
        .then(response=>{
            alert(response['message']);
            if (response['message']=='user created'){
            redirect:window.location.replace('../login.html')
            }else{
                redirect:window.location.replace('../signup.html')
           

        }
    });
  }}
