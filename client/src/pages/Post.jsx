import "bootstrap/dist/css/bootstrap.min.css";
import TextBox from "../components/TextBox";
import { getRandomJoke } from "../api/joke";
import { getRandomCoffeeSrc } from "../api/coffee";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const navigate = useNavigate();

  const [joke, setJoke] = useState("");
  const [coffeeSrc, setCoffeeSrc] = useState("");

  useEffect(() => {
    async function loadData() {
      setJoke(await getRandomJoke());
      setCoffeeSrc(await getRandomCoffeeSrc());
    }

    loadData();
  }, []);

  const handlePostSubmit = async (content) => {
    const {title, text} = content;
    const coffee = coffeeSrc;
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ joke, title, text, coffee }),
      });

      if (response.ok) {
        navigate("/allposts");
      } else {
        throw new Error("response to /allposts not ok");
      }
    } catch (err) {
      console.log(err);
      alert("Failed to upload post.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow rounded-4 overflow-hidden col-lg-6 h-100 flex align-items-center">
        <div className="m-5 fst-italic fs-3">{joke}</div>
        <img className="pb-5" src={coffeeSrc} alt="coffee image" />
      </div>
      <TextBox onSubmit={handlePostSubmit} />
    </div>
  );
}
