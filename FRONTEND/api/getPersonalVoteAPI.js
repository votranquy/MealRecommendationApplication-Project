const getPersonalVoteAPI = (token,idfood) => (
    fetch('http://192.168.64.2/MealRecommendationApplication-Project/api/getPersonalVote.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({token,idfood})
    })
    .then(res => {return res.json()})
  );
module.exports = getPersonalVoteAPI;
  