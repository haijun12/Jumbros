import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert, Modal, Pressable, StyleSheet, Button} from 'react-native';

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
            <Button title="Add Item" onPress ={() => addItemRow(Items, AddItems)} />


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