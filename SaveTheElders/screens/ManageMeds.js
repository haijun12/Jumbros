import React, { useState } from 'react';
import { View,Text, SafeAreaView, Button, StyleSheet} from 'react-native';


const CounterButton = () => {
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
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button title="+" onPress={increment} />
            <Text style={styles.middleText}>{count}</Text>
            <Button title="-" onPress={decrement} />
          </View>
        </View>
      );
  };
export default function ManageMeds (){
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E6D3CD' }} >
            {/* List view */}
            <Text style={styles.title}>Today is</Text>
            <CounterButton />


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      middleText: {
        fontSize: 24,
        marginHorizontal: 10,
      },
});