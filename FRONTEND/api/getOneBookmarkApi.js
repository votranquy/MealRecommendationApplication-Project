const getOneBookmarkApi = (token,idbookmark) => (
       fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/get_onebookmark.php',
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
     