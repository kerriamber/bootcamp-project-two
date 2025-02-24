import "bootstrap/dist/css/bootstrap.min.css";
import TextBox from "../components/TextBox";

export default function Post() {
  const handlePostSubmit = (content) => {
    console.log("Great! Your Post has been submitted:", content);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <TextBox onSubmit={handlePostSubmit} />
    </div>
  );
}