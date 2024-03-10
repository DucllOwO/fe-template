import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/gameon-json/content";

const HomeContent = () => {
  const [state, setState] = useState({
    data: {},
    contentData: []
  });

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setState({
          data: res.data,
          contentData: res.data.contentData
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="content-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="content intro">
              <span className="intro-text">{state.data.sub_heading}</span>
              <h2>{state.data.heading}</h2>
              <p>{state.data.excerpt}</p>
              <ul className="list-unstyled items mt-5">
                {state.contentData.map((item, idx) => (
                  <li key={`cd_${idx}`} className="item">
                    <div className="content-list d-flex align-items-center">
                      <div className="content-icon">
                        <span className={item.featured}>
                          <i className={item.icon} />
                        </span>
                      </div>
                      <div className="content-body ml-4">
                        <h3 className="m-0">{item.title}</h3>
                        <p className="mt-3">{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="wrapper-animation d-none d-md-block">
              <div className="blockchain-wrapper">
                <div className="pyramid">
                  <div className="square">
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                  </div>
                </div>
                <div className="pyramid inverse">
                  <div className="square">
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                    <div className="triangle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
