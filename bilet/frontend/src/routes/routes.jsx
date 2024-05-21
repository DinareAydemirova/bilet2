import Layout from "../layout/Layout";
import Home from "../pages/Home/Index";
import Admin from "../pages/admin/Admin";

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
];

export default router;
