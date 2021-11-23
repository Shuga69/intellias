import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { OrgChart } from 'd3-org-chart';
import ChartElement from "./chartElement/ChartElement";
import Button from "../button/Button";
const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
          .nodeContent((data)=>
          {
            return `<div>${data.data.name}</div`
          })
        .nodeWidth(d => 200)
        .nodeHeight(d => 120)
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div ref={d3Container} />
    </div>
  );
};
export default OrgChartComponent;