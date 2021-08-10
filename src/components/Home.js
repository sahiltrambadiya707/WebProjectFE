import React, { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  const homePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setName(data.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    homePage();
  }, []);

  return (
    <div className="home-page">
      <div className="home-div">
        <p className="pt-5 font">WELCOME {name.toUpperCase()}</p>
        <h4>We Are The Mern Developer</h4>
      </div>
    </div>
  );
};

export default Home;
