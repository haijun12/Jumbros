import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Profile() {
  // Dummy user data (replace with actual user data)
  const [userData, setUserData] = useState({
    name: 'John Doe',
    age: '30',
    gender: 'Male',
  });

  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    // Save edited user data to backend (e.g., API call)
    setEditing(false);
    // Logic to update user data in backend
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name:</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={userData.name}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
          />
        ) : (
          <Text style={styles.text}>{userData.name}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Age:</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={userData.age}
            onChangeText={(text) => setUserData({ ...userData, age: text })}
            keyboardType="numeric"
          />
        ) : (
          <Text style={styles.text}>{userData.age}</Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Gender:</Text>
        {editing ? (
          <TextInput
            style={styles.input}
            value={userData.gender}
            onChangeText={(text) => setUserData({ ...userData, gender: text })}
          />
        ) : (
          <Text style={styles.text}>{userData.gender}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setEditing(!editing)}>
        <Text style={styles.buttonText}>{editing ? 'Save' : 'Edit'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4081',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  input: {
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4081',
  },
});
