const getBookmarkApi = (token) => (
    fetch('http://10.0.23.29/MealRecommendationApplication-Project/api/get_bookmark.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token})
    })
    .then(res => res.json())
  );
module.exports = getBookmarkApi;
  