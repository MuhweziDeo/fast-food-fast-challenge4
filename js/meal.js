var id=localStorage.getItem('meal_id')
var token=localStorage.getItem("access-token")
// update meal
document.getElementById('update-meal-form').addEventListener('submit', update_meal)
function update_meal(event) {
    event.preventDefault()
    var mealStatusData = document.getElementById('status').value;
    var priceData = document.getElementById('price').value;
    var mealData = {
        meal_status: mealStatusData,
        price: priceData,
    };
    fetch(`https://fast-foods-api-main.herokuapp.com/api/v2/meal/${id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(mealData)

        }).then(res => res.json())
        .then(response => {
            alert(response['message']);
            window.location.href = "admin_panel_items.html"
        });
}

// delete meal
document.getElementById('delete').addEventListener('click', delete_meal)
function delete_meal(event) {
    event.preventDefault()
    fetch(`https://fast-foods-api-main.herokuapp.com/api/v2/meal/${id}`, {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }

        }).then(res => res.json())
        .then(response => {
            alert(response['message']);
            window.location.href = "admin_panel_items.html"
        });
}
