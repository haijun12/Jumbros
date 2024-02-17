import React from 'react';
import { Text, SafeAreaView} from 'react-native';

export default function ManageMeds (){
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E6D3CD' }} >
            {/* List view */}
            <Text style={styles.title}>Todayis</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});