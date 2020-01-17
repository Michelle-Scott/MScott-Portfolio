import React from "react";
import styled from "styled-components";
// import { Pack } from "@potion/layout";
// import { Svg, Circle } from "@potion/element";

const NewDiv = styled.div`
  padding: 10%;
  color: white;
`;

const SampleDiv = () => {
  return (
    <NewDiv>
      {/* <Svg width={400} height={400}>
        <Pack
          data={{
            children: [
              { value: 1, key: "1" },
              { value: 2, key: "2" },
              { value: 3, key: "3" }
            ]
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes.map(({ x, y, r, key }) => (
              <Circle key={key} cx={x} cy={y} r={r} fill="black" />
            ))
          }
        </Pack>
      </Svg> */}
    </NewDiv>
  );
};

export default SampleDiv;
