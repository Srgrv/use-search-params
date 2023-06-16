import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const FieldPostPages = (props) => {
  const { register, reset, handleSubmit } = useForm();

  const setSearchParams = (obj) => {
    props.setSearchParams(obj);
  };

  const onSubmit = (data) => {
    console.log(data);

    setSearchParams({ post: data.search });
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="search" {...register("search")} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default FieldPostPages;
