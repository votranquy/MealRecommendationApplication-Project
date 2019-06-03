import { AsyncStorage } from 'react-native';

const saveLat = async (latitude) => {
    try {
        await AsyncStorage.setItem('@latitude', latitude);
        return 'success';
    } catch (e) {
        return e;
    }
};

export default saveLat;
