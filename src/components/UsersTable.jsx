import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";
import { GlobalContext } from "../App";

const UsersTable = (props) => {
  const { accessToken } = useContext(GlobalContext);
  const [data, error, loading, fetchData] = useAxios();
  const [adminUsers, setAdminUsers] = useState([]);
  const [nonAdminUsers, setNonAdminUsers] = useState([]);

  const getAllUsers = () => {
    const url = config.BASE_URL + "/users/all-users";
    const method = "GET";
    const body = null;
    const token = accessToken;
    fetchData(url, method, body, token);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    if (data) {
      setAdminUsers(data.filter((user) => user.is_admin === true));
      setNonAdminUsers(data.filter((user) => user.is_admin === false));
    }
  }, [data]);

  const user = props.admin ? adminUsers : nonAdminUsers;

  return (
    <div className="bg-yellow-light pt-10">
      <div className="flex items-center">
        <div className="flex-auto">
          <h2>{props.admin ? "Admin" : "Users"}</h2>
          <span className="mt-2 text-brown">
            {props.admin
              ? "A list of all the administrators in your organisation."
              : "A list of active user accounts."}
          </span>
        </div>
        <div className="mt-4 mt-0 ml-16 flex-none">
          {props.admin ? (
            <Button
              type="button"
              bgColour="bg-red"
              innerText="Add Admin"
              link="/admin-register"
            />
          ) : null}
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="overflow-y-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-brown">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-brown pl-6"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-brown"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-brown"
                  >
                    Email
                  </th>

                  <th scope="col" className="p-4 text-left">
                    <span className="sr-only">Delete</span>
                  </th>
                  <th scope="col" className="p-4 text-left">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brown bg-yellow-light">
                {user.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap p-4 text-sm text-brown font-semibold pl-6">
                      {person.first_name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-brown">
                      {person.last_name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-brown">
                      {person.email}
                    </td>

                    <td className="whitespace-nowrap p-4 text-sm">
                      <a href="#" className="text-blue hover:underline">
                        Delete
                      </a>
                    </td>
                    <td className="whitespace-nowrap p-4 ttext-sm pr-6">
                      <a href="#" className="text-blue hover:underline">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
