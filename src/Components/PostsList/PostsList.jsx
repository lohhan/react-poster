import { useState } from "react";
import classes from "./PostsLists.module.css";
import Post from "../Posts/Post";
import NewPost from "../NewPost/NewPost";
import Modal from "../Modal/Modal";

export default function PostsList(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {props.isPosting ? (
        <Modal onClose={props.onStopPosting}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      ) : null}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}
