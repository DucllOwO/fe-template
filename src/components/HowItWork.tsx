import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/gameon-json/work";

const HowItWork = () => {
  const [state, setState] = useState({
    data: {},
    workData: []
  });

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setState({
          data: res.data,
          workData: res.data.workData
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="work-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="intro d-flex justify-content-between align-items-end mb-4">
              <div className="intro-content">
                <span className="intro-text">{state.data.sub_heading}</span>
                <h3 className="mt-3 mb-0">{state.data.heading}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {state.workData.map((item, idx) => (
            <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-4 item">
              <div className="single-work">
                <i className={item.icon} />
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
