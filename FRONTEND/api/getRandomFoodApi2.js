
const getRandomFoodApi2 =  (page, latitude, longitude) => (
       fetch("http://192.168.43.103/MealRecommendationApplication-Project/api/random2.php?pagenumber="+page,
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
      