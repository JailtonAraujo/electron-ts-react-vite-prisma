import { ConfigProvider } from 'antd';
import Login from "./pages/Login";
import Home from './pages/Home';
import Customers from './pages/Customers';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "customers",
        element: <Customers />,
      },
    ],
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
