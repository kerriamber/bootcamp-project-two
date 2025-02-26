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
    <div className="container col-lg-8 text-center mx-auto mb-5">
        <div className="m-5 fst-italic fs-3">{joke}</div>
        <div className="fst-italic text-secondary">Start reflection in textbox below image...</div>
        <div className="text-center">
          <img className="pb-5 w-100" src={coffeeSrc} alt="coffee image" />
        </div>
      <div>
        <TextBox onSubmit={handlePostSubmit} />
      </div>
    </div>
  );
}
