const changeInfoApi = (token, name, phone, address) => (
  fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/change_info.php',
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
