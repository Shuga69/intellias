import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import  OrgChartComponent  from '../OrgChartComponent';
import * as d3 from "d3";

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
  
   
  
    useEffect(() => {
      d3.csv(
        'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
      ).then(data => {
        setData(data);
      
      });
    }, [true]);
    return (
      <div>
         <OrgChartComponent
          
          data={data}
       />
      </div>
  );
};
export default OrgChartTree;