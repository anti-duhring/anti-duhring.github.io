import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LanguageContextProvider } from "./Context/language";

function App() {
  return (
      <LanguageContextProvider>
        <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
        </div>
      </LanguageContextProvider>
  );
}

export default App;
