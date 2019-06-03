
const getNearRestaurantApi =  (yourlatitude,yourlongitude) => (
       fetch("http://10.0.12.57/MealRecommendationApplication-Project/api/getNearRestaurant.php?pagenumber=0",
              {
                  method:"POST",
                  headers: {
                     'Content-Type': 'application/json',
                     Accept: 'application/json'
                  },
                  body: JSON.stringify({yourlatitude, yourlongitude})
              })
      )
      .then(res => {return res.json()})

 module.exports = getNearRestaurantApi;
      