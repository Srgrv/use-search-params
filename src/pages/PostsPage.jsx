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
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <div>
      <FieldPostPages
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        latest={latest}
      />
      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsFrom
        )
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
