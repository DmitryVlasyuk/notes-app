import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import NotesPage from './components/notes-app';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NotesPage />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
