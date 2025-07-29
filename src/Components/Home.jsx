import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { CreateNewpaste, updateToPastes } from '../redux/PasteSlice';

const Home = () => {
    const [title,settitle]=useState("");
    const [value,setvalue]=useState("");
    const[searchparams,setsearchparams]=useSearchParams();
    const pasteId=searchparams.get("pasteId");
    const dispatch=useDispatch();
    const allPastes=useSelector((state)=>state.paste.pastes);
     useEffect(() => {
       if(pasteId){
        const paste = allPastes.find((p)=>p._id===pasteId);
        if(paste){
        settitle(paste.title);
        setvalue(paste.content);}
       }
    
     
    }, [pasteId]);
  function CreatePaste(){
    const paste={
      title:title,
      content:value,
      _id:pasteId || 
          Date.now().toString(36),
        createdAt:new Date().toISOString(),
    }

   
    

    if(pasteId){
      //update paste
      dispatch(updateToPastes(paste));
    }else{
      //create paste
      dispatch(CreateNewpaste(paste));
    }


    //after creation or updation

    settitle('');
    setvalue('');
    setsearchparams({});
  }
   
  return (
    <div>
        <br />
        <input type="text" value={title} placeholder='enter title' onChange={(e)=>settitle(e.target.value)} />
        <button onClick={CreatePaste}>
          {pasteId? "update Paste": "create Paste"}
        </button>
        <br />
        
        <textarea value={value} onChange={(e)=>setvalue(e.target.value)}  placeholder="enter text here" style={{width:'20rem'}} rows={21} id=""></textarea>
    </div>
  )
}

export default Home