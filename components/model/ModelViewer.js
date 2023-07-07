/**----------------------------------------------------------------------------------
 * The Model Viewer Used to Render 3D Assets on Web
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import "@google/model-viewer";

const ModelViewer = ({ name }) => (
  <model-viewer
    src={`/models/${name}.glb`}
    ios-src={`/models/${name}.usdz`}
    alt="FWB 3D Model"
    camera-controls
    auto-rotate
    // ar
    // interaction-prompt="none"
  >
    <div background-color="black" height="0px" slot="poster"></div>
  </model-viewer>
);

export default ModelViewer;
