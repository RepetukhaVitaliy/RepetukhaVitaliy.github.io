(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 500,
	height: 220,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/preloader/Preloader_big_noBG_00001.png", id:"Preloader_big_noBG_00001"},
		{src:"assets/preloader/Preloader_big_noBG_00002.png", id:"Preloader_big_noBG_00002"},
		{src:"assets/preloader/Preloader_big_noBG_00003.png", id:"Preloader_big_noBG_00003"},
		{src:"assets/preloader/Preloader_big_noBG_00004.png", id:"Preloader_big_noBG_00004"},
		{src:"assets/preloader/Preloader_big_noBG_00005.png", id:"Preloader_big_noBG_00005"},
		{src:"assets/preloader/Preloader_big_noBG_00006.png", id:"Preloader_big_noBG_00006"},
		{src:"assets/preloader/Preloader_big_noBG_00007.png", id:"Preloader_big_noBG_00007"},
		{src:"assets/preloader/Preloader_big_noBG_00008.png", id:"Preloader_big_noBG_00008"},
		{src:"assets/preloader/Preloader_big_noBG_00009.png", id:"Preloader_big_noBG_00009"},
		{src:"assets/preloader/Preloader_big_noBG_00010.png", id:"Preloader_big_noBG_00010"},
		{src:"assets/preloader/Preloader_big_noBG_00011.png", id:"Preloader_big_noBG_00011"},
		{src:"assets/preloader/Preloader_big_noBG_00012.png", id:"Preloader_big_noBG_00012"},
		{src:"assets/preloader/Preloader_big_noBG_00013.png", id:"Preloader_big_noBG_00013"},
		{src:"assets/preloader/Preloader_big_noBG_00014.png", id:"Preloader_big_noBG_00014"},
		{src:"assets/preloader/Preloader_big_noBG_00015.png", id:"Preloader_big_noBG_00015"},
		{src:"assets/preloader/Preloader_big_noBG_00016.png", id:"Preloader_big_noBG_00016"},
		{src:"assets/preloader/Preloader_big_noBG_00017.png", id:"Preloader_big_noBG_00017"},
		{src:"assets/preloader/Preloader_big_noBG_00018.png", id:"Preloader_big_noBG_00018"},
		{src:"assets/preloader/Preloader_big_noBG_00019.png", id:"Preloader_big_noBG_00019"},
		{src:"assets/preloader/Preloader_big_noBG_00020.png", id:"Preloader_big_noBG_00020"},
		{src:"assets/preloader/Preloader_big_noBG_00021.png", id:"Preloader_big_noBG_00021"},
		{src:"assets/preloader/Preloader_big_noBG_00022.png", id:"Preloader_big_noBG_00022"},
		{src:"assets/preloader/Preloader_big_noBG_00023.png", id:"Preloader_big_noBG_00023"},
		{src:"assets/preloader/Preloader_big_noBG_00024.png", id:"Preloader_big_noBG_00024"},
		{src:"assets/preloader/Preloader_big_noBG_00025.png", id:"Preloader_big_noBG_00025"},
		{src:"assets/preloader/Preloader_big_noBG_00026.png", id:"Preloader_big_noBG_00026"},
		{src:"assets/preloader/Preloader_big_noBG_00027.png", id:"Preloader_big_noBG_00027"},
		{src:"assets/preloader/Preloader_big_noBG_00028.png", id:"Preloader_big_noBG_00028"},
		{src:"assets/preloader/Preloader_big_noBG_00029.png", id:"Preloader_big_noBG_00029"},
		{src:"assets/preloader/Preloader_big_noBG_00030.png", id:"Preloader_big_noBG_00030"},
		{src:"assets/preloader/Preloader_big_noBG_00031.png", id:"Preloader_big_noBG_00031"},
		{src:"assets/preloader/Preloader_big_noBG_00032.png", id:"Preloader_big_noBG_00032"},
		{src:"assets/preloader/Preloader_big_noBG_00033.png", id:"Preloader_big_noBG_00033"},
		{src:"assets/preloader/Preloader_big_noBG_00034.png", id:"Preloader_big_noBG_00034"},
		{src:"assets/preloader/Preloader_big_noBG_00035.png", id:"Preloader_big_noBG_00035"},
		{src:"assets/preloader/Preloader_big_noBG_00036.png", id:"Preloader_big_noBG_00036"},
		{src:"assets/preloader/Preloader_big_noBG_00037.png", id:"Preloader_big_noBG_00037"},
		{src:"assets/preloader/Preloader_big_noBG_00038.png", id:"Preloader_big_noBG_00038"},
		{src:"assets/preloader/Preloader_big_noBG_00039.png", id:"Preloader_big_noBG_00039"},
		{src:"assets/preloader/Preloader_big_noBG_00040.png", id:"Preloader_big_noBG_00040"},
		{src:"assets/preloader/Preloader_big_noBG_00041.png", id:"Preloader_big_noBG_00041"},
		{src:"assets/preloader/Preloader_big_noBG_00042.png", id:"Preloader_big_noBG_00042"},
		{src:"assets/preloader/Preloader_big_noBG_00043.png", id:"Preloader_big_noBG_00043"},
		{src:"assets/preloader/Preloader_big_noBG_00044.png", id:"Preloader_big_noBG_00044"},
		{src:"assets/preloader/Preloader_big_noBG_00045.png", id:"Preloader_big_noBG_00045"},
		{src:"assets/preloader/Preloader_big_noBG_00046.png", id:"Preloader_big_noBG_00046"},
		{src:"assets/preloader/Preloader_big_noBG_00047.png", id:"Preloader_big_noBG_00047"},
		{src:"assets/preloader/Preloader_big_noBG_00048.png", id:"Preloader_big_noBG_00048"},
		{src:"assets/preloader/Preloader_big_noBG_00049.png", id:"Preloader_big_noBG_00049"},
		{src:"assets/preloader/Preloader_big_noBG_00050.png", id:"Preloader_big_noBG_00050"},
		{src:"assets/preloader/Preloader_big_noBG_00051.png", id:"Preloader_big_noBG_00051"},
		{src:"assets/preloader/Preloader_big_noBG_00052.png", id:"Preloader_big_noBG_00052"},
		{src:"assets/preloader/Preloader_big_noBG_00053.png", id:"Preloader_big_noBG_00053"},
		{src:"assets/preloader/Preloader_big_noBG_00054.png", id:"Preloader_big_noBG_00054"},
		{src:"assets/preloader/Preloader_big_noBG_00055.png", id:"Preloader_big_noBG_00055"},
		{src:"assets/preloader/Preloader_big_noBG_00056.png", id:"Preloader_big_noBG_00056"},
		{src:"assets/preloader/Preloader_big_noBG_00057.png", id:"Preloader_big_noBG_00057"},
		{src:"assets/preloader/Preloader_big_noBG_00058.png", id:"Preloader_big_noBG_00058"},
		{src:"assets/preloader/Preloader_big_noBG_00059.png", id:"Preloader_big_noBG_00059"},
		{src:"assets/preloader/Preloader_big_noBG_00060.png", id:"Preloader_big_noBG_00060"},
		{src:"assets/preloader/Preloader_big_noBG_00061.png", id:"Preloader_big_noBG_00061"},
		{src:"assets/preloader/Preloader_big_noBG_00062.png", id:"Preloader_big_noBG_00062"},
		{src:"assets/preloader/Preloader_big_noBG_00063.png", id:"Preloader_big_noBG_00063"},
		{src:"assets/preloader/Preloader_big_noBG_00064.png", id:"Preloader_big_noBG_00064"},
		{src:"assets/preloader/Preloader_big_noBG_00065.png", id:"Preloader_big_noBG_00065"},
		{src:"assets/preloader/Preloader_big_noBG_00066.png", id:"Preloader_big_noBG_00066"},
		{src:"assets/preloader/Preloader_big_noBG_00067.png", id:"Preloader_big_noBG_00067"},
		{src:"assets/preloader/Preloader_big_noBG_00068.png", id:"Preloader_big_noBG_00068"},
		{src:"assets/preloader/Preloader_big_noBG_00069.png", id:"Preloader_big_noBG_00069"},
		{src:"assets/preloader/Preloader_big_noBG_00070.png", id:"Preloader_big_noBG_00070"},
		{src:"assets/preloader/Preloader_big_noBG_00071.png", id:"Preloader_big_noBG_00071"},
		{src:"assets/preloader/Preloader_big_noBG_00072.png", id:"Preloader_big_noBG_00072"},
		{src:"assets/preloader/Preloader_big_noBG_00073.png", id:"Preloader_big_noBG_00073"},
		{src:"assets/preloader/Preloader_big_noBG_00074.png", id:"Preloader_big_noBG_00074"},
		{src:"assets/preloader/Preloader_big_noBG_00075.png", id:"Preloader_big_noBG_00075"},
		{src:"assets/preloader/Preloader_big_noBG_00076.png", id:"Preloader_big_noBG_00076"},
		{src:"assets/preloader/Preloader_big_noBG_00077.png", id:"Preloader_big_noBG_00077"},
		{src:"assets/preloader/Preloader_big_noBG_00078.png", id:"Preloader_big_noBG_00078"},
		{src:"assets/preloader/Preloader_big_noBG_00079.png", id:"Preloader_big_noBG_00079"},
		{src:"assets/preloader/Preloader_big_noBG_00080.png", id:"Preloader_big_noBG_00080"},
		{src:"assets/preloader/Preloader_big_noBG_00081.png", id:"Preloader_big_noBG_00081"},
		{src:"assets/preloader/Preloader_big_noBG_00082.png", id:"Preloader_big_noBG_00082"},
		{src:"assets/preloader/Preloader_big_noBG_00083.png", id:"Preloader_big_noBG_00083"},
		{src:"assets/preloader/Preloader_big_noBG_00084.png", id:"Preloader_big_noBG_00084"},
		{src:"assets/preloader/Preloader_big_noBG_00085.png", id:"Preloader_big_noBG_00085"},
		{src:"assets/preloader/Preloader_big_noBG_00086.png", id:"Preloader_big_noBG_00086"},
		{src:"assets/preloader/Preloader_big_noBG_00087.png", id:"Preloader_big_noBG_00087"},
		{src:"assets/preloader/Preloader_big_noBG_00088.png", id:"Preloader_big_noBG_00088"},
		{src:"assets/preloader/Preloader_big_noBG_00089.png", id:"Preloader_big_noBG_00089"},
		{src:"assets/preloader/Preloader_big_noBG_00090.png", id:"Preloader_big_noBG_00090"},
		{src:"assets/preloader/Preloader_big_noBG_00091.png", id:"Preloader_big_noBG_00091"},
		{src:"assets/preloader/Preloader_big_noBG_00092.png", id:"Preloader_big_noBG_00092"},
		{src:"assets/preloader/Preloader_big_noBG_00093.png", id:"Preloader_big_noBG_00093"},
		{src:"assets/preloader/Preloader_big_noBG_00094.png", id:"Preloader_big_noBG_00094"},
		{src:"assets/preloader/Preloader_big_noBG_00095.png", id:"Preloader_big_noBG_00095"},
		{src:"assets/preloader/Preloader_big_noBG_00096.png", id:"Preloader_big_noBG_00096"},
		{src:"assets/preloader/Preloader_big_noBG_00097.png", id:"Preloader_big_noBG_00097"},
		{src:"assets/preloader/Preloader_big_noBG_00098.png", id:"Preloader_big_noBG_00098"},
		{src:"assets/preloader/Preloader_big_noBG_00099.png", id:"Preloader_big_noBG_00099"},
		{src:"assets/preloader/Preloader_big_noBG_00100.png", id:"Preloader_big_noBG_00100"},
		{src:"assets/preloader/Preloader_big_noBG_00101.png", id:"Preloader_big_noBG_00101"},
		{src:"assets/preloader/Preloader_big_noBG_00102.png", id:"Preloader_big_noBG_00102"},
		{src:"assets/preloader/Preloader_big_noBG_00103.png", id:"Preloader_big_noBG_00103"},
		{src:"assets/preloader/Preloader_big_noBG_00104.png", id:"Preloader_big_noBG_00104"},
		{src:"assets/preloader/Preloader_big_noBG_00105.png", id:"Preloader_big_noBG_00105"},
		{src:"assets/preloader/Preloader_big_noBG_00106.png", id:"Preloader_big_noBG_00106"},
		{src:"assets/preloader/Preloader_big_noBG_00107.png", id:"Preloader_big_noBG_00107"},
		{src:"assets/preloader/Preloader_big_noBG_00108.png", id:"Preloader_big_noBG_00108"},
		{src:"assets/preloader/Preloader_big_noBG_00109.png", id:"Preloader_big_noBG_00109"},
		{src:"assets/preloader/Preloader_big_noBG_00110.png", id:"Preloader_big_noBG_00110"},
		{src:"assets/preloader/Preloader_big_noBG_00111.png", id:"Preloader_big_noBG_00111"},
		{src:"assets/preloader/Preloader_big_noBG_00112.png", id:"Preloader_big_noBG_00112"},
		{src:"assets/preloader/Preloader_big_noBG_00113.png", id:"Preloader_big_noBG_00113"},
		{src:"assets/preloader/Preloader_big_noBG_00114.png", id:"Preloader_big_noBG_00114"},
		{src:"assets/preloader/Preloader_big_noBG_00115.png", id:"Preloader_big_noBG_00115"},
		{src:"assets/preloader/Preloader_big_noBG_00116.png", id:"Preloader_big_noBG_00116"},
		{src:"assets/preloader/Preloader_big_noBG_00117.png", id:"Preloader_big_noBG_00117"},
		{src:"assets/preloader/Preloader_big_noBG_00118.png", id:"Preloader_big_noBG_00118"},
		{src:"assets/preloader/Preloader_big_noBG_00119.png", id:"Preloader_big_noBG_00119"},
		{src:"assets/preloader/Preloader_big_noBG_00120.png", id:"Preloader_big_noBG_00120"},
		{src:"assets/preloader/Preloader_big_noBG_00121.png", id:"Preloader_big_noBG_00121"},
		{src:"assets/preloader/Preloader_big_noBG_00122.png", id:"Preloader_big_noBG_00122"},
		{src:"assets/preloader/Preloader_big_noBG_00123.png", id:"Preloader_big_noBG_00123"},
		{src:"assets/preloader/Preloader_big_noBG_00124.png", id:"Preloader_big_noBG_00124"},
		{src:"assets/preloader/Preloader_big_noBG_00125.png", id:"Preloader_big_noBG_00125"},
		{src:"assets/preloader/Preloader_big_noBG_00126.png", id:"Preloader_big_noBG_00126"},
		{src:"assets/preloader/Preloader_big_noBG_00127.png", id:"Preloader_big_noBG_00127"},
		{src:"assets/preloader/Preloader_big_noBG_00128.png", id:"Preloader_big_noBG_00128"},
		{src:"assets/preloader/Preloader_big_noBG_00129.png", id:"Preloader_big_noBG_00129"},
		{src:"assets/preloader/Preloader_big_noBG_00130.png", id:"Preloader_big_noBG_00130"},
		{src:"assets/preloader/Preloader_big_noBG_00131.png", id:"Preloader_big_noBG_00131"},
		{src:"assets/preloader/Preloader_big_noBG_00132.png", id:"Preloader_big_noBG_00132"},
		{src:"assets/preloader/Preloader_big_noBG_00133.png", id:"Preloader_big_noBG_00133"},
		{src:"assets/preloader/Preloader_big_noBG_00134.png", id:"Preloader_big_noBG_00134"},
		{src:"assets/preloader/Preloader_big_noBG_00135.png", id:"Preloader_big_noBG_00135"},
		{src:"assets/preloader/Preloader_big_noBG_00136.png", id:"Preloader_big_noBG_00136"},
		{src:"assets/preloader/Preloader_big_noBG_00137.png", id:"Preloader_big_noBG_00137"},
		{src:"assets/preloader/Preloader_big_noBG_00138.png", id:"Preloader_big_noBG_00138"},
		{src:"assets/preloader/Preloader_big_noBG_00139.png", id:"Preloader_big_noBG_00139"},
		{src:"assets/preloader/Preloader_big_noBG_00140.png", id:"Preloader_big_noBG_00140"},
		{src:"assets/preloader/Preloader_big_noBG_00141.png", id:"Preloader_big_noBG_00141"},
		{src:"assets/preloader/Preloader_big_noBG_00142.png", id:"Preloader_big_noBG_00142"},
		{src:"assets/preloader/Preloader_big_noBG_00143.png", id:"Preloader_big_noBG_00143"},
		{src:"assets/preloader/Preloader_big_noBG_00144.png", id:"Preloader_big_noBG_00144"},
		{src:"assets/preloader/Preloader_big_noBG_00145.png", id:"Preloader_big_noBG_00145"},
		{src:"assets/preloader/Preloader_big_noBG_00146.png", id:"Preloader_big_noBG_00146"},
		{src:"assets/preloader/Preloader_big_noBG_00147.png", id:"Preloader_big_noBG_00147"},
		{src:"assets/preloader/Preloader_big_noBG_00148.png", id:"Preloader_big_noBG_00148"},
		{src:"assets/preloader/Preloader_big_noBG_00149.png", id:"Preloader_big_noBG_00149"},
		{src:"assets/preloader/Preloader_big_noBG_00150.png", id:"Preloader_big_noBG_00150"},
		{src:"assets/preloader/Preloader_big_noBG_00151.png", id:"Preloader_big_noBG_00151"},
		{src:"assets/preloader/Preloader_big_noBG_00152.png", id:"Preloader_big_noBG_00152"},
		{src:"assets/preloader/Preloader_big_noBG_00153.png", id:"Preloader_big_noBG_00153"},
		{src:"assets/preloader/Preloader_big_noBG_00154.png", id:"Preloader_big_noBG_00154"},
		{src:"assets/preloader/Preloader_big_noBG_00155.png", id:"Preloader_big_noBG_00155"},
		{src:"assets/preloader/Preloader_big_noBG_00156.png", id:"Preloader_big_noBG_00156"},
		{src:"assets/preloader/Preloader_big_noBG_00157.png", id:"Preloader_big_noBG_00157"},
		{src:"assets/preloader/Preloader_big_noBG_00158.png", id:"Preloader_big_noBG_00158"},
		{src:"assets/preloader/Preloader_big_noBG_00159.png", id:"Preloader_big_noBG_00159"},
		{src:"assets/preloader/Preloader_big_noBG_00160.png", id:"Preloader_big_noBG_00160"},
		{src:"assets/preloader/Preloader_big_noBG_00161.png", id:"Preloader_big_noBG_00161"},
		{src:"assets/preloader/Preloader_big_noBG_00162.png", id:"Preloader_big_noBG_00162"},
		{src:"assets/preloader/Preloader_big_noBG_00163.png", id:"Preloader_big_noBG_00163"},
		{src:"assets/preloader/Preloader_big_noBG_00164.png", id:"Preloader_big_noBG_00164"},
		{src:"assets/preloader/Preloader_big_noBG_00165.png", id:"Preloader_big_noBG_00165"},
		{src:"assets/preloader/Preloader_big_noBG_00166.png", id:"Preloader_big_noBG_00166"},
		{src:"assets/preloader/Preloader_big_noBG_00167.png", id:"Preloader_big_noBG_00167"},
		{src:"assets/preloader/Preloader_big_noBG_00168.png", id:"Preloader_big_noBG_00168"},
		{src:"assets/preloader/Preloader_big_noBG_00169.png", id:"Preloader_big_noBG_00169"},
		{src:"assets/preloader/Preloader_big_noBG_00170.png", id:"Preloader_big_noBG_00170"}
	]
};



// symbols:



(lib.Preloader_big_noBG_00001 = function() {
	this.initialize(img.Preloader_big_noBG_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00002 = function() {
	this.initialize(img.Preloader_big_noBG_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00003 = function() {
	this.initialize(img.Preloader_big_noBG_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00004 = function() {
	this.initialize(img.Preloader_big_noBG_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00005 = function() {
	this.initialize(img.Preloader_big_noBG_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00006 = function() {
	this.initialize(img.Preloader_big_noBG_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00007 = function() {
	this.initialize(img.Preloader_big_noBG_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00008 = function() {
	this.initialize(img.Preloader_big_noBG_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00009 = function() {
	this.initialize(img.Preloader_big_noBG_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00010 = function() {
	this.initialize(img.Preloader_big_noBG_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00011 = function() {
	this.initialize(img.Preloader_big_noBG_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00012 = function() {
	this.initialize(img.Preloader_big_noBG_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00013 = function() {
	this.initialize(img.Preloader_big_noBG_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00014 = function() {
	this.initialize(img.Preloader_big_noBG_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00015 = function() {
	this.initialize(img.Preloader_big_noBG_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00016 = function() {
	this.initialize(img.Preloader_big_noBG_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00017 = function() {
	this.initialize(img.Preloader_big_noBG_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00018 = function() {
	this.initialize(img.Preloader_big_noBG_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00019 = function() {
	this.initialize(img.Preloader_big_noBG_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00020 = function() {
	this.initialize(img.Preloader_big_noBG_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00021 = function() {
	this.initialize(img.Preloader_big_noBG_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00022 = function() {
	this.initialize(img.Preloader_big_noBG_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00023 = function() {
	this.initialize(img.Preloader_big_noBG_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00024 = function() {
	this.initialize(img.Preloader_big_noBG_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00025 = function() {
	this.initialize(img.Preloader_big_noBG_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00026 = function() {
	this.initialize(img.Preloader_big_noBG_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00027 = function() {
	this.initialize(img.Preloader_big_noBG_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00028 = function() {
	this.initialize(img.Preloader_big_noBG_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00029 = function() {
	this.initialize(img.Preloader_big_noBG_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00030 = function() {
	this.initialize(img.Preloader_big_noBG_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00031 = function() {
	this.initialize(img.Preloader_big_noBG_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00032 = function() {
	this.initialize(img.Preloader_big_noBG_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00033 = function() {
	this.initialize(img.Preloader_big_noBG_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00034 = function() {
	this.initialize(img.Preloader_big_noBG_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00035 = function() {
	this.initialize(img.Preloader_big_noBG_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00036 = function() {
	this.initialize(img.Preloader_big_noBG_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00037 = function() {
	this.initialize(img.Preloader_big_noBG_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00038 = function() {
	this.initialize(img.Preloader_big_noBG_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00039 = function() {
	this.initialize(img.Preloader_big_noBG_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00040 = function() {
	this.initialize(img.Preloader_big_noBG_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00041 = function() {
	this.initialize(img.Preloader_big_noBG_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00042 = function() {
	this.initialize(img.Preloader_big_noBG_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00043 = function() {
	this.initialize(img.Preloader_big_noBG_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00044 = function() {
	this.initialize(img.Preloader_big_noBG_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00045 = function() {
	this.initialize(img.Preloader_big_noBG_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00046 = function() {
	this.initialize(img.Preloader_big_noBG_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00047 = function() {
	this.initialize(img.Preloader_big_noBG_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00048 = function() {
	this.initialize(img.Preloader_big_noBG_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00049 = function() {
	this.initialize(img.Preloader_big_noBG_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00050 = function() {
	this.initialize(img.Preloader_big_noBG_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00051 = function() {
	this.initialize(img.Preloader_big_noBG_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00052 = function() {
	this.initialize(img.Preloader_big_noBG_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00053 = function() {
	this.initialize(img.Preloader_big_noBG_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00054 = function() {
	this.initialize(img.Preloader_big_noBG_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00055 = function() {
	this.initialize(img.Preloader_big_noBG_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00056 = function() {
	this.initialize(img.Preloader_big_noBG_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00057 = function() {
	this.initialize(img.Preloader_big_noBG_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00058 = function() {
	this.initialize(img.Preloader_big_noBG_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00059 = function() {
	this.initialize(img.Preloader_big_noBG_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00060 = function() {
	this.initialize(img.Preloader_big_noBG_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00061 = function() {
	this.initialize(img.Preloader_big_noBG_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00062 = function() {
	this.initialize(img.Preloader_big_noBG_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00063 = function() {
	this.initialize(img.Preloader_big_noBG_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00064 = function() {
	this.initialize(img.Preloader_big_noBG_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00065 = function() {
	this.initialize(img.Preloader_big_noBG_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00066 = function() {
	this.initialize(img.Preloader_big_noBG_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00067 = function() {
	this.initialize(img.Preloader_big_noBG_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00068 = function() {
	this.initialize(img.Preloader_big_noBG_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00069 = function() {
	this.initialize(img.Preloader_big_noBG_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00070 = function() {
	this.initialize(img.Preloader_big_noBG_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00071 = function() {
	this.initialize(img.Preloader_big_noBG_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00072 = function() {
	this.initialize(img.Preloader_big_noBG_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00073 = function() {
	this.initialize(img.Preloader_big_noBG_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00074 = function() {
	this.initialize(img.Preloader_big_noBG_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00075 = function() {
	this.initialize(img.Preloader_big_noBG_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00076 = function() {
	this.initialize(img.Preloader_big_noBG_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00077 = function() {
	this.initialize(img.Preloader_big_noBG_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00078 = function() {
	this.initialize(img.Preloader_big_noBG_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00079 = function() {
	this.initialize(img.Preloader_big_noBG_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00080 = function() {
	this.initialize(img.Preloader_big_noBG_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00081 = function() {
	this.initialize(img.Preloader_big_noBG_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00082 = function() {
	this.initialize(img.Preloader_big_noBG_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00083 = function() {
	this.initialize(img.Preloader_big_noBG_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00084 = function() {
	this.initialize(img.Preloader_big_noBG_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00085 = function() {
	this.initialize(img.Preloader_big_noBG_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00086 = function() {
	this.initialize(img.Preloader_big_noBG_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00087 = function() {
	this.initialize(img.Preloader_big_noBG_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00088 = function() {
	this.initialize(img.Preloader_big_noBG_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00089 = function() {
	this.initialize(img.Preloader_big_noBG_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00090 = function() {
	this.initialize(img.Preloader_big_noBG_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00091 = function() {
	this.initialize(img.Preloader_big_noBG_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00092 = function() {
	this.initialize(img.Preloader_big_noBG_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00093 = function() {
	this.initialize(img.Preloader_big_noBG_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00094 = function() {
	this.initialize(img.Preloader_big_noBG_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00095 = function() {
	this.initialize(img.Preloader_big_noBG_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00096 = function() {
	this.initialize(img.Preloader_big_noBG_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00097 = function() {
	this.initialize(img.Preloader_big_noBG_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00098 = function() {
	this.initialize(img.Preloader_big_noBG_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00099 = function() {
	this.initialize(img.Preloader_big_noBG_00099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00100 = function() {
	this.initialize(img.Preloader_big_noBG_00100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00101 = function() {
	this.initialize(img.Preloader_big_noBG_00101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00102 = function() {
	this.initialize(img.Preloader_big_noBG_00102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00103 = function() {
	this.initialize(img.Preloader_big_noBG_00103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00104 = function() {
	this.initialize(img.Preloader_big_noBG_00104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00105 = function() {
	this.initialize(img.Preloader_big_noBG_00105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00106 = function() {
	this.initialize(img.Preloader_big_noBG_00106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00107 = function() {
	this.initialize(img.Preloader_big_noBG_00107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00108 = function() {
	this.initialize(img.Preloader_big_noBG_00108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00109 = function() {
	this.initialize(img.Preloader_big_noBG_00109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00110 = function() {
	this.initialize(img.Preloader_big_noBG_00110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00111 = function() {
	this.initialize(img.Preloader_big_noBG_00111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00112 = function() {
	this.initialize(img.Preloader_big_noBG_00112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00113 = function() {
	this.initialize(img.Preloader_big_noBG_00113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00114 = function() {
	this.initialize(img.Preloader_big_noBG_00114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00115 = function() {
	this.initialize(img.Preloader_big_noBG_00115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00116 = function() {
	this.initialize(img.Preloader_big_noBG_00116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00117 = function() {
	this.initialize(img.Preloader_big_noBG_00117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00118 = function() {
	this.initialize(img.Preloader_big_noBG_00118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00119 = function() {
	this.initialize(img.Preloader_big_noBG_00119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00120 = function() {
	this.initialize(img.Preloader_big_noBG_00120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00121 = function() {
	this.initialize(img.Preloader_big_noBG_00121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00122 = function() {
	this.initialize(img.Preloader_big_noBG_00122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00123 = function() {
	this.initialize(img.Preloader_big_noBG_00123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00124 = function() {
	this.initialize(img.Preloader_big_noBG_00124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00125 = function() {
	this.initialize(img.Preloader_big_noBG_00125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00126 = function() {
	this.initialize(img.Preloader_big_noBG_00126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00127 = function() {
	this.initialize(img.Preloader_big_noBG_00127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00128 = function() {
	this.initialize(img.Preloader_big_noBG_00128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00129 = function() {
	this.initialize(img.Preloader_big_noBG_00129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00130 = function() {
	this.initialize(img.Preloader_big_noBG_00130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00131 = function() {
	this.initialize(img.Preloader_big_noBG_00131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00132 = function() {
	this.initialize(img.Preloader_big_noBG_00132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00133 = function() {
	this.initialize(img.Preloader_big_noBG_00133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00134 = function() {
	this.initialize(img.Preloader_big_noBG_00134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00135 = function() {
	this.initialize(img.Preloader_big_noBG_00135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00136 = function() {
	this.initialize(img.Preloader_big_noBG_00136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00137 = function() {
	this.initialize(img.Preloader_big_noBG_00137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00138 = function() {
	this.initialize(img.Preloader_big_noBG_00138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00139 = function() {
	this.initialize(img.Preloader_big_noBG_00139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00140 = function() {
	this.initialize(img.Preloader_big_noBG_00140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00141 = function() {
	this.initialize(img.Preloader_big_noBG_00141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00142 = function() {
	this.initialize(img.Preloader_big_noBG_00142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00143 = function() {
	this.initialize(img.Preloader_big_noBG_00143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00144 = function() {
	this.initialize(img.Preloader_big_noBG_00144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00145 = function() {
	this.initialize(img.Preloader_big_noBG_00145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00146 = function() {
	this.initialize(img.Preloader_big_noBG_00146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00147 = function() {
	this.initialize(img.Preloader_big_noBG_00147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00148 = function() {
	this.initialize(img.Preloader_big_noBG_00148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00149 = function() {
	this.initialize(img.Preloader_big_noBG_00149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00150 = function() {
	this.initialize(img.Preloader_big_noBG_00150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00151 = function() {
	this.initialize(img.Preloader_big_noBG_00151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00152 = function() {
	this.initialize(img.Preloader_big_noBG_00152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00153 = function() {
	this.initialize(img.Preloader_big_noBG_00153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00154 = function() {
	this.initialize(img.Preloader_big_noBG_00154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00155 = function() {
	this.initialize(img.Preloader_big_noBG_00155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00156 = function() {
	this.initialize(img.Preloader_big_noBG_00156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00157 = function() {
	this.initialize(img.Preloader_big_noBG_00157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00158 = function() {
	this.initialize(img.Preloader_big_noBG_00158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00159 = function() {
	this.initialize(img.Preloader_big_noBG_00159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00160 = function() {
	this.initialize(img.Preloader_big_noBG_00160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00161 = function() {
	this.initialize(img.Preloader_big_noBG_00161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00162 = function() {
	this.initialize(img.Preloader_big_noBG_00162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00163 = function() {
	this.initialize(img.Preloader_big_noBG_00163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00164 = function() {
	this.initialize(img.Preloader_big_noBG_00164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00165 = function() {
	this.initialize(img.Preloader_big_noBG_00165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00166 = function() {
	this.initialize(img.Preloader_big_noBG_00166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00167 = function() {
	this.initialize(img.Preloader_big_noBG_00167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00168 = function() {
	this.initialize(img.Preloader_big_noBG_00168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00169 = function() {
	this.initialize(img.Preloader_big_noBG_00169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.Preloader_big_noBG_00170 = function() {
	this.initialize(img.Preloader_big_noBG_00170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


(lib.sequence_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Preloader_big_noBG_00001();

	this.instance_1 = new lib.Preloader_big_noBG_00002();

	this.instance_2 = new lib.Preloader_big_noBG_00003();

	this.instance_3 = new lib.Preloader_big_noBG_00004();

	this.instance_4 = new lib.Preloader_big_noBG_00005();

	this.instance_5 = new lib.Preloader_big_noBG_00006();

	this.instance_6 = new lib.Preloader_big_noBG_00007();

	this.instance_7 = new lib.Preloader_big_noBG_00008();

	this.instance_8 = new lib.Preloader_big_noBG_00009();

	this.instance_9 = new lib.Preloader_big_noBG_00010();

	this.instance_10 = new lib.Preloader_big_noBG_00011();

	this.instance_11 = new lib.Preloader_big_noBG_00012();

	this.instance_12 = new lib.Preloader_big_noBG_00013();

	this.instance_13 = new lib.Preloader_big_noBG_00014();

	this.instance_14 = new lib.Preloader_big_noBG_00015();

	this.instance_15 = new lib.Preloader_big_noBG_00016();

	this.instance_16 = new lib.Preloader_big_noBG_00017();

	this.instance_17 = new lib.Preloader_big_noBG_00018();

	this.instance_18 = new lib.Preloader_big_noBG_00019();

	this.instance_19 = new lib.Preloader_big_noBG_00020();

	this.instance_20 = new lib.Preloader_big_noBG_00021();

	this.instance_21 = new lib.Preloader_big_noBG_00022();

	this.instance_22 = new lib.Preloader_big_noBG_00023();

	this.instance_23 = new lib.Preloader_big_noBG_00024();

	this.instance_24 = new lib.Preloader_big_noBG_00025();

	this.instance_25 = new lib.Preloader_big_noBG_00026();

	this.instance_26 = new lib.Preloader_big_noBG_00027();

	this.instance_27 = new lib.Preloader_big_noBG_00028();

	this.instance_28 = new lib.Preloader_big_noBG_00029();

	this.instance_29 = new lib.Preloader_big_noBG_00030();

	this.instance_30 = new lib.Preloader_big_noBG_00031();

	this.instance_31 = new lib.Preloader_big_noBG_00032();

	this.instance_32 = new lib.Preloader_big_noBG_00033();

	this.instance_33 = new lib.Preloader_big_noBG_00034();

	this.instance_34 = new lib.Preloader_big_noBG_00035();

	this.instance_35 = new lib.Preloader_big_noBG_00036();

	this.instance_36 = new lib.Preloader_big_noBG_00037();

	this.instance_37 = new lib.Preloader_big_noBG_00038();

	this.instance_38 = new lib.Preloader_big_noBG_00039();

	this.instance_39 = new lib.Preloader_big_noBG_00040();

	this.instance_40 = new lib.Preloader_big_noBG_00041();

	this.instance_41 = new lib.Preloader_big_noBG_00042();

	this.instance_42 = new lib.Preloader_big_noBG_00043();

	this.instance_43 = new lib.Preloader_big_noBG_00044();

	this.instance_44 = new lib.Preloader_big_noBG_00045();

	this.instance_45 = new lib.Preloader_big_noBG_00046();

	this.instance_46 = new lib.Preloader_big_noBG_00047();

	this.instance_47 = new lib.Preloader_big_noBG_00048();

	this.instance_48 = new lib.Preloader_big_noBG_00049();

	this.instance_49 = new lib.Preloader_big_noBG_00050();

	this.instance_50 = new lib.Preloader_big_noBG_00051();

	this.instance_51 = new lib.Preloader_big_noBG_00052();

	this.instance_52 = new lib.Preloader_big_noBG_00053();

	this.instance_53 = new lib.Preloader_big_noBG_00054();

	this.instance_54 = new lib.Preloader_big_noBG_00055();

	this.instance_55 = new lib.Preloader_big_noBG_00056();

	this.instance_56 = new lib.Preloader_big_noBG_00057();

	this.instance_57 = new lib.Preloader_big_noBG_00058();

	this.instance_58 = new lib.Preloader_big_noBG_00059();

	this.instance_59 = new lib.Preloader_big_noBG_00060();

	this.instance_60 = new lib.Preloader_big_noBG_00061();

	this.instance_61 = new lib.Preloader_big_noBG_00062();

	this.instance_62 = new lib.Preloader_big_noBG_00063();

	this.instance_63 = new lib.Preloader_big_noBG_00064();

	this.instance_64 = new lib.Preloader_big_noBG_00065();

	this.instance_65 = new lib.Preloader_big_noBG_00066();

	this.instance_66 = new lib.Preloader_big_noBG_00067();

	this.instance_67 = new lib.Preloader_big_noBG_00068();

	this.instance_68 = new lib.Preloader_big_noBG_00069();

	this.instance_69 = new lib.Preloader_big_noBG_00070();

	this.instance_70 = new lib.Preloader_big_noBG_00071();

	this.instance_71 = new lib.Preloader_big_noBG_00072();

	this.instance_72 = new lib.Preloader_big_noBG_00073();

	this.instance_73 = new lib.Preloader_big_noBG_00074();

	this.instance_74 = new lib.Preloader_big_noBG_00075();

	this.instance_75 = new lib.Preloader_big_noBG_00076();

	this.instance_76 = new lib.Preloader_big_noBG_00077();

	this.instance_77 = new lib.Preloader_big_noBG_00078();

	this.instance_78 = new lib.Preloader_big_noBG_00079();

	this.instance_79 = new lib.Preloader_big_noBG_00080();

	this.instance_80 = new lib.Preloader_big_noBG_00081();

	this.instance_81 = new lib.Preloader_big_noBG_00082();

	this.instance_82 = new lib.Preloader_big_noBG_00083();

	this.instance_83 = new lib.Preloader_big_noBG_00084();

	this.instance_84 = new lib.Preloader_big_noBG_00085();

	this.instance_85 = new lib.Preloader_big_noBG_00086();

	this.instance_86 = new lib.Preloader_big_noBG_00087();

	this.instance_87 = new lib.Preloader_big_noBG_00088();

	this.instance_88 = new lib.Preloader_big_noBG_00089();

	this.instance_89 = new lib.Preloader_big_noBG_00090();

	this.instance_90 = new lib.Preloader_big_noBG_00091();

	this.instance_91 = new lib.Preloader_big_noBG_00092();

	this.instance_92 = new lib.Preloader_big_noBG_00093();

	this.instance_93 = new lib.Preloader_big_noBG_00094();

	this.instance_94 = new lib.Preloader_big_noBG_00095();

	this.instance_95 = new lib.Preloader_big_noBG_00096();

	this.instance_96 = new lib.Preloader_big_noBG_00097();

	this.instance_97 = new lib.Preloader_big_noBG_00098();

	this.instance_98 = new lib.Preloader_big_noBG_00099();

	this.instance_99 = new lib.Preloader_big_noBG_00100();

	this.instance_100 = new lib.Preloader_big_noBG_00101();

	this.instance_101 = new lib.Preloader_big_noBG_00102();

	this.instance_102 = new lib.Preloader_big_noBG_00103();

	this.instance_103 = new lib.Preloader_big_noBG_00104();

	this.instance_104 = new lib.Preloader_big_noBG_00105();

	this.instance_105 = new lib.Preloader_big_noBG_00106();

	this.instance_106 = new lib.Preloader_big_noBG_00107();

	this.instance_107 = new lib.Preloader_big_noBG_00108();

	this.instance_108 = new lib.Preloader_big_noBG_00109();

	this.instance_109 = new lib.Preloader_big_noBG_00110();

	this.instance_110 = new lib.Preloader_big_noBG_00111();

	this.instance_111 = new lib.Preloader_big_noBG_00112();

	this.instance_112 = new lib.Preloader_big_noBG_00113();

	this.instance_113 = new lib.Preloader_big_noBG_00114();

	this.instance_114 = new lib.Preloader_big_noBG_00115();

	this.instance_115 = new lib.Preloader_big_noBG_00116();

	this.instance_116 = new lib.Preloader_big_noBG_00117();

	this.instance_117 = new lib.Preloader_big_noBG_00118();

	this.instance_118 = new lib.Preloader_big_noBG_00119();

	this.instance_119 = new lib.Preloader_big_noBG_00120();

	this.instance_120 = new lib.Preloader_big_noBG_00121();

	this.instance_121 = new lib.Preloader_big_noBG_00122();

	this.instance_122 = new lib.Preloader_big_noBG_00123();

	this.instance_123 = new lib.Preloader_big_noBG_00124();

	this.instance_124 = new lib.Preloader_big_noBG_00125();

	this.instance_125 = new lib.Preloader_big_noBG_00126();

	this.instance_126 = new lib.Preloader_big_noBG_00127();

	this.instance_127 = new lib.Preloader_big_noBG_00128();

	this.instance_128 = new lib.Preloader_big_noBG_00129();

	this.instance_129 = new lib.Preloader_big_noBG_00130();

	this.instance_130 = new lib.Preloader_big_noBG_00131();

	this.instance_131 = new lib.Preloader_big_noBG_00132();

	this.instance_132 = new lib.Preloader_big_noBG_00133();

	this.instance_133 = new lib.Preloader_big_noBG_00134();

	this.instance_134 = new lib.Preloader_big_noBG_00135();

	this.instance_135 = new lib.Preloader_big_noBG_00136();

	this.instance_136 = new lib.Preloader_big_noBG_00137();

	this.instance_137 = new lib.Preloader_big_noBG_00138();

	this.instance_138 = new lib.Preloader_big_noBG_00139();

	this.instance_139 = new lib.Preloader_big_noBG_00140();

	this.instance_140 = new lib.Preloader_big_noBG_00141();

	this.instance_141 = new lib.Preloader_big_noBG_00142();

	this.instance_142 = new lib.Preloader_big_noBG_00143();

	this.instance_143 = new lib.Preloader_big_noBG_00144();

	this.instance_144 = new lib.Preloader_big_noBG_00145();

	this.instance_145 = new lib.Preloader_big_noBG_00146();

	this.instance_146 = new lib.Preloader_big_noBG_00147();

	this.instance_147 = new lib.Preloader_big_noBG_00148();

	this.instance_148 = new lib.Preloader_big_noBG_00149();

	this.instance_149 = new lib.Preloader_big_noBG_00150();

	this.instance_150 = new lib.Preloader_big_noBG_00151();

	this.instance_151 = new lib.Preloader_big_noBG_00152();

	this.instance_152 = new lib.Preloader_big_noBG_00153();

	this.instance_153 = new lib.Preloader_big_noBG_00154();

	this.instance_154 = new lib.Preloader_big_noBG_00155();

	this.instance_155 = new lib.Preloader_big_noBG_00156();

	this.instance_156 = new lib.Preloader_big_noBG_00157();

	this.instance_157 = new lib.Preloader_big_noBG_00158();

	this.instance_158 = new lib.Preloader_big_noBG_00159();

	this.instance_159 = new lib.Preloader_big_noBG_00160();

	this.instance_160 = new lib.Preloader_big_noBG_00161();

	this.instance_161 = new lib.Preloader_big_noBG_00162();

	this.instance_162 = new lib.Preloader_big_noBG_00163();

	this.instance_163 = new lib.Preloader_big_noBG_00164();

	this.instance_164 = new lib.Preloader_big_noBG_00165();

	this.instance_165 = new lib.Preloader_big_noBG_00166();

	this.instance_166 = new lib.Preloader_big_noBG_00167();

	this.instance_167 = new lib.Preloader_big_noBG_00168();

	this.instance_168 = new lib.Preloader_big_noBG_00169();

	this.instance_169 = new lib.Preloader_big_noBG_00170();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,220);


// stage content:
(lib.preloader = function() {
	this.initialize();

	// Слой 1
	this.cont = new lib.sequence_();
	this.cont.setTransform(111.5,91,1,1,0,0,0,111.5,91);

	this.addChild(this.cont);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(250,110,500,220);

})(libcc = libcc||{}, imagescc = imagescc||{}, createjscc = createjscc||{}, ss = ss||{});
var libcc, imagescc, createjscc, ss;
