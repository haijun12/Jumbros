import React from 'react';
import { View,SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Home (){
  // Dummy data for medications (replace with actual data)  
  const medications = [
      { name: 'Medication A', nextDoseTime: '10:00 AM' },
      { name: 'Medication B', nextDoseTime: '12:00 PM' },
      // Add more medications as needed
  ];

  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Today</Text>
    {medications.map((medication, index) => (
      <View key={index} style={styles.medicationContainer}>
        <Text style={styles.medicationName}>{medication.name}</Text>
        <Text style={styles.nextDoseTime}>{`Next dose: ${medication.nextDoseTime}`}</Text>
      </View>
    ))}
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EAE8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  medicationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  medicationName: {
    fontSize: 18,
  },
  nextDoseTime: {
    fontSize: 16,
    color: '#777',
  },
});