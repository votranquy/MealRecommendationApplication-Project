import { AsyncStorage } from 'react-native';

const saveBookMark = async (bookmarkArray) => {
    await AsyncStorage.setItem('@bookmark', JSON.stringify(bookmarkArray));
};

export default saveBookMark;
