import React from "react";
import style from "./welcome.module.scss";

const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <p>___________________</p>
        <h1>welcome</h1>
        <p>___________________</p>
      </div>
      <div className={style.info}>
        <div>
          <p>2002</p>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div>
          <p>2002</p>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
        <div>
          <p>2002</p>
          <p>
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
