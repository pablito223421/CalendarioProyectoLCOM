import { createStore } from "redux";
import { calenderApp } from "./Reductores/Reductores_Calendario";

const configureStore = () => {
    const store = createStore(calenderApp);
    store.subscribe(() =>
        console.log(store.getState())
    );
    return store;
}

export default configureStore;
