import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";

const UsersTable = (props) => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);



  if (props.admin) {
    const adminUsers = props.allUsers.filter((user) => user.is_admin == true);
    setData(adminUsers);
  } else {
    const customerUsers = nonAdminUsers.filter(
      (user) => user.email !== email
    );
    setData(adminUsers)
  }
};



  // const deleteUser = (email) => {
  //   if (window.confirm("Are you sure you want to delete this user?")) {
  //     const url = config.BASE_URL + "/users/delete";
  //     const method = "DELETE";
  //     const body = { email };
  //     const token = accessToken;
  //     fetchData(url, method, body, token);
  //   }
  // };

  // const handleDelete = (e) => {
  //   const email = e.target.value;
  //   setSelectedUser(email);
  //   deleteUser(email);

 

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
                      <button
                        type="button"
                        onClick={handleDelete}
                        value={person.email}
                        className="text-blue hover:underline"
                      >
                        Delete
                      </button>
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
