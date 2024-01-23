import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      //in the server site users route should be created also in MongoDB
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      {/* imageURL is an attribute name in MongoDB it could be different in your database */}
                      <img src={user.imageURL} alt="human" />
                    </div>
                  </div>
                  <div>
                    {/* name is an attribute name in MongoDB it could be different
                    in your database */}
                    <div className="font-bold">{user.name}</div>
                  </div>
                </div>
              </td>
              {/* email is an attribute name in MongoDB it could be different in
              your database */}
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  "admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="text-white btn bg-orange-600"
                  >
                    <FaUserShield />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
