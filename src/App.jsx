// App e' il componente padre, l'unico chiamato da main.jsx, che avvia la renderizzazione dei componenti figli
// UN FILE JSX CHE COMINCIA PER MAIUSCOLA O SEGUE LA NOMENCLATURA CapitalCase o PascalCase E' PER DEFINIZIONE UN COMPONENTE REACT!
// In entrambe le tipologie di components, con le parentesi graffe interpoliamo valori, variabili, JS in generale nella struttura HTML.

import "./App.css";
// I componenti vanno importati per poter essere utilizzati da un componente padre
import List from "./assets/components/List";
import Title from "./assets/components/Title";

const App = function () {
  return (
    <>
      <Title name="il corso FS0622IT" company="Epicode" />

      <List item="Nutella" />
    </>
  );
};

export default App;
