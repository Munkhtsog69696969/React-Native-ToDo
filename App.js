import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput , Button ,  View } from 'react-native';

export default function App() {
  const [input,setInput]=useState("");

  const [todoList,setTodoList]=useState([]);

  const [doneList,setDoneList]=useState([]);

  const Add=()=>{
    if(input!=""){
      setTodoList([...todoList , {text:input , isDone:false}])
      setInput("");
    }
  }

  const Done=(i)=>{
    setDoneList([...doneList , {text:todoList[i].text , isDone:true}])
    setTodoList((todoList) => todoList. filter((_, i) => i !== 0));
  }

  const Delete=(index)=>{
    setDoneList((doneList) => doneList. filter((_, index) => index !== 0));
  }

  return (
    <View style={styles.container}>
      <StatusBar
        
      />
      <View style={styles.box}>
        <View style={styles.smallBox}>
          <View style={styles.head}>
            <Text style={styles.headText}>Todo</Text>
          </View>
          <View style={styles.todoList}>
            {/* list */}
            {
              todoList.map((item,i)=>{
                return(
                  <View style={styles.listEl} key={i}>
                    <Text>{item.text}</Text>
                    <Text onPress={()=>{Done(i)}}>Done</Text>
                  </View>
                )
              })
            }
          </View>
          <View style={styles.addBox}>
            <TextInput value={input} onChange={(e)=>{setInput(e.target.value)}} style={styles.input} placeholder='Job...'/>
            <Button
              title='Add'
              onPress={Add}
            />
          </View>
        </View>
        <View style={styles.smallBox}>
          <View style={styles.head}>
            <Text style={styles.headText}>Done</Text>
          </View>
          <View style={styles.doneList}>
            {
              doneList.map((item,i)=>{
                return(
                  <View style={styles.listEl} key={i}>
                    <Text>{item.text}</Text>
                    <Text onPress={()=>{Delete(i)}}>Delete</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    // flex:1,
    // border:"1px solid red",
    width:"50vw",
    height:"70vh",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  smallBox:{
    border:"1px solid grey",
    width:"48%",
    height:"100%",
  },
  head:{
    width:"100%",
    height:"20%",
    backgroundColor:"#0CAFFF",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  headText:{
    color:"white",
    fontSize:"25px",
    fontWeight:"600"
  },
  todoList:{
    // border:"1px solid red",
    width:"100%",
    height:"65%",
    overflow:"auto",
    display:"flex",
    alignItems:"center"
  },
  listEl:{
    // border:"1px solid red",
    width:"80%",
    height:"30px",
    margin:"10px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  },
  addBox:{
    // border:"1px solid red",
    width:"100%",
    height:"15%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  input:{
    border:"1px solid grey",
    borderRadius:"15px",
    padding:"10px",
    marginRight:"10px"
  },
  doneList:{
    // border:"1px solid blue",
    width:"100%",
    height:"80%",
    overflow:"auto"
  }
});
