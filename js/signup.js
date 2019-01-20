window.onload=function signup(){
        document.getElementById('signup').addEventListener('submit',signupUser=(e)=>{
        e.preventDefault()
        var responseDiv=document.getElementById('signup-info')
        var usernameData=document.getElementById('username').value;
        var passwordData=document.getElementById('password').value;
        var confirmData=document.getElementById('Confrim-password').value;

        var signUpData={
            username:usernameData,
        password:passwordData,
        confirm:confirmData
    };
         
    post('https://fast-foods-api-main.herokuapp.com/api/v2/auth/signup',signUpData,'').then(
        data=>{
            if(data['message']=='user created'){
                responseDiv.innerHTML='Account created succesfully you can log in now'
                setTimeout(function(){
                     redirect:window.location.replace('../login.html')

                },4000);
            
            }
            else if(data['message']==`username ${usernameData} already taken`){
                responseDiv.innerHTML='username already taken please choose a different one'

            }
            else if(data['message']==`"passwords must match "`){
                responseDiv.innerHTML='Oops passwords must match'

            }
        }
    )
        

    })
   
}

