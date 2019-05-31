const searchApi = (key) => (
       fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/searchFood.php?pagenumber=0',
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
     