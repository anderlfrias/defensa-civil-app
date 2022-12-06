import { View, Text, ScrollView, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/config'
import Albergue from '../components/Albergue'

const Albergues = () => {
    const [albergues, setAlbergues] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [albergueSelected, setAlbergueSelected] = useState({});

    useEffect(() => {
        fetch(`${url}def/albergues.php`)
            .then(response => response.json())
            .then(data => {
                setAlbergues(data.datos);
            })
    }, []);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Albergues</Text>
            </View>
            {albergues.map((albergue, index) => (
                <Albergue
                    key={index}
                    albergue={albergue}
                    onPress={() => {
                        setAlbergueSelected(albergue);
                        setModalVisible(true);
                    }}
                />
            ))}

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>
                                Detalles del albergue
                            </Text>
                            <Text style={styles.modalSubtitle}>
                                COD: {albergueSelected.codigo}
                            </Text>
                        </View>
                        <View style={styles.modalBody}>
                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Edificio
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.edificio}
                                </Text>
                            </View>

                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Cuidad
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.ciudad}
                                </Text>
                            </View>

                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Coordinador
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.coordinador}
                                </Text>
                            </View>

                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Telefono
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.telefono}
                                </Text>
                            </View>

                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Capacidad
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.capacidad}
                                </Text>
                            </View>

                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Latitud
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.lat}
                                </Text>
                            </View>

                            <View style={styles.detailsCard}>
                                <Text style={styles.detailsTitle}>
                                    Longuitud
                                </Text>
                                <Text style={styles.detailsDescription}>
                                    {albergueSelected.lng}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                                style={styles.modalCloseButton}
                            >
                                <Text style={styles.modalCloseButtonText}>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default Albergues

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 20,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#ccc',
        width: '90%',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        width: '100%',
    },
    modalHeader: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalSubtitle: {
        fontSize: 14,
        color: '#ccc',
    },
    modalBody: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    modalFooter: {
        width: '100%',
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    modalCloseButton: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDF2F6',
        borderRadius: 20,
    },
    modalCloseButtonText: {
        fontSize: 18,
        color: '#1a202c',
    },
    detailsCard: {
        width: '100%',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    detailsTitle: {
        fontSize: 14,
    },
    detailsDescription: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});