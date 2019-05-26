const getMenuApi = (token, restaurant_id) => (
       fetch('http://10.0.13.130/MealRecommendationApplication-Project/api/get_menu.php',
       {   
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               Accept: 'application/json'
           },
           body: JSON.stringify({token, restaurant_id})
       })
       .then(res => { return res.json()})
     );
   module.exports = getMenuApi;
     