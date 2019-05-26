const deleteItemApi = (token, idBookmark, idFood) => (
    fetch('http://10.0.13.130/MealRecommendationApplication-Project/api/deleteItem.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token, idBookmark, idFood})
    })
    .then(res => res.json())
  );
module.exports = deleteItemApi;