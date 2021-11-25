import React, { useLayoutEffect, useRef, useEffect } from 'react';
import { OrgChart } from 'd3-org-chart';
import ChartElement from "./chartElement/ChartElement";
import Button from "../button/Button";
import * as d3 from "d3";
import './OrgChart.css'
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
          .nodeContent((d)=>
          {
            return `  <div style="padding-top:30px;background-color:#fff;margin-left:1px;height:${d.height}px;border-radius:2px;overflow:visible">
            <div style="height:${d.height - 32}px;padding-top:0px;background-color:white">


             
             <div class="${d.data.tags}" style="text-align:center;margin-top:-30px;height:30px;width:${d.width}px">
               <div style="color:rgb(63, 92, 111);font-size:16px;line-height: 30px"> ${d.data.positionName} </div>
</div>

             <div style="display:flex;align-items:center;padding:7px 10px;text-align:center">
              <img src=" ${d.data.imageUrl}" style="margin-right: 5px;border-radius:100px;width:60px;height:60px;" />
                 <div style="color:rgb(119, 119, 119);font-size:16px;"> ${d.data.name} </div>

             </div> 
            
            </div>     
    </div>`
          })
          .nodeWidth(d => 245)
          .initialZoom(0.7)
          .nodeHeight(d => 107)
          .childrenMargin(d => 40)
          .compactMarginBetween(d => 15)
          .compactMarginPair(d => 80)
          .compact(true)
          .lastTransform(20)
         
         .siblingsMargin(d =>0)
          .linkUpdate(function (d, i, arr) {
            d3.select(this)
                    .attr("stroke", d => d.data._upToTheRootHighlighted ? '#14760D' : '#c6c6c6')
                    .attr("stroke-width", d => d.data._upToTheRootHighlighted ? 15 : 1)
                    .attr("")
          })
         
        .expandLevel(2)
        .render()
        .expandAll()
        .fit()
        
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div ref={d3Container} />
    </div>
  );
};
export default OrgChartComponent;