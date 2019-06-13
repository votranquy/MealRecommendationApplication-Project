import { AsyncStorage } from 'react-native';
const getNavigator = async () => {
    try {
        const value = await AsyncStorage.getItem('@POSITION');
        // console.log(value);
        if (value !== null) {return value;}
        return '';
       
    } catch (error) {
        return '';   // Error retrieving data
    }
};
export default getNavigator;