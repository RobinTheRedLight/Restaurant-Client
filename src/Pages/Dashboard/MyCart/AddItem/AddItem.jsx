import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../Components/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Manage Bookings</title>
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
      <form onSubmit={handleSubmit(onsubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Category*</span>
          </div>
          <select
            {...register("category", { required: true })}
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text font-semibold">Price*</span>
          </div>
          <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details</span>
          </div>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Item Image</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
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
