import React from "react";
import { useForm } from "react-hook-form";

const FieldPostPages = (props) => {
  const { register, reset, handleSubmit, getValues } = useForm();

  const valueSearch = getValues("search");
  console.log(valueSearch);

  const setSearchParams = (obj) => {
    props.setSearchParams(obj);
  };

  const onSubmit = (data) => {
    console.log(data.latest);

    const query = data.search;
    const isLatest = data.latest;

    const params = {};

    if (query.length) params.post = query;
    if (isLatest) params.latest = true;
    setSearchParams(params);
    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" {...register("search")} />
      <label style={{ padding: "0 1rem" }}>
        <input type="checkbox" {...register("latest")} /> New only
      </label>
      <input type="submit" value="search" />
    </form>
  );
};

export default FieldPostPages;
