const initData = () => (
    fetch('http://10.10.31.156/MealRecommendationApplication-Project/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
