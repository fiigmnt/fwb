/**----------------------------------------------------------------------------------
 * The Model Viewer Used to Render 3D Assets on Web
 * FWB Hunt
 * @author fiig <fiig@mirage.ar> | July 26, 2023 | Updated:
 * ----------------------------------------------------------------------------------*/

import "@google/model-viewer";

const ModelViewer = ({ name }) => (
  <model-viewer
    src={`/models/${name}.glb`}
    ios-src={`/models/${name}.usdz`}
    poster={`/posters/${name}.webp`}
    alt="FWB 3D Model"
    camera-controls
    auto-rotate
    loading="eager"
    // ar
    // interaction-prompt="none"
  >
  </model-viewer>
);

export default ModelViewer;
