import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import LoginSignUp from './components/LoginSignUp';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/browse",
      element: <Body />,
    },
    {
      path: "/",
      element: <LoginSignUp />,
    }
  ]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter}>
          <Header />
          <Outlet />
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
