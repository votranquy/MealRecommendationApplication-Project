
const getRandomFoodApi2 =  (page, latitude, longitude) => (
       fetch("http://10.0.12.57/MealRecommendationApplication-Project/api/random2.php?pagenumber="+page,
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
      // .catch(error=>{
      //   return "";
      // });

 module.exports = getRandomFoodApi2;
      