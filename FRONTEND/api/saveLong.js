import { AsyncStorage } from 'react-native';

const saveLong = async (longitude) => {
    try {
        await AsyncStorage.setItem('@longitude', longitude);
        return 'THANH_CONG';
    } catch (e) {
        return e;
    }
};

export default saveLong;
