import React, { Fragment, useState  } from "react";

import Posts from "./posts";
import Identity from "./identity";


const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-100 h-100 b-s-b-b h-pr-fl-ma" >
      <div className="w-90 h-pr-fl-ma h-100 b-s-b-b bg-red r-h-c">
 
      <div className="w-100 h-90 h-pr-fl-ma of-auto">
        {children.map((child, index) => (
          <div key={index} style={{ display: index === activeTab ? "block" : "none" }}>
            {child}
          </div>
        ))}
      </div>

      <div className="w-100 h-10 h-pr-fl-ma" Style={{ display: "flex" }}>
        {children.map((child, index) => (
          <button
            key={index}
            style={{
              backgroundColor: index === activeTab ? "rgba(18, 18, 18, 0.7)" : "rgba(0,0,0,0.1)",
              color: index === activeTab ? "#ffc671" : "#666666",
              border: "none",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              fontFamily: "Gilroy",
              fontWeight: "bold",
              fontSize: index === activeTab ? "15px" : "12px",
              height: "100%",
            }}
            onClick={() => setActiveTab(index)}
            className="hover-underline-animation"
          >
            {child.props.label}
          </button>
        ))}
      </div>
      </div>
    </div>
    
  );
};

const posts = () => <Posts/>;
const identity = () => <Identity/>;

const Plans = () => (
  
  <Tabs>
    <div label="Posts">
      <Posts />
    </div>
    <div label="Identidad de marca">
      <Identity />
    </div>

    
  </Tabs>
 
);

export default Plans; 