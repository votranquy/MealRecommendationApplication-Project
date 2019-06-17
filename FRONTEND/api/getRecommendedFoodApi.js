const getRecommendedFood =  (token) => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/getRecommendedFood.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token})
    })
    .then(res =>{return res.json()})
  );
  module.exports = getRecommendedFood;
  