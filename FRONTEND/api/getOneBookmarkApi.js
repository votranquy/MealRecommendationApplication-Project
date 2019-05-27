const getOneBookmarkApi = (token,idbookmark) => (
       fetch('http://10.0.23.29/MealRecommendationApplication-Project/api/get_onebookmark.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({token,idbookmark})
       })
       .then(res => res.json())
     );
   module.exports = getOneBookmarkApi;
     