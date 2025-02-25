import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";

export default function TextBox({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || postContent.trim() === "") return;

    const newPost = { title, content: postContent };
    setIsSubmitting(true);

    try {
      console.log("Post created:", newPost);
      if (onSubmit) onSubmit(newPost);
      setTitle("");
      setPostContent("");
      alert("Post submitted successfully!");
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Error submitting post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="card shadow p-5 rounded-4"
      style={{
        width: "800px",
        height: "600px",
        background: "linear-gradient(to bottom,rgb(100, 55, 18),rgba(214, 129, 31, 0.81))",
        color: "white",
        padding: "40px",
      }}
    >
      <h3 className="text-center fw-bold">
        <FontAwesomeIcon icon={faMugHot} className="me-2" /> Create New Post
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg rounded-pill mt-4"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control form-control-lg rounded-4 mt-4"
          rows="6"
          placeholder="What's on Your Mind...?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          required
          style={{ height: "200px" }}
        ></textarea>
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn rounded-pill py-2 px-5"
            style={{
              background: "linear-gradient(to right,rgb(255, 174, 109),rgb(255, 232, 81))",
              boxShadow: "2px 2px 5px 3px rgba(0, 0, 0, 0.3)",
              color: "rgb(99, 136, 229)",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            type="submit"
            disabled={isSubmitting}
          >
            <FontAwesomeIcon icon={faMugHot} className="me-2" />
            {isSubmitting ? "Submitting..." : "Submit Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
