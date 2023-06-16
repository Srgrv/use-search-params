import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

//extra-reducers
import { getPostsAsync } from "../store/slices/postsSlice";
import { NavLink } from "react-router-dom";

const PostsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => {
        return (
          <li>
            <NavLink>{post.title}</NavLink>
          </li>
        );
      })}
    </div>
  );
};

export default PostsPage;
