import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import budgetData from "../new-file.json";

const D3ChartComponent = () => {
  const ref = useRef();

  useEffect(() => {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const data = budgetData.myBudget;
    
    const pie = d3.pie().value(d => d.budget);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const arcs = svg.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g");

    arcs.append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    arcs.append("text")
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("fill", "#fff")
      .text(d => d.data.title);
  }, []);

  return <svg ref={ref}></svg>;
};

export default D3ChartComponent;