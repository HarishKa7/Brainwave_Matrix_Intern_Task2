//--------------UPLOADING IMAGES ONTO FIREBASE STORAGE & FIRESTORE------------------
/*
    Auth

    check if user is signed in => firebase.auth().currentUser

    Firestore

    Retrieve data from collection => firebase.firestore().collection('collectionName')
    To add message => .add() to the reference obtained
    To update message => .update() and specify parameters to update

    Firebase Storage

    Add file => firebase.storage().ref(filePath).put(file).then(snapshot)

*/

//Storing element objects obtained by id in variables
let imageButtonElement = document.getElementById("submitImage");
let imageFormElement = document.getElementById("image-form"); //for resetting file
let mediaCaptureElement = document.getElementById("mediaCapture");
let LOADING_IMAGE_URL = "https://www.google.com/images/spin-32.gif?a";

//--------------event listeners-------------------
imageButtonElement.addEventListener("click", (e) => {
  e.preventDefault();
  mediaCaptureElement.click();
});
mediaCaptureElement.addEventListener("change", onMediaFileSelected);

//-----------------functions-----------------------
function onMediaFileSelected(event) {
  event.preventDefault();
  let file = event.target.files[0];
  imageFormElement.reset();

  if (!file.type.match("image.*")) {
    window.alert("You can only share images");
    return;
  }
  if (checkSignedInWithMessage()) {
    saveImageMessage(file);
  }
}

//create temporary message on firestore until image is uploaded and then update it
function saveImageMessage(file) {}
