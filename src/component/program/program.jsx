import React from "react";
import "./program.css";
import prog_1 from "../../assets/program-1.png";
import prog_2 from "../../assets/program-2.png";
import prog_3 from "../../assets/program-3.png";
import prog_icon_1 from "../../assets/program-icon-1.png";
import prog_icon_2 from "../../assets/program-icon-2.png";
import prog_icon_3 from "../../assets/program-icon-3.png";
const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={prog_1} />
        <div className="caption">
            <img src={prog_icon_1}/>
            <p>Graduation degree</p>
        </div>
      </div>
      <div className="program">
        <img src={prog_2} />
        <div className="caption">
            <img src={prog_icon_2}/>
            <p>Post Graduation degree</p>
        </div>
      </div>
      <div className="program">
        <img src={prog_3} />
        <div className="caption">
            <img src={prog_icon_3}/>
            <p>Master degree</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
