import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./HeroDetail.css";
export default function HeroDetail(props) {
  const [detail, setDetail] = React.useState({});
  const [apistatus, setApiStatus] = React.useState({ isError: false });
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then((data) => {
        console.log(data);
        setDetail(data.data);
      })
      .catch((err) => {
        setApiStatus({ isError: true });

        console.log("err", err);
      });
  }, []);
  
  function displyDetails(object) {
    return Object.entries(object || {}).map((arryObj, index) => {
      return (
        <div key={index}>
          <span className="typography__lable">{arryObj[0]}</span>:
          <span>
            {Array.isArray(arryObj[1])
              ? arryObj[1].map((a) => (
                  <span>
                    {a}
                    {","}
                  </span>
                ))
              : arryObj[1]}
          </span>
        </div>
      );
    });
  }
  return (
    <>
      {apistatus.isError ? (
        <NotFound />
      ) : (
        <div className="carddetail">
          <img width="300" height="300" src={detail?.images?.lg} />
          <div className="carddetail__details">
            <h1>{detail?.name}</h1>
            <div className="carddetail__detail__list">
              <div>
                <h2 className="header_lable">powerstats</h2>
                {displyDetails(detail?.powerstats)}
              </div>
              <div>
                <h2 className="header_lable">appearance</h2>
                {displyDetails(detail?.appearance)}
              </div>
              <div>
                <h2 className="header_lable">biography</h2>
                {displyDetails(detail?.biography)}
              </div>
              <div>
                <h2 className="header_lable">work</h2>
                {displyDetails(detail?.work)}
              </div>
              <div>
                <h2 className="header_lable">connections</h2>
                {displyDetails(detail?.connections)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
