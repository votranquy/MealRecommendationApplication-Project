const crawlData = () => (
    fetch('http://10.0.13.130/MealRecommendationApplication-Project/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;