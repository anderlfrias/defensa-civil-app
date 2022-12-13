import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
}

async function deleteValueFor(key) {
    await SecureStore.deleteItemAsync(key);
}

const isLoggedIn = async() => {
    const value = await getValueFor('auth');
    return JSON.parse(value).isLoggedIn === true;
}

const getToken = async() => {
    const value = await getValueFor('auth');
    console.log("Secure Store", JSON.parse(value));
    return JSON.parse(value);
}

export {
    save,
    getValueFor,
    deleteValueFor,
    isLoggedIn,
    getToken
}