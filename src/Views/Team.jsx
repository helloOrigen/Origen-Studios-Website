import React, { Fragment } from "react";
import ContentBox from "../components/contentBox";
import UserMaleCircle from "../assets/icons/user_male_circle.svg";

const Team = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto ">
        <div className="m-w-100 w-50 h-100 h-pr-fl-ma b-s-b-b flexbox f-w-w of-h">
          <div className="w-200px h-250px h-pr-fl-ma b-s-b-b hover-underline-animation">
             
            <div className="h-e h-pr-fl-ma centered p-20px">
               
              <div
                className="w-125px h-125px h-pr-fl-ma circle r-h-c p-10px m-b-50px h-up"
                Style="border: 1px solid; border-color: white;"
              >
                <img
                  src={UserMaleCircle}
                  className="w-100 h-100 h-pr-fl-ma "
                  Style="stroke: #ffffff !important;"
                  alt="Patricia Cor"
                />
              </div> 
              <span className="h-pr-fl-ma b-s-b-b divider r-h-c m-b-10px">&nbsp;</span>
              <div
                className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo t-a-c f-f-Gilroy"
                Style="font-size: 15px; line-height: 20px;"
              >
                Patricia Cor 
              </div> 
            </div> 
          </div>
          <div className="w-200px h-250px h-pr-fl-ma b-s-b-b hover-underline-animation">
             
            <div className="h-e h-pr-fl-ma centered p-20px">
               
              <div
                className="w-125px h-125px h-pr-fl-ma circle r-h-c p-10px m-b-50px h-up"
                Style="border: 1px solid; border-color: white;"
              ><img
              src={UserMaleCircle}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Cesar Lima"
            /></div> 
              <span className="h-pr-fl-ma b-s-b-b divider r-h-c m-b-10px">&nbsp;</span>
              <div
                className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo t-a-c f-f-Gilroy"
                Style="font-size: 15px; line-height: 20px;"
              >
                Cesar Lima 
              </div> 
            </div> 
          </div>
          <div className="w-200px h-250px h-pr-fl-ma b-s-b-b hover-underline-animation">
             
            <div className="h-e h-pr-fl-ma centered p-20px">
               
              <div
                className="w-125px h-125px h-pr-fl-ma circle r-h-c p-10px m-b-50px h-up"
                Style="border: 1px solid; border-color: white;"
              ><img
              src={UserMaleCircle}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Nickolas Machado"
            /></div> 
              <span className="h-pr-fl-ma b-s-b-b divider r-h-c m-b-10px">&nbsp;</span>
              <div
                className="w-100 h-a h-pr-fl-ma r-h-c f-w-bo t-a-c f-f-Gilroy"
                Style="font-size: 15px; line-height: 20px;"
              >
                Nickolas Machado 
              </div> 
            </div> 
          </div>
        </div>
        <div className="m-w-100 w-50 h-100 h-pr-fl-ma b-s-b-b of-h ">
          <div className="w-100 h-100 h-pr-fl-ma p-20px ">
            <div className="  w-a h-a h-pr-fl-ma r-v-c">
              <ContentBox
                className="h-pr-fl-ma w-100 h-a "
                title={"Nombre Apellido"}
                subtitle={"Profesión - Cargo"}
                text="Descripción de tareas realizadas o mensaje personal texto de rellenoDescripción de tareas realizadas o mensaje personal texto de rellenoDescripción de tareas realizadas o mensaje personal texto de rellenoDescripción de tareas realizadas o mensaje personal texto de relleno"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
