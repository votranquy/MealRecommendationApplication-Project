
const getAnotherMenuApi = (restaurant_id,food_id) => (
    fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/getAnotherMenu.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({restaurant_id,food_id})
    })
    .then(res => res.json())
  );
module.exports = getAnotherMenuApi;
  