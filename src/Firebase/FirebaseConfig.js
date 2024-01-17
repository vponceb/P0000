
// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc  } from "firebase/firestore";

// TODO: Agrega SDK para los productos de Firebase que quieras usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de su aplicación web
const firebaseConfig = {
    apiKey: "AIzaSyBZrq_zNB3XkmmyJz1PHtx2dNJGV_ZtCFM",
    authDomain: "p0000-ayc.firebaseapp.com",
    projectId: "p0000-ayc",
    storageBucket: "p0000-ayc.appspot.com",
    messagingSenderId: "494735370068",
    appId: "1:494735370068:web:5b503be763bc3aa7aecac1",
    measurementId: "G-P079JPQGBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// IInicialice Cloud Firestore y obtenga una referencia al servicio
const db = getFirestore(app);

// export { app, db };


export async function GrabarRegistro(Registro) {    

    try {
        
        const IdDocumento = new Date().toLocaleString("sv-SE");
        // await setDoc(doc(db, "Estudio", '' + IdDocumento.toLocaleString("sv-SE")), Registro);
        await setDoc(doc(db, "Estudio", `${IdDocumento}`), Registro);

// Declaración de cookie para indicar que ya fue respondida la encuesta
        document.cookie = "Respondida=SI; max-age=60; path=/"
        
    } catch (e) {
        //alert("ERROR AL GRABAR:" + error(e));    
        console.error(e); // handle your error here
    } finally {        
        alert("- RESPUESTAS GRABADAS -, GRACIAS POR PARTICIPAR, Su opinion es muy importante para nosotros ");    
        location.replace('https://restaurante0a1.web.app/');
    }

}
