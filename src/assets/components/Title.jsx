// Il nostro primo component nella forma piu' semplice, functional component, cioe' scritto come una funzione
// I class components sono piu potenti e vengono utilizzati per logiche piu complesse: di fatto sono diventati lo standard dei react components

// Il nome della funzione determina il nome del componente
const Title = function (props) {
  // Tutte le props passate a un functional component arrivano in un OGGETTO che e' il parametro di questa funzione

  const now = new Date().getFullYear();

  // Ogni component deve ritornare un contenuto in formato JSX
  return (
    <div>
      <h2>
        Ciao, sono un titolo in <code>h2</code>
      </h2>
      <h3>
        Sono un sottotitolo in <code>h3</code>
      </h3>
      <h4>{now}</h4>
      <p>Mi ha creato {props.name} erogato da {props.company}</p>
      {/* props.name diventa i nomi che saranno passati dal componente padre */}
    </div>
  );
};

// Il componente e' definito, va esportato per poterlo utilizzare
export default Title;

// tipicamente la struttura e':
// un componente per ogni file, ognuno con il suo export