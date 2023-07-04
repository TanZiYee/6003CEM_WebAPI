import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/Blogs.css';

function Blogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        axios.get("https://api.currentsapi.services/v1/search?keywords=Amazon&language=en&apiKey=si_IEPVLMlCm5WscCKfF--WT5ReILjfyVbqykPI-YfuJcA7V")
        .then((res)=>{
          console.log(res.data.news);
          setBlogs(res.data.news)
        })
      },[])
    
  return (
    <div className="container my-5">
      <h1>Blogs</h1>
      <br></br>
      <div className="row">
        {
          blogs.map((val)=>{
            return (
              <div className="col-md-4 mb-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">
                      {val.description}
                    </p>
                    <p className="card-url">
                      <a href={val.url}>Link</a>
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Blogs