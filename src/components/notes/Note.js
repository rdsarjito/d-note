import React from 'react';
import { deleteNote, toggleFav } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toggleFavhandler = () => {
    dispatch(toggleFav(note));
  };
  const heartMarkup = note.favorite ? 'favorite' : 'favorite_border';
  return (
    <div className="note white">
      <div className="right-align">
        <i className="material-icons red-text" style={{cursor: "pointer"}} onClick={toggleFavhandler}>{heartMarkup}</i>
        <i className="material-icons" style={{cursor: "pointer"}} onClick={deleteNoteHandler}>delete</i>
      </div>
      <h5 className="black-text">{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
      <div className="right-align"><i className="material-icons black-text">edit</i></div>
    </div>
  );
};

export default Note;