import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import CustomeNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Users = () => {
  const [userData, setUserData] = useState([]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = await response.data.find((user) => user.email === data.email);
      const changeData = await axios.patch(`http://localhost:5000/users/${user.id}`, data);
      const newData = await axios.get("http://localhost:5000/users");
      setUserData(newData.data);
      if (changeData.status === 200) {
        return toast.success("User updated successfully");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      return toast.error("Server Error");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <CustomeNavbar />
      <Toaster />
      <section
        className="container flex flex-column justify-content-center align-items-center mb-5"
        style={{ width: "100%", minHeight: "75vh" }}
      >
        <div className="text-center mb-5 mt-5">
          <h1 className="text-xl">User Data</h1>
        </div>
        {userData.length === 0 ? (
          <div className="text-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <UserTable onSubmit={onSubmit} userData={userData} />
        )}
      </section>
      <Footer />
    </>
  );
};

export default Users;
