import React from 'react';
import ReactDOM from 'react-dom';
import { reductor } from "./Reductores/index";
import { createStore } from "redux";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { formatoFecha } from "./FormatoFecha/FormatoFecha";
import reportWebVitals from './reportWebVitals';

const persistedNotes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

const store = createStore(reductor, {
  note: { notes: persistedNotes, date: formatoFecha(new Date()) },
  date: new Date(),
});

store.subscribe(() => {
  localStorage.setItem("notes", JSON.stringify(store.getState().note.notes));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
