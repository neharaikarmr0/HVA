import { useState } from 'react';
import './App.css';

function App() {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  function addActivity(){
    //setList([...list,activity]);
    //console.log(list);
    setList((list)=>{
      const updatedList = [...list,activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;  
    })
  }

function removeActivity(i){
  const leftList = list.filter((elem,id)=>{
    return i!=id;
  })
  setList(leftList);
}

function removeAll(){
  setList([]);
}

  return (
    <>
      <div className="container">
      <h2>To-Do list</h2>
      <div className="box">
      <input type="text" placeholder='Add Activity' value={activity} 
      onChange={(e)=>setActivity(e.target.value)} />
      <button className='adbtn' onClick={addActivity}>Add</button>
      </div>
      {list!=[] && list.map((data,i)=>{
        return(
          <>
          <div className="box">
            <div className='listData'>{data}</div>
            <button className="rmbtn" onClick={()=>removeActivity(i)}>(-)</button>
            </div>
          </>
        )
      })}
      {list.length>=1 && <button className='remall' onClick={removeAll}>Remove all</button>}
    </div>
    </>
  );
}

export default App;
