
const getRandomFoodApi =  (page) => (
       fetch("http://10.0.12.57/MealRecommendationApplication-Project/api/random.php?pagenumber="+page,
              {
                  method:"POST",
                  headers: {
                     'Content-Type': 'application/json',
                     Accept: 'application/json'
                  }
              })
      )
      .then(res => {return res.json()})

 module.exports = getRandomFoodApi;
      