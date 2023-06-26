import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Details = () => {
  const { store } = useContext(Context);
  const { people, planets } = store;
  const [detail, setDetail] = useState({})
  const params = useParams()


  const finder = () => {
    let detail = store[params.nature].find((item) =>
      item._id == params.id
    )
    setDetail(detail)
  }
  useEffect(() => {
    finder()

  }, [store.people, store.planets])

  const propertiesFound = () => {
    if (detail.properties) {
      let propertiesNeeded;
      if (params.nature === "planets") {
        propertiesNeeded = [
          { key: "name", name: "Name" },
          { key: "climate", name: "Climate" },
          { key: "population", name: "Population" },
          { key: "orbital_period", name: "Orbital Period" },
          { key: "rotation_period", name: "Rotation Period" },
          { key: "diameter", name: "Diameter" },

        ];
      } else if (params.nature === "people") {
        propertiesNeeded = [
          { key: "name", name: "Name" },
          { key: "birth_year", name: "Birth Year" },
          { key: "gender", name: "Gender" },
          { key: "height", name: "Height" },
          { key: "skin_color", name: "Skin Color" },
          { key: "eye_color", name: "Eye Color" },

        ];
      }

      return propertiesNeeded.map(({ key, name }) => (
        <div key={key} className="col-2 text-danger text-center">
          <strong>{name}: </strong>
          <hr className="invisible" />
          {detail.properties[key]}
        </div>
      ));
    }

  };

  return (
    <>

      <div className="container fluid">
        <div className="row m-3">
          <div className="col-6 ">
            <img
              src="https://www.hub-4.co.uk/wp-content/uploads/2017/11/400X200.gif"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="col-6 text-center">

            <h1>{detail.properties?.name}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. {" "}

            </p>
          </div>
        </div>
      </div>

      <div className="container fluid">
        <hr className="bg-danger" />
        <div className="row m-3">
          {propertiesFound()}

        </div>
      </div>
    </>
  );
};
