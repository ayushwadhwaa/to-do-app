import React, {useState} from 'react';
import {View, StyleSheet, Button, Text} from 'react-native'
import GoalInput from './Components/GoalInput'
export default function App(){
  const [isAddMode, setIsAddMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const onCancelAddGoalHandler = ()=> {
    setIsAddMode(false);
  }
  const addGoalHandler = goalTitle =>{
    setCourseGoals(...courseGoals,  {title:goalTitle});
  }
  return(
    <View style={styles.screen}> 
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={onCancelAddGoalHandler}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
})
