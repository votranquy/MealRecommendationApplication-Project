const getTopFoodApi =  (page) => (
       fetch("http://192.168.21.250/MealRecommendationApplication-Project/api/topfood.php?pagenumber="+page,
              {
                  method:"POST",
                  headers: {
                     'Content-Type': 'application/json',
                     Accept: 'application/json'
                  }
              })
      )
      .then(res => {return res.json()})


 module.exports = getTopFoodApi;
      