import React, { useState, useEffect } from 'react';

const initData = {
  sub_heading: "Creative",
  heading: "Our Team",
  btn: "View Leaderboard"
}

const data = [
  {
    id: "1",
    img: "/img/team_1.png",
    name: "Nguyen Duck",
    designation: "CEO"
  },
  {
    id: "2",
    img: "/img/team_2.png",
    name: "Truong Kim Dien",
    designation: "Advisor"
  },
];

const socialData = [
  {
    id: "1",
    icon: "icon-social-facebook"
  },
  {
    id: "2",
    icon: "icon-social-twitter"
  },
  // ... (remaining social icons)
];

const MyTeam = () => {
  const [state, setState] = useState({
    initData: {},
    data: [],
    socialData: []
  });

  useEffect(() => {
    setState({
      initData: initData,
      data: data,
      socialData: socialData
    });
  }, []);

  return (
    <section className="team-area p-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span className="intro-text">{state.initData.sub_heading}</span>
                <h3 className="mt-3 mb-0">{state.initData.heading}</h3>
              </div>
              <div className="intro-btn">
                <a className="btn content-btn" href="/leaderboard">{state.initData.btn}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="team-slides">
          <div className="swiper-container slider-min items">
            <div className="swiper-wrapper">
              {state.data.map((item, idx) => (
                <div key={`td_${idx}`} className="swiper-slide item">
                  <div className="card team-card text-center">
                    <a className="team-photo d-inline-block" href="/leaderboard">
                      <img className="mx-auto" src={item.img} alt="" />
                    </a>
                    <div className="team-content mt-3">
                      <a href="/leaderboard">
                        <h4 className="mb-0">{item.name}</h4>
                      </a>
                      <span className="d-inline-block mt-2 mb-3">{item.designation}</span>
                      <div className="social-share">
                        <ul className="d-flex justify-content-center list-unstyled">
                          {state.socialData.map((item, idx) => (
                            <li key={`sd_${idx}`}>
                              <a href="/#">
                                <i className={item.icon} />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyTeam;
