import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/gameon-json/cta";

const CallToAction = () => {
  const [state, setState] = useState({
    data: {}
  });

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="cta-area p-0">
      <div className="container">
        <div className="row">
          <div className="col-12 card">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-md-5 text-center">
                <img src={state.data.img} alt="" />
              </div>
              <div className="col-12 col-md-6 mt-4 mt-md-0">
                <h2 className="m-0">{state.data.title}</h2>
                <p>{state.data.content}</p>
                <a className="btn btn-bordered active d-inline-block" href="/apply">
                  <i className={state.data.btnIcon} />{state.data.btn}
                </a>
              </div>
            </div>
            <a className="cta-link" href="/apply" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
