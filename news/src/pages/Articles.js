import React, {useState,useEffect} from 'react';
import axios from 'axios';
import '../styles/Articles.css';

function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Malaysia&api-key=2vUzIsDDLFfeHjc6Oup7XqMlvPb7jeF9")
        .then((res)=>{
          console.log(res.data.response.docs);
          setArticles(res.data.response.docs)
        })
      },[])
    
  return (
    <div className="container my-5">
      <h1>Articles</h1>
      <br></br>
      <div className="row">
        {
          articles.map((val)=>{
            return (
              <div className="col-md-4 mb-3">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.abstract}</h5>
                    <p className="card-text">
                      {val.source}
                    </p>
                    <p className="card-url">
                      <a href={val.web_url}>Link</a>
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

export default Articles