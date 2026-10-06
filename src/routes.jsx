import { createBrowserRouter } from "react-router";
import PostsPage from "./pages/PostsPage";
import Layout from "./UI/Layout";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PostsPage />,
      },
      {
        path: "create-post",
        element: <CreatePostPage />,
      },
      {
        path: "post/:id",
        element: <PostDetailsPage />,
      },
    ],
  },
]);
export default routes;
