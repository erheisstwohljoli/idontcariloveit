const canvas = document.getElementById('canvas');
const svg = d3.select(canvas).append('svg');
const margin = { top: 50, left: 50, right: 50, bottom: 50 }; //Werte können geändert werden

//ViewBox:
svg.attr('viewBox', [0, 0, canvas.clientWidth, canvas.clientHeight])
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', canvas.clientWidth)
    .attr('height', canvas.clientHeight);


const projection = d3.geoMercator()
    .scale((canvas.clientWidth - margin.left - margin.right) / (2* Math.PI))
    .translate([canvas.clientWidth / 2, canvas.clientHeight / 2])
    .center([0, 35]);

d3.json('./data/freiburg.geojson').then(mapData => {

     const pathBuilder = d3.geoPath(projection);

     map.selectALl('path')
         .data(mapData.features)
         .enter()
         .append('path')
         .attr('opacity', '.8')
         .attr('stroke', '#555')
         .attr('stroke-width', '5px')
         .attr('d',(feature) => {
              return pathBuilder(feature);
         })

})

