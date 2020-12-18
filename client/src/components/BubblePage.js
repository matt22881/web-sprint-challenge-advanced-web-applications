import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from "./../utils/axiosWithAuth";
// import axios from 'axios'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  useEffect(
  axios()
    .get('/colors')
    .then((res) => {
      console.log('BUBres: ', res)
      setColorList(res.data)
    })
    .catch((err) => {
      console.log('BUBerr: ', err)
    })
  )
  // set that data to the colorList state property

  return (
    <>
      {/* <ColorList colors={colorList} updateColors={setColorList} /> */}
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
