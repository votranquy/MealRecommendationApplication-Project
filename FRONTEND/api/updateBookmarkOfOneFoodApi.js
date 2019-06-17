const updateBookmarkOfOneFoodApi = (token,idbookmark, idfood) => (
       fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/updateBookmarkOfOneFood.php',
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
     