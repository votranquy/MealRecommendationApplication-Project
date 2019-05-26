const createBookmarkApi = (token, name) => (
       fetch('http://10.0.13.130/MealRecommendationApplication-Project/api/createBookmark.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({token,name})
       })
       .then(res => res.json())
     );
   module.exports = createBookmarkApi;