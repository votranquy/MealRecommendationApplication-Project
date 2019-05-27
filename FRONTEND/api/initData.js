const initData = () => (
    fetch('http://10.0.23.29/MealRecommendationApplication-Project/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
