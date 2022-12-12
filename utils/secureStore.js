import * as SecureStore from 'expo-secure-store';

const secureStore = () => {
    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    async function getValueFor(key) {
        return await SecureStore.getItemAsync(key);
    }

    return {
        save,
        getValueFor
    }
}

export default secureStore