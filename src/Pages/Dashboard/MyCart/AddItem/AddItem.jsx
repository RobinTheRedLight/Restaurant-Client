import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_imgbb_key;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, recipe, category, price } = data;
          const newItem = {
            name,
            recipe,
            image: imgURL,
            category,
            price: parseFloat(price),
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("After posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div className="w-full px-20">
      <Helmet>
        <title>Amici Italiano | Manage Bookings</title>
      </Helmet>
      <div className="text-center mt-5 mb-8 mx-auto">
        <p className="text-[#D99904] text-xl italic font-['Inter'] pb-2">
          ---What's new---
        </p>
        <h1 className="text-3xl font-normal uppercase font-['Inter'] border-y-4 p-5 flex justify-center items-center">
          <p className="pr-2">Add</p>
          <p className="pr-2">an</p>
          <p>item</p>
        </h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </label>
        <div className="flex">
          <label className="form-control w-full pr-5">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </label>
          <label className="form-control w-full pl-5">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Item Image</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </label>
        <input
          className="btn btn-outline w-full mt-5 mb-5"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
