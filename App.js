import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native'
import GoalInput from './Components/GoalInput'
export default function App(){
  const [isAddMode, setIsAddMode] = useState(false);
  return(
    <View style={styles.screen}> 
        <Button title="Add New Goal" onPress={setIsAddMode(true)}/>
        <GoalInput
          visible={isAddMode}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
})
