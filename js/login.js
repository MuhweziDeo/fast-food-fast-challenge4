
window.onload=function login(){
    document.getElementById('login').addEventListener('submit', login_user)
    function login_user(event){
        event.preventDefault()
        var usernameData=document.getElementById('username').value;
        var passwordData=document.getElementById('password').value;
   
        var loginData={
            username:usernameData,
            password:passwordData
        };
    
        fetch('https://fast-foods-api-main.herokuapp.com/api/v2/auth/login',{
            method:'post',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(loginData)
    
        }).then(res=>res.json())
        .then(response=>{
            if (response['message'] == 'You have been Verified' && usernameData=='super'){
                alert(response['message'])
                redirect:window.location.replace('../admin_dashboard.html')
            }
            else if (response['message'] == 'You have been Verified'){
                alert(response['message'])
                redirect:window.location.replace('../user_profile_page.html')
            }
            else{
                alert(response['message'])
                redirect:window.location.replace('../login.html')
            }
    }); }};
















