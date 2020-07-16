import React, {useState} from 'react';
import {View, StyleSheet, Button, Text , FlatList} from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';
export default function App(){
  const [isAddMode, setIsAddMode] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  const onCancelAddGoalHandler = ()=> {
    setIsAddMode(false);
  }
  const addGoalHandler = goalTitle => {
    setCourseGoals(courseGoals => {
      return [...courseGoals,{key: goalTitle, value: goalTitle}]
    });
    console.log(courseGoals);
  }
  return(
    <View style={styles.screen}> 
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={onCancelAddGoalHandler}
        />
        <FlatList
          data={courseGoals}
          renderItem={itemData => (
              <GoalItem title={itemData.item.value}/>
          )}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  screen:{
    padding: 50
  }
})
