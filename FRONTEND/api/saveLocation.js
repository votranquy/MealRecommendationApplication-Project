import { AsyncStorage } from 'react-native';

const saveLocation = async (region) => {
    try {
        await AsyncStorage.setItem('@region', JSON.stringify(region) );
        return 'THANH_CONG';
    } catch (e) {
        return e;
    }
};

export default saveLocation;
