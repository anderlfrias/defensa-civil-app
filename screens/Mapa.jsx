import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { url } from '../utils/config'

// let albergues = [
//     {
//         ciudad: "Distrito Nacional",
//         codigo: "DO-010002",
//         edificio: "Polideportivo San Carlos",
//         coordinador: "Luis Peña",
//         telefono: "(809) 308-3411",
//         capacidad: "274 personas",
//         lat: -69.89178,
//         lng: 18.47893
//     },
//     {
//         ciudad: "Santo Domingo de Guzmán",
//         codigo: "DO-010007",
//         edificio: "Politécnico Don Bosco",
//         coordinador: "Modesto Cabrera",
//         telefono: "(829) 699-3290",
//         capacidad: "",
//         lat: -69.901247,
//         lng: 18.478692
//     },
//     {
//         ciudad: "Santo Domingo de Guzmán",
//         codigo: "DO-010008",
//         edificio: "Parroquia Don Bosco",
//         coordinador: "Pedro Arias",
//         telefono: "(809) 858-9928",
//         capacidad: "",
//         lat: -69.899758,
//         lng: 18.479236
//     },
//     {
//         ciudad: "Santo Domingo de Guzmán",
//         codigo: "DO-010010",
//         edificio: "Iglesia Abventista Del 7Mo Dia Franco Creor",
//         coordinador: "Pastor Reini",
//         telefono: "(809) 904-7084",
//         capacidad: "13,392 personas",
//         lat: -69.889178,
//         lng: 18.476092
//     },
//     {
//         ciudad: "Santo Domingo de Guzmán",
//         codigo: "DO-010011",
//         edificio: "Parroquia San Carlos Borromeo",
//         coordinador: "Solangel De Los Santos",
//         telefono: "(809) 689-5020",
//         capacidad: "1,225 personas",
//         lat: -69.893956,
//         lng: 18.475336
//     },
// ]

const Mapa = () => {
    const [albergues, setAlbergues] = useState([]);

    useEffect(() => {
        fetch(`${url}def/albergues.php`)
            .then(response => response.json())
            .then(data => {
                setAlbergues(data.datos);
            })
    }, [albergues]);
    return (
        <View>
            {albergues.length > 0 && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -69.893956,
                        longitude: 18.475336,
                        latitudeDelta: 1,
                        longitudeDelta: 0.5,
                    }}
                >
                    {albergues.map((albergue, index) => 
                                (
                                <Marker
                                    style={styles.marker}
                                    key={index}
                                    coordinate={{
                                        latitude: parseFloat(albergue.lat),
                                        longitude: parseFloat(albergue.lng),
                                    }}
                                    title={
                                        albergue.cuidad
                                    }
                                    description={
                                        albergue.edificio
                                    }
                                />
                            )
                        )}

                </MapView>
            )}
        </View>
    )
}

export default Mapa

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    marker: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white"
    },
});