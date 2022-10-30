import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.css';

function App() {
  const Layout = () => {
    return <div></div>;
  };

  const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
