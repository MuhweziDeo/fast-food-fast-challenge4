var token = localStorage.getItem('access-token')
url = 'https://fast-foods-api-main.herokuapp.com/api/v2/menu'
let urls = []
// add meal
document.getElementById('menu-form').addEventListener('submit', add_meal)

function add_meal(event) {
    event.preventDefault()
    var mealNameData = document.getElementById('meal_name').value;
    var priceData = document.getElementById('price').value;
    var mealData = {
        meal_name: mealNameData,
        price: priceData,
    };

    fetch('https://fast-foods-api-main.herokuapp.com/api/v2/menu', {
            method: 'post',
            headers: {
                'content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(mealData)

        }).then(res => res.json())
        .then(response => {
            var user=localStorage.getItem('logged_in_user')
            console.log(user)
            let loggedInUser=document.getElementById('current_user')
            loggedInUser.innerHTML=`
            <p>Current User: ${user}</p>
            `;
            alert(response['message']);
            window.location.href = "admin_panel_items.html"
        });
}

// get menu
fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => {
        return res.json()
    })
    .then(response => {
        var user=localStorage.getItem('logged_in_user')
        console.log(user)
        let loggedInUser=document.getElementById('current_user')
        loggedInUser.innerHTML=`
        <p>Current User: ${user}</p>
        `;
        for (const [key, value] of Object.entries(response)) {
            for (var i = 0; i < value.length; i++) {
                let content = document.getElementById('menu')

                content.innerHTML += `
        <table id="food-items-table">
                        <tr>
                            <th>ID</th>
                            <th> Name</th>
                            <th> Price</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        <tr>
                            <td>${value[i].meal_id}</td>
                            <td>${value[i].meal_name}</td>
                            <td>${value[i].price}</td>
                            <td>${value[i].meal_status}</td>
                            <td><button id='${value[i].meal_id}' class="btn-primary">Edit</button></td>
                            <td><button  id='${value[i].meal_id}' class="btn-danger">Delete</button></td>
                        </tr>
                        <tr>
         </table>
         
        `;

            };
            var results = document.getElementById('menu')
            results.onclick = e => {
                var id = e.target.attributes.getNamedItem("id").value;
                localStorage.setItem('meal_id', id)
                window.location.href = "menu.html"
            }
        };

    });