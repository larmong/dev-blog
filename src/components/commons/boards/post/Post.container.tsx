import { BoardPost } from "./Post.style";
import { useRouter } from "next/router";

export const Board01Post = (props) => {
  const router = useRouter();
  const onClickMoveToPost = (id: string) => () => {
    void router.push(`${router.pathname}/${id}`);
  };

  return (
    <>
      {props.post.map((post) => (
        <BoardPost key={post.id}>
          <ul>
            <li>{post.no}</li>
            <li className="cursor_point" onClick={onClickMoveToPost(post.id)}>
              {post.title}
            </li>
            <li>{post.date}</li>
          </ul>
        </BoardPost>
      ))}
    </>
  );
};
