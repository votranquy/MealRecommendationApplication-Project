const getNewFoodApi =  (page) => (
    fetch("http://192.168.64.2/MealRecommendationApplication-Project/api/getNewFood.php?pagenumber="+page,
           {
               method:"POST",
               headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
               }
           })
   )
   .then(res => {return res.json()})


module.exports = getNewFoodApi;
   