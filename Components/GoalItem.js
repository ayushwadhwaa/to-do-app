import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
const GoalItem = props =>{
    const deleteGoal = () => {
        Alert.alert("Alert!","Are you sure you want to delete this goal!",[{
                text:"Cancel",
                style:"cancel"
            },{
                text:"Yes",
                style:'destructive',
                onPress:props.onDelete.bind(this, props.title)
            }   
    ]);
    } 
    return(
        <View style={styles.listItems}>
            <View style={styles.listTitle}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.delButton}>
                <Button title="X" color="red" onPress={deleteGoal}/>
            </View>   
        </View>
    );
};
const styles = StyleSheet.create({
    listItems: {
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        padding: 10,
        marginVertical: 10
    },
    listTitle:{
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        flex:4,
        height:'100%',
        alignItems: 'center',
        marginRight:10
    },
    delButton:{
        flex:1,
        
    }
});
export default GoalItem;