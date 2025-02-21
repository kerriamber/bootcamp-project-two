import { NavLink } from 'react-router-dom'

export default function AllPosts (){
return (
    <div>
        <div className="text-center">
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
