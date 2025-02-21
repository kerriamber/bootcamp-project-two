import { NavLink } from 'react-router-dom'
import "./AllPosts.css"; // Custom CSS file


export default function AllPosts (){

    const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Fetch a random image from Unsplash (or use your own API)
    const imageUrl = `https://source.unsplash.com/random/1600x900`;
    setBackgroundImage(imageUrl);
  }, []);

return (
    <div>
    <div
      className="background-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(10px)",
      }}
    ></div>
       <div className="mx-auto p-3  fs-2" style={{width: "400px"}}>
            <NavLink to = "/post">Create New Reflection</NavLink>
        </div>
        <div className="container mt-4">
            <div
                className="border rounded p-3 shadow-sm"
                style={{
                    height: "500px",
                    overflowY: "auto",
                    background: "#f8f9fa",
                }}
            >
                {[...Array(10)].map((_, index) => (
                <div key={index} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Card {index + 1}</h5>
                        <p className="card-text">
                            This is some example content for card {index + 1}.
                        </p>
                    </div>
                </div>
                ))}
            </div>
    </div>
    </div>
)}
