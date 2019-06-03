import { AsyncStorage } from 'react-native';
const getLong = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        // console.log(value);
        if (value !== null) {return value;}
        return '';
       
    } catch (error) {
        return '';   // Error retrieving data
    }
};
export default getLong;
