import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, //far clippinng plane
    );

    // move the ccamera back so we cann view the scene
    camera.position.set(0,0,10);

    return camera;
}

export {createCamera};