import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { CreateNewpaste, updateToPastes } from '../redux/PasteSlice';

const Viewpaste = () => {
   

   const {id}=useParams();
   const allPastes=useSelector((state)=>state.paste.pastes);
   const pasteid=allPastes.find((p)=>p._id===id);
 
  return (
   <div>
    <h2>this is view page</h2>
        <br />
        <input type="text" disabled value={pasteid.title} placeholder='enter title' onChange={(e)=>settitle(e.target.value)} />
    {/* <button onClick={CreatePaste}>
          {pasteId? "update Paste": "create Paste"}
        </button> */}
        <br />
        
        <textarea value={pasteid.content} disabled onChange={(e)=>setvalue(e.target.value)}  placeholder="enter text here" style={{width:'20rem'}} rows={21} id=""></textarea>
    </div>

  )
}

export default Viewpaste