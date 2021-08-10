import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    callAboutPage();
  }, []);

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  return (
    <div className="container">
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4 img-box">
              <img src="" alt="img" className="img-box img" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h2>{userData.name}</h2>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKING <span>1/10</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData._id}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
