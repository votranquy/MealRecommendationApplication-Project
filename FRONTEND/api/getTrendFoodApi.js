const getTrendFoodApi =  (page) => (
       fetch("http://192.168.43.103/MealRecommendationApplication-Project/api/getTrendFood.php?pagenumber="+page,
              {
                  method:"POST",
                  headers: {
                     'Content-Type': 'application/json',
                     Accept: 'application/json'
                  }
              })
      )
      .then(res => {return res.json()})
      // .catch(error=>{
      //   return "";
      // });

 module.exports = getTrendFoodApi;
      