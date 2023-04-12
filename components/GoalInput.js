import { useState } from 'react'
import {TextInput,Button,StyleSheet} from 'react-native'


const GoalInput = () => {
    const [goalInput,setGoalInput] = useState('')
    const onAddHandler = () =>{
   console.log("hi")
    }


    return <View style={styles.container}>
        <TextInput  onChangeText={task=>setGoalInput(task)}  />

        <Button title='Add Task' onPress={onAddHandler} />
    </View>
}



const styles = StyleSheet({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default GoalInput