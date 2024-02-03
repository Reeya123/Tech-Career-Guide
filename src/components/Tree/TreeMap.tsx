import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { FullscreenExitOutlined, PlusCircleOutlined, MinusCircleOutlined, FullscreenOutlined } from '@ant-design/icons';
import CONSTANT from '../../utils/CONSTANT';
import TreeComponent from './TreeComponent';
import { ContentDrawer } from './content-drawer';
import { RoadmapPageHeader } from './roadmap-page-header';

function TreeMap(props) {
  const [currentNode, setCurrentNode] = useState({});
  const [menuStatus, setMenuStatus] = useState('hidden');
  const [tranInfo, setTranInfo] = useState(CONSTANT.TRANINFO);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [dataSource, setDataSource] = useState(null);
  const [data, setData] = useState({})


  useEffect(() => {
    watchFullScreen();
    setDataSource(props.data.nodes);
  },[props.data])

  const cancleActive = () => {
    // reset node active
    setMenuStatus('hidden');
    setCurrentNode({});
  }

  const nodeClick = (event, currentNode) => {
    event.stopPropagation();
    setMenuStatus('visible');
    setCurrentNode(currentNode);
    props.data.content.map((result) => {
      if (result.title === currentNode.data.name) {
        setData(result)
      }
    })
  }

  const zoomIn = () => {
    const g = d3.select('.tree_map');
    d3.zoom().scaleBy((g as any), 0.9);
    const tranInfo = d3.zoomTransform((g as any).node());
    setTranInfo(tranInfo);
  }

  const zoomOut = () => {
    const g = d3.select('.tree_map');
    d3.zoom().scaleBy((g as any), 1.1);
    const tranInfo = d3.zoomTransform((g as any).node());
    setTranInfo(tranInfo);
  }

  const viewFullPage = () => {
    if (isFullScreen) {
      exitFullscreen();
    } else {
      requestFullScreen();
    }
  }

  const requestFullScreen = () => {
    const de = document.documentElement;
    if (de.requestFullscreen) {
      de.requestFullscreen();
    } else if ((de as any).mozRequestFullScreen) {
      (de as any).mozRequestFullScreen();
    } else if ((de as any).webkitRequestFullScreen) {
      (de as any).webkitRequestFullScreen();
    }
  }

  // exit full screen
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).mozCancelFullScreen) {
      (document as any).mozCancelFullScreen();
    } else if ((document as any).webkitCancelFullScreen) {
      (document as any).webkitCancelFullScreen();
    }
  }

  const watchFullScreen = () => {
    document.addEventListener(
      "fullscreenchange",
      () => {
        setIsFullScreen(document.fullscreen);
      },
      false
    );
    document.addEventListener(
      "mozfullscreenchange",
      () => {
        setIsFullScreen((document as any).mozFullScreen);
      },
      false
    );
    document.addEventListener(
      "webkitfullscreenchange",
      () => {
        setIsFullScreen((document as any).webkitIsFullScreen);
      },
      false
    );
  }

  return (
    <div onClick={cancleActive}>
      <RoadmapPageHeader title={props.data.featuredTitle} description={props.data.featuredDescription} data={props.data} />
      <TreeComponent {...props} tranInfo={tranInfo} nodeClick={nodeClick}
        dataSource={dataSource} currentNode={currentNode} />
      <div className="menu">
        {menuStatus === 'visible' && <ContentDrawer {...data} />}
      </div>
      <div className="operate-list">
        <span title="add node" onClick={zoomOut}><PlusCircleOutlined /></span>
        <span title="delete node" onClick={zoomIn}><MinusCircleOutlined /></span>
        <span onClick={viewFullPage}>
          {isFullScreen ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
        </span>
      </div>
    </div>
  )
}

export default TreeMap;
