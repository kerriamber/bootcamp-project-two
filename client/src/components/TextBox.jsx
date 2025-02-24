import { useState } from "react";

export default function TextBox({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || postContent.trim() === "") return; // stop from posting empty

    const newPost = { title, content: postContent };

    setIsSubmitting(true); // Disable the button while submitting

    try {
      // Simulate a successful submission by logging the data
      console.log("Post created:", newPost);

      // Optionally, send data to the parent component (if needed)
      if (onSubmit) onSubmit(newPost);

      // Clear form fields
      setTitle("");
      setPostContent("");

      alert("Post submitted successfully!");
    } catch (error) {
      console.error("Error submitting post:", error);
      alert("Error submitting post");
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission
    }
  };

  return (
    <div className="card shadow p-4 rounded-4" style={{ width: "600px", background: "#fff" }}>
      <h3 className="text-center">Create New Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mt-3"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mt-3"
          rows="4"
          placeholder="What's on Your Mind...?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          required
        ></textarea>
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary rounded-pill px-5"
            type="submit"
            disabled={isSubmitting} // Disable the button while submitting
          >
            {isSubmitting ? "Submitting..." : "Submit Post"}
          </button>
        </div>
      </form>
    </div>
  );
}