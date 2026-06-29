// Questo e il primo file che parte all'avvio dell'applicazione: espone index.html nella root principale, che e' l'unico HTML esposto.
// import { StrictMode } from 'react'; Apporta al comportamento di React modifiche troppo coercitive, per questo lo togliamo
import { createRoot } from "react-dom/client";
// L'importazione di index.css lo rende disponiible in tutta l'applicazione: la index.css contiene generalmente le impostazioni CSS di base valide per tutta l'applicazione.
import "./index.css";
import App from "./App.jsx";

// L'alias createRoot genera il nodo principale, inserendolo nell'elemento con id root che trova nella index.html
createRoot(document.getElementById("root")).render(<App />);

// OGNI tag che non ha tag di chiusura, sia quelli standard sia quelli creati da noi (come <App />) devono necessariamente avere l'autochiusura, cioe' lo slash prima di chiudere la parentesi.