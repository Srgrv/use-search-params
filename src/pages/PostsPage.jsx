import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

//components
import FieldPostPages from "../components/FieldPostPages";

//extra-reducers
import { getPostsAsync } from "../store/slices/postsSlice";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <FieldPostPages setSearchParams={setSearchParams} />
      {posts
        .filter((post) => post.title.includes(postQuery))
        .map((post) => {
          return (
            <li key={post.id}>
              <NavLink>{post.title}</NavLink>
            </li>
          );
        })}
    </div>
  );
};

export default PostsPage;
