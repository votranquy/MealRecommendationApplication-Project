
const increaseViewAPI = (id) => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/increaseView.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({id})
    })
    .then(res => { return res.json();})
  );
  module.exports = increaseViewAPI;
       