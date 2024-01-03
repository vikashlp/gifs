import axios from "axios";
import React, { useState, useEffect } from "react";

const Gifs = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState("");
  const [click, setClick] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/stickers/search?api_key=4E4YcWKCsR6hdnwDzFwpCoaTounajtX0&q=${click}&limit=25&offset=0&rating=g&lang=en`
      )
      .then((result) => setData(result.data.data));
  }, [click]);

  const handleChange = (e) => {
    setChange(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setClick(change);
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <input
          onChange={handleChange}
          style={{ textAlign: "center" }}
          type="text"
          placeholder="Search any Gif"
        />
        <button onClick={handleClick}>Submit</button>
      </div>

      <>
        {data.map((d, id) => {
          return <img key={d.id} src={d.images.fixed_height.url} alt="err" />;
        })}
      </>
    </div>
  );
};

export default Gifs;
