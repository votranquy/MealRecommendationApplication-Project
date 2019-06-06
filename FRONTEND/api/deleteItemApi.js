const deleteItemApi = (token, idBookmark, idFood) => (
    fetch('http://192.168.21.250/MealRecommendationApplication-Project/api/deleteItem.php',
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