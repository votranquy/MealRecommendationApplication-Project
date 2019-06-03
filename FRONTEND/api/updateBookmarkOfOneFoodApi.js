const updateBookmarkOfOneFoodApi = (token,idbookmark, idfood) => (
       fetch('http://10.0.12.57/MealRecommendationApplication-Project/api/updateBookmarkOfOneFood.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({token,idbookmark, idfood})
       })
       .then(res => res.json())
     );
   module.exports = updateBookmarkOfOneFoodApi;
     