const canvas = document.getElementById('canvas');
const svg = d3.select(canvas).append('svg');
const margin = { top: 50, left: 50, right: 50, bottom: 50 }; //Werte können geändert werden

//ViewBox:
svg.attr('viewBox', [0, 0, canvas.clientWidth, canvas.clientHeight])
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', canvas.clientWidth)
    .attr('height', canvas.clientHeight);



