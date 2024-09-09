import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import LoginSignUp from './components/LoginSignUp';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Body />,
    },
    {
      path: "/login",
      element: <LoginSignUp />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Header />
        <Outlet />
      </RouterProvider>
    </div>
  );
}

export default App;
