import { AsyncStorage } from 'react-native';

const postNavigator = async (POSITION) => {
    try {
        await AsyncStorage.setItem('@POSITION', POSITION);
        // return 'THANH_CONG';
    } catch (e) {
        return e;
    }
};

export default postNavigator;