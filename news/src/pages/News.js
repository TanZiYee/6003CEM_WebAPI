import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/News.css';

function News() {
    const [news, setNews] = useState([])
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=weather&apiKey=b44458b0f0a14c3eb6caa0a1ecb606f8")
        .then((res)=>{
          console.log(res.data.articles);
          setNews(res.data.articles)
        })
      },[])
    
  return (
    <div className="container my-5">
      <h1>News</h1>
      <br></br>
      <div className="row">
        {
          news.map((val)=>{
            return (
              <div className="col-md-4 mb-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={val.urlToImage} className="card-img-top" alt="..."/>
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

export default News