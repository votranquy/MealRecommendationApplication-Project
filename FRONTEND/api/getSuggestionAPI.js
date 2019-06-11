const getSuggestionAPI =  (text) => (
  fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/getSuggestion.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({text})
  })
  .then(res =>{return res.json()})
);
module.exports = getSuggestionAPI;
