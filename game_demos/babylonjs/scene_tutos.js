function createSceneTuto(engine) {
  //Creation of the scene 
  var scene = new BABYLON.Scene(engine);

  //Adding of the light on the scene
  var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);

  //Adding of the Arc Rotate Camera
  var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.7, 70, new BABYLON.Vector3.Zero(), scene);

  // test meshes
  var box1 = BABYLON.Mesh.CreateBox("Box1", 6.0, scene);
  var box2 = BABYLON.Mesh.CreateBox("Box2", 6.0, scene);
  var box3 = BABYLON.Mesh.CreateBox("Box3", 6.0, scene);
  var box4 = BABYLON.Mesh.CreateBox("Box4", 6.0, scene);
  var sphere = BABYLON.Mesh.CreateSphere("Sphere", 10.0, 3.0, scene);
  var plan = BABYLON.Mesh.CreatePlane("Plane", 50.0, scene);
  var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, scene, false);
  var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false);

  //Positioning the boxes
  box1.position = new BABYLON.Vector3(-20,0,0);
  box2.position.x = -10; // same as: box2.position = new BABYLON.Vector3(-20,0,0);
  box3.position.x = 0;
  box4.position.x = -20;
  sphere.position = new BABYLON.Vector3(-20,5,0);
  plan.position = new BABYLON.Vector3(-30,5,0);
  cylinder.position = new BABYLON.Vector3(-40,5,0);
  torus.position.x = -30

  //Rotate the box around the x axis
  box1.rotation.x = Math.PI/4; // or box1.rotation = new BABYLON.Vector3(Math.PI/4,0,0);
  //Rotate the box around the y axis
  box2.rotation.y = Math.PI/6;
  //Scaling of 2x on the x axis
  box3.scaling.x = 2;
  //Positioning the box3 relative to the box1
  box4.parent = box1;
  box4.position.z = -10;

  var materialSphere1 = new BABYLON.StandardMaterial("texture1", scene);
  materialSphere1.alpha = 0.5;

  sphere.material = materialSphere1;

  return scene;
}
