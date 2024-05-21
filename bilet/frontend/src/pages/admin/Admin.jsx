import React, { useEffect, useState } from "react";
import style from "./admin.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/slices/productSlices";

const Admin = () => {
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.products)
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);
  

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              name
            </th>
            <th scope="col" className="px-6 py-3">
              description
            </th>

            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              delete
            </th>
            <th scope="col" className="px-6 py-3">
              edit
            </th>
            <th scope="col" className="px-6 py-3">
              detail
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((elem) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {elem.title}
                </th>
                <td className="px-6 py-4">{elem.description}</td>
                <td className="px-6 py-4">{elem.price}</td>
                <td>
                  <button
                    class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    type="submit"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                    Edit
                  </button>
                </td>
                <td>
                  <button class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    Detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
