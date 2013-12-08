function createSceneTuto(engine) {
  //Creation of the scene 
  var scene = new BABYLON.Scene(engine);

  //Adding of the light on the scene
  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);

  //Adding of the Arc Rotate Camera
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, new BABYLON.Vector3.Zero(), scene);

  // test meshes
  var box = BABYLON.Mesh.CreateBox("Box", 6.0, scene);
  var sphere = BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
  var plan = BABYLON.Mesh.CreatePlane("Plane", 50.0, scene);
  var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, scene, false);
  var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);

  box.position = new BABYLON.Vector3(-10,0,0);
  sphere.position = new BABYLON.Vector3(-10,5,0);
  plan.position = new BABYLON.Vector3(-20,5,0);
  cylinder.position = new BABYLON.Vector3(-30,5,0);

  return scene;
}
