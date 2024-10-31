import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

function createCube() {
    // ccreate a geometry
    const geometry = new BoxGeometry(2,2,2);

    // create a default (white) Basicc material
    const material = new MeshBasicMaterial();

    //create a Mesh container the geometry and material
    const cube = new Mesh(geometry, material);

    return cube;
}

export {createCube};