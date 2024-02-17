import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert, Modal, Pressable, StyleSheet, Button, TextInput} from 'react-native';


function addItemRow (Items, AddItems) {
    const [modalVisible, setModalVisible] = useState(false);
    const newItemRow = (
      <ItemRow
        number={Items.length + 1} // Generate number dynamically
        itemName={`Item ${Items.length + 1}`} // Generate item name dynamically
      />
    );
    AddItems([...Items, newItemRow]); // Add new ItemRow to array
};

export default function ManageMeds (){
    // DEFAULT IS [], will be changed to database later.
    [Items, AddItems] = useState([])
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E6D3CD' }} >
            {/* List view */}
            <Text style={styles.title}> Manage Medications </Text>
            {Items}
            {/* <Button title="Add Item" onPress ={() => addItemRow(Items, AddItems)} /> */}
            <EditItem />


        </SafeAreaView>
    )
}

function ItemRow ({ number, itemName}) {
    return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.itemName}>{itemName}</Text>
      <CounterButton />
    </View>
    );
};

function CounterButton () {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };
  
    return (
        <View style={styles.buttonContainer}>
        <Button title="+" onPress={increment} />
        <Text style={styles.middleText}>{count}</Text>
        <Button title="-" onPress={decrement} />
        </View>
      );
};

function EditItem (Items, AddItems) {
  const [modalVisible, setModalVisible] = useState(false);
  const [medicationName, setMedicationName] = useState('');
  const [pillsPerDay, setPillsPerDay] = useState(0);
  const [notificationTime, setNotificationTime] = useState('');
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddMedication = () => {
    // Add the new medication to the list
    // Logic to save medication data goes here
    // For example, you can save it to a database or state
    // console.log({
    //   medicationName,
    //   pillsPerDay,
    //   notificationTime,
    //   startDate,
    //   frequency,
    //   duration
    // });
    // Reset the form
    setMedicationName('');
    setPillsPerDay(0);
    setNotificationTime('');
    setStartDate('');
    setFrequency('');
    setDuration('');
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E6D3CD' }}>
      {/* List view */}
      {/* Add modal popup for adding medication */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Medication Name */}
            <TextInput
              style={styles.input}
              placeholder="Medication Name"
              value={medicationName}
              onChangeText={setMedicationName}
            />
            {/* Number of Pills Per Day */}
            <ItemRow itemName="Number of Pills" count={pillsPerDay} setCount={setPillsPerDay} />
            {/* Notification Time */}
            <ItemRow itemName="Notification Time" count={notificationTime} setCount={setNotificationTime} />
            {/* Start Date */}
            <ItemRow itemName="Start Date" count={startDate} setCount={setStartDate} />
            {/* Frequency */}
            <ItemRow itemName="Frequency" count={frequency} setCount={setFrequency} />
            {/* Duration */}
            <ItemRow itemName="Duration" count={duration} setCount={setDuration} />
            {/* Add Medication Button */}
            <Button title="Add Medication" onPress={handleAddMedication} />
          </View>
        </View>
      </Modal>
      <Button title="Add Medication" onPress={() => setModalVisible(true)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
    },

      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      middleText: {
        fontSize: 24,
        marginHorizontal: 10,
      },
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      number: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
      },
      itemName: {
        flex: 1,
        fontSize: 16,
        marginRight: 8,
      },
});