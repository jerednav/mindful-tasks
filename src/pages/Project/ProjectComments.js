import { useState } from "react";
import { timestamp, timetamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";

//styls
import "./project.css";

export default function ProjectComments() {
  const [newComment, setNewComment] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(commentToAdd);
  };

  return (
    <div className='project-comments'>
      <h4>Project comments</h4>
      <form className='add-comment' onSubmit={handleSubmit}>
        <label>
          <span>Add new comment</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <btton class='btn'>Add Comment</btton>
      </form>
    </div>
  );
}
