
import { useState } from 'react';
import { StyleSheet, Text, View , TextInput,Button, Pressable} from 'react-native';
import GoalInput from './components/GoalInput';


const  App=()=> {

  const [todo,setTodo] = useState('')
  const [taskList,setTaskList] = useState([])

  const onPressHandler =(task)=>{
    let newArr = [...taskList]
    
    newArr.push({id:Math.random()*100+'--'+Math.random()*20,value:task})
    
    setTaskList(newArr)

  }


  const onDeleteHandler =(id)=>{
    const newArr = taskList.filter(task=>task.id!==id)
    setTaskList(newArr)

  }


  // return <GoalInput/>
  return <GoalInput/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    
    borderColor:"red",
    borderWidth:2,
    alignItems:'center',
    width:'50%'
   
  },
  textContainer:{
    borderWidth:2,
    paddingHorizontal:70,
    paddingVertical:10,
    margin:10

  }
});



export default App
