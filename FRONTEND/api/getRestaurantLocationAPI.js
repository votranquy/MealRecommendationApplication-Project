

    const getRestaurantLocationAPI =  (food_id) => (
        fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/getRestaurantLocation.php',
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({food_id})
        })
        .then(res =>{return res.json()})
      );
      module.exports = getRestaurantLocationAPI;
      