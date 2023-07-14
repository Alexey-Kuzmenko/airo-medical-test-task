import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './containers';
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='recipe/:id' element={<RecipePage />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
