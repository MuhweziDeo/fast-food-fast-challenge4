
window.onload=function login(){
    document.getElementById('login').addEventListener('submit',
    loginUser=(event)=>{
        event.preventDefault()
        let msg=document.getElementById('errorMessage')
        let usernameData=document.getElementById('username').value;
        let passwordData=document.getElementById('password').value;      
        let loginData={username:usernameData,password:passwordData};
 
                const loginResponse= post('https://fast-foods-api-main.herokuapp.com/api/v2/auth/login',loginData,'')
                .then(data=>{ 
                if(data['message']==`username ${usernameData} deosnt exist`){
                    msg.innerHTML=`username ${usernameData} deosnt exist`

                }
                else if(data['message']=="password verification failed"){
                    msg.innerHTML='Invalid password try again';
    
                }
                else if(data['message']=='You have been Verified' || usernameData=='super'){
                    localStorage.setItem('token',data['token'])
                    localStorage.setItem('username',usernameData)
                    window.location.href='admin_dashboard.html'
                }
                else if(data['message']=='You have been Verified'){
                    localStorage.setItem('token',data['token'])
                    localStorage.setItem('username',usernameData)
                    window.location.href='user_profile_page.html'
                }
                }
                );
    

    })
    
    }



