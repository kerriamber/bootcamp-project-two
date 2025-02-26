import { NavLink } from "react-router-dom";
import "./AllPosts.css"; // Custom CSS file
import { useState, useEffect } from "react";
import { getRandomCoffeeSrc } from "../api/coffee";
import { getAllPosts } from "../api/posts";

export default function AllPosts() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [posts, setPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState({});

  useEffect(() => {
    // Fetch a random image from Unsplash (or use your own API)
    async function loadData() {
      setBackgroundImage(await getRandomCoffeeSrc());
      setPosts(await getAllPosts());
    }

    loadData();
  }, []);

  return (
    <div>
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <span className="p-3 fs-2 bg-white d-flex align-items-center">
        <NavLink className="btn btn-secondary mx-auto" to="/post">
          Create New Reflection
        </NavLink>
      </span>
      <div className="container mt-4 mx-auto">
        <div className="border rounded p-3 shadow-sm bg-black col-lg-6 mx-auto">
          {posts && posts.length === 0 && (
            <div className="d-flex align-items-center text-white justify-content-between">
              <span>No Posts Yet</span>
            </div>
          )}
          {posts?.map((post, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-title">Author: {post.user.username}</h6>
                {expandedPost === post ? 
                  <p className="card-text">{post.text}</p>
                :
                  <p className="card-text">{post.text.slice(0, 20)}...</p>
                }
                
                <div className="text-end">
                    <button 
                    className="btn text-secondary"
                    onClick={()=>setExpandedPost(post)}
                    >
                    {expandedPost !== post && "Expand Content"}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
