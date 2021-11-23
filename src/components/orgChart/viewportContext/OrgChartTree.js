import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import  OrgChartComponent  from '../OrgChartComponent';
import * as d3 from "d3";
import {orgChartData} from '../org-chart-data'
const OrgChartTree = props => {
    const [data, setData] = useState(null);
    let addNodeChildFunc = null;
  
    function addNode() {
      const node = {
        nodeId: 'new Node',
        parentNodeId: 'O-6066'
      };
  
      addNodeChildFunc(node);
    }
  
   
  

    return (
      <div>
         <OrgChartComponent
          data={orgChartData}
       />
      </div>
  );
};
export default OrgChartTree;