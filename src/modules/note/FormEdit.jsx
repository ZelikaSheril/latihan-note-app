// import { useEffect, useState } from "react";

// // Perubahan kedua

// function FormEdit({ onEdit, notes, onCancel ,targetValue }) {
//     const [title,setTitle] = useState(targetValue !== null ? targetValue.title : null);
//     const [note,setNotes] = useState(targetValue !== null ? targetValue.content : null);
//     const [writer, setWriter] = useState(targetValue !== null ? targetValue.writer : null);

//     useEffect(() => {
//         const noteToEdit =  notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
//         if (noteToEdit) {
//             setTitle(noteToEdit.title)
//             setNotes(noteToEdit.content)
//             setWriter(noteToEdit.writer)
//         }else{
//             setTitle("")
//             setNotes("")
//             setWriter("")
//             onCancel()
//         }
//     }, [targetValue]);

//     const handleEdit = () => {
//         const konfirm = confirm("Apakah Anda Yakin ?")
//         if(konfirm){
//         onEdit(targetValue.id, title, note, writer);
//         setTitle("")
//         setNotes("")
//         setWriter("")
//         onCancel()
//         }
//     };

//     // const cancelHandle = ()=>{
//     //     titleInput.current.value = "";
//     //     contentInput.current.value = "";
//     //     onCancel()
//     // }

//     return (
//         <div className="container" >
//             <div className='flex flex-col'>
//                 <input value={writer} type="hidden" className="input"/>
//                 <input
//                     value={title}
//                     onChange={e => setTitle(e.target.value)}
//                     type="text"
//                     placeholder='title'
//                     name='title'
//                     className='input'
//                 />

//                 <textarea
//                     value={note}
//                     onChange={e => setNotes(e.target.value)}
//                     name="note"
//                     id=""
//                     cols="30"
//                     rows="5"
//                     placeholder='note'
//                     className='textarea'>
//                 </textarea>
//                 <input type="text"/>

//                 <button
//                     onClick={handleEdit}
//                     className="bg-green-500 text-white text-lg rounded-lg px-5 py-3 mt-4">
//                     Edit Note
//                 </button>
//                 <button
//                     onClick={()=> onCancel()}
//                     className="bg-red-500 text-white text-lg rounded-lg px-5 py-3 mt-2">
//                     Cancel
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default FormEdit;

import React, { useState, useEffect } from 'react';
import { useNoteContext } from './NoteContext';


function FormEdit({ onCancel, targetValue }) {
  const { handleUpdate } = useNoteContext();
  const [title, setTitle] = useState(targetValue ? targetValue.title : '');
  const [note, setNotes] = useState(targetValue ? targetValue.content : '');
  const [writer, setWriter] = useState(targetValue ? targetValue.writer : '');

  const handleEdit = () => {
    const konfirm = window.confirm('Apakah Anda Yakin ?');
    if (konfirm) {
      handleUpdate(targetValue.id, title, note, writer);
      setTitle('');
      setNotes('');
      setWriter('');
      onCancel();
    }
  };

  useEffect(() => {
    if (!targetValue) {
      setTitle('');
      setNotes('');
      setWriter('');
      onCancel();
    }
  }, [targetValue]);

  return (
    <div className="container">
      <div className="flex flex-col">
        <input value={writer} type="hidden" className="input" />
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
          name="title"
          className="input"
        />

        <textarea
          value={note}
          onChange={(e) => setNotes(e.target.value)}
          name="note"
          id=""
          cols="30"
          rows="5"
          placeholder="note"
          className="textarea"
        ></textarea>
        <input type="text" />

        <button
          onClick={handleEdit}
          className="bg-green-500 text-white text-lg rounded-lg px-5 py-3 mt-4"
        >
          Edit Note
        </button>
        <button
          onClick={onCancel}
          className="bg-red-500 text-white text-lg rounded-lg px-5 py-3 mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default FormEdit;



