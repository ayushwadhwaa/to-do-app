import React, {useState} from 'react';
import {Modal, View, StyleSheet, TextInput, Button} from 'react-native';
const GoalInput = props => {
    const[enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = enteredText =>{
        setEnteredGoal(enteredText);
    }
    return(
        <Modal animationType="slide"> 
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Course Goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD"/>
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
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});
export default GoalInput;