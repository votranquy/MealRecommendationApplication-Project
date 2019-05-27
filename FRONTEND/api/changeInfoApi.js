const changeInfoApi = (token, name, phone, address) => (
  fetch('http://10.0.23.29/MealRecommendationApplication-Project/api/change_info.php',
  {   
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({ token, name, phone, address })
  })
  .then(res => res.json())
);
module.exports = changeInfoApi;
