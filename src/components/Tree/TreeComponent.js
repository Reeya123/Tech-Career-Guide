/**
 * @author Fine
 * @description d3 and react tree component
 */
import * as React from "react";
import * as d3 from 'd3';
import CONSTANT from '../../utils/CONSTANT';

class TreeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [], // tree nodes
      links: [], // tree path
    };
    this.tree = null;
    /**
     * bezier curve generator to path
     */
    this.bezierCurveGenerator = d3.linkVertical()
      .x(d => d.y)
      .y(d => d.x)
  }

  componentDidMount() {
    this.initMapData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { links, nodes } = this.initTreeNodes(nextProps);
    nextState.nodes = nodes;
    nextState.links = links;

    return true;
  }

  initMapData() {
    const { width, height, data } = this.props;
    // create tree layout
    this.tree = d3.tree()
      .size([width * 0.8, height])
      .separation((a, b) => (a.parent === b.parent ? 5 : 9) / a.depth);
    const { links, nodes } = this.initTreeNodes(data.nodes);
    this.setState({ links, nodes });
  }

  initTreeNodes(nextProps) {
    const { currentNode, dataSource } = nextProps;
    let nodes = [];
    let links = [];
    if (dataSource) {
      // create data of tree structure
      const hierarchyData = d3.hierarchy(dataSource)
      // hierarchy layout and add node.x,node.y
      const treeNode = this.tree(hierarchyData);
      nodes = treeNode.descendants();
      links = treeNode.links();
      nodes = nodes.map(node => {
        if (node.active) {
          node.active = false;
          if (node.parent) {
            node.parent.active = false;
          }
        }
        if (node.data.name === currentNode.name) {
          node.active = true;
          if (node.parent) {
            node.parent.active = true;
          }
        }
        return node;
      });
    }
    return { nodes, links };
  }

  nodeActive = (event, currentNode) => {
    // let { nodes } = this.state
    this.props.nodeClick(event, currentNode);
  }

  render() {
    const { width, height, tranInfo } = this.props;
    const { links, nodes } = this.state;

    return (
      <svg width={width} height={height}>
        <g
          className="tree_map"
          transform={`translate(${tranInfo.x},${tranInfo.y}),scale(${tranInfo.k})`}>
          <g>
            {
              links.map((link, i) => {
                const start = { x: link.source.x, y: link.source.y + CONSTANT.STARTBUF };
                const end = { x: link.target.x, y: link.target.y + CONSTANT.ENDBUF };
                const pathLink = this.bezierCurveGenerator({ source: start, target: end });

                return <path
                  key={i}
                  d={pathLink}
                  fill='none'
                  stroke={CONSTANT.THEME.LINESTROKE}
                  strokeWidth='1'
                  strokeDasharray={CONSTANT.THEME.DASHARRAY}
                  markerEnd='url(#arrow)' />
              })}
          </g>
          <g>
            {nodes.map((node, i) => {
              node.rx = node.data.rx;
              node.ry = node.data.ry;
              node.name = node.data.name;
              node.width = node.data.width;
              console.log(node.rx)


              return (<g key={i} transform={`translate(${node.y}, ${node.x - 10})`}>
                <defs>
                  <marker id="arrow"
                    markerUnits="strokeWidth"
                    markerWidth={CONSTANT.MARKER.MARKERWIDTH}
                    markerHeight={CONSTANT.MARKER.MARKERHIEGHT}
                    viewBox={CONSTANT.MARKER.VIEWBOX}
                    refX={CONSTANT.MARKER.REFX}
                    refY={CONSTANT.MARKER.REFY}
                    orient={CONSTANT.MARKER.ORIENT}>
                    <path d={CONSTANT.MARKER.PATH} fill={CONSTANT.MARKER.FILL} />
                  </marker>
                </defs>
                <rect
                  x={node.rx}
                  y={node.ry}
                  width={node.width}
                  height="47.3"
                  rx="2"
                  fill="rgb(255,255,255)"
                  fill-opacity="1"
                  stroke={node.active ? CONSTANT.THEME.ACTIVE : CONSTANT.THEME.NONEACTIVE}
                  strokeWidth={node.active ? 2 : 1}
                  style={{ cursor: 'pointer' }}
                  onClick={(event) => this.nodeActive(event, node)}
                />
                <text x='50' y='10' fill='#000' textAnchor='end' style={{ fontSize: CONSTANT.THEME.FONTSIZE }}>
                  {node.name}
                </text>
              </g>)
            })}
          </g>
        </g>
      </svg>
    )
  }
}

export default TreeComponent;
