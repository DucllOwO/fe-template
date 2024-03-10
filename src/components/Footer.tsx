import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/gameon-json/footer";

const Footer = () => {
  const [state, setState] = useState({
    data: {},
    socialData: [],
    widgetData: []
  });

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setState({
          data: res.data,
          socialData: res.data.socialData,
          widgetData: res.data.widgetData
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <div className="footer-items">
              <a className="navbar-brand" href="/">
                <img src={state.data.img} alt="" />
              </a>
              <div className="social-icons d-flex justify-content-center my-4">
                {state.socialData.map((item, idx) => (
                  <a key={`fsd_${idx}`} className="facebook" href={item.link} target="_blank">
                    <i className={item.icon} />
                    <i className={item.icon} />
                  </a>
                ))}
              </div>
              <ul className="list-inline">
                {state.widgetData.map((item, idx) => (
                  <li key={`fwd_${idx}`} className="list-inline-item">
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <div className="copyright-area py-4">{state.data.copyright} <a href={state.data.ownerLink} target="_blank">{state.data.owner}</a></div>
            </div>
            <div id="scroll-to-top" className="scroll-to-top">
              <a href="#header" className="smooth-anchor">
                <i className="fa-solid fa-arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
