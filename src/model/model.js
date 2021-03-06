
export const updatePerfilUser = (user, name) => {
  return user.updateProfile({
    displayName: `${name}`
  });
};
export const updateEmailUser = (user, email) => {
  return user.updateEmail(`${email}`);
};
export const updatePhoto = (user, photo) => {
  // console.log(user, photo)
  return user.updateProfile({
    // displayName: "Jane Q. User",
    photoURL: `${photo}`
  });
};
export const dataBaseUser = (user) => {
  let db = firebase.firestore();
  return db.collection('users').doc(user.uid).set({
    uid: user.uid,
    name: (user.displayName === null) ? 'Anónimo' : user.displayName,
    email: user.email,
    photo: (user.photoURL === null) ? './image/icono-login-user.png' : user.photoURL
  });
};
export const getDataDoc = users => {
  let db = firebase.firestore();
  let docRef = db.collection("users").doc(`${users}`);
  return docRef.get();
};
export const createCommentPost = (idPost, user, comment, fechaComment) => {
  let db = firebase.firestore();
  return db.collection('posts').doc(`${idPost}`)
    .collection('comment').add({
      user: user,
      comment: comment,
      fecha: fechaComment
    });
};
export const getComentPost = (idPost) => {
  let db = firebase.firestore();
  return db.collection('posts').doc(`${idPost}`).collection('comment');
};
export const viewListPostPrivate = (idUser) => {
  let db = firebase.firestore();
  return db.collection('posts').where('state', '==', 'privado').where('user', '==', `${idUser}`).orderBy('fechaPost', 'desc').orderBy('horaPost','desc');
};
export const viewListPostPublic = () => {
  let db = firebase.firestore();
  return db.collection('posts').where('state', '==', 'publico').orderBy('fechaPost', 'desc').orderBy('horaPost', 'desc');
};
export const likesPost = (id, like) => {
  let db = firebase.firestore();
  return db.collection("posts").doc(id).update({
    likes: like
  });
};
export const deletePost = id => {
  let db = firebase.firestore();
  return db.collection("posts").doc(id).delete();
};
export const editPost = (id, description, state) => {
  let db = firebase.firestore();
  return db.collection("posts").doc(id).update({
    description: description,
    state: state
  });
};
export const deleteComment = (idPost, id) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(idPost).collection('comment').doc(id).delete();
};
export const editComment = (idPost, id, comment) => {
  const db = firebase.firestore();
  return db.collection('posts').doc(idPost).collection('comment').doc(id).update({
    comment: comment
  });
};
export const createPost = (state, imagePost, fechaPost, description, userID, horaPost) => {
  let db = firebase.firestore();
  return db.collection("posts").add({
    description: description,
    state: state,
    likes: 0,
    user: userID,
    image: imagePost,
    fechaPost: fechaPost,
    horaPost: horaPost
  });
};