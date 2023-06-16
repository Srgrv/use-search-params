import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

//extra-reducers
import { postLoginAsync } from "../store/slices/loginSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(postLoginAsync(data));

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="login" {...register("login")} />
        </div>
        <div>
          <input placeholder="password" {...register("password")} />
        </div>
        <div>
          <input type="submit" value="add" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
