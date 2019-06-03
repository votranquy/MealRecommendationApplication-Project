const searchApi = (key) => (
       fetch('http://10.0.12.57/MealRecommendationApplication-Project/api/searchFood.php?pagenumber=0',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({key})
       })
       .then(res =>{return res.json()})
     );
module.exports = searchApi;
     