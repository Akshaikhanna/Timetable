// import React, { useRef, useEffect } from "react";
// import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";

// export default function App() {
//    const Viewer = useRef(null);
//    useEffect(() => {
//       Viewer.current.fitToViewer();
//    }, []);

//    const _zoomOnViewerCenter = () =>
//    Viewer.current.zoomOnViewerCenter(1.1);
//    const _fitSelection = () => Viewer.current.fitSelection(40,40, 200, 200);
//    const _fitToViewer = () => Viewer.current.fitToViewer();

//    return (
//        <div>
//          <h1>UncontrolledReactSVGPanZoom</h1>
//          <hr />
//          <button className="btn" onClick={() =>_zoomOnViewerCenter()}>Zoom on center
//          </button>
//          <button className="btn" onClick={() =>_fitSelection()}> Zoom area 200x200
//          </button>
//          <button className="btn" onClick={() => _fitToViewer()}> Fit
//          </button>
//          <hr />
//          <UncontrolledReactSVGPanZoom ref={Viewer} width={500} height={500}>
//             <svg width={617} height={316}>
//                <g fillOpacity=".5" strokeWidth="4">
//                   <rect x="400"
//                      y="40"
//                      width="100"
//                      height="200"
//                      fill="#4286f4"
//                      stroke="#f4f142"
//                     />
//                   </g>
//                 </svg>
//            </UncontrolledReactSVGPanZoom>
//       </div>
//    );  
// }

// import { useState } from "react";
// import { TranformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// const Zoom = () => {
//     const [interval, setInterval] = useState(true)
//     return(  
//         <>
//         <TranformWrapper>
//             <TransformComponent>
//                 <img src="https://www.logodesign.net/images/home-page-logo-03.png" alt="" />
//             </TransformComponent>
//         </TranformWrapper>
//         </>
//     )
// }

// export default Zoom;  


// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { Component } from "react";

// class Example extends Component {
//   render() {
//     return (
//       <TransformWrapper default={3} >
//         <TransformComponent>
//           <img src="image.jpg" alt="test" />
//         </TransformComponent>
//       </TransformWrapper>
//     );
//   }
// }
