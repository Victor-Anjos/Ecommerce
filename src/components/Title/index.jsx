import React from "react";
import styled from "styled-components";

import { TitlePages } from "./styles";

const Title = (props) => {
  return (
    <div>
      <TitlePages>{props.children}</TitlePages>
    </div>
  );
};

export default Title;
