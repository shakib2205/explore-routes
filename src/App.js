import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';
import Main from './layout/Main/Main';
import Friends from './component/Friends/Friends';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Post from './component/Post/Post';
import PostDetails from './component/PostDetails/PostDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <div>React Routing</div> },
        { path: '/home', element: <Home></Home> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friend', // load data
          loader: async () =>{
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>
        }
      ]
    },
    { path: 'about', element: <About></About> },
    { path: '*', element: <div>This Route not found</div> }, // not fount or 404

    {
      path:'/friend/:friendId', // fetching dynamic id and show
      loader: async ({params})=>{
        //console.log(params.friendId)
        return fetch (`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetails></FriendDetails>
    },
    {
      path: '/post',
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },
      element:<Post></Post>
    },
    {
      path:'/post/:postId',
      loader: async({params}) =>{
        return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      element: <PostDetails></PostDetails >
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
