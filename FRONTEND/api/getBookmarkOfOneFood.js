const getBookmarkOfOneFood = (token, idfood) => (
    fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/getBookmarkOfOneFood.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token, idfood})
    })
    .then(res =>res.json())
  );
module.exports = getBookmarkOfOneFood;
     