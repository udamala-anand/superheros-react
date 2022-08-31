import React from "react";
import axios from "axios";
import HeroCard from '../Herocard/HeroCard'
import './Collection.css'
export default function Collection() {
  const [collection, setCollection] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((data) => {
        setCollection(data.data.map((data,index)=>index<50 ? data:undefined).filter((ele)=>ele!=undefined));
      })
      .catch((err) => {
        setCollection([]);
        console.log("err", err);
      });
  }, []);
  console.log(collection)
  return <div className="collection">
    {collection.map((obj,index)=><React.Fragment key={index}><HeroCard obj={obj}/></React.Fragment>)}
  </div>;
}
