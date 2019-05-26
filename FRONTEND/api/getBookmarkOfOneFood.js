const getBookmarkOfOneFood = (token, idfood) => (
       fetch('http://10.0.13.130/MealRecommendationApplication-Project/api/getBookmarkOfOneFood.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({token, idfood})
       })
       .then(res => res.json())
     );
   module.exports = getBookmarkOfOneFood;
     