import { AsyncStorage } from 'react-native';

const getLocation = async () => {
    try {
        const value = await AsyncStorage.getItem('@region');
        if (value !== null) {
            return JSON.parse(value);
        }
        return "";
    } catch (error) {
    // Error retrieving data
        return "";
    }
};

export default getLocation;
