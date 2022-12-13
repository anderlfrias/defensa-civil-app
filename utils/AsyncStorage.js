import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        // saving error
        console.log("Error", e);
    }
}

const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
        console.log("Error", e);
    }
}

const removeValue = async () => {
    try {
        await AsyncStorage.removeItem('@storage_Key')
    } catch (e) {
        // remove error
        console.log("Error", e);
    }
}

export {
    storeData,
    getData,
    removeValue
}