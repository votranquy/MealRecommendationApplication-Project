const getRecommendedFood2 =  (token, latitude, longitude) => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/getRecommendedFood2.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, latitude, longitude})
    })
    .then(res =>{return res.json()})
  );
  module.exports = getRecommendedFood2;
  