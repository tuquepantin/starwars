import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";



export const Details = () => {
    const { store } = useContext(Context);
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
                src={`https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="col-6 text-center">

              <h1>{detail.properties?.name}</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

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
