export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('notes')
      .add({
        ...note,
        favorite: false,
        createdAt: new Date()
      })
      .then(() => {
        console.log('add note succesfully');
      })
      .catch(err => {
        console.log(err);
      })
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('notes').doc(note.id).delete()
      .then(() => {
        console.log('delete note succesfully');
      })
      .catch(err => {
        console.log(err);
      })
  };
};

export const toggleFav = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favstatus = !note.favorite;
    const firestore = getFirestore();
    firestore.collection('notes').doc(note.id).update({
      favorite: favstatus,
    })
      .then(() => {
        console.log('toggle favorite succesfully');
      })
      .catch(err => {
        console.log(err);
      })
  };
};

