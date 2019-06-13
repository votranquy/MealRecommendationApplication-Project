

const getTopFoodViewApi2 =  (page, latitude, longitude) => (
    fetch("http://192.168.43.103/MealRecommendationApplication-Project/api/getTopFoodView2.php?pagenumber="+page,
           {
               method:"POST",
               headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
               },
               body: JSON.stringify({latitude,longitude})
           })      
   )
   .then(res => {return res.json()})

module.exports = getTopFoodViewApi2;
   