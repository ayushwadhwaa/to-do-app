import React, {useState} from 'react';
import {Modal, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
const GoalInput = props => {
    const[enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = enteredText =>{
        setEnteredGoal(enteredText);
    }
    const onAddGoalHandler = () =>{
        Alert.alert("Success","Goal Added Successfully",[{
            text:"Cancel",
            style:"cancel"
        }]);
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return(
        <Modal animationType="slide" visible={props.visible}> 
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={onAddGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});
export default GoalInput;