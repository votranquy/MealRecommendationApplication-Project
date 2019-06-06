

const getTrendFoodApi2 =  (page, latitude, longitude) => (
       fetch("http://192.168.21.250/MealRecommendationApplication-Project/api/getTrendFood2.php?pagenumber="+page,
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

 module.exports = getTrendFoodApi2;
      