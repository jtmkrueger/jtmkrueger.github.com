game.resources = [
  /**
   * Graphics.
   */
  // our level tileset
  {name: "area01_level_tiles", type:"image", src: "data/img/map/area01_level_tiles.png"},
  // the main player spritesheet
  // {name: "gripe_run_right", type: "image", src: "data/img/sprite/gripe_run_right.png"},
  {name: "cat_run_right", type: "image", src: "data/img/sprite/cat_run_right.png"},
  // the collision metatiles
  {name: "metatiles32x32", type: "image", src: "data/img/map/metatiles32x32.png"},
  // the parallax background
  {name: "area01_bkg0", type:"image", src: "data/img/area01_bkg0.png"},
  {name: "area01_bkg1", type:"image", src: "data/img/area01_bkg1.png"},
  // the spinning coin spritesheet
  {name: "spinning_coin_gold", type:"image", src: "data/img/sprite/spinning_coin_gold.png"},
  // our enemty entity
  {name: "wheelie_right", type:"image", src: "data/img/sprite/wheelie_right.png"},
  {name: "rat", type:"image", src: "data/img/sprite/rat.png"},
  // game font
  {name: "32x32_font", type:"image", src: "data/img/font/32x32_font.png"},
  // title screen
  {name: "title_screen", type: "image", src: "data/img/gui/title_screen.png"},
  /*
   * Levels.
   */
  {name: "area01", type: "tmx", src: "data/area01.tmx"},
  {name: "area02", type: "tmx", src: "data/area02.tmx"},
  /* 
   * Background music. 
   */
  {name: "dst-inertexponent", type: "audio", src: "data/bgm/", channel : 1},
  /* 
   * Sound effects. 
   */
  {name: "cling", type: "audio", src: "data/sfx/", channel : 2},
  {name: "stomp", type: "audio", src: "data/sfx/", channel : 1},
  {name: "jump",  type: "audio", src: "data/sfx/", channel : 1}
	/* Atlases
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
];
