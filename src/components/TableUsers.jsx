import React from "react";

const TableAdmin = () => {
  const users = [
    {
      name: "Jughead Jones",
      email: "jughead.jones@example.com",
    },
    {
      name: "Betty Cooper",
      email: "betty.cooper@example.com",
    },
    {
      name: "Veronica Lodge",
      email: "veronica.lodge@example.com",
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <div className="flex-auto">
          <h2>Users</h2>
          <span className="mt-2 text-brown">A list of all user accounts.</span>
        </div>
        <div className="mt-4 mt-0 ml-16 flex-none"></div>
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left font-semibold text-brown"
                  >
                    Email
                  </th>
                  <th scope="col" className="p-4 text-left">
                    <span className="sr-only">Strategies</span>
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
                {users.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap p-4 text-sm text-brown font-semibold pl-6">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm text-brown">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap p-4 text-sm">
                      <a href="#" className="text-blue hover:underline">
                        Strategies
                      </a>
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
    </>
  );
};

export default TableAdmin;
