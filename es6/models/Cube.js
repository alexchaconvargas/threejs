class Cube {
    constructor(rotationX, rotationY) {
        this.rotationX = rotationX || 0;
        this.rotationY = rotationY || 0;
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    animate() {
        this.mesh.rotation.x += this.rotationX;
        this.mesh.rotation.y += this.rotationY;
    }

}
