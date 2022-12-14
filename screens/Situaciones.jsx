import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../utils/globalStyles'
import { url } from '../utils/config'
import { getValueFor } from '../utils/secureStore'
import Situacion from '../components/Situacion'

const Situaciones = () => {
    const [situaciones, setSituaciones] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({});

    const getSituaciones = async() => {
        console.log("getSituaciones", user);

        if (!user?.token) {
            alert("No se pudo obtener el token");
            return;
        }

        setIsLoading(true);
        const data = new FormData();
        data.append("token", user.token);

        console.log(data);

        await fetch(`${url}def/situaciones.php`, {
            method: 'POST',
            body: data
        })
            .then((response) => response.json())
            .then(async(responseJson) => {
                if (responseJson.exito) {
                    console.log(responseJson);
                    setSituaciones(responseJson.datos);
                } else{
                    alert(responseJson.mensaje);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getValueFor('auth').then((data) => {
            console.log("Situaciones", JSON.parse(data).user);
            if (data) {
                setUser(JSON.parse(data).user);
            }
        });
    }, []);

    useEffect(() => {
        getSituaciones();
    }, []);
    return (
        <View>
            <Text>Situaciones</Text>

            {situaciones.map((situacion, index) => {
                return (
                    <Situacion
                        key={index}
                        situacion={situacion}
                    />
                )
            })}
        </View>
    )
}

export default Situaciones