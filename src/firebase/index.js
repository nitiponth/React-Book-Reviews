import firebase from "firebase/app";
import "firebase/auth";

import config from "./config";

if (firebase.app.length) {
  firebase.initializeApp(config);
}

export default firebase.auth();
