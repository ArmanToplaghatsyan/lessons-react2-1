import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/reducer3";
import { IUser } from "../../type/type";

export const AddUser: React.FC = React.memo((): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();

  const dispatch = useDispatch()
  const save = (data: IUser): void => {
    console.log(data);
    dispatch(addUser({...data, id: Date.now()}));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <h2>Add User </h2>
        <br />
        <label>Name</label>
        <br />
        <input
          placeholder="name"
          {...register("name", { required: "Enter name" })}
        ></input>
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <br />
        <label>Surname</label>
        <br />
        <input
          placeholder="surname"
          {...register("surname", { required: "Enter surname" })}
        ></input>
        {errors.surname && <p>{errors.surname.message}</p>}
        <br />
        <br />
        <label>Age</label>
        <br />
        <input
          placeholder="age"
          {...register("age", { required: "Enter age" , pattern:{
            value: /^\d+$/,
            message: 'NaN'
          }})}
        ></input>
        {errors.age && <p>{errors.age.message}</p>}
        <br />
        <br />
        <button>
          save
        </button>
      </form>
    </div>
  );
});
