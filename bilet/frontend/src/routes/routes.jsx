import Layout from "../layout/Layout";
import Home from "../pages/Home/Index";
import Admin from "../pages/admin/Admin";
import Detail from "../pages/admin/detail/Detail";
import Edit from "../pages/admin/edit/Edit";
import Post from "../pages/admin/postData/Post";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/products/:id",
    element: <Detail />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
];

export default router;
