import { AsyncStorage } from 'react-native';

const getBookMark = async () => {
    try {
        const value = await AsyncStorage.getItem('@bookmark');
        if (value !== null) {
            return JSON.parse(value);
        }
        return [];
    } catch (error) {
    // Error retrieving data
        return [];
    }
};

export default getBookMark;
