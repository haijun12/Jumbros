import React, { useState } from 'react';
import { View,Text, SafeAreaView, Button, StyleSheet} from 'react-native';


export default function ManageMeds (){
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E6D3CD' }} >
            {/* List view */}
            <Text style={styles.title}> Manage Medications </Text>
            <ItemRow number = {1} itemName = {"item"} />
            <ItemRow number = {2} itemName = {"item 2"} />


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