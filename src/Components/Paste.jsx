import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Paste = () => {
  const [searchBarTerm,setsearchBarTerm]=useState('');
  const pastes=useSelector((state)=>state.paste.pastes);
  const filtered_data=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchBarTerm.toLowerCase()));
  const dispatch=useDispatch();
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  function handleCopy(paste){
    navigator.clipboard.writeText(paste?.content);
    toast.success("copied to clipboard");
  }
  function handleView(){

  }
  return (
    <div style={{
  
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  justifyContent: 'center',
  alignItems: 'center' // <-- Add this
}}>
  List of Pastes
  <input type="search"  value={searchBarTerm} onChange={(e)=>setsearchBarTerm(e.target.value)}  placeholder="Search "  style={{ width: '70%' }} />
  <div>
    {filtered_data.length>0 && filtered_data.map((paste)=>{
      return (
        <div key={paste._id}  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', border:'1px solid black',margin:'1rem'}}>

        <div>
          {paste.title}
        </div>
        <div>
          {paste.content}
        </div>
        <div style={{
          display:'flex',
          justifyContent:'space-around',
          width:'100%',
          margin:'0.5rem',
          
          
        }}>
          <button onClick={()=>handleCopy(paste)}>Copy to Clipboard</button>
          <button><NavLink to={`/paste/${paste._id}`}>View</NavLink></button>
          <button><NavLink to={`/?pasteId=${paste?._id}`}>Edit</NavLink></button>
          <button onClick={()=>handleDelete(paste?._id)}>Delete</button>
          <button>Share</button>
        </div>
        <div>
          {paste.createdAt}
        </div>
        </div>
      )
    })}
  </div>
</div>
  )
}

export default Paste