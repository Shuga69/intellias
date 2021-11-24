import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import  OrgChartComponent  from '../OrgChartComponent';
import * as d3 from "d3";
import {orgChartData} from '../org-chart-data.js'
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
        'https://gist.githubusercontent.com/DimaKrav/d9c884dcb1cdd6d61b0a90941c1a887a/raw/8199326f7273b9d41c20f300399adcd1d1c85728/people.csv'
      ).then(data => {
        setData(data);
        console.log(data)
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