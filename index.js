(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[79,252,71,48],[0,252,77,48],[406,116,67,112],[302,116,102,142],[406,230,89,55],[0,0,300,250],[302,0,183,114]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.seventeenberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.seventeengravy = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.seventeengreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.seventeenham = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.seventeenpie = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.seventeentable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.seventeenturkey = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whatsinour = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBfQgGgGAAgIQAAgKAGgFQAGgHAJAAQAIAAAGAHQAGAFAAAKQAAAIgGAGQgGAHgIAAQgJAAgGgHgAgJAkQgDgEAAgKQAAgKADgJQACgIAFgJIAGgLQAPgXAAgOQAAgLgGgGQgGgGgIAAQgJAAgFAFQgGAFgCAKIgBABQgFAVgLABQgHgBgDgEQgEgFAAgHQAAgSAQgMQARgMAXAAQAYAAAOAMQAPAMAAATQAAAMgFAIQgFAJgNAMIgEADQgOAMgDALQgCAFAAAIIgBAJIgDAIQgCACgDgBQgGAAgDgEg");
	this.shape.setTransform(-26.4,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApBZQgCgCAAgEIhfAAQgIAAgCgBQgCgBAAgEQAAgHASgQIARgQQAjgjAJgOQAJgPAAgOQAAgNgHgHQgHgIgLAAQgIAAgIADQgHAEgIAHIgGAGQgHAJgFAAQgEAAgCgDQgCgCAAgDQAAgEACgFQACgFAFgEQALgMAPgHQAPgGAPAAQAZAAAQANQAPANAAAVQAAAMgHAMQgGANgOANIgYAUIgZAYIgBACIAAABIABABIADAAIAqAAIAMgBQADgBADgDIAFgHQAFgKAGAAQADAAACACQACADAAADIgCAOIgFARQgEALgEAEQgEAEgEAAQgEAAgBgCg");
	this.shape_1.setTransform(-41,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABXQgeAAgHgBQgHgCAAgGQAAgHAMgCIALgCIAEgDIABgGIABgTIAAhAIAAgKIAAgHQABgKgCgDQgCgDgFAAIgGABIgHAAIgGgBQAAgBgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAgEAEgDQAFgDAJgEIAYgHQALgCAGAAQAGAAADACQADACAAAEQgBAEgFAEIgCABQgCACAAALIgBA1IABAkIAAAZIABAGIAFADIALACQALADAAAFQAAAGgHADQgGABgcAAg");
	this.shape_2.setTransform(-55.8,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBEQgGgCAAgGQAAgFAGgCIAEgCQADgCACgEQABgFAAgLIAAgJIAAgKIAAgJQAAgYgBgIQgBgIgDgBIgGgDQgJgCAAgFQAAgDADgCIAIgFIATgGIAMgDQAHAAACATIAAADIABABQAHgMAHgFQAIgHAIABQAJgBAGAHQAGAFAAAJQAAAKgFAGQgEAGgIAAIgHgCIgFgEIgEgGQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAgBAAQgJAAgEANQgDANAAApQAAAMABAGQACAGADABIAGADQAIACAAAGQAAAFgIACQgHADgSAAQgVAAgHgDg");
	this.shape_3.setTransform(-76.1,35.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxAzQgUgUAAgeQAAgeAVgVQAUgVAeAAQAeAAATAUQATATAAAeQAAAfgVAVQgUAWgdAAQgeAAgTgVgAgZgoQgJALAAASQAAAbAMASQALASAQAAQANAAAJgLQAIgLAAgTQAAgagMgSQgLgSgQAAQgNAAgIALg");
	this.shape_4.setTransform(-89.3,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgmBjQgHgCAAgGQAAgFAHgCIADgCQAEgBABgFIABgQIAAgNIAAhBIgPAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgCgCAAgEIAAgCQAAgEACgCQAAAAABAAQAAAAABgBQAAAAABAAQABAAAAAAIAPAAIgCgLIAAgJQAAgWAMgLQANgLAWAAQAPgBAKAIQAKAGAAAMQAAAGgEADQgDADgHABQgEgBgEgBQgDgCgDgEIgCgFQgFgKgIAAQgFAAgDAEQgDADAAAFIADAQQADALAAAKIAUAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAQACABAAAFIAAACQAAAEgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgUAAIAABFQAAASABAFQABAFADACIAFACQAIADAAAFQAAAGgGACQgHABgTAAQgUAAgHgBg");
	this.shape_5.setTransform(-99.8,32.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBSQgHgCgEgEQgFgFgCgHQgCgIAAgVIAAhIIgNAAIgEgBIgBgEIAAgDQAAgFAOgMIAGgFIAGgEQAOgNAFAAIADABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAZIAfAAQADAAABACQABABAAAEIAAADQAAAEgBABQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgdAAIgCABIgBADIAABDQAAASAEAEQACAFAJAAIAKgCIAKgDQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAHgMAIQgMAHgOAAQgIAAgHgDg");
	this.shape_6.setTransform(54.3,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBHIgOgCIgEACIgFABIgCgBIgDgBQgFgEgDgLQgEgLgBgLQAAgEADgDQACgDADAAQAHAAAHALIAEAJQAFAFAHADQAHADAHAAQAJAAAGgEQAFgFAAgHQAAgMgWgLIgIgEQgVgLgIgIQgHgJAAgNQgBgSANgLQAMgLAUAAIAJAAIAJACIAHgCIAEgBQAHAAAHALQAGAKAAAMQAAAFgCADQgCADgEAAQgEAAgCgDIgIgJQgFgJgFgDQgGgDgIAAQgHAAgFAEQgEAFgBAHQAAAGAGAFQAFAFAQAIIACABQAlASABAWQAAATgPANQgOANgXAAg");
	this.shape_7.setTransform(43.4,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYBBIgHgIIgGADQgQAMgRAAQgUAAgNgMQgMgLAAgTQAAgWAQgMQAQgMAdAAQAGAAADACQAEACAAAFQAAAIgJAAQgOAAgIAGQgIAHAAALQAAALAHAHQAHAGAMAAQANAAAGgGQAFgFAAgPIAAgzQAAgMgFgHQgFgGgJAAQgHAAgGADQgFADgGAGIgDADQgIALgJAAQgGAAgDgEQgDgDAAgGQAAgNAQgJQAQgJAZAAQAOAAALAEQALAEAGAIQAEAFACAJQABAIAAAUIAAArQAAAIACAEQABAEADAAIAEACQAJACAAAFQAAAGgJAGQgKAFgMAAQgGAAgHgHg");
	this.shape_8.setTransform(30.4,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsA0QgTgUAAgeQgBgfAVgVQAUgVAeAAQAbAAAPAQQAPAPAAAZQAAAJgCADQgCACgLAAIg0AAQgEAAgCgCQgDgCAAgEQAAgEADgCQACgCAEAAIAcAAIAHgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAAUQAAAUALAQQALAPAQAAQAKAAAIgCQAGgCAHgFIAFgDQAHgGAEAAQADAAACACQACACAAADQAAADgDAFQgEAFgGAEQgMAKgLAEQgLAFgNAAQgcAAgUgUg");
	this.shape_9.setTransform(15.6,2.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFBiQgIgCAAgHQAAgFAHgDQAIgCABgCQACgDABgVIABg1IgBgyQgBgVgCgDIgIgFQgIgDAAgFQABgGAGgCQAGgCAXAAIBUAAIANgBIAIgCIADABIADADQACAFADAJQACAKAAAGQAAAGgCAEQgCADgEAAQgFAAgGgKIgDgGQgDgEgHgCQgGgDgJAAIgTAAQgMAAgHACQgHABgCADQgCADgCAJIgBAbIAAALQAAAGABACQACABADAAIAWAAQALAAAEgDQAFgDABgIIABgDQACgOAHAAQAGAAACAHQACAIAAAaQAAAZgCAIQgCAHgGAAQgHAAgCgOIgBgDQgBgIgFgDQgEgDgLAAIgVAAQgEAAgCACQgBACAAAJIAAAKIABAnQABAIADACIAFADQAJADAAAGQAAAGgHACQgIADgWAAQgVAAgIgDg");
	this.shape_10.setTransform(0.3,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgsA0QgTgUAAgeQAAgfATgVQAVgVAeAAQAbAAAPAQQAPAPAAAZQABAJgDADQgDACgKAAIgzAAQgFAAgCgCQgDgCAAgEQAAgEADgCQACgCAFAAIAbAAIAHgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAAUQAAAUALAQQALAPAQAAQAKAAAHgCQAIgCAGgFIAFgDQAHgGAEAAQADAAACACQACACAAADQAAADgDAFQgEAFgGAEQgMAKgLAEQgLAFgNAAQgcAAgUgUg");
	this.shape_11.setTransform(-23,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOA6QgIgOgTgsIgIgVQgKgagGgDIgFgCQgHgDAAgFQAAgFAHgDQAGgCAXAAQASAAAHACQAHADAAAFIgBAEIgCADIgFACQgGACAAADIAEALIAKAbIAKAaQAEAGACAAQACAAACgEIAGgMIAPgiQAFgNAAgFIgCgFIgCgDIgFgBQgFgDAAgEQAAgFAFgDQAHgCARAAQAOAAAGACQAGADAAAFQAAAFgHADIgFABQgHADgLAbIgEAJIgFAMQgfBHgIAAQgHAAgHgNg");
	this.shape_12.setTransform(-37.3,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYBiQgGgCAAgGQgBgFAHgDIAEgBQAEgCABgFIABgPIAAgJIAAgLIAAgOQAAgWgBgFQgBgHgDgBIgHgDQgHgCgBgFQAAgDADgCQACgDAHgCIAUgHIANgDQAEAAACADQACADgBAGIAAAIIAAAGIgBAiIAAABIAAAiIABASQABAGAEABIAEADQAIACgBAFQABAGgIACQgGACgSAAQgUAAgHgCgAgRhFQgFgEAAgIQAAgHAGgGQAHgFAJAAQAIAAAGAFQAGAFAAAHQAAAIgGAFQgHAFgIAAQgJAAgHgFg");
	this.shape_13.setTransform(-48.4,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGBSQgIgCgFgEQgEgFgCgHQgCgIAAgVIAAhIIgNAAIgEgBIgBgEIAAgDQAAgFAOgMIAGgFIAFgEQAPgNAFAAIADABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAAZIAfAAQADAAABACQABABAAAEIAAADQABAEgCABQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAAAAAIgdAAIgCABIgBADIAABDQAAASADAEQADAFAJAAIALgCIAJgDQADAAACACQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAHgMAIQgLAHgQAAQgHAAgGgDg");
	this.shape_14.setTransform(-57,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBHIgPgCIgEACIgFABIgCgBIgDgBQgEgEgEgLQgFgLAAgLQABgEACgDQACgDADAAQAHAAAHALIAEAJQAFAFAHADQAHADAHAAQAJAAAGgEQAFgFAAgHQAAgMgWgLIgIgEQgVgLgIgIQgHgJAAgNQAAgSAMgLQAMgLAUAAIAJAAIAKACIAGgCIAEgBQAHAAAHALQAGAKAAAMQAAAFgCADQgDADgEAAQgDAAgCgDIgHgJQgGgJgFgDQgGgDgIAAQgGAAgFAEQgGAFAAAHQABAGAFAFQAEAFARAIIABABQAnASAAAWQAAATgPANQgPANgWAAg");
	this.shape_15.setTransform(-68,2.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA0QgUgUAAgeQABgfATgVQAVgVAeAAQAbAAAPAQQAPAPABAZQAAAJgDADQgCACgKAAIg1AAQgEAAgDgCQgCgCAAgEQAAgEACgCQADgCAEAAIAcAAIAHgBQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgNgJgJQgJgJgMAAQgQAAgIAOQgIAPAAAUQAAAUALAQQALAPARAAQAJAAAHgCQAIgCAGgFIAFgDQAHgGAEAAQADAAACACQACACAAADQAAADgEAFQgDAFgGAEQgMAKgLAEQgLAFgNAAQgdAAgTgUg");
	this.shape_16.setTransform(-81.1,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhFBiQgHgCAAgHQgBgFAIgDQAHgCACgCQACgDABgVIAAg1IAAgyQgCgVgBgDIgJgFQgHgDAAgFQAAgGAGgCQAGgCAYAAIBTAAIAOgBIAGgCIAEABIACADQADAFADAJQACAKAAAGQAAAGgBAEQgDADgEAAQgFAAgFgKIgFgGQgDgEgGgCQgGgDgJAAIgTAAQgMAAgHACQgHABgDADQgCADgBAJIAAAbIAAALQAAAGAAACQABABAFAAIAVAAQALAAAFgDQAEgDABgIIAAgDQADgOAHAAQAFAAADAHQACAIAAAaQAAAZgCAIQgCAHgGAAQgHAAgDgOIAAgDQgBgIgEgDQgFgDgLAAIgVAAQgEAAgCACQAAACAAAJIAAAKIAAAnQABAIACACIAGADQAJADAAAGQAAAGgIACQgHADgVAAQgWAAgIgDg");
	this.shape_17.setTransform(-96.4,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpBEQgGgCAAgGQAAgFAGgCIAEgCQADgCACgFQABgEAAgKIAAgJIAAgMIAAgIQAAgYgBgIQgBgIgDgBIgGgCQgJgDAAgFQAAgDADgDIAIgEIATgGIAMgCQAHAAACASIAAADIABAAQAHgKAHgHQAIgFAIAAQAJAAAGAFQAGAGAAAKQAAAKgFAFQgEAGgIgBIgHgBIgFgEIgEgGQAAAAAAgBQgBgBAAAAQgBgBAAAAQAAAAgBAAQgJAAgEANQgDANAAApQAAAMABAGQACAGADABIAGACQAIADAAAFQAAAGgIACQgHADgSgBQgVABgHgDg");
	this.shape_18.setTransform(63.8,-29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAeBGQgCgCAAgFIAAgKIAAAAIgBAAQgCAAgDADIgCACQgGAHgJADQgHADgKAAQgKAAgJgEQgJgDgHgIQgGgHgDgLQgCgMAAgcIAAgJIAAgKIAAgDQAAgMgCgDQgBgDgFgCIgGgBQgHgCAAgFQAAgEACgCQADgCAKgEIASgFIAPgCQAEAAABADQACADAAAGIAAAFIgCA0QAAAbAGAKQAGALAOAAQAPAAAHgOQAGgOAAggIAAgLQAAgKgBgEQgCgDgEgCIgGgBQgIgCAAgFQAAgEADgCQADgCAJgEIATgFIAOgCQAEAAACADQACADAAAGIgBAIIgBA3IAAAYIABAJQABAFAHADIACABQAIADAAAEQAAADgCADIgJAEIgTAGQgKADgFAAQgEAAgBgCg");
	this.shape_19.setTransform(49.9,-29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeBiQgPgFgNgKQgUgOgKgWQgLgWAAgbQAAgsAcgcQAbgcAsAAQASABAPAFQAQAFAMAKQATAPAKAWQAKAXAAAZQAAARgFAPQgFAPgIANQgOASgVAKQgVAKgZAAQgPAAgQgEgAgtg/QgPASAAAfQAAArATAbQASAbAcAAQAZAAAPgSQAQgUAAgfQAAgqgTgbQgUgcgbAAQgZAAgPAUg");
	this.shape_20.setTransform(31,-32.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhDBEQgHgCAAgGQAAgFAHgDIAEgBQADgCACgFIABgOIAAgJIAAgMIAAgNQAAgVgBgHQgBgHgDgBIgHgCQgIgDAAgFQAAgDADgCQACgDAGgCIAUgGIAOgDQAEAAACADQABACAAAEIAAAJIABACIAAAAIABAAIABgBIADgDIADgDQAPgNAQAAQAKgBAJAFQAJAEAHAHQAGAIADAKQACALAAAWIAAARIAAAJIAAAJIABANQACAEADACIAEABQAHADAAAFQAAAFgHADQgGACgVAAQgTAAgHgCQgHgCAAgGQAAgEAHgDIAFgDQAEgBABgGQABgGAAgPQAAgrgFgLQgGgLgOAAQgHAAgGAEQgHAFgEAHQgDAHgBAKQgBAKAAAbQAAAOABADQABAFADABIAFADQAHADAAAEQAAAGgHACQgGADgSgBQgVABgHgDg");
	this.shape_21.setTransform(4.3,-29.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBiQgIgCABgGQAAgFAGgDIAEgBQAEgCABgFIABgPIAAgJIAAgLIAAgOQAAgWgBgFQgBgHgDgBIgHgDQgHgCgBgFQAAgDADgCQACgDAHgCIAUgHIAOgDQAEAAABADQABADAAAGIAAAIIAAAGIgBAiIAAABIAAAiIABASQABAGAEABIAEADQAIACgBAFQABAGgIACQgGACgSAAQgUAAgGgCgAgRhFQgFgEAAgIQAAgHAGgGQAHgFAJAAQAIAAAGAFQAGAFAAAHQAAAIgGAFQgHAFgJAAQgJAAgGgFg");
	this.shape_22.setTransform(-7.8,-32.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKBHIgOgCIgEACIgEABIgDgBIgDgBQgFgEgEgLQgDgLAAgLQAAgEACgDQACgDAEAAQAGAAAGALIAGAJQAEAFAHADQAHADAHAAQAKAAAEgEQAGgFAAgHQAAgMgWgLIgIgEQgWgLgHgIQgIgJAAgNQAAgSANgLQAMgLAUAAIAJAAIAJACIAHgCIAFgBQAGAAAGALQAHAKAAAMQAAAFgCADQgCADgEAAQgDAAgEgDIgHgJQgFgJgGgDQgFgDgHAAQgHAAgGAEQgEAFAAAHQgBAGAGAFQAEAFARAIIACABQAmASgBAWQAAATgOANQgOANgXAAg");
	this.shape_23.setTransform(-25.3,-29.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCAoIgJg8IAAgCIAAgDQAAgHADgDQADgEAFAAQAGAAADAEQAEADAAAHIAAAEIAAACIgKA7g");
	this.shape_24.setTransform(-33.5,-38.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGBSQgHgCgGgEQgEgFgCgHQgCgIAAgVIAAhIIgNAAIgEgBIgBgEIAAgDQAAgFAPgMIAFgFIAFgEQAOgNAGAAIADABQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABIAAAZIAeAAQAEAAACACQAAABAAAEIAAADQAAAEgBABQAAABgBAAQAAAAgBAAQAAABgBAAQgBAAgBAAIgcAAIgCABIAAADIAABDQAAASACAEQADAFAIAAIAMgCIAJgDQADAAACACQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAHgMAIQgMAHgPAAQgHAAgGgDg");
	this.shape_25.setTransform(-40.6,-31);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAYBBIgHgIIgGADQgQAMgRAAQgUAAgNgMQgMgLAAgTQAAgWAQgMQAQgMAdAAQAGAAADACQAEACAAAFQAAAIgJAAQgOAAgIAGQgIAHAAALQAAALAHAHQAHAGAMAAQANAAAGgGQAFgFAAgPIAAgzQAAgMgFgHQgFgGgJAAQgHAAgGADQgFADgGAGIgDADQgIALgJAAQgGAAgDgEQgDgDAAgGQAAgNAQgJQAQgJAZAAQAOAAALAEQALAEAGAIQAEAFACAJQABAIAAAUIAAArQAAAIACAEQABAEADAAIAEACQAJACAAAFQAAAGgJAGQgKAFgMAAQgGAAgHgHg");
	this.shape_26.setTransform(-52.7,-29.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATBiQgHgCABgFQgBgFAHgDIAFgCQADgCACgGIABgUQAAgsgGgKQgFgMgOAAQgHAAgHAFQgGAEgEAHQgDAGgBAKIgBAmIABASQABAEADACIAFACQAHADAAAFQAAAFgGACQgHADgSAAQgVAAgHgDQgHgCAAgGQAAgEAHgDIADgCQAEgCACgFQABgGAAgPIAAgXIAAgUIAAg+QgBgPgCgDQgCgCgJgCQgHgCAAgFQAAgEADgCQAEgDAMgFIANgDIANgCQAEAAACADQACACABAGIgBAGIgBA3IAAAHIAAADIADABIACgDIAGgGQAGgGAIgEQAHgDAIAAQAYAAAMAPQALAPAAAeIAAANIAAAZIAAAIQABAHABADQABADADABIADACQAIACgBAFQAAAGgGACQgHADgWAAQgRAAgHgDg");
	this.shape_27.setTransform(-68.6,-32.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATAwIgdhMQgJgYgFgMQgGgLgFgEIgHgEQgIgCAAgFQABgFAGgDQAHgCAZAAQAaAAAFACQAHADAAAFQAAAGgKADIgCAAQgCACgCACQgCACAAACQAAAFAHAUIAWA7IAKAVQADAGACABQACAAADgFIAJgUIACgGQAdhDAAgJQAAgEgCgDQgDgDgEgCIgDgCQgIgDAAgFQAAgFAFgDQAGgCAWAAQAWAAAGACQAFADABAFQgBAFgHADIgHAEQgJAGgSAuIgLAdIgbBAIgFAMQgIAWgGAAQgHAAgUg1gAg4BZIgCgDQgSgngbhFIgMgiIgIgQQgEgGgEgCIgEgCQgJgDABgFQgBgFAHgDQAGgCAaAAQAaAAAHACQAGADAAAFQAAAFgLAEIgBAAQgDACgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAAFAGARIAXA7IALAZQACAFACABQADAAADgHIAGgQQAEgJAHAAQAJAAAAAJIgDAIIgRAsIgFALQgIAWgFAAQgFAAgFgMg");
	this.shape_28.setTransform(-90.7,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsinour, new cjs.Rectangle(-106.8,-51.1,177.8,101.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68290F").s().p("AqoZMQk7iFjyjyQjxjyiFk6QiKlFAAlkQAAljCKlFQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE6CFDyDxQDyDyCFE7QCKFFAAFjQAAFkiKFFQiFE7jyDxQjxDyk7CFQlFCKlkAAQljAAlFiKg");
	this.shape.setTransform(175,175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,350,350), null);


(lib.updatedctavid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B63100").ss(2,1,1).p("AnTifIOnAAQBCAAAuAvQAwAvAABBQAABCgwAvQguAvhCAAIunAAQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAg");
	this.shape.setTransform(0,-8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B63100").s().p("AnSCgQhCAAgwgvQgugvgBhCQABhBAugvQAwgvBCAAIOmAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAg");
	this.shape_1.setTransform(0,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.updatedctavid, new cjs.Rectangle(-63.7,-25.5,127.5,34), null);


(lib.updatedctaseventeen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D63900").ss(2,1,1).p("AnTifIOnAAQBCAAAuAvQAwAvAABBQAABCgwAvQguAvhCAAIunAAQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAg");
	this.shape.setTransform(0,-9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnSCgQhCAAgwgvQgugvgBhCQABhBAugvQAwgvBCAAIOmAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAg");
	this.shape_1.setTransform(0,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.updatedctaseventeen, new cjs.Rectangle(-63.7,-26,127.5,34), null);


(lib.spiralcutham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzCTQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQABgDAKgHQALgIAGgHQATgTAIgeQAJgeAAgmQAAglgJgeQgJgegRgTQgHgHgLgIQgKgHgBgEQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAQAJAAAOAIQAOAIALANQAZAYANAfQANAggBAgQABAhgNAfQgNAggZAYQgLANgOAIQgOAIgJAAQgEAAgCgCg");
	this.shape.setTransform(76.1,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXB5QgNgEgKgIIgLAHQgFADgEAAIgGgBIgGgCIAAgDQAGgHADgOQACgPAAglIAAgmIAAglQABgfgCgLQgCgKgEgCIgIgDQgLgDAAgGQAAgDAEgDQADgDAMgFIAVgGIAQgCQAGAAADACQACADAAAGIAAAJIgCAxIAABJIABAsQAAAZAHAIQAIAJASAAQAVAAAMgSQALgSAAgfQAAgbgLgPQgLgQgUAAIgFAAIgDABQgNAAgBgMQAAgIANgFQALgFAOAAQAgAAATAWQATAWAAAkQAAAqgXAaQgYAZgoAAQgPAAgPgDg");
	this.shape_1.setTransform(60.5,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbB5QgJgDAAgIQAAgFAHgDIAJgEQADgDABgKIABgiIAAgaIAAgfIAAgNQAAgqgCgMQgBgMgEgCIgKgEQgLgDAAgGQAAgEAEgDQADgCAMgEIAWgHIARgCQAFAAACADQACADAAAIIAAANQgCA8AAA8IABA5QABAMADADIAJAFQAIADAAAHQAAAGgIADQgJACgWAAQgYAAgIgCg");
	this.shape_2.setTransform(46.6,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggASQgGAAgCgDQgCgBAAgFIACgHIADgJQACgFADgCQADgBAHAAIAIAAIAOAAIAdgBIAEAAQAFAAACABQADADAAAEQAAAJgFAIQgGAIgIAAIgHAAIgKgBIgkACIgDAAg");
	this.shape_3.setTransform(36.5,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnCAQgLAAgCgCQgCgCAAgGIAAgzIhcAAQgOAAgDgCQgDgCAAgHQgBgNAyhDIANgSIANgRQAwhEAPAAQAHAAADAFQADAEAAANIAACQIARAAQAGAAACACQABABAAAFIAAAMQAAAFgBACQgCABgGAAIgRAAIAAAzQAAAHgCABQgBACgKAAgAgSgSQgUAbgTAeIBRAAIAAhvQgWAagUAcg");
	this.shape_4.setTransform(21.2,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWCNQgNgIgMgNQgYgYgNggQgMgfAAghQAAghAMgfQANgfAYgYQAMgNANgIQAOgIAKAAQADAAACACQABAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAADgLAIQgKAIgHAHQgSATgJAeQgJAeAAAmQAAAlAJAeQAJAeASATQAHAHAKAHQALAIAAADQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQgCACgDAAQgKAAgOgIg");
	this.shape_5.setTransform(7.2,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABKBUQgHgDgBgGQAAgHAJgEIAGgCQAFgDABgIQACgIAAgUQAAgwgHgOQgHgOgSAAQgTAAgJARQgIARAAApIAAAJQAAASACAFQABAHAFABIAFACQAHADAAAGQABAHgIADQgIADgZAAQgXAAgJgCQgHgDgBgGQAAgHAJgDIAGgDQAEgCACgHIABgaQAAg1gHgNQgGgOgSAAQgJAAgIAGQgIAGgFAJQgDAHgCAOQgCAMAAAgQAAAQACAFQABAGAEACIAHADQAIADAAAHQAAAGgIADQgJACgWAAQgZAAgIgCQgJgEABgHQgBgGAJgDIAEgCQAEgBACgHQACgFAAgNIgBgLIAAgNIAAgLQAAgdgBgKQgBgJgEgCIgIgDQgJgEgBgFQAAgDAEgDIAKgGIAZgJIAQgDQAEAAADADQACADAAAGIAAAJIAAABIABACIABAAIABAAIABAAIADgDIACgCQAUgTAVAAQAIAAAHADQAHACAHAFQAFAEAHAHQAGAIABAAQADAAAEgGIAHgHQAMgJAHgEQAIgDAKAAQAUAAAPAIQAOAIAHAOQAHAPAAAxIAAAQIAAAJIAAAIQAAAKACAEQACAEAEACIAEACQAJADgBAGQAAAHgIADQgHADgaAAQgYAAgJgCg");
	this.shape_6.setTransform(-24.9,23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgHAEQgUAOgWAAQgYAAgPgOQgPgPAAgXQAAgbATgOQAUgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgQAAgKAIQgKAIAAAOQAAANAJAIQAIAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgGAHIgEAFQgKANgLAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAeAAQASAAAOAFQANAFAHAKQAFAGADAKQACALAAAYIAAA1QgBAJACAFQACAFADABIAFABQALADAAAGQAAAIgMAGQgLAHgPAAQgHAAgJgJg");
	this.shape_7.setTransform(-48.9,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlB2QgJgDAAgHQAAgHALgEIAHgDQADgCABgMIABgnIAAgXIgBgGQgCgEgIgBQgJgBgfgBIgjABQgJACgDACIgCAFIgBAMIAAAOIABAnQABAMADACIAIADQAKAEAAAHQAAAHgJADQgKADgaAAQgaAAgKgDQgJgDAAgHQAAgHAKgEIAIgDQADgDACgWQABgUAAgzIgBg+QgCgZgCgDQgBgDgJgDQgJgDAAgIQAAgGAHgDQAIgCAeAAQAdAAAIACQAIADAAAGQAAAIgKADIgIAEQgDADgBAJIgBAyQAAAHAGADQAGABAZABIANAAIAjgBQALgCADgCIACgDIAAgHIAAgHIgBgqQgBgIgDgCIgHgEQgLgDAAgIQAAgGAIgDQAIgCAdAAQAeAAAIACQAHADAAAGQAAAIgKADIgIAEQgDADgCAXQgBAWAAAsIABBBQABAaADADQABACAJADQAJAFAAAGQAAAHgJADQgKADgaAAQgbAAgJgDg");
	this.shape_8.setTransform(-70.8,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgGQgHgFgCgJQgDgJAAgZIAAhZIgPAAIgFgCIgBgEIAAgEQAAgGARgPIAIgFIAGgGQARgQAGAAIAFACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAfIAlAAQAEAAACACQABABABAFIAAAFQgBADgBACQgCADgEAAIgiAAIgDABIgBAEIAABTQAAAVAEAGQADAFALAAQAEAAAJgDIAMgCQADAAACACQADACAAADQAAAKgOAIQgOAJgTgBQgJAAgJgCg");
	this.shape_9.setTransform(66,-17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgKAEgMAAQgNAAgLgFQgKgEgIgJQgIgKgDgNQgEgOABgjIAAgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAEAAACAEQACADAAAIIAAAGIgCA/QAAAhAIANQAHANARAAQASAAAJgRQAIgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgHgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIARgDQAGAAABAEQACADAAAIIAAAJIgCBEIAAAdIABALQACAHAIADIAEABQAJADAAAGQAAAEgDACQgDADgHADIgYAIQgMADgFAAQgGAAgBgDg");
	this.shape_10.setTransform(49.8,-16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZB1QgXgIgRgQQgTgRgLgZQgKgZAAgdQABgXAGgUQAHgVANgQQARgUAYgLQAXgKAbAAIAVABIAgAHIAEgBIAMgDIAGACIAEAFQAGAJADANQADANAAAKQAAAHgCADQgDAEgFAAQgHAAgNgPIgKgMQgKgKgNgFQgOgFgQAAQgfAAgTAXQgTAWAAAnQAAAxAYAgQAYAgAkAAQAOAAAOgFQANgEAIgJIAIgJQAIgKAFAAQAEAAADAEQADAFAAAIQgBAPgEAJQgEAJgHAAIgCAAIgDAAQgPAIgQAEQgQAEgRAAQgYAAgWgIg");
	this.shape_11.setTransform(28.7,-19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggARQgGAAgCgCQgCgBAAgFIACgHIADgKQACgEADgBQADgCAHAAIAIAAIAOAAIAdgBIAEgBQAFABADACQACACAAAEQAAAJgFAIQgGAHgIAAIgHAAIgKAAIgkABIgDAAg");
	this.shape_12.setTransform(11.3,-16.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbB5QgJgDAAgIQAAgFAHgDIAJgEQADgDABgKIABgiIAAgaIAAgfIAAgNQAAgqgCgMQgBgMgEgCIgKgEQgLgDAAgGQAAgEAEgDQADgCAMgEIAWgHIARgCQAFAAACADQACADAAAIIAAANQgCA8AAA8IABA5QABAMADADIAJAFQAIADAAAHQAAAGgIADQgJACgWAAQgYAAgIgCg");
	this.shape_13.setTransform(0.5,-20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgIAEQgUAOgUAAQgZAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgLAIAAAOQABANAIAIQAJAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgHAHIgDAFQgLANgKAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGACAKQADALAAAYIAAA1QAAAJABAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgMAHgPAAQgHAAgJgJg");
	this.shape_14.setTransform(-12.6,-16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgyBTQgIgDAAgHQAAgGAIgDIAEgBQAFgDABgGQACgFAAgNIAAgLIAAgOIAAgKQAAgdgCgKQgBgJgEgCIgHgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIIAPgDQAIAAADAXIAAADIABABQAIgNAKgIQAJgHAKAAQALAAAHAHQAHAHAAAMQAAAMgFAGQgGAHgJAAIgJgBIgHgGIgDgGQgCgEgCgBQgMABgEAQQgEAQAAAxQAAAPABAIQACAHAFACIAGACQAKAEAAAGQAAAHgJACQgJADgWAAQgaAAgIgDg");
	this.shape_15.setTransform(-27.8,-16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgHQAAgGAIgDIAEgCQAFgCABgGQACgFAAgNIAAgMIAAgNIAAgRQAAgbgBgHQgCgIgDgBIgIgDQgKgEAAgFQAAgEADgDQADgDAHgDIAagIIARgDQAEAAACADQACADAAAIIAAAKIAAAHIgBAqIAAABIgBAqQAAAPABAHQACAGAEACIAGAEQAIADAAAGQAAAHgIACQgIACgWAAQgZAAgIgCgAgUhUQgHgFAAgKQAAgJAIgGQAIgIALABQAKAAAHAFQAHAHAAAJQAAAJgHAHQgIAGgLAAQgLAAgHgGg");
	this.shape_16.setTransform(-39.5,-19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_17.setTransform(-54.6,-13.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpB5QgSgEgMgHQgHgEgEgOQgFgOAAgTQAAgIADgFQADgDAGAAQAIgBAIAPIAEAHQAKAUANAIQANAIARAAQASABANgMQAMgLAAgPQAAgXgxgXIgFgCQgpgRgNgPQgOgOAAgYQAAgeAXgUQAWgTAjAAIATABIAYAGIAGgFIAGgBQAEAAADADQAEACADAHQAGAKADALQADALAAAIQAAAFgCAEQgDADgEAAQgJAAgJgMIgCgDQgKgNgLgFQgLgHgOAAQgSABgLAIQgLAJAAAPQAAANAJAKQAJAJAjAQIAIACQAeANANALQAJAJAFALQAFAMAAANQAAAigYATQgYATgqAAQgUAAgTgEg");
	this.shape_18.setTransform(-73.8,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiralcutham, new cjs.Rectangle(-85.4,-41.9,171,83.8), null);


(lib.seventeenturkey_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenturkey();
	this.instance.parent = this;
	this.instance.setTransform(-97,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenturkey_1, new cjs.Rectangle(-97,-57.5,183,114), null);


(lib.seventeenpumpkinpietransparent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenpie();
	this.instance.parent = this;
	this.instance.setTransform(-44.5,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenpumpkinpietransparent, new cjs.Rectangle(-44.5,-27.5,89,55), null);


(lib.seventeenordernow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("AARAiIgRgyIAAAAIgQAyIgOAAIgXhDIAPAAIAPAzIARgzIAOAAIAQAzIABAAIAPgzIAOAAIgWBDg");
	this.shape.setTransform(30.2,-6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgOAhQgGgCgFgFQgFgFgDgHQgDgGAAgIQAAgHADgHQADgGAFgFQAEgFAHgDQAHgCAHAAQAIAAAHACQAGADAFAFQAFAFADAGQADAHAAAHQAAAIgDAGQgDAHgFAFQgFAFgGACQgHADgIAAQgHAAgHgDgAgJgWQgEACgDADQgDAEgBAEQgCAFAAAEQAAAFACAEQABAFADADQADAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEQADgDABgFQACgEAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_1.setTransform(20.2,-6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AARAjIAAglIAAgIIgCgGIgGgFQgDgCgEAAQgIAAgFAGQgEAGAAALIAAAjIgOAAIAAg1IAAgHIgBgHIANAAIAAAFIAAAGIABAAIAEgFIAFgFIAGgCIAGgBQAHAAAFACIAIAGQADAEACAFQABAFAAAGIAAApg");
	this.shape_2.setTransform(11.6,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgSAjIAAg1IgBgHIAAgHIANAAIAAAGIAAAFIABAAQADgGAEgEIAGgCIAHgBIAFAAIAAANIgHgBQgFAAgDACIgFAFQgDADgBAEIgBAIIAAAjg");
	this.shape_3.setTransform(1.7,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgMAiQgGgDgFgFQgFgEgDgHQgDgHAAgIQAAgHADgHQADgGAFgFQAEgFAHgDQAHgCAGAAQAIAAAGACQAGADAFAEQAEAFACAGQADAHAAAIIAAACIgBACIg1AAIACAIIAEAHQAEADADABQAEACAEAAQAHAAAFgDQAFgDADgFIAJAIQgFAHgHAEIgIACIgJABQgHAAgHgCgAAUgFQABgEgCgEQgBgDgCgDQgDgDgDgBQgEgCgFAAQgDAAgEACQgEABgDADQgDADgBADQgCAEAAAEIAnAAIAAAAg");
	this.shape_4.setTransform(-5.5,-6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgPA1QgGgDgFgFQgEgFgDgHQgDgGABgIQgBgHADgHQADgFAEgFQAFgFAGgDQAHgDAHAAQAHAAAHAEQAGADADAFIABAAIAAgzIAOAAIAABtIgOAAIAAgLIAAAAQgEAGgHADQgGAEgGAAQgJAAgGgDgAgIgDIgIAFQgCADgBAFQgCAEAAAFQAAAFACAFQABAEACADQADAEAFACQAEACAFAAQAFAAAEgCQAFgCADgDQADgEABgEQACgFAAgFQAAgFgCgEQgBgFgDgDIgIgFQgEgCgFAAQgFAAgEACg");
	this.shape_5.setTransform(-14.5,-8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AgSAjIAAg1IgBgHIAAgHIANAAIAAAGIAAAFIABAAQADgGAEgEIAGgCIAHgBIAFAAIAAANIgHgBQgFAAgDACIgFAFQgDADgBAEIgBAIIAAAjg");
	this.shape_6.setTransform(-21,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgLA1IgKgDQgKgEgHgHQgHgIgEgJQgFgKAAgMQAAgLAFgKQAEgKAHgHQAHgHAKgEIAKgDIALgBQAMAAAKAEIAJAFIAIAGQAIAHADAKQAEAKAAALQAAAMgEAKQgDAJgIAIIgIAGIgJAFQgKAEgMAAIgLgBgAgPglQgHAEgFAFQgGAFgCAIQgCAHgBAIQABAIACAIQACAIAGAFQAFAGAHADQAHADAIAAQAJAAAHgDQAHgDAGgGQAFgFACgIQADgIAAgIQAAgIgDgHQgCgIgFgFQgGgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_7.setTransform(-30.2,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenordernow, new cjs.Rectangle(-38.4,-19.4,76.4,21.8), null);


(lib.seventeenham_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenham();
	this.instance.parent = this;
	this.instance.setTransform(-27,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenham_1, new cjs.Rectangle(-27,-52,102,142), null);


(lib.seventeengreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeengreens();
	this.instance.parent = this;
	this.instance.setTransform(-34,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeengreens_1, new cjs.Rectangle(-34,-43,67,112), null);


(lib.seventeengravy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeengravy();
	this.instance.parent = this;
	this.instance.setTransform(-48,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeengravy_1, new cjs.Rectangle(-48,-15,77,48), null);


(lib.seventeenberriesuse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seventeenberries();
	this.instance.parent = this;
	this.instance.setTransform(-42,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenberriesuse, new cjs.Rectangle(-42,-27,71,48), null);


(lib.roastedturkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyCTQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAgDAMgHQAKgIAHgHQASgTAJgeQAIgeABgmQAAglgKgeQgJgegRgTQgHgHgKgIQgMgHAAgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCADAAQAJAAAOAIQAOAIAMANQAYAYANAfQAMAgAAAgQAAAhgMAfQgNAggYAYQgMANgOAIQgOAIgJAAQgDAAgCgCg");
	this.shape.setTransform(149.3,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXB5QgOgEgJgIIgKAHQgGADgEAAIgGgBIgHgCIAAgDQAHgHACgOQADgPABglIAAgmIAAglQAAgfgCgLQgBgKgEgCIgJgDQgLgDAAgGQAAgDAEgDQADgDANgFIAUgGIAQgCQAHAAACACQACADAAAGIgBAJIgBAxIAABJIABAsQgBAZAJAIQAHAJASAAQAVAAAMgSQAMgSAAgfQAAgbgMgPQgLgQgUAAIgGAAIgCABQgOAAAAgMQAAgIANgFQALgFAOAAQAgAAATAWQATAWAAAkQAAAqgXAaQgZAZgnAAQgQAAgOgDg");
	this.shape_1.setTransform(133.7,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbB5QgJgDAAgIQAAgFAHgDIAJgEQADgDABgKIABgiIAAgaIAAgfIAAgNQAAgqgCgMQgBgMgEgCIgKgEQgLgDAAgGQAAgEAEgDQADgCAMgEIAWgHIARgCQAFAAACADQACADAAAIIAAANQgCA8AAA8IABA5QABAMADADIAJAFQAIADAAAHQAAAGgIADQgJACgWAAQgYAAgIgCg");
	this.shape_2.setTransform(119.8,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghARQgFAAgCgCQgCgBAAgFIABgIIAFgJQABgEADgBQADgCAGgBIAIABIAPAAIAcgBIAFgBQAFAAACADQADABAAAFQAAAJgFAIQgFAHgIAAIgIAAIgJAAIglABIgEAAg");
	this.shape_3.setTransform(109.7,19.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BcQgWgZAAgqQAAgcAMgcQAMgdAVgXQAPgRALgIQAKgJAFAAQAGAAAGAFQAHADAAAEQAAADgLAKQgLAKgGALQgLAOgHAOQgGAPgEAQQAMgLANgFQALgFAOAAQAbAAASAVQATATAAAfQAAAkgXAWQgYAWgkgBQgkABgWgagAgXAGQgKALAAASQAAAZAMARQALARAQAAQAQAAAJgLQAJgLAAgTQAAgZgLgQQgMgQgRAAQgOAAgJAKg");
	this.shape_4.setTransform(94.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABrQglAAgIgDQgJgCAAgGQAAgJAOgCQAKgBAEgCIAFgEIACgHIABgYIAAhOIAAgMIAAgJQAAgMgCgEQgCgDgGAAIgIAAIgIABQgFAAgDgCQgCgCAAgDQAAgFAFgEQAFgEAMgEQAPgGAOgDQANgDAIAAQAHAAAEADQADACAAAFQAAAGgHAEIgCACQgCACgBAOIAAA/IAAAuIABAdIABAIIAGAEIANADQAOACAAAIQAAAHgIACQgIADgiAAg");
	this.shape_5.setTransform(76.1,17.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAXCNQgOgIgLgNQgYgYgNggQgNgfgBghQABghANgfQANgfAYgYQALgNAOgIQAOgIAIAAQAFAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABADgLAIQgMAIgGAHQgSATgIAeQgKAeAAAmQAAAlAKAeQAIAeASATQAGAHAMAHQALAIgBADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgCACgFAAQgIAAgOgIg");
	this.shape_6.setTransform(61.8,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhNBvQgIgHAAgLQAAgIAGgGQAGgGAIAAIAIABIAFAEIAEAGQAFAHADAAQAIAAAJgMQAJgNAAgNQAAgOgMgbIgCgEIgag6IgQghQgDgGgJgEIgBAAQgFgCgCgDQgCgCAAgDQAAgIAIgDQAJgDAZAAQAYAAAIADQAJADAAAGIgBAGIgDADIgGADQgHACAAADIADANIAOAhIANAgQAEAIADAAQABAAAEgIIALgbIANghQADgMAAgEQAAgFgJgFQgJgGAAgEQAAgGAHgCQAIgDATAAQAUAAAHADQAHADAAAGQAAAHgJACIgHACQgKAGgKAcIgFANIgWA1QgbBGgRAVQgSAVgZAAQgMAAgIgHg");
	this.shape_7.setTransform(37,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgnAZgZQAYgaAmABQAgAAATASQATATAAAfQAAALgDADQgDADgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgFADgCQADgCAFgBIAjAAIAIgBQACgBAAgEQAAgQgLgLQgKgLgPAAQgUAAgKARQgKASAAAZQAAAZAOATQANATAVAAQAMAAAJgCQAIgEAIgFIAGgFQAJgGAEgBQAEAAACADQADACAAADQAAAFgEAFQgFAHgHAFQgOAMgOAGQgNAEgQAAQgjAAgYgXg");
	this.shape_8.setTransform(19.6,19.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA3B7IgHgBQgIgDgQgVIgHgJIgDgDQgog1gDAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAAHIAAAHIABAjQABAKACADIAKAFQAHADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgDAAgIQAAgFAIgDIAEgCQAFgDACgIQACgIAAgTIgBgVIAAgaIAAgUIgBg/QgBgPgCgDQgCgCgIgCIgFgCIgHgDIgBgFQAAgEADgDQAEgCALgEIAXgHIARgCQAFAAACADQADADAAAIIgBAgIgBAsIAAApIAAAJQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAHgDIAMgKIAQgQQAEgFAAgCQAAgCgGgDQgFgDAAgGQAAgHAHgDQAJgDAYAAQAQAAAHADQAIADAAAGQAAAIgMADQgNADgFADQgGAEgOAOIgDACIgGAHIgBADQAAADAOATIACADIAdAjQAMAOAGAEQAFADAKAEQALADAAAHQAAAHgHADQgIADgSAAg");
	this.shape_9.setTransform(2,15.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBTQgIgCAAgIQAAgGAIgCIAEgCQAFgDABgFQACgGAAgMIAAgMIAAgOIAAgKQAAgdgCgKQgBgJgEgCIgHgDQgKgDAAgGQAAgEADgDQADgCAHgDIAXgIIAPgDQAIAAADAXIAAADIABABQAIgNAKgIQAJgHAKAAQALAAAHAHQAHAHAAAMQAAAMgFAGQgGAHgJAAIgJgBIgHgGIgDgGQgCgEgCgBQgMABgEAQQgEAPAAAyQAAAQABAHQACAHAFACIAGADQAKADAAAGQAAAHgJACQgJADgWAAQgaAAgIgDg");
	this.shape_10.setTransform(-14,19.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkBVQgCgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgNAAQgNAAgKgFQgLgEgIgJQgIgKgDgNQgDgOgBgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAEAAADAEQACADAAAIIgBAGIgBA/QAAAhAGANQAHANASAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEAEgDQACgDAMgEIAXgGIASgDQAEAAACAEQADADAAAIIAAAJIgDBEIAAAdIACALQABAHAJADIACABQAKADAAAGQAAAEgCACQgDADgIADIgYAIQgLADgHAAQgEAAgDgDg");
	this.shape_11.setTransform(-30.9,19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjB3QgJgCAAgIQAAgHAJgDQAJgEACgCQACgDABgbIABhPIgBgsIgBgbQgBgFgDgBQgDgCgGAAIgIAAQgLAAgHADQgGADgFAGIgFAMIgFALIgFAFQgDACgDAAQgFAAgCgEQgCgFAAgKQAAgWAFgOQAFgNAIAAIACAAQANACAUAAIBiAAQAVAAANgCIACAAQAIAAAFANQAFAOAAAWQAAAKgCAFQgCAEgGAAIgFgCIgFgFIgFgLIgFgMQgFgGgGgDQgHgDgMAAIgHAAQgGAAgDACQgDABgBAFIgBAbIgBAsIABBPQABAbACADQACACAJAEQAJADAAAHQAAAIgKACQgJADgaAAQgZAAgKgDg");
	this.shape_12.setTransform(-51.6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhJBmQgUgXAAglQAAgpAXgYQAXgaAjAAIAMABQAFACADAEQADADAAAFQAAAJgLAAIgEAAIgFgBQgTAAgLAPQgLAOABAbQgBAcAMASQAMASAUAAQAQAAAKgKQAKgJAAgTIAAguIAAhNQAAgLgDgFQgCgFgGgCIgEgCQgLgDAAgFQAAgFAEgDQAFgDAMgFIASgFIARgCQAFAAADADQACADAAAIIAAAIIgCBnIABBHQACAPACADIAMADQAIACABAHQgBAHgYAIIgRAEIgMABQgFABgCgDQgCgDAAgFIAAgJIAAgCIgBgBIgGADIgHAGQgKAHgJAEQgKADgJAAQggAAgUgWg");
	this.shape_13.setTransform(53,-23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDAEQgDADgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgDAFABIAjAAIAIgBQACgCAAgEQAAgQgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEAAQAEABACACQADADAAACQAAAFgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_14.setTransform(33.6,-20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBlQgIgDgFgFQgGgGgDgJQgCgKAAgZIAAhZIgQAAIgFgBIgBgEIAAgEQAAgGARgOIAIgHIAGgFQARgPAGAAIAFABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAAfIAlAAQAFABABABQACACgBAFIAAADQABAFgCABQgBACgFAAIgiAAIgDACIgBAEIAABSQAAAWAEAFQADAGAKAAQAFAAAJgDIAMgDQADAAACACQADACAAAEQAAAKgOAIQgOAJgSAAQgKgBgJgCg");
	this.shape_15.setTransform(18.9,-21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBXIgSgDIgEADIgGABIgDgBIgEgCQgGgFgEgNQgFgNAAgNQAAgGADgDQADgEAEABQAIAAAHANIAHAKQAFAGAJAFQAJADAJAAQALAAAGgFQAHgGgBgJQAAgOgbgOIgKgFQgagNgJgKQgJgKAAgRQAAgVAPgOQAQgOAYAAIALABIAMACIAIgDIAEgBQAJAAAIANQAHAOAAAOQABAGgDADQgDADgFABQgDAAgEgEIgJgLQgGgLgHgDQgGgFgKAAQgIABgHAFQgFAGAAAIQAAAIAFAGQAHAFATALIACABQAvAWAAAbQAAAYgRAQQgTAPgaAAg");
	this.shape_16.setTransform(5.5,-20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgIAEQgUAOgUAAQgZAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgLAIAAAOQABANAIAIQAJAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgHAHIgDAFQgLANgKAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGACAKQADALAAAYIAAA1QAAAJABAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgMAHgPAAQgHAAgJgJg");
	this.shape_17.setTransform(-10.4,-20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag8A/QgYgYAAgmQAAglAZgZQAZgaAlAAQAkAAAXAYQAXAXAAAmQAAAmgZAZQgYAbgkAAQgkgBgYgYgAgfgxQgKANAAAXQAAAhAOAWQAOAWATAAQARAAAKgNQAKgPAAgWQAAgggOgWQgOgXgTAAQgRAAgKAOg");
	this.shape_18.setTransform(-29,-20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkBUQgQg2gMgKQgLgLgRAAQgNAAAAgLQAAgKALAAQAbAAAOgLQANgLAAgXQAAgWgOgLQgNgLgaAAQgNAAgEACQgFABgCAFIgCAPIgBAiIAABJIABAyQABAMAEACIAHAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDQgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgCQAFgDALAAIAlAAIAhgBIAbgBQAkAAAUAQQATAPAAAeQAAAWgNAQQgNAQgXAHIAAACQASADALALQAKALAIAbIAEARQAHAaAKAAIAEAAIAGAAQAEAAACACQADADAAADQAAAIgKAFQgJAFgQAAQgiAAgLgng");
	this.shape_19.setTransform(-50.1,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roastedturkey, new cjs.Rectangle(-64.5,-45.9,223.2,83.8), null);


(lib.organicturkeygravy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BtQgVgMAAgTQAAgIAFgGQAEgGAJABQAHAAAEADQAEAEACAIQAEAMALAIQAKAGAVAAQAVABAPgJQAPgJAAgNQAAgIgGgDQgFgFgKAAIgUABIgZACQgeAAgQgLQgQgJAAgOQAAgJAGgHQAFgIANgHQgKgIgFgMQgFgKAAgNQAAgbAVgTQAUgSAgAAIARACIAZAFQAHAAAHgDQAHgEALgGIAFAEIACAGQAAAHgFAHQgGAGgKAGIAGANIABAOQAAAcgUASQgUAQggAAIgSgCIgQgCIgFAGIgCAFQAAAIAIAFQAIADARAAIAYgCIAagBQAYAAAMAJQANAKAAARQAAAbgbASQgaASgoAAQgfgBgWgNgAgbhTQgJALAAARQAAARAJAKQAIALAOAAQANAAAKgLQAJgKAAgRQAAgSgJgKQgJgKgOAAQgNAAgJAKg");
	this.shape.setTransform(48.3,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBTQgHgCAAgHQgBgGAJgDIAGgDQAEgCACgHQABgHAAgTQAAg1gHgNQgGgNgSAAQgJAAgHAFQgJAFgEAJQgEAIgBAMQgCANAAAhQAAAQACAGQABAFAEACIAGADQAJADAAAGQgBAHgHACQgJADgVAAQgbAAgHgDQgJgCAAgIQAAgGAJgCIADgCQAFgDACgFQABgGAAgMIAAgMIAAgOIAAgQQAAgagBgJQgCgHgDgCIgHgDQgLgDAAgGQAAgEAEgDQACgCAIgDIAYgIIASgDQAEAAACADQACACAAAGIAAALIABABIABABIABAAIAAgBIAEgDIAEgEQARgRAVAAQAMAAAMAGQAKAFAIAIQAIAKADANQAEAMgBAbIAAAWIAAALIAAAJQAAANACAEQACAFADADIAFACQAIACAAAGQAAAHgHADQgJADgZAAQgXAAgJgDg");
	this.shape_1.setTransform(28.8,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgIQAAgFAIgDIAEgCQAFgCABgGQACgGAAgMIAAgMIAAgNIAAgRQAAgbgBgHQgCgIgDgBIgIgEQgKgDAAgGQAAgDADgDQADgDAHgDIAagIIARgDQAEgBACAEQACADAAAIIAAAKIAAAHIgBAqIAAABIgBAqQAAAPABAHQACAGAEACIAGAEQAIADAAAGQAAAHgIACQgIACgWABQgZgBgIgCgAgUhUQgHgFAAgKQAAgJAIgHQAIgGALAAQAKAAAHAFQAHAHAAAJQAAAJgHAHQgIAGgLAAQgLAAgHgGg");
	this.shape_2.setTransform(14,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguB4QgJgDAAgGQABgGAHgDIAEgBQAFgCABgGQACgGAAgNIAAgRIAAhQIgTAAQgEAAgCgCQgBgCAAgEIAAgEQAAgEACgCQACgCADAAIASAAIgBgOIgBgMQAAgZAPgOQAQgOAaAAQATAAAMAIQAMAJAAANQAAAIgEAFQgEADgJAAQgFABgEgDQgEgCgEgFIgCgGQgGgMgLAAQgGAAgDAFQgDAEAAAGIADATQADAOABAMIAYAAQAEAAACABQABACAAAFIAAAEQAAAEgBACQgCACgEAAIgYAAIAABWQAAAVABAHQABAGADACIAIADQAJADAAAGQAAAHgIACQgIADgYAAQgZAAgHgDg");
	this.shape_3.setTransform(6,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvB4QgHgDgBgGQAAgGAIgDIAFgBQAEgCABgGQACgGAAgNIAAgRIAAhQIgTAAQgEAAgBgCQgCgCAAgEIAAgEQAAgEACgCQACgCAEAAIARAAIgCgOIgBgMQAAgZAQgOQAQgOAaAAQATAAAMAIQAMAJAAANQAAAIgEAFQgFADgHAAQgGABgEgDQgEgCgDgFIgEgGQgGgMgJAAQgHAAgDAFQgEAEAAAGIAEATQADAOAAAMIAZAAQAEAAABABQACACAAAFIAAAEQAAAEgCACQgCACgDAAIgZAAIAABWQABAVABAHQABAGAEACIAGADQAKADAAAGQAAAHgIACQgJADgXAAQgYAAgJgDg");
	this.shape_4.setTransform(-3.5,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgMAAQgNAAgMgFQgLgEgHgJQgIgKgDgNQgEgOAAgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQAEgDAMgEIAWgGIASgDQAFAAACAEQABADAAAIIAAAGIgBA/QgBAhAIANQAHANARAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEAEgDQADgDAMgEIAWgGIARgDQAFAAADAEQABADAAAIIAAAJIgBBEIAAAdIABALQABAHAIADIADABQAKADAAAGQAAAEgDACQgCADgIADIgYAIQgLADgHAAQgEAAgCgDg");
	this.shape_5.setTransform(-19.8,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBlQgIgDgGgGQgGgFgCgJQgCgKgBgYIAAhZIgPAAIgFgCIgBgEIAAgEQAAgFASgQIAHgFIAGgGQARgQAHAAIAEACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAfIAmAAQADAAACACQACACAAAEIAAAFQAAADgCACQgCACgDABIgjAAIgDABIgBAEIAABSQAAAWAEAFQAEAGAKAAQAEAAAJgDIALgDQAEABACACQADACAAADQAAAJgOAJQgPAIgSAAQgJABgJgDg");
	this.shape_6.setTransform(-35.5,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpB5QgSgEgMgHQgHgEgEgOQgFgOAAgUQAAgIADgEQADgDAGAAQAIAAAIAOIAEAHQAKAUANAIQANAIARAAQASABANgLQAMgLAAgQQAAgXgxgWIgFgDQgpgQgNgQQgOgOAAgYQAAgeAXgUQAWgTAjAAIATABIAYAGIAGgFIAGgBQAEAAADACQAEADADAGQAGALADALQADALAAAIQAAAGgCADQgDADgEAAQgJAAgJgMIgCgDQgKgNgLgFQgLgHgOABQgSAAgLAIQgLAJAAAPQAAANAJAKQAJAJAjAQIAIACQAeANANALQAJAJAFALQAFALAAAOQAAAigYATQgYATgqAAQgUAAgTgEg");
	this.shape_7.setTransform(-51.3,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXB5QgNgEgKgIIgLAHQgFADgEAAIgGgBIgGgCIAAgDQAGgHADgOQACgPAAglIAAgmIAAglQABgfgCgLQgCgKgEgCIgIgDQgLgDAAgGQAAgDAEgDQADgDAMgFIAVgGIAQgCQAGAAADACQACADAAAGIAAAJIgCAxIAABJIABAsQAAAZAHAIQAIAJASAAQAVAAAMgSQALgSAAgfQAAgbgLgPQgLgQgUAAIgGAAIgCABQgNAAgBgMQAAgIANgFQALgFAOAAQAgAAATAWQATAWAAAkQAAAqgXAaQgYAZgoAAQgPAAgPgDg");
	this.shape_8.setTransform(3.8,-23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBUQgIgDAAgIQAAgFAIgDIAEgDQAFgCABgFQACgGAAgMIAAgMIAAgNIAAgKQAAgfgCgJQgBgJgEgCIgHgDQgKgDAAgGQAAgEADgCQADgEAHgDIAXgHIAPgDQAIAAADAXIAAADIABABQAIgOAKgGQAJgIAKAAQALAAAHAIQAHAGAAAMQAAALgFAIQgGAGgJAAIgJgCIgHgEIgDgHQgCgFgCABQgMAAgEAPQgEARAAAyQAAAOABAIQACAHAFACIAGADQAKACAAAIQAAAGgJADQgJACgWAAQgaAAgIgCg");
	this.shape_9.setTransform(-11.1,-20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDAEQgDADgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgDAFABIAjAAIAIgBQACgCAAgEQAAgQgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEAAQAEABACACQADADAAACQAAAFgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_10.setTransform(-26.8,-20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlB2QgJgCAAgIQAAgHALgEIAHgEQADgCABgKIABgoIAAgXIgBgGQgCgEgIgBQgJgBgfgBIgjABQgJABgDADIgCAFIgBANIAAANIABAoQABAKADACIAIAEQAKAEAAAHQAAAIgJACQgKADgaAAQgaAAgKgDQgJgCAAgIQAAgHAKgEIAIgEQADgCACgWQABgUAAgzIgBg+QgCgZgCgDQgBgDgJgDQgJgDAAgIQAAgGAHgDQAIgCAeAAQAdAAAIACQAIADAAAGQAAAHgKAFIgIADQgDADgBAJIgBAyQAAAHAGACQAGACAZAAIANAAIAjgBQALgBADgCIACgDIAAgGIAAgIIgBgqQgBgIgDgCIgHgDQgLgFAAgHQAAgGAIgDQAIgCAdAAQAeAAAIACQAHADAAAGQAAAHgKAFIgIADQgDACgCAYQgBAWAAAsIABBBQABAaADADQABACAJADQAJAFAAAGQAAAIgJACQgKADgaAAQgbAAgJgDg");
	this.shape_11.setTransform(-48.3,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.organicturkeygravy, new cjs.Rectangle(-63,-45.9,121.7,83.8), null);


(lib.organiccranberrysauce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXB4QgIgCAAgHQAAgGAIgDIAHgDQAEgCABgHQACgHAAgSQAAg2gHgNQgHgOgSABQgIAAgIAFQgIAFgEAIQgEAIgBAMQgCANAAAhQAAARACAGQABAFADACIAHADQAIADAAAGQAAAHgIACQgIADgWAAQgaAAgIgDQgIgCAAgIQAAgGAIgCIAEgCQAFgDACgHQABgHAAgSIAAgbIAAgaIgBhLQgBgTgCgEQgCgCgKgCQgKgDAAgGQAAgFAEgDQAEgDAPgGIARgFIAPgBQAGAAADADQACADAAAIIgBAHIgBBDIAAAIIABAEIACABIAEgDIAGgHQAIgJAKgDQAIgFALAAQAdAAAOATQAOASAAAmIAAAPIAAAeIAAAKQAAAIACAEQACAEADACIAFACQAIACAAAGQAAAIgIACQgIADgbAAQgWAAgIgDg");
	this.shape.setTransform(-26.4,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEAAIgDgDQgFgEgFgOQgFgNAAgNQAAgFADgEQADgDAEgBQAIAAAHAOIAHAKQAFAHAJAEQAJADAIAAQALABAHgGQAGgGAAgJQAAgOgagOIgKgFQgagNgKgJQgJgMAAgPQAAgXAPgNQAQgOAYAAIAKABIANACIAHgDIAFgBQAJAAAIANQAIANAAAPQAAAGgDADQgCADgFAAQgFAAgDgCIgJgMQgGgLgHgDQgHgEgJgBQgJAAgFAGQgHAFAAAJQAAAIAHAFQAFAHAVAKIABABQAvAWAAAcQAAAXgSAQQgRAPgcAAg");
	this.shape_1.setTransform(-43.5,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBPIgJgJIgIAEQgUAOgVAAQgYAAgPgOQgPgPAAgXQAAgbATgOQAUgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgKAIQgKAIAAAOQAAANAJAIQAJAIAPAAQAPAAAHgHQAHgHAAgSIAAg/QAAgPgGgHQgHgIgLAAQgIAAgHADQgHAEgHAHIgDAFQgLANgLAAQgGAAgEgFQgEgEAAgHQAAgQAUgLQATgLAeAAQASAAAOAFQANAFAHAKQAFAGACAKQACALAAAYIAAA1QABAJABAFQABAFAEABIAFABQALADAAAGQAAAIgMAGQgKAHgPAAQgIAAgIgJg");
	this.shape_2.setTransform(-59.4,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkBVQgCgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgNAAQgNAAgKgFQgLgEgIgJQgIgKgDgNQgDgOgBgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAFAAABAEQADADAAAIIgBAGIgCA/QABAhAGANQAIANARAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgIgCQgJgCAAgGQAAgEADgDQAEgDALgEIAXgGIASgDQAEAAACAEQACADABAIIAAAJIgDBEIAAAdIABALQACAHAJADIADABQAJADAAAGQAAAEgCACQgEADgHADIgYAIQgMADgFAAQgFAAgDgDg");
	this.shape_3.setTransform(-78.7,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBzQgIgDAAgHQAAgGAIgEIAJgFQADgEABgKIACgeIAAhmQgBgTgIgJQgKgJgSAAQgUAAgLAPQgMAPAAAbQAAAdAMAQQANASASAAIAGAAIAGgBQAIAAAAAJQgBAJgJAHQgKAGgRAAQgeAAgUgWQgTgXAAgjQAAgqAXgZQAXgaAmAAQALAAAMADQAKACAKAFIATgIIALgDIAFACIAAAFIAAAEIgBAYIAABXIAAANQAAAqABAOQACANAEAEIAIAEQAHAEAAAFQAAAIgJADQgHADgZAAQgZAAgJgDg");
	this.shape_4.setTransform(-98,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpB5QgSgEgMgHQgHgEgEgOQgFgOAAgUQAAgIADgEQADgDAGAAQAIAAAIAOIAEAHQAKAUANAIQANAIARAAQASABANgLQAMgLAAgQQAAgXgxgWIgFgDQgpgQgNgQQgOgOAAgYQAAgeAXgUQAWgTAjAAIATABIAYAGIAGgFIAGgBQAEAAADACQAEADADAGQAGALADALQADALAAAIQAAAGgCADQgDADgEAAQgJAAgJgMIgCgDQgKgNgLgFQgLgHgOABQgSAAgLAIQgLAJAAAPQAAANAJAKQAJAJAjAQIAIACQAeANANALQAJAJAFALQAFALAAAOQAAAigYATQgYATgqAAQgUAAgTgEg");
	this.shape_5.setTransform(-117.9,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBlQgIgDgHgFQgFgGgDgJQgCgKgBgZIAAhZIgPAAIgEgBIgCgEIAAgEQAAgGASgOIAGgHIAHgFQARgPAHAAIAEABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAfIAmAAQAEABABABQABACAAAFIAAADQAAAFgBABQgBACgEAAIgjAAIgDACIgBAEIAABSQAAAWAEAFQAEAGAJAAQAGAAAIgDIALgDQAEAAADACQACACAAAEQAAAKgOAIQgPAJgRAAQgKgBgIgCg");
	this.shape_6.setTransform(15.6,-21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBVQgCgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgMAAQgNAAgMgFQgLgEgHgJQgIgKgDgNQgEgOAAgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQAEgDAMgEIAWgGIASgDQAFAAACAEQABADAAAIIAAAGIgBA/QgBAhAIANQAGANASAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEAEgDQADgDALgEIAXgGIASgDQAFAAACAEQACADAAAIIAAAJIgCBEIAAAdIABALQABAHAJADIACABQAKADAAAGQAAAEgCACQgDADgIADIgYAIQgLADgHAAQgEAAgDgDg");
	this.shape_7.setTransform(-0.5,-20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBUQgHgDgBgGQAAgHAJgDIAGgDQAEgCACgHQABgIAAgSQAAg0gHgOQgGgNgSAAQgJgBgIAGQgHAFgFAKQgEAGgBANQgCANAAAhQAAARACAFQABAFAEACIAGADQAJADAAAHQgBAGgHADQgJACgWAAQgZAAgIgCQgJgDAAgIQAAgFAJgDIADgDQAFgCACgFQABgGAAgMIAAgMIAAgNIAAgRQAAgagBgJQgCgHgDgCIgIgDQgKgDAAgGQAAgDAEgDQACgEAIgDIAYgIIARgCQAFAAACACQACADAAAFIAAALIAAACIACABIABAAIAAgBIAEgEIAEgCQASgSAUAAQAMAAAMAGQAKAEAIAJQAIAKADANQAEANgBAaIAAAWIAAALIAAAKQAAALACAGQACAEADACIAFADQAIADAAAFQAAAIgHACQgJADgZAAQgXAAgJgCg");
	this.shape_8.setTransform(-20.4,-20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBUQgIgDAAgIQAAgFAIgDIAEgDQAFgCABgFQACgGAAgMIAAgMIAAgNIAAgKQAAgfgCgJQgBgJgEgCIgHgDQgKgDAAgGQAAgEADgCQADgEAHgDIAXgHIAPgDQAIAAADAXIAAADIABABQAIgOAKgGQAJgIAKAAQALAAAHAIQAHAGAAAMQAAALgFAIQgGAGgJAAIgJgCIgHgEIgDgHQgCgFgCABQgMAAgEAPQgEARAAAyQAAAOABAIQACAHAFACIAGADQAKACAAAIQAAAGgJADQgJACgWAAQgaAAgIgCg");
	this.shape_9.setTransform(-36.3,-20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDAEQgDADgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgDAFABIAjAAIAIgBQACgCAAgEQAAgQgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEAAQAEABACACQADADAAACQAAAFgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_10.setTransform(-52,-20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgFQgGgGgDgJQgCgKAAgZIAAhZIgQAAIgFgBIgBgEIAAgEQAAgGARgOIAIgHIAGgFQARgPAGAAIAFABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAfIAlAAQAFABABABQABACAAAFIAAADQAAAFgBABQgBACgFAAIgiAAIgDACIgBAEIAABSQAAAWAEAFQADAGALAAQAEAAAJgDIAMgDQADAAACACQADACAAAEQAAAKgOAIQgPAJgSAAQgJgBgJgCg");
	this.shape_11.setTransform(-66.7,-21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgFQgHgGgCgJQgDgKAAgZIAAhZIgPAAIgFgBIgBgEIAAgEQAAgGASgOIAHgHIAGgFQARgPAGAAIAFABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAfIAlAAQAEABACABQABACABAFIAAADQgBAFgBABQgCACgEAAIgiAAIgDACIgBAEIAABSQAAAWAEAFQADAGALAAQAEAAAJgDIALgDQAEAAACACQADACAAAEQAAAKgOAIQgOAJgTAAQgJgBgJgCg");
	this.shape_12.setTransform(-78.6,-21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgKAEgMAAQgNAAgLgFQgKgEgIgJQgIgKgDgNQgEgOABgjIAAgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIASgDQAEAAACAEQACADAAAIIAAAGIgCA/QAAAhAIANQAGANASAAQASAAAJgRQAIgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgHgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIARgDQAGAAABAEQACADAAAIIAAAJIgCBEIAAAdIABALQACAHAIADIAEABQAJADAAAGQAAAEgDACQgDADgHADIgYAIQgMADgFAAQgGAAgBgDg");
	this.shape_13.setTransform(-94.7,-20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMB5IgggCIgRABIgTAAQgLAAgGgDQgGgDAAgGQAAgGAJgEQAJgEABgCQADgEABgYIABhBIgBg/QgBgYgDgDQgBgDgJgEQgJgEAAgGQAAgGAFgDQAFgDAKAAIASABIATAAIAigBIAagBQAkAAAUAPQATAPAAAcQAAAXgOAOQgOAOgaAFQAiADASAPQARARAAAbQAAAggWASQgWARgoAAgAgZhhQgGACgBADQgDAEgBAQIgBAvIAABGIABAhQABAJADAEQACAFAIACQAJABANAAQAbAAAPgLQAOgMAAgWQAAgXgQgMQgQgLgfAAQgOAAAAgJQAAgNAOAAQAWABAOgKQAOgKAAgWQAAgWgNgLQgNgKgbAAg");
	this.shape_14.setTransform(-116.3,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.organiccranberrysauce, new cjs.Rectangle(-129.5,-45.9,153.2,83.8), null);


(lib.ordernowvid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAiIgRgyIAAAAIgQAyIgOAAIgXhDIAPAAIAQAzIAQgzIANAAIARAzIAAAAIAQgzIAOAAIgWBDg");
	this.shape.setTransform(30.4,-6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAhQgGgCgFgFQgFgFgDgHQgDgGAAgIQAAgHADgHQADgGAFgFQAEgFAHgDQAHgCAHAAQAIAAAHACQAGADAFAFQAFAFADAGQADAHAAAHQAAAIgDAGQgDAHgFAFQgFAFgGACQgHADgIAAQgHAAgHgDgAgJgWQgEACgDADQgDAEgBAEQgCAFAAAEQAAAFACAEQABAFADADQADAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEQADgDABgFQACgEAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_1.setTransform(20.4,-6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASAjIAAglIgBgIIgDgGIgEgFQgEgCgEAAQgHAAgGAGQgEAGAAALIAAAjIgOAAIAAg1IgBgHIAAgHIANAAIABAFIAAAGIAAAAIADgFIAGgFIAGgCIAGgBQAHAAAFACIAIAGQADAEACAFQABAFAAAGIAAApg");
	this.shape_2.setTransform(11.8,-6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAjIAAg1IgBgHIAAgHIANAAIAAAGIAAAFIABAAQADgGAEgEIAGgCIAHgBIAFAAIAAANIgHgBQgFAAgDACIgFAFQgDADgBAEIgBAIIAAAjg");
	this.shape_3.setTransform(1.9,-6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAiQgHgDgFgFQgFgEgCgHQgEgHAAgIQAAgHAEgHQACgGAFgFQAFgFAGgDQAHgCAGAAQAIAAAGACQAGADAFAEQADAFADAGQACAHABAIIAAACIgBACIg1AAIABAIIAGAHQADADADABQAEACAEAAQAHAAAFgDQAFgDADgFIAKAIQgGAHgIAEIgHACIgJABQgHAAgGgCgAAUgFQAAgEgBgEQgBgDgCgDQgDgDgEgBQgDgCgFAAQgDAAgEACQgEABgCADQgEADgBADQgCAEAAAEIAnAAIAAAAg");
	this.shape_4.setTransform(-5.3,-6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA1QgHgDgEgFQgFgFgCgHQgCgGgBgIQABgHACgHQACgFAFgFQAEgFAHgDQAGgDAIAAQAIAAAGAEQAGADAEAFIAAAAIAAgzIANAAIAABtIgMAAIAAgLIgBAAQgEAGgHADQgHAEgFAAQgJAAgGgDgAgJgDIgHAFQgCADgBAFQgCAEAAAFQAAAFACAFQABAEACADQADAEAEACQAFACAEAAQAGAAAEgCQAFgCACgDQADgEACgEQACgFAAgFQAAgFgCgEQgCgFgDgDIgHgFQgEgCgGAAQgEAAgFACg");
	this.shape_5.setTransform(-14.3,-8.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAjIAAg1IgBgHIAAgHIANAAIAAAGIAAAFIABAAQADgGAEgEIAGgCIAHgBIAFAAIAAANIgHgBQgFAAgDACIgFAFQgDADgBAEIgBAIIAAAjg");
	this.shape_6.setTransform(-20.8,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLA1IgKgDQgKgEgHgHQgHgIgEgJQgFgKABgMQgBgLAFgKQAEgKAHgHQAHgHAKgEIAKgDIALgBQAMAAAKAEIAJAFIAIAGQAIAHADAKQAFAKAAALQAAAMgFAKQgDAJgIAIIgIAGIgJAFQgKAEgMAAIgLgBgAgPglQgHAEgFAFQgFAFgDAIQgDAHAAAIQAAAIADAIQADAIAFAFQAFAGAHADQAHADAIAAQAJAAAHgDQAHgDAGgGQAEgFADgIQADgIAAgIQAAgIgDgHQgDgIgEgFQgGgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_7.setTransform(-30,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ordernowvid, new cjs.Rectangle(-38.2,-19.4,76.4,21.8), null);


(lib.mashedpotatoes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEAAIgDgDQgFgEgFgOQgFgNAAgNQAAgFADgEQADgDAEgBQAIAAAIAOIAGAKQAFAHAJAEQAIADAJAAQALABAHgGQAGgGABgJQAAgOgbgOIgKgFQgagNgKgJQgJgMAAgPQAAgXAPgNQAPgOAZAAIAKABIAMACIAIgDIAGgBQAIAAAIANQAIANgBAPQAAAGgCADQgDADgFAAQgEAAgDgCIgJgMQgGgLgHgDQgHgEgJgBQgJAAgFAGQgHAFABAJQgBAIAHAFQAFAHAVAKIACABQAuAWAAAcQAAAXgSAQQgRAPgcAAg");
	this.shape.setTransform(58.5,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgnAZgZQAYgaAmABQAgAAATASQATATAAAfQAAALgDADQgDADgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgFADgCQADgCAFgBIAjAAIAIgBQACgBAAgEQAAgQgLgLQgKgLgPAAQgUAAgKARQgKASAAAZQAAAZAOATQANATAVAAQAMAAAJgCQAIgEAIgFIAGgFQAJgGAEgBQAEAAACADQADACAAADQAAAFgEAFQgFAHgHAFQgOAMgOAGQgNAEgQAAQgjAAgYgXg");
	this.shape_1.setTransform(42.5,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlABQAkgBAXAYQAXAXAAAlQAAAmgZAaQgYAagkAAQgkABgYgZgAgfgxQgKAOAAAWQAAAhAOAWQAOAWATAAQARAAAKgOQAKgNAAgYQAAgfgOgWQgOgXgTAAQgRAAgKAOg");
	this.shape_2.setTransform(24.2,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgGQgGgFgDgJQgCgKAAgYIAAhZIgQAAIgFgCIgBgEIAAgEQAAgFARgQIAIgFIAGgGQARgQAGAAIAFACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAfIAlAAQAFAAABACQABACAAAEIAAAFQAAADgBACQgBACgFABIgiAAIgDABIgBAEIAABSQAAAWAEAFQADAGALAAQAEAAAJgDIAMgDQADABACACQADACAAADQAAAJgOAJQgPAIgSAAQgJABgJgDg");
	this.shape_3.setTransform(8.9,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgIAEQgUAOgUAAQgZAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgLAIAAAOQABANAIAIQAJAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgHAHIgDAFQgLANgKAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGACAKQADALAAAYIAAA1QAAAJABAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgMAHgPAAQgHAAgJgJg");
	this.shape_4.setTransform(-5.9,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBlQgIgDgHgGQgFgFgDgJQgDgKABgYIAAhZIgQAAIgEgCIgCgEIAAgEQAAgFARgQIAHgFIAHgGQARgQAHAAIAEACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAfIAmAAQAEAAABACQABACAAAEIAAAFQAAADgBACQgBACgEABIgjAAIgDABIgBAEIAABSQAAAWAEAFQADAGAKAAQAGAAAIgDIALgDQAEABADACQACACAAADQAAAJgOAJQgPAIgRAAQgKABgIgDg");
	this.shape_5.setTransform(-20.9,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlABQAkgBAXAYQAXAXAAAlQAAAmgZAaQgYAagkAAQgkABgYgZgAgfgxQgKAOAAAWQAAAhAOAWQAOAWATAAQARAAAKgOQAKgNAAgYQAAgfgOgWQgOgXgTAAQgRAAgKAOg");
	this.shape_6.setTransform(-36.4,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWB3QgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgDQAGgDAKAAIARABIAUAAIAhgBIAbgBQAlAAATAQQATAQAAAgQAAAjgXATQgYARgsAAQgQAAAAgLQAAgLAOAAQAVAAANgLQANgLAAgZQAAgXgNgLQgOgLgaAAQgMAAgFACQgFACgCAEIgCAQIgBAjIAABJIABAvQACANACACIAIAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDg");
	this.shape_7.setTransform(-55.5,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJBmQgTgXAAglQAAgpAWgYQAWgaAlAAIALABQAFACADAEQADADAAAFQAAAJgLAAIgFAAIgEgBQgTAAgKAPQgMAOAAAbQAAAcANASQAMASASAAQARAAAKgKQAJgJAAgTIAAguIAAhNQAAgLgBgFQgDgFgGgCIgEgCQgLgDAAgFQAAgFAFgDQADgDANgFIATgFIAQgCQAFAAACADQADADAAAIIAAAIIgCBnIABBHQABAPADADIALADQAJACAAAHQAAAHgYAIIgQAEIgOABQgEABgCgDQgCgDAAgFIAAgJIgBgCIgBgBIgEADIgIAGQgKAHgIAEQgLADgKAAQgfAAgUgWg");
	this.shape_8.setTransform(45,-23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDAEQgDADgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgDAFABIAjAAIAIgBQACgCAAgEQAAgQgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEAAQAEABACACQADADAAACQAAAFgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_9.setTransform(25.6,-20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXB5QgIgDAAgGQAAgHAIgDIAHgDQAEgCABgHQACgIAAgRQAAg2gHgNQgHgNgSAAQgIgBgIAGQgIAFgEAJQgEAGgBANQgCAOAAAgQAAARACAGQABAFADACIAHADQAIADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgDAAgIQAAgFAIgDIAEgDQAFgCACgHQABgHAAgSIAAgbIAAgaIgBhMQgBgSgCgDQgCgDgKgDQgKgDAAgFQAAgFAEgDQAEgDAPgGIARgEIAPgCQAGAAADADQACADAAAIIgBAHIgBBCIAAAJIABAEIACABIAEgDIAGgHQAIgIAKgFQAIgEALAAQAdAAAOATQAOATAAAkIAAAQIAAAeIAAAJQAAAJACAEQACAEADABIAFADQAIADAAAFQAAAIgIADQgIACgbAAQgWAAgIgCg");
	this.shape_10.setTransform(6.5,-23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBXIgSgDIgEADIgGABIgDgBIgEgCQgGgFgEgNQgFgNAAgNQAAgGADgDQADgEAEABQAIAAAIANIAGAKQAFAGAJAFQAIADAKAAQALAAAGgFQAHgGAAgJQAAgOgcgOIgKgFQgZgNgKgKQgJgKAAgRQAAgVAPgOQAPgOAZAAIALABIALACIAIgDIAGgBQAIAAAIANQAHAOAAAOQABAGgDADQgDADgFABQgDAAgEgEIgJgLQgGgLgHgDQgHgFgJAAQgIABgHAFQgFAGAAAIQAAAIAFAGQAHAFATALIADABQAuAWAAAbQAAAYgRAQQgTAPgaAAg");
	this.shape_11.setTransform(-10.6,-20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgHAEQgVAOgUAAQgZAAgPgOQgPgPAAgXQAAgbATgOQAUgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgKAIAAAOQAAANAJAIQAIAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgGAHIgEAFQgKANgLAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGADAKQACALAAAYIAAA1QgBAJACAFQACAFADABIAFABQALADAAAGQAAAIgMAGQgLAHgPAAQgHAAgJgJg");
	this.shape_12.setTransform(-26.5,-20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA/B2QgKgCAAgIQAAgHALgEIAHgEQADgCABgHQABgIAAgWIAAgJIAAhHIgBgqIgVA3QgxCBgKgBQgGAAgJgRQgKgRgYg4IgkhTIgCBBIAAAuIABAfQABAIACABIAIAEQAKAEAAAHQAAAHgIADQgJADgUAAQgTAAgIgDQgIgEAAgGQAAgGAJgFQAJgEABgDQACgJADgqQACgrAAg1IAAgFQAAgSgBgGQgCgFgEgDIgHgDQgLgFAAgHQAAgGAHgDQAIgCAYAAIAYAAIAHACQADACAMAeIAJAYIAFAMQApBkADAAQADAAAPgkQAPgkAVg6IADgLQAGgSAFgGQADgCAHgCIAXgBQAWAAAIACQAHADAAAGQAAAIgJADIgFACQgFADgCAHQgBAGAAAZIABBgQACArACAGQABADAHADIAEABIAGAFQACACAAAEQAAAIgJACQgKADgbAAQgZAAgJgDg");
	this.shape_13.setTransform(-50.9,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mashedpotatoes, new cjs.Rectangle(-68,-45.9,136,83.8), null);


(lib.mainsides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAwIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgEIAAgEIAAgFIADgCIApghQAEgCACgDQACgFAAgDQAAgEgBgDIgFgFIgFgDIgGgBQgGAAgDACIgHAFIgEAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgDgBIgCgCIgDgCIgBgDIABgDQADgEAEgDIAIgFQAIgEAKAAQAHAAAGACQAGACAFADQAFAFADAFQACAFAAAIQAAAIgEAGQgFAFgHAGIgXATIgBABIgBABQAAABAAAAQAAABABAAQAAABAAAAQABAAABAAIAjAAIACABIACADIABACIAAADIgBAFQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape.setTransform(68.2,-8.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHAvIgEAAIgDgCIAAgDIAAg6IgBgCIgCgBIgDABQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgDAAgCgDQgCgDAAgDIABgEIADgDIADgCIAEgCIAFgEIAFgDIAEgCIADgBIADABIACADIAABUQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgEABg");
	this.shape_1.setTransform(61.1,-8.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAvIgBAAIgCgBIgBgBIgQgZIgDgDIgEgBIgMAAIgEABIgBADIAAAYQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDABIgEAAIgDAAIgFgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIAAhXQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAnAAQAIAAAGACQAGADAFAEQAEADADAHQACAFAAAIQAAAIgDAFQgDAEgDADIgHAFQgDACAAACIAAACIADAFIAGAIIAFAHIADAFQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgDACIgDABIgEABgAgTgeQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIAAAVQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIASAAIAHAAIAFgEQAEgBABgDQABgDAAgEQAAgIgGgEIgFgDIgHgBIgSAAIgFABg");
	this.shape_2.setTransform(50.9,-8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAwIgKgDQgFgBgEgEIgHgFQgHgHgEgJIgDgJIAAgKIAAgJIADgJQAEgJAHgHIAHgGIAJgEIAKgDIAJgBIALABQAFABAEACQAJAEAHAGQAGAHAFAJQADAJAAAJIAAAKIgDAJQgFAJgGAHQgHAHgJADIgJADIgLABIgJgBgAgLgdQgGACgFAFQgEAEgDAGQgCAGAAAGQAAAHACAFQADAHAEAEQAFAEAGADQAGACAFAAQAGAAAGgCQAGgDAEgEQAFgEADgHQACgFAAgHQAAgGgCgGQgDgGgFgEQgEgFgGgCQgGgCgGgBQgFABgGACg");
	this.shape_3.setTransform(40.1,-8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAvQgEAAgBgCIAAhYQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIBBAAIACABIABACIABADIAAADIgBAEIgDADIgvAAIgDACIgBADIAAAMIABADQAAAAAAABQABAAAAAAQABAAAAAAQABABAAAAIAeAAIADABIABADIAAAEIAAABIgBAEQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgeAAIgBABIgCABIgBABIgBACIAAAiIgCABIgDABIgDABg");
	this.shape_4.setTransform(31.3,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAtQgKgEgIgHIgBgCIAAgBIABgDIACgEIAEgCIADgBQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABIAHAEIAIAEQAFABAFAAIAHAAIAIgCIAFgFQACgCAAgFQAAgDgDgDQgCgCgFgBIgJgCIgKgCIgLgCQgGgCgEgBQgEgDgDgFQgDgFABgHQgBgHAEgGQAEgFAFgEIANgFIAMgBIAJAAIAKADIAJADIAHAGIABABIAAACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCADIgEACIgEABIgCAAQgGgFgFgCQgGgDgGAAIgGABIgGACIgGAEQgBADAAADQgBAGAFACQAEACAIABIANACQAIABAHADQAGACAFAFQAFAFAAAKQgBAIgEAGQgEAFgGAEQgFAEgHACQgIACgGAAQgLAAgJgEg");
	this.shape_5.setTransform(17.6,-8.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAvIgCgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIAAhXQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBIBCAAIACACIAAACIABADIAAAEIgBADIgCACIgxAAIgCACIgBADIAAAMIABAEIADABIAfAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIAAADIABAEIAAACQAAAEgDABIgfAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAPIABACIADABIAwAAQACACAAAEIAAADIAAAEIAAADIgDABg");
	this.shape_6.setTransform(9,-8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAvIgEgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAhVQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAEgBIAjAAIAJABIAJACQAJAEAIAFQAGAHAEAJIADAJIABAJQAAAKgEAJIgFAJIgGAHIgHAEIgJAFQgJADgJAAgAgZgcQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIAAA0QAAAAABAAQAAABAAAAQAAABAAAAQABAAAAAAIAEABIARAAQAGAAAFgCQAGgBAFgFQAEgDADgHQADgFAAgHQAAgGgDgGQgDgGgEgDQgFgEgGgCQgFgCgGgBIgRAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_7.setTransform(-1.1,-8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAxIgCAAQgEAAgCgDIAAhbIADgCIADgBIADAAIADAAQAEAAABAEIAABZIgCADIgEABg");
	this.shape_8.setTransform(-9,-8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAtQgKgEgHgHIgBgCIgBgBIACgDIADgEIADgCIADgBQABAAAAAAQABAAAAAAQABABAAAAQABAAABABIAFAEIAJAEQAEABAGAAIAHAAIAHgCIAGgFQACgCAAgFQAAgDgCgDQgDgCgFgBIgJgCIgKgCIgMgCQgFgCgEgBQgEgDgDgFQgDgFAAgHQAAgHAEgGQAEgFAGgEIAMgFIANgBIAJAAIAJADIAJADIAIAGIAAABIABACQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgDADIgDACIgEABIgDAAQgEgFgGgCQgGgDgGAAIgGABIgHACIgEAEQgDADAAADQAAAGAFACQAFACAGABIAOACQAIABAGADQAIACAEAFQAEAFAAAKQAAAIgDAGQgFAFgFAEQgGAEgIACQgHACgGAAQgLAAgKgEg");
	this.shape_9.setTransform(-15.6,-8.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAvQgGgCgFgEQgFgDgDgGQgDgFAAgIQAAgGADgFQADgGAFgCIACgDIAAgCIgBgCIgCgEIgDgFIgBgHQAAgGADgFQADgEAEgEQAEgDAGgBQAGgCAFAAQAFAAAGACQAGABAFAFQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIgBACIgDADIgCACIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgDgCIgDgCQgCgCgEABIgFABIgEACQgDACgBACIgBAFQAAAGACADIAGAEIAHABIAEABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAEIAAACQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgIAAQgEABgDACQgEACgCADQgBADAAAFQAAAEABADQACADADACIAGADIAHABQAGAAAFgDQAEgDADgFQACgFABgGIABgMIAAgBIAAgDIAEgEQACgCADABIAOAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABAEIgBADIgDABIgDAAQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgCACIAAADQgBAIgCAIQgDAIgFAGQgFAFgHAEQgHADgIAAQgHAAgHgCg");
	this.shape_10.setTransform(-28.8,-8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcAxQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIgmg0QAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgCABIgCADIAAAwQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgFABIgFAAQgDgBgBgDIAAhYIABgDIADgBIADgBIADAAQAEAAACADIAnAzIACABIABAAIABgCIAAgwIACgCIAEgBIADAAIAEAAQAEAAABAEIAABZIgCADIgFABg");
	this.shape_11.setTransform(-42.9,-8.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAxIgCAAQgEAAgCgDIAAhbIADgCIADgBIADAAIADAAQAEAAABAEIAABZIgCADIgEABg");
	this.shape_12.setTransform(-50,-8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlAwIgDAAIgEgBQgDgBgCgCIgEgNIgCgCIgDgBIgfAAIgBABIgBABIgCABIgBAAIgFANIgBACIgDABIgDAAIgCAAIgDAAIgDAAIgCgBIgBgCIAmhYQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAIADgBIADABQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABIAmBYIAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAABgBAAIgDABgAAAgOIgBABIgCADIgCAEIgBAGIgDAEIgCAEIAAACIAAACIADABIASAAIACgBIAAgCIgBgEIgEgGIgDgJIgBgEIgDgBg");
	this.shape_13.setTransform(-56.6,-8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgAwIgFgBQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgrIgBgBIgCgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgOAXQgCADgCAAIgDgBIgCgCIgNgXQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgDABIgBABIAAAqQgBAEgDABIgGABIgCgBIgCAAIgCgDIgBgCIAAhUQAAgBABgBQAAAAAAgBQABAAAAgBQABAAABAAIAFAAIAEAAIACACIAXAmQABADACAAIADgBIACgCIAWglQADgDAEgBIAFAAIADADIAABWQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIgDACIgEABg");
	this.shape_14.setTransform(-66.4,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainsides, new cjs.Rectangle(-73.7,-16.8,148.3,17.8), null);


(lib.mainbtngreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99CC33").ss(1,1,1).p("A5Y1oMAyxAAAMAAAArRMgyxAAAg");
	this.shape.setTransform(0,0,0.922,0.903);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("A5YVpMAAAgrRMAyxAAAMAAAArRg");
	this.shape_1.setTransform(0,0,0.922,0.903);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("A24y+MAtxAAAMAAAAl9MgtxAAAg");
	this.shape.setTransform(0,0,1.021,1.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-150.5,-125.5,301,251), null);


(lib.greenbeans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEAAIgDgDQgFgEgFgOQgFgNAAgNQAAgFADgEQADgDAEgBQAIAAAHAOIAHAKQAFAHAJAEQAJADAIAAQALABAHgGQAGgGAAgJQAAgOgbgOIgJgFQgbgNgJgJQgJgMAAgPQAAgXAPgNQAPgOAZAAIAKABIANACIAIgDIAEgBQAJAAAIANQAIANAAAPQgBAGgCADQgCADgFAAQgEAAgEgCIgJgMQgGgLgHgDQgHgEgJgBQgJAAgFAGQgHAFAAAJQAAAIAHAFQAFAHAVAKIABABQAvAWAAAcQAAAXgSAQQgSAPgbAAg");
	this.shape.setTransform(107.8,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgnAZgZQAYgaAmABQAgAAATASQATATAAAfQAAALgDADQgDADgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgFADgCQADgCAFgBIAjAAIAIgBQACgBAAgEQAAgQgLgLQgKgLgPAAQgUAAgKARQgKASAAAZQAAAZAOATQANATAVAAQAMAAAJgCQAIgEAIgFIAGgFQAJgGAEgBQAEAAACADQADACAAADQAAAFgEAFQgFAHgHAFQgOAMgOAGQgNAEgQAAQgjAAgYgXg");
	this.shape_1.setTransform(91.8,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgIQAAgFAIgDIAEgCQAFgCABgGQACgGAAgMIAAgMIAAgNIAAgRQAAgbgBgHQgCgIgDgBIgIgEQgKgDAAgGQAAgDADgDQADgDAHgDIAagIIARgDQAEgBACAEQACADAAAIIAAAKIAAAHIgBAqIAAABIgBAqQAAAPABAHQACAGAEACIAGAEQAIADAAAGQAAAHgIACQgIACgWABQgZgBgIgCgAgUhUQgHgFAAgKQAAgJAIgHQAIgGALAAQAKAAAHAFQAHAHAAAJQAAAJgHAHQgIAGgLAAQgLAAgHgGg");
	this.shape_2.setTransform(78.1,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWB3QgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgDQAGgDAKAAIARABIAUAAIAhgBIAbgBQAlAAATAQQATAQAAAgQAAAjgXATQgYARgsAAQgQAAAAgLQAAgLAOAAQAVAAANgLQANgLAAgZQAAgXgNgLQgOgLgaAAQgMAAgFACQgFACgCAEIgCAQIgBAjIAABJIABAvQACANACACIAIAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDg");
	this.shape_3.setTransform(63.8,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgnAZgZQAYgaAmABQAgAAATASQATATAAAfQAAALgDADQgDADgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgFADgCQADgCAFgBIAjAAIAIgBQACgBAAgEQAAgQgLgLQgKgLgPAAQgUAAgKARQgKASAAAZQAAAZAOATQANATAVAAQAMAAAJgCQAIgEAIgFIAGgFQAJgGAEgBQAEAAACADQADACAAADQAAAFgEAFQgFAHgHAFQgOAMgOAGQgNAEgQAAQgjAAgYgXg");
	this.shape_4.setTransform(35.2,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbB5QgJgDAAgIQAAgFAHgDIAJgEQADgDABgKIABgiIAAgaIAAgfIAAgNQAAgqgCgMQgBgMgEgCIgKgEQgLgDAAgGQAAgEAEgDQADgCAMgEIAWgHIARgCQAFAAACADQACADAAAIIAAANQgCA8AAA8IABA5QABAMADADIAJAFQAIADAAAHQAAAGgIADQgJACgWAAQgYAAgIgCg");
	this.shape_5.setTransform(21.3,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_6.setTransform(6.5,22.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_7.setTransform(-13.4,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlB4QgKgDAAgHQAAgGAMgFIACgBQAFgCACgCQACgCAAgEIgDgOIgGgSIgDgFIgDgCIgNgBIgZAAIgOAAQgOAAAAgLQAAgOAOgBIAIAAIARABIASAAIgRgtIgQgnIgFAAIgRAqIgRArIgQAqQgEAKAAAHQAAAFACAEQACADAGACIAFADQALADAAAHQAAAHgJADQgIADgaAAQgZAAgJgDQgIgDAAgHQAAgHAKgEIAGgDQANgIALgdIAEgKIAYg7IAGgPQAYg8AGgZQACgIADgCQAEgCAJAAQAFAAAEACQAEACADAHIAaA3IAhBPIAIATQASAxAMAHIAGACQAKADAAAHQAAAHgKADQgKADgeAAQgeAAgJgDg");
	this.shape_8.setTransform(-34.9,16);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhlBmQgfgYAAgnQAAgWAKgRQAKgPAWgPIABgCQgHgHgEgIQgEgJAAgIQAAgbAUgRQATgQAfAAQAUAAAOAIQAOAIAAAKQAAAEgDADQgEACgEAAIgOgEQgLgEgKAAQgOAAgIAIQgIAJAAAPQAAAGACAFQACAFAFAEQAEAEAHADIAKAEIADABIACADQAAADgGAHQgHAHgFAAIgHgBIgMgEQgJAIgFALQgFAMAAAPQAAAgAVAVQAVAVAgAAQAbAAARgOQAQgOAAgXQAAgOgGgJQgHgIgMAAQgLAAgIAHQgHAHAAAKIAAADIAAACIgCABIgDAAQgGAAgDgEQgEgFAAgIQAAgZBJghIAFgCQAUgKAKgKQAKgKAAgMQAAgIgFgEQgEgEgJAAIgGABIgGABQgEAAgCgCQgDgDAAgDQAAgIAKgFQAJgFAOAAQASAAAKAKQALAKAAARQAAAVgSARQgSARgmAOQAQAGAIAMQAIANAAARQAAANgFAMQgFAMgKAKQgPARgXAIQgXAIgdAAQgzAAgfgXg");
	this.shape_9.setTransform(116,-23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWBUQgHgDgBgGQAAgHAJgDIAGgDQAEgCACgHQABgIAAgSQAAg0gHgOQgHgNgRAAQgIgBgJAGQgHAFgFAKQgEAGgBANQgBANgBAhQABARABAFQABAFAEACIAGADQAJADAAAHQgBAGgHADQgJACgWAAQgaAAgHgCQgJgDAAgIQAAgFAJgDIADgDQAFgCACgFQACgGAAgMIAAgMIgBgNIAAgRQAAgagBgJQgCgHgDgCIgIgDQgKgDAAgGQAAgDAEgDQACgEAIgDIAYgIIARgCQAFAAACACQACADAAAFIAAALIAAACIABABIACAAIAAgBIAEgEIADgCQATgSAUAAQAMAAALAGQALAEAIAJQAIAKADANQADANAAAaIAAAWIAAALIAAAKQAAALACAGQACAEAEACIAEADQAIADAAAFQAAAIgIACQgHADgaAAQgYAAgIgCg");
	this.shape_10.setTransform(81.7,-20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgIQAAgFAIgDIAEgCQAFgCABgGQACgGAAgMIAAgLIAAgOIAAgSQAAgagBgHQgCgIgDgCIgIgDQgKgDAAgGQAAgDADgDQADgDAHgDIAagIIARgEQAEAAACAEQACADAAAIIAAAKIAAAHIgBArIAAABIgBAoQAAARABAGQACAHAEACIAGACQAIADAAAHQAAAGgIADQgIADgWAAQgZAAgIgDgAgUhUQgHgFAAgJQAAgKAIgHQAIgGALgBQAKABAHAFQAHAHAAAJQAAAJgHAGQgIAHgLAAQgLAAgHgGg");
	this.shape_11.setTransform(66.9,-23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA3B7IgHgBQgIgDgQgVIgHgJIgDgDQgog1gDAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAAHIAAAHIABAjQABAKACADIAKAFQAHADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgDAAgIQAAgFAIgDIAEgCQAFgDACgIQACgIAAgTIgBgVIAAgaIAAgUIgBg/QgBgPgCgDQgCgCgIgCIgFgCIgHgDIgBgFQAAgEADgDQAEgCALgEIAXgHIARgCQAFAAACADQADADAAAIIgBAgIgBAsIAAApIAAAJQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAHgDIAMgKIAQgQQAEgFAAgCQAAgCgGgDQgFgDAAgGQAAgHAHgDQAJgDAYAAQAQAAAHADQAIADAAAGQAAAIgMADQgNADgFADQgGAEgOAOIgDACIgGAHIgBADQAAADAOATIACADIAdAjQAMAOAGAEQAFADAKAEQALADAAAHQAAAHgHADQgIADgSAAg");
	this.shape_12.setTransform(53.4,-24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_13.setTransform(33,-17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABLBUQgJgDABgGQAAgHAIgDIAGgDQAEgCACgJQABgIAAgUQABgwgHgOQgHgNgRAAQgUAAgIAQQgJASAAAoIAAAJQAAARACAHQACAFAEACIAEADQAJADgBAFQAAAIgHACQgIADgZAAQgXAAgJgCQgIgDAAgGQAAgHAJgDIAHgDQADgCACgHIABgaQAAg0gGgOQgIgNgRAAQgJgBgIAGQgIAFgEAKQgFAHgBAOQgBAMgBAgQABAPABAHQACAFADACIAGADQAJADAAAHQAAAGgJADQgHACgXAAQgZAAgJgCQgHgDgBgIQABgFAHgDIAFgDQAFgCABgFQACgGAAgMIAAgMIAAgNIAAgKQAAgfgCgJQgBgJgEgCIgIgDQgKgDAAgGQAAgDADgDIALgGIAYgJIARgDQAEAAADADQACADAAAGIAAAIIAAACIABADIABAAIABAAIAAgBIAFgEIABgCQAVgSAUAAQAIAAAHACQAHADAHAEQAGAFAFAHQAHAIABAAQACAAAFgFIAIgIQAKgJAJgEQAHgDALAAQATAAAPAIQAOAIAHAOQAHAPAAAxIABAQIgBAJIAAAIQAAAKACAEQACAFAEABIAEADQAIADAAAFQABAIgJACQgHADgbAAQgXAAgIgCg");
	this.shape_14.setTransform(8.1,-20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgKAEgMAAQgNAAgLgFQgKgEgIgJQgIgKgDgNQgEgOABgjIAAgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAEAAACAEQACADAAAIIAAAGIgCA/QAAAhAHANQAIANARAAQASAAAJgRQAIgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgHgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIARgDQAGAAABAEQACADAAAIIAAAJIgCBEIAAAdIABALQACAHAIADIAEABQAJADAAAGQAAAEgDACQgDADgHADIgYAIQgMADgFAAQgGAAgBgDg");
	this.shape_15.setTransform(-17.2,-20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhWB3QgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgDQAGgDAKAAIARABIAUAAIAhgBIAbgBQAlAAATAQQATAQAAAgQAAAjgXATQgYARgsAAQgQAAAAgLQAAgLAOAAQAVAAANgLQANgLAAgZQAAgXgNgLQgOgLgaAAQgMAAgFACQgFACgCAEIgCAQIgBAjIAABJIABAvQACANACACIAIAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDg");
	this.shape_16.setTransform(-36.7,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenbeans, new cjs.Rectangle(-49.2,-45.9,180.9,83.8), null);


(lib.fadefromwhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4NUjMAAAgpFMAwbAAAMAAAApFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fadefromwhite, new cjs.Rectangle(-154.9,-131.5,310,263), null);


(lib.classicturkeydinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBJQgHgHAAgKQAAgKAHgHQAHgGAJgBQAKABAHAGQAHAHAAAKQAAAKgHAHQgHAHgKgBQgJABgHgHgAgQgmQgHgHAAgKQAAgJAHgHQAHgIAJABQAKgBAHAIQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape.setTransform(95.4,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBMQgIgDAAgHQAAgFAIgCIADgCQAEgCACgFQABgFABgMIAAgKIAAgNIAAgJQgBgbgBgIQgBgJgEgCIgHgCQgIgDgBgFQAAgEAEgDQACgCAHgDIAUgHIAOgCQAIAAACAUIAAAEIABAAQAHgMAJgHQAIgGAJAAQALAAAGAGQAGAHAAAKQAAALgEAGQgGAGgIAAIgIgBIgGgFIgEgGQgBgEgCAAQgLAAgEAPQgDAOAAAuQAAANABAHQACAHAEABIAGACQAJADAAAHQAAAFgJADQgIACgUAAQgXAAgHgCg");
	this.shape_1.setTransform(85.7,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxA6QgWgXAAggQAAgjAXgXQAWgYAiABQAdgBARASQASAQAAAdQAAAJgDADQgDADgLAAIg6AAQgFAAgDgDQgDgCAAgEQAAgEADgCQADgDAFAAIAfAAIAIgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgPgJgKQgKgKgOAAQgSAAgJAQQgIAQAAAWQAAAXAMASQAMARASAAQAMAAAHgDQAIgCAIgFIAFgEQAIgHAEAAQADAAADACQACADAAADQAAADgEAGQgEAFgGAFQgOALgMAFQgMAFgPgBQgfABgWgWg");
	this.shape_2.setTransform(71.5,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBMQgIgDABgHQAAgFAGgCIAFgCQADgCADgFQABgFAAgMIAAgKIAAgNIAAgOQAAgYgBgIQgCgHgDgCIgHgCQgKgDAAgFQAAgEAEgCQADgDAGgDIAWgHIAQgCQAEAAACACQACACAAAFIAAAKIAAACIABAAIABAAIABAAIADgEIAEgDQAQgPASAAQALAAAKAFQAKAEAHAJQAIAIACAMQADALAAAZIAAATIAAAKIAAAJQAAALACAEQABAFAEACIAEACQAIACgBAFQAAAHgGADQgHACgYAAQgVAAgIgCQgHgDAAgFQAAgGAHgDIAHgDQADgCABgGQACgHAAgQQAAgwgGgMQgGgNgRAAQgHAAgHAFQgHAFgFAIQgDAHgBAMIgBApIABAUQABAFADABIAGADQAHADABAGQAAAFgIADQgIACgTAAQgXAAgIgCg");
	this.shape_3.setTransform(54.3,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKBMQgHgDgBgHQAAgFAIgCIADgCQAFgCACgFQABgFAAgMIgBgKIAAgNIAAgOQAAgYAAgIQgCgHgDgCIgHgCQgKgDABgFQAAgEADgCQADgDAGgDIAWgHIAQgCQAEAAACACQACACAAAFIAAAKIAAACIABAAIABAAIAAAAIAEgEIADgDQARgPASAAQALAAAKAFQALAEAGAJQAIAIACAMQAEALAAAZIAAATIAAAKIgBAJQAAALACAEQABAFAEACIAEACQAIACAAAFQAAAHgIADQgHACgXAAQgVAAgIgCQgHgDAAgFQAAgGAHgDIAGgDQAEgCACgGQABgHAAgQQAAgwgHgMQgFgNgQAAQgIAAgHAFQgIAFgDAIQgEAHgCAMIgBApIABAUQACAFADABIAFADQAJADgBAGQAAAFgHADQgHACgVAAQgWAAgIgCg");
	this.shape_4.setTransform(36.2,30.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBtQgHgCAAgIQgBgFAIgCIADgCQAEgCADgFQABgFAAgMIAAgKIAAgNIAAgPQAAgYgBgGQgCgIgDgBIgHgDQgKgDAAgFQABgDADgDQADgDAGgDIAXgHIAPgDQAFAAACADQABADAAAHIAAAJIAAAHIgBAmIAAABIgBAlQAAAPABAGQACAGADABIAFADQAJADgBAGQAAAFgHADQgHADgVAAQgWAAgHgDgAgShMQgGgFAAgJQAAgIAHgGQAHgGAKAAQAJAAAHAFQAGAGAAAIQAAAIgHAHQgHAFgKAAQgJAAgHgFg");
	this.shape_5.setTransform(22.7,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBuIgSAAIgNAAIgNAAQgTAAgGgCQgFgDAAgGQAAgGAIgDQAIgDACgDQACgDABgXIABg6IgCg5QgBgXgBgCQgCgDgIgDQgIgEAAgFQAAgHAGgCQAGgDATAAIANABIAPAAIAVgBIARAAQA4AAAfAdQAfAeAAA0QAAA2ggAbQgfAcg8gBgAghhWQgHADgCAEQgBAGgBASIgBAuIABA5QABAZABAEQACAFAKADQAKAEAOAAQAiAAASgWQASgVAAgrQgBgsgTgXQgVgYglAAQgMgBgHADg");
	this.shape_6.setTransform(6.6,27.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBlQgHgGAAgKQAAgIAGgFQAEgGAIAAIAHABIAEAEIAFAGQAEAGADAAQAIAAAHgMQAJgLgBgMQABgNgMgYIgBgEIgZg0IgNgeQgDgGgJgDQgGgDgBgCQgCgCAAgDQAAgHAIgCQAIgDAXAAQAVAAAIACQAIADAAAGIgBAFIgDADIgFACQgHACAAADIADALIANAfIALAdQAEAHADAAQABAAAEgHIAJgYIAMgfQADgKAAgEQAAgFgIgEQgJgFAAgEQAAgFAHgDQAHgCASAAQASAAAGACQAHADAAAGQAAAGgJACIgGACQgJAFgKAaIgEALIgTAwQgaBAgPATQgQATgWAAQgLAAgIgGg");
	this.shape_7.setTransform(-20.9,33.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxA6QgWgXAAggQAAgjAXgXQAWgYAiABQAdgBARASQASAQAAAdQAAAJgDADQgDADgLAAIg6AAQgFAAgDgDQgDgCAAgEQAAgEADgCQADgDAFAAIAfAAIAIgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgPgJgKQgKgKgOAAQgSAAgJAQQgIAQAAAWQAAAXAMASQAMARASAAQAMAAAHgDQAIgCAIgFIAFgEQAIgHAEAAQADAAADACQACADAAADQAAADgEAGQgEAFgGAFQgOALgMAFQgMAFgPgBQgfABgWgWg");
	this.shape_8.setTransform(-36.7,30.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBvIgHAAQgGgDgPgSIgGgJIgDgEQglgvgCAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAAAIAAAHIAAAHIABAfQABAKACACIAIAFQAHADAAAFQAAAGgHADQgIACgUAAQgXAAgHgCQgIgDAAgHQAAgFAIgCIAEgCQAEgCABgIQACgHAAgSIAAgTIAAgYIAAgSIgBg4QgBgOgDgDQgBgCgHgCIgFgCIgGgDIgBgDQAAgEADgDQADgDALgDIAUgGIAQgCQAFAAABADQACACAAAIIgBAdIAAAnIAAAnIAAAHQAAAAABABQAAAAAAAAQAAAAABAAQAAABABAAIAGgEIALgJIAOgOQAEgEAAgDQAAgBgGgEQgEgDAAgEQAAgHAHgDQAIgDAWAAQAOAAAHADQAGADAAAGQAAAHgLADIgQAFIgSAQIgDACIgFAHIgBACQAAADANARIACADIAaAfQALAOAGADQAEAEAJADQAKACAAAHQAAAGgHADQgHADgQAAg");
	this.shape_9.setTransform(-52.8,27.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtBMQgIgDAAgHQAAgFAIgCIADgCQAEgCACgFQABgFABgMIAAgKIAAgNIAAgJQgBgbgBgIQgBgJgEgCIgHgCQgIgDgBgFQAAgEAEgDQACgCAHgDIAUgHIAOgCQAIAAACAUIAAAEIABAAQAHgMAJgHQAIgGAJAAQALAAAGAGQAGAHAAAKQAAALgEAGQgGAGgIAAIgIgBIgGgFIgEgGQgBgEgCAAQgLAAgEAPQgDAOAAAuQAAANABAHQACAHAEABIAGACQAJADAAAHQAAAFgJADQgIACgUAAQgXAAgHgCg");
	this.shape_10.setTransform(-67.3,30.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAhBNQgCgCAAgFIAAgLIAAAAIgBgBQgCAAgDAEIgDACQgHAIgJAEQgIADgLAAQgMAAgKgEQgKgEgHgIQgHgJgDgMQgDgNAAgfIAAgLIAAgLIAAgDQAAgNgBgDQgCgEgGgCIgGgBQgIgDAAgFQAAgEADgDQADgCAKgEIAVgFIAQgDQAEAAACADQACAEAAAGIAAAGIgCA5QAAAeAHAMQAGAMAQAAQAQAAAIgPQAHgQAAgkIAAgMQAAgLgBgEQgCgEgFgCIgGgBQgJgDAAgFQAAgEADgCQADgDALgEIAUgFIAQgDQAFAAACADQABADAAAHIAAAJIgCA+IABAaIABAKQABAGAIADIACABQAJADAAAFQAAADgDADQgCACgHADIgWAHQgKADgGAAQgEAAgCgDg");
	this.shape_11.setTransform(-82.7,30.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBtQgJgDAAgHQAAgGAIgDQAJgDABgCQABgDACgZIAAhIIAAgoIgBgYQgBgEgDgCIgIgBIgHAAQgLAAgFADQgGACgEAGIgFAKIgEALIgFAEQgCACgDAAQgFAAgCgEQgCgEAAgJQAAgUAEgNQAFgMAIAAIACAAQALACATAAIBYAAQATAAANgCIABAAQAHAAAFAMQAFANAAAUQAAAJgCAEQgDAEgEAAIgGgCIgDgEIgFgLIgFgKQgEgGgGgCQgGgDgKAAIgHAAIgJABQgDACAAAEIgBAYIgBAoIABBIQABAZACADQABACAJADQAHADABAGQAAAHgJADQgIACgYAAQgXAAgIgCg");
	this.shape_12.setTransform(-101.5,27.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhcBdQgcgWAAgkQAAgTAJgPQAJgPAUgOIABgBQgHgGgDgIQgDgHAAgJQAAgXARgPQASgQAcAAQASAAANAIQAMAGAAALQAAADgDACQgDADgEAAIgMgFQgKgDgJAAQgNAAgHAIQgHAHAAAOQAAAFACAFQACAFAEADQADAEAHADIAJADIADABIABADQAAADgFAHQgGAFgFAAIgHgBIgKgDQgJAHgEAKQgFALAAANQAAAeATATQAUASAdABQAYgBAPgNQAQgMAAgUQAAgNgHgIQgGgIgKAAQgLAAgHAGQgGAGAAAKIAAADIAAACIgCABIgCAAQgGAAgDgFQgDgDAAgIQAAgWBCgfIAEgCQASgIAJgJQAJgKAAgKQAAgIgEgDQgDgDgJgBIgFABIgGAAQgDAAgCgBQgCgCAAgEQAAgHAIgEQAIgFANABQARAAAJAJQAKAIAAAQQAAATgRAPQgQAQgiAMQAOAGAHALQAIAMAAAPQAAAMgFALQgFAKgIAKQgOAPgVAHQgVAIgaAAQgvAAgcgVg");
	this.shape_13.setTransform(-22,-8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah7BMQgIgDABgHQgBgFAIgCIAEgCQAEgCACgFQACgFAAgMIgBgKIAAgNIAAgJQAAgbgBgIQgCgJgDgCIgHgCQgJgDAAgFQAAgEADgCIAKgGIAWgHIAPgDQAEAAACADQACACABAFIAAAJIAAABIAAACIABAAIAAAAIABAAIADgEIACgBQASgRAUAAQAGAAAHACQAGACAHAEQAEAEAGAHQAGAHACAAQABAAAEgFIAHgHQAKgIAHgDQAIgDAJAAQARAAANAHQAOAHAGANQAGAOAAAsIABAPIgBAIIAAAHQABAJABAEQACAEADACIAEACQAIACAAAFQAAAHgHADQgHACgYAAQgWAAgHgCQgHgDgBgFQAAgGAJgEIAFgCQADgCACgHQACgIAAgSQAAgsgGgMQgHgNgQAAQgSAAgHAQQgIAPAAAkIAAAJQAAAQACAGQABAFAEACIAFACQAHACAAAFQAAAHgHADQgHACgYAAQgUAAgIgCQgGgDgBgFQAAgGAIgDIAGgDQADgCABgGQACgGAAgRQAAgwgGgMQgGgNgRAAQgIAAgHAFQgHAFgFAIQgDAHgBANQgBALAAAdQAAAOABAFQABAFADACIAGADQAIADAAAGQAAAFgIADQgHACgUAAQgXAAgIgCg");
	this.shape_14.setTransform(-58.2,-5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAbBIIgIgIIgHADQgSANgTAAQgWAAgOgNQgNgNAAgVQgBgZATgMQARgOAgAAQAHAAAEACQADADABAFQgBAJgJAAQgPAAgKAHQgJAHAAANQAAAMAJAIQAHAHANAAQAPAAAGgHQAHgGgBgQIAAg5QAAgOgFgHQgHgHgJAAQgIAAgGADQgHADgFAHIgEAEQgJAMgLAAQgFAAgEgEQgDgEAAgHQAAgOARgKQASgKAcAAQAPAAANAFQAMAEAGAJQAGAGABAJQACAJAAAWIAAAxQAAAIABAEQACAFADABIAFABQAKACgBAGQABAHgLAGQgKAGgNAAQgIAAgHgIg");
	this.shape_15.setTransform(-80,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiBrQgIgDAAgGQAAgGAJgEIAHgDQACgCABgKIABgkIAAgVIgBgGQgCgDgHgBQgIgBgcAAIggABQgIAAgDADIgCAFIAAALIAAAMIABAkQABAKACACIAHADQAJAEAAAGQAAAGgIADQgIADgZAAQgXAAgJgDQgIgDAAgGQAAgGAJgEIAHgDQADgDABgTQACgTAAgtIgCg5QgBgXgCgCQgBgDgIgDQgIgEAAgGQAAgFAGgDQAHgCAcAAQAaAAAHACQAHADAAAFQAAAGgJAEIgHAEQgCACgCAJIgBAtQAAAGAGADQAGABAWAAIAMAAIAgAAQAJgCADgCIACgDIAAgFIAAgHIgBgmQgBgHgCgCIgHgEQgJgEAAgGQAAgFAHgDQAHgCAbAAQAbAAAHACQAGACAAAGQAAAGgJAEIgHAEQgDACgBAUQgCAVAAApIABA6QACAXACADQABADAIADQAIADAAAGQAAAGgIADQgJADgXAAQgZAAgIgDg");
	this.shape_16.setTransform(-99.9,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinner, new cjs.Rectangle(-113.4,-29.1,215.3,76.5), null);


(lib.andsomuchmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape.setTransform(93.7,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgnAZgZQAYgZAmgBQAgAAATATQATASAAAgQAAAKgDADQgDAEgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgEADgDQADgCAFAAIAjAAIAIgCQACgBAAgDQAAgRgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEABQAEgBACADQADADAAADQAAADgEAHQgFAFgHAGQgOAMgOAFQgNAFgQABQgjAAgYgZg");
	this.shape_1.setTransform(80.2,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBUQgIgEAAgHQAAgGAIgDIAEgCQAFgBABgHQACgFAAgNIAAgLIAAgNIAAgLQAAgdgCgKQgBgJgEgCIgHgDQgKgEAAgFQAAgEADgCQADgEAHgDIAXgHIAPgDQAIAAADAXIAAAEIABAAQAIgOAKgGQAJgIAKAAQALAAAHAIQAHAGAAAMQAAALgFAIQgGAGgJAAIgJgCIgHgEIgDgHQgCgFgCAAQgMAAgEAQQgEAQAAAzQAAAOABAIQACAHAFACIAGACQAKAEAAAHQAAAFgJAEQgJACgWAAQgaAAgIgCg");
	this.shape_2.setTransform(65.3,23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8A/QgYgYAAgmQAAglAZgZQAZgZAlgBQAkABAXAXQAXAYAAAlQAAAlgZAbQgYAagkAAQgkAAgYgZgAgfgxQgKANAAAXQAAAgAOAXQAOAWATAAQARAAAKgNQAKgOAAgYQAAgfgOgXQgOgWgTAAQgRAAgKAOg");
	this.shape_3.setTransform(49.1,23.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABKBUQgHgDgBgGQAAgHAJgEIAGgCQAFgDABgIQACgIAAgUQAAgwgHgOQgHgOgSAAQgTAAgJARQgIARAAApIAAAJQAAASACAFQABAHAFABIAFACQAHADAAAGQABAHgIADQgIADgZAAQgXAAgJgCQgHgDgBgGQAAgHAJgDIAGgDQAEgCACgHIABgaQAAg1gHgNQgGgOgSAAQgJAAgIAGQgIAGgFAJQgDAHgCAOQgCAMAAAgQAAAQACAFQABAGAEACIAHADQAIADAAAHQAAAGgIADQgJACgWAAQgZAAgIgCQgJgEABgHQgBgGAJgDIAEgCQAEgBACgHQACgFAAgNIgBgLIAAgNIAAgLQAAgdgBgKQgBgJgEgCIgIgDQgJgEgBgFQAAgDAEgDIAKgGIAZgJIAQgDQAEAAADADQACADAAAGIAAAJIAAABIABACIABAAIABAAIABAAIADgDIACgCQAUgTAVAAQAIAAAHADQAHACAHAFQAFAEAHAHQAGAIABAAQADAAAEgGIAIgHQALgJAHgEQAIgDAKAAQAUAAAPAIQAOAIAHAOQAHAPAAAxIAAAQIAAAJIAAAIQAAAKACAEQACAEAEACIAEACQAJADgBAGQAAAHgIADQgHADgaAAQgYAAgJgCg");
	this.shape_4.setTransform(24.2,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXB5QgIgDAAgGQAAgHAIgDIAHgDQAEgCABgHQACgIAAgRQAAg2gHgMQgHgPgSAAQgIAAgIAGQgIAGgEAIQgEAGgBAOQgCAMAAAiQAAAQACAFQABAGADACIAHADQAIADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgEAAgHQAAgGAIgDIAEgCQAFgCACgHQABgHAAgSIAAgcIAAgZIgBhMQgBgSgCgDQgCgDgKgCQgKgDAAgGQAAgFAEgDQAEgDAPgGIARgEIAPgCQAGAAADADQACADAAAIIgBAHIgBBCIAAAJIABAEIACACIAEgFIAGgGQAIgIAKgFQAIgEALAAQAdAAAOATQAOATAAAkIAAAQIAAAeIAAAJQAAAJACAEQACADADACIAFACQAIADAAAGQAAAHgIAEQgIACgbAAQgWAAgIgCg");
	this.shape_5.setTransform(-10.6,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1A/QgXgYAAgkQAAgmAZgaQAZgaAlAAQAbAAAUAPQATAPAAATQAAAIgFAEQgGAFgIABQgJgBgFgEQgFgDgGgPQgFgMgGgEQgHgFgKAAQgTAAgLAOQgKAPAAAaQAAAdAPASQAPAUAYgBQAIAAAIgCQAHgCAGgFIAHgEQAJgHAFAAQADAAADACQABACAAAEQAAAEgDAGQgEAFgFAFQgNAMgOAFQgPAGgRAAQgiAAgYgZg");
	this.shape_6.setTransform(-28.9,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgMAAQgNAAgMgFQgLgEgHgJQgIgKgDgNQgEgOAAgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQAEgDAMgEIAWgGIASgDQAFAAACAEQABADAAAIIAAAGIgBA/QgBAhAIANQAHANARAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEAEgDQADgDAMgEIAWgGIARgDQAFAAADAEQABADAAAIIAAAJIgBBEIAAAdIABALQABAHAIADIADABQAKADAAAGQAAAEgDACQgCADgIADIgYAIQgLADgHAAQgEAAgCgDg");
	this.shape_7.setTransform(-47.7,23.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABKBUQgHgDgBgGQAAgHAJgEIAGgCQAFgDABgIQACgIAAgUQAAgwgHgOQgHgOgSAAQgTAAgJARQgIARAAApIAAAJQAAASACAFQABAHAFABIAFACQAHADAAAGQABAHgIADQgIADgZAAQgXAAgJgCQgHgDgBgGQAAgHAJgDIAGgDQAEgCACgHIABgaQAAg1gHgNQgGgOgSAAQgJAAgIAGQgIAGgFAJQgDAHgCAOQgCAMAAAgQAAAQACAFQABAGAEACIAHADQAIADAAAHQAAAGgIADQgJACgWAAQgZAAgIgCQgJgEABgHQgBgGAJgDIAEgCQAEgBACgHQACgFAAgNIgBgLIAAgNIAAgLQAAgdgBgKQgBgJgEgCIgIgDQgJgEgBgFQAAgDAEgDIAKgGIAZgJIAQgDQAEAAADADQACADAAAGIAAAJIAAABIABACIABAAIABAAIABAAIADgDIACgCQAUgTAVAAQAIAAAHADQAHACAHAFQAFAEAHAHQAGAIABAAQADAAAEgGIAHgHQAMgJAHgEQAIgDAKAAQAUAAAPAIQAOAIAHAOQAHAPAAAxIAAAQIAAAJIAAAIQAAAKACAEQACAEAEACIAEACQAJADgBAGQAAAHgIADQgHADgaAAQgYAAgJgCg");
	this.shape_8.setTransform(-73,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlABQAkgBAXAYQAXAXAAAlQAAAngZAZQgYAagkAAQgkAAgYgYgAgfgxQgKAOAAAWQAAAgAOAXQAOAWATAAQARAAAKgOQAKgNAAgYQAAgfgOgXQgOgWgTAAQgRAAgKAOg");
	this.shape_9.setTransform(30.6,-16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEAAIgDgDQgFgEgFgOQgFgOAAgMQAAgGADgDQADgDAEgBQAIAAAHAOIAHAKQAFAHAJADQAJAEAJAAQAKABAHgGQAGgGAAgJQAAgOgbgOIgKgEQgagNgJgKQgJgMAAgPQAAgXAPgNQAPgOAZAAIAKABIANACIAIgDIAEgBQAJAAAIANQAHANABAPQgBAGgCADQgDAEgEgBQgFAAgDgCIgJgMQgGgLgHgEQgGgDgKAAQgIgBgHAGQgFAGgBAIQABAIAFAFQAGAHAVAKIABABQAvAWAAAcQAAAXgSAPQgSAQgbAAg");
	this.shape_10.setTransform(13.9,-16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJBlQgTgWgBgkQABgpAWgZQAXgaAjAAIAMACQAFABADAEQADADAAAFQAAAIgLAAIgFAAIgEAAQgSAAgMAQQgKAOgBAaQABAdALARQAMASAUAAQARAAAJgKQAJgJAAgUIAAguIAAhMQAAgMgBgEQgCgFgHgCIgFgBQgKgEAAgFQAAgEAFgEQADgDANgFIATgFIAPgCQAGAAACADQADAEAAAHIAAAJIgCBmIABBGQABAQADACIALAEQAKADgBAFQABAIgZAIIgQAFIgOABQgEAAgCgDQgCgDAAgFIAAgIIgBgEIgBgBIgFAEIgHAFQgKAIgJADQgJAEgLAAQgfAAgUgXg");
	this.shape_11.setTransform(-11.9,-19.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXBTQgJgCAAgHQABgGAIgDIAGgDQAEgCABgHQACgHAAgTQAAg1gGgNQgHgOgSAAQgIABgJAFQgIAGgEAIQgDAHgCANQgCANABAhQgBAQACAGQABAFAEACIAGADQAIADAAAGQABAHgJACQgIADgWAAQgZAAgJgDQgIgDAAgHQAAgGAIgDIAFgBQAEgDABgGQACgFABgNIAAgLIgBgOIAAgQQAAgagBgJQgBgHgEgCIgIgDQgKgEAAgFQAAgDADgEQADgDAHgCIAZgIIARgDQAFAAACADQACACAAAGIAAALIAAABIABAAIABAAIABAAIAEgDIADgEQASgRAVAAQAMAAALAFQALAFAIAKQAIAJADAMQADANABAbIAAAWIgBALIAAAJQAAANACAEQACAFAEADIAEABQAIADAAAGQAAAHgIADQgHADgaAAQgYAAgHgDg");
	this.shape_12.setTransform(-32.5,-16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBPIgJgJIgIAEQgTAOgWAAQgYAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgKAIQgKAIAAAOQAAANAJAIQAJAIAPAAQAPAAAHgHQAHgHAAgSIAAg/QAAgPgGgHQgHgIgLAAQgIAAgHADQgHAEgHAHIgDAFQgLANgLAAQgGAAgEgFQgEgEAAgHQAAgQAUgLQATgLAeAAQASAAANAFQAOAFAHAKQAFAGACAKQACALAAAYIAAA1QAAAJACAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgLAHgPAAQgIAAgIgJg");
	this.shape_13.setTransform(-51.2,-16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAQgKAAgHgIg");
	this.shape_14.setTransform(-65,-9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_15.setTransform(-74.3,-9.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_16.setTransform(-83.6,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andsomuchmore, new cjs.Rectangle(-90.3,-41.9,190.8,83.8), null);


(lib.WFM_Logo_White_RGBbrownbackgroundai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(175,175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgLAOABQAPgBAKALQAKAKAAAOQAAAPgKALQgKAJgPABQgOgBgKgJgAAWAYIgPgVQANgBAAgNQAAgPgRAAIgTAAIAAAyIAJAAIAAgVIAFAAIAOAVIAKAAg");
	this.shape_1.setTransform(305.4,234.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAiQgFAAgEgDQgEgDAAgFIAAgtQAAgLANAAIA+AAQARAAAKAJQALAJAAAPQAAAQgLAJQgKAJgRAAg");
	this.shape_2.setTransform(163.9,260);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAHIAAgNIAIAAQALAAAAAGQAAAHgNAAg");
	this.shape_3.setTransform(305.6,233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QAog/BHAAQBGAAAoA/QAqBAAABqQAABrgpBAQgpA/hFAAQhIAAgog+g");
	this.shape_4.setTransform(126.2,205.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgIAAADgIIAZgyQABgDADAAQADAAACADIAZAzQABADgCACQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(130.7,263.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtDtQgngDgNgHQgVgLAAghIAAljQAAghAKgMQAKgLAcgFIAdgDQBLAAAqA/QArA/AABvQAABxgrA/QgqA8hGAAIgJAAg");
	this.shape_6.setTransform(239.5,205);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhvCsQgog9AAhtQAAhtAog/QApg/BGAAQBFAAAqA/QApBAAABqQAABrgpBAQgpA/hGAAQhGAAgpg+g");
	this.shape_7.setTransform(181.9,205.3);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(175,175,1,1,0,0,0,175,175);
	this.instance.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.rolloverupdatedcta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// order-now
	this.instance = new lib.ordernowvid();
	this.instance.parent = this;
	this.instance.setTransform(-3,-0.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

	// Layer 1
	this.instance_1 = new lib.updatedctavid();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.7,-25.5,127.5,34);


(lib.wfmbrownbackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.WFM_Logo_White_RGBbrownbackgroundai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.1,0,1,1,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169.9,-175,350,350);


// stage content:
(lib.squareseventeen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_30 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_426 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(396).call(this.frame_426).wait(3));

	// button
	this.btn_main = new lib.mainbtngreen();
	this.btn_main.parent = this;
	this.btn_main.setTransform(149.7,124.5);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbtngreen(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(429));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(429));

	// fade-from-white
	this.instance_1 = new lib.fadefromwhite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(153,125.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(420));

	// logo
	this.instance_2 = new lib.wfmbrownbackground("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(250.8,32.8,0.223,0.223);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0,scaleY:0},0).to({regX:0.2,scaleX:0.24,scaleY:0.24,alpha:1},6).to({regX:0,scaleX:0.22,scaleY:0.22},7).wait(407));

	// and-so-much-more
	this.instance_3 = new lib.andsomuchmore();
	this.instance_3.parent = this;
	this.instance_3.setTransform(108.1,93.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(350).to({alpha:1},10).wait(30).to({alpha:0},5).wait(34));

	// pumpkin-applie-pies
	this.instance_4 = new lib.greenbeans();
	this.instance_4.parent = this;
	this.instance_4.setTransform(67.1,96.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(310).to({y:97.8},0).to({alpha:1},10).wait(30).to({alpha:0},5).wait(74));

	// butternut-squash
	this.instance_5 = new lib.organiccranberrysauce();
	this.instance_5.parent = this;
	this.instance_5.setTransform(147.4,96.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(270).to({y:97.8},0).to({alpha:1},10).wait(30).to({alpha:0},5).wait(114));

	// herb-stuffing
	this.instance_6 = new lib.organicturkeygravy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(80.8,97.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(230).to({alpha:1},10).wait(30).to({alpha:0},5).wait(154));

	// mashed-potatoes
	this.instance_7 = new lib.mashedpotatoes();
	this.instance_7.parent = this;
	this.instance_7.setTransform(85.8,96.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({y:97.8},0).to({alpha:1},10).wait(30).to({alpha:0},5).wait(194));

	// spiral-cut-ham
	this.instance_8 = new lib.spiralcutham();
	this.instance_8.parent = this;
	this.instance_8.setTransform(105.6,93.8);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150).to({x:103.3},0).to({alpha:1},10).wait(30).to({alpha:0},5).wait(234));

	// roasted-turkey
	this.instance_9 = new lib.roastedturkey();
	this.instance_9.parent = this;
	this.instance_9.setTransform(82.3,97.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110).to({alpha:1},10).wait(30).to({alpha:0},5).wait(274));

	// ham-turkey-dinner
	this.instance_10 = new lib.classicturkeydinner();
	this.instance_10.parent = this;
	this.instance_10.setTransform(131.3,76.7);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(400).to({alpha:1},10).wait(19));

	// main-sides
	this.instance_11 = new lib.mainsides();
	this.instance_11.parent = this;
	this.instance_11.setTransform(91.6,141.1);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(413).to({alpha:1},10).wait(6));

	// whats-in-our
	this.instance_12 = new lib.whatsinour();
	this.instance_12.parent = this;
	this.instance_12.setTransform(124.7,98.1);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({alpha:1},10).wait(70).to({alpha:0},5).wait(324));

	// rollover
	this.cta_rollover = new lib.rolloverupdatedcta();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(82.6,181.7);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(30).to({alpha:1},10).wait(389));

	// order-now
	this.instance_13 = new lib.seventeenordernow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(79.7,180.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({alpha:1},10).wait(389));

	// cta-rectangle
	this.instance_14 = new lib.updatedctaseventeen();
	this.instance_14.parent = this;
	this.instance_14.setTransform(82.6,181.7);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({alpha:1},10).wait(389));

	// ham
	this.instance_15 = new lib.seventeenham_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(249,137);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(47).to({alpha:1},10).wait(372));

	// greens
	this.instance_16 = new lib.seventeengreens_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(33.5,180);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(40).to({alpha:1},10).wait(379));

	// pumpkin-pie
	this.instance_17 = new lib.seventeenpumpkinpietransparent();
	this.instance_17.parent = this;
	this.instance_17.setTransform(44.5,27.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(68).to({alpha:1},10).wait(351));

	// turkey
	this.instance_18 = new lib.seventeenturkey_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(143,192.5);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(54).to({alpha:1},10).wait(365));

	// berries
	this.instance_19 = new lib.seventeenberriesuse();
	this.instance_19.parent = this;
	this.instance_19.setTransform(194,27);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(61).to({alpha:1},10).wait(358));

	// gravy
	this.instance_20 = new lib.seventeengravy_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(258.5,226);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(75).to({alpha:1},10).wait(344));

	// table
	this.instance_21 = new lib.seventeentable();
	this.instance_21.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(429));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(148.1,118.9,326,265.2);
// library properties:
lib.properties = {
	id: '92879F2740E34FB9890B82961B713FEA',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['92879F2740E34FB9890B82961B713FEA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;