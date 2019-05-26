const getBookmarkApi = (token) => (
    fetch('http://10.0.13.130/MealRecommendationApplication-Project/api/get_bookmark.php',
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
  