import "bootstrap/dist/css/bootstrap.min.css";
import TextBox from "../components/TextBox";
import { getRandomJoke } from "../api/joke";
import { getRandomCoffeeSrc } from "../api/coffee";
import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";

export default function Post() {
  const navigation = useNavigation();

  const [joke, setJoke] = useState();
  const [coffeeSrc, setCoffeeSrc] = useState();
  const [text, setText] = useState("");

  useEffect(() => {
    async function loadData() {
      setJoke(await getRandomJoke());
      setCoffeeSrc(await getRandomCoffeeSrc());
    }

    loadData();
  }, []);

  const handlePostSubmit = () => {};

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
