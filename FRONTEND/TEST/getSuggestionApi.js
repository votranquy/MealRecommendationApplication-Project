const getSuggestionApi = (text) => (
  fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/getSuggestion.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({ text })
  })
  .then(res =>{return res.json()})
);
module.exports = getSuggestionApi;
