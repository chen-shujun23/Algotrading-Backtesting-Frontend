import React, { useContext } from "react";
import PageHeader from "../components/PageHeader";
import UsersTable from "../components/UsersTable";
import illustration from "../assets/illustrationAdminDashboard.png";
import useAxios from "../hooks/useAxios";
import config from "../../config.js";
import { GlobalContext } from "../App";

const AdminHome = () => {
  const { userPayload } = useContext(GlobalContext);
  const [data, error, loading, fetchData] = useAxios();
  // const [adminUsers, setAdminUsers] = useState([]);
  // const [nonAdminUsers, setNonAdminUsers] = useState([]);

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

  const onDelete = (id) => {
    setNonAdminUsers((prevUsers) => {
      const findNonAdminUsers = prevUsers.findIndex(
        (user) => user.is_admin === false
      );
    });
    //     // If we find the blog post with matching ID, remove it
  };

  // const onDelete = (id) => {
  //   setBlogposts((currentBlogPosts) => {
  //     const foundBlogPostIndex = currentBlogPosts.findIndex(entry => entry._id === id);

  //     // If we find the blog post with matching ID, remove it
  //     if (foundBlogPostIndex !== -1) currentBlogPosts.splice(foundBlogPostIndex, 1);

  //     return currentBlogPosts;
  //   })
  // }

  // useEffect(() => {
  //   if (data) {
  //     setAdminUsers(data.filter((user) => user.is_admin === true));
  //     setNonAdminUsers(data.filter((user) => user.is_admin === false));
  //   }
  // }, [data]);

  return (
    <div>
      <PageHeader
        header={`Welcome back, ${userPayload.first_name}`}
        imgSrc={illustration}
        imgAlt="Graphic illustration of a woman with a laptop."
      />
      <div className="p-20 bg-yellow-light">
        <UsersTable admin={false} allUsers={data} />
        <UsersTable admin={true} allUsers={data} />
      </div>
    </div>
  );
};

export default AdminHome;
