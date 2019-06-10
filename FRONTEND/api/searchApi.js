const searchApi = (key, page) => (
       fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/searchFood.php?pagenumber='+page,
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
     