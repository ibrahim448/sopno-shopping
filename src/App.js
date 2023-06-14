import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import About from './components/About/About'
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Review from './components/Review/Review';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,
      children: [
        {
          path: "shop",
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          element: <Orders></Orders>
        },
        {
          path: "review",
          element: <Review></Review>
        },
        {
          path: "about",
          element: <About></About>
        }
      ]
    },
  ])


  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
