import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/Image.css';

function Image() {
    const [image, setImage] = useState([])
    useEffect(()=>{
        axios.get("https://pixabay.com/api/?key=37247382-445633ba517244c97eb7c9033&q=Malaysia&apikey=37247382-445633ba517244c97eb7c9033")
        .then((res)=>{
          console.log(res.data.hits);
          setImage(res.data.hits)
        })
      },[])
    
  return (
    <div className="container my-5">
      <h1>Image</h1>
      <br></br>
      <div className="row">
        {
          image.map((val)=>{
            return (
              <div className="col-md-4 mb-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.previewURL} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{val.tags}</h5>
                    <p className="card-text">
                      {val.user}
                    </p>
                    <p className="card-url">
                      <a href={val.pageURL}>Link</a>
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

export default Image