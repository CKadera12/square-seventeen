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
	this.shape.graphics.f("#FFFFFF").s().p("AgNBVQgGgFAAgIQAAgIAGgGQAFgFAIAAQAHAAAGAFQAFAGAAAIQAAAIgGAFQgFAGgHAAQgIAAgFgGgAgIAgQgCgDAAgJQAAgJACgIQACgHAFgJIAFgJQANgUAAgNQAAgJgFgGQgFgFgIAAQgIAAgEAEQgFAEgDAKIAAAAQgFATgKAAQgGAAgDgDQgDgEAAgIQAAgPAPgLQAOgLAUAAQAWAAANALQANALAAARQAAAKgEAIQgFAIgLAKIgEADQgMAKgEAKQgBAFAAAHIgBAIQgBAFgCACIgEABQgFAAgDgEg");
	this.shape.setTransform(-35.2,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBQQgBgCAAgEIhUAAQgHAAgCgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQAAgHAQgOIAPgOQAfggAIgLQAIgOAAgMQAAgLgGgHQgHgIgJAAQgIAAgGADQgHAEgHAHIgFAFQgGAHgFAAQgDAAgCgCQgCgCAAgDQAAgEACgEQACgEAEgEQAKgLANgFQANgGAOAAQAWAAAOALQANAMAAATQAAAKgFALQgGAMgNALIgVATIgWAUIgBACIAAABIABABIADAAIAlAAIAKgBQADgBACgCIAFgHQAFgJAFAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQACADAAADIgBAMIgFAPQgEAJgDAFQgEADgDAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAg");
	this.shape_1.setTransform(-48.2,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABNQgaABgHgCQgGgCAAgFQAAgFALgCIAKgDIADgCIABgGIABgRIAAg4IAAgJIAAgHQAAgIgBgDQgBgDgGABIgFAAIgGABQgEgBgBgBQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAgDAEgDQAEgDAIgDIAWgHIAOgCQAFAAADACQACACAAAEQAAAEgEADIgCABQgCACAAAJIgBAvIAAAhIABAVIACAGIADADIAKACQAKABAAAGQAAAFgGACQgGACgYgBg");
	this.shape_2.setTransform(-61.3,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA9QgGgDAAgEQAAgFAGgCIADgBQADgCABgEQACgFAAgIIgBgIIAAgKIAAgIQAAgVgBgHQgBgHgCgBIgGgCQgHgDAAgEQAAgDADgCQABgCAGgCIAQgGIALgCQAGAAACARIAAACIAAABQAHgKAHgFQAHgFAGAAQAJAAAFAFQAFAFAAAIQAAAJgEAFQgEAEgGAAIgHAAIgFgEIgDgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgIAAgDAMQgDALAAAkQAAALABAFQACAGACABIAGACQAHACAAAFQAAAEgHADQgGACgRAAQgSAAgGgCg");
	this.shape_3.setTransform(-79.3,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsAuQgRgSAAgcQAAgaASgSQATgTAaAAQAbAAAQARQARASAAAaQAAAcgSATQgSATgaAAQgaAAgSgSgAgWgkQgIAKAAARQAAAXAKAQQALARAOAAQAMAAAHgLQAIgKAAgQQAAgXgLgQQgLgRgNAAQgMAAgHAKg");
	this.shape_4.setTransform(-91.1,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBYQgHgDAAgEQAAgEAHgCIACgCQADgCABgDQACgEAAgKIAAgNIAAg5IgOAAIgEgBIgBgGIAAgCQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIANAAIgBgKIgBgIQAAgTAMgKQALgKATAAQAOAAAJAGQAIAGAAAKQAAAFgDADQgDAEgGAAQgEAAgDgDQgDgBgCgDIgCgFQgFgIgHgBQgFABgCADQgDACAAAGIADANQADAKAAAJIASAAIADABIABAFIAAACIgBAGIgDABIgSAAIAAA+QAAAPABAFQAAAFADABIAFACQAHADAAAEQAAAFgGACQgGACgRAAQgSAAgFgCg");
	this.shape_5.setTransform(-100.3,22.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFBJQgHgBgEgFQgEgEgCgGQgCgHAAgTIAAhAIgLAAIgEgBIgBgDIAAgDQAAgEANgKIAFgFIAFgEQANgMAEABIADABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAYIAbAAIAEABIABAEIAAADQAAADgBACIgEABIgZAAIgCABIgBADIAAA8QAAAPADAFQACADAHAAQAEAAAGgBIAJgCQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgKAGQgLAHgNgBQgHAAgFgCg");
	this.shape_6.setTransform(36.6,-5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA/IgNgCIgEACIgDABIgDAAIgDgCQgEgDgEgKQgDgKAAgJQAAgEACgDQACgCAEAAQAFAAAGAKIAEAHQAEAFAGADQAHACAGAAQAIAAAFgEQAEgEABgHQAAgKgUgKIgHgDQgTgKgHgHQgGgIgBgLQABgQAKgKQALgKATAAIAHAAIAJACIAFgCIAEgBQAGAAAGAKQAGAJAAALQgBAEgCADQgBACgDAAQgDAAgDgCQgDgDgEgGQgEgHgFgDQgFgDgHAAQgGAAgEAEQgFAEAAAGQAAAGAFAEQAEAEAOAIIACABQAiAQAAATQAAARgNAMQgNALgTAAg");
	this.shape_7.setTransform(26.9,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA6IgHgHIgFADQgOAKgPAAQgSAAgLgKQgLgLAAgRQAAgTAOgKQAOgLAZAAQAGAAADACQADACAAAEQAAAGgIAAQgMAAgHAGQgHAGAAALQAAAJAGAGQAGAGALAAQALAAAFgFQAFgGAAgMIAAguQAAgLgEgFQgFgGgIAAQgGAAgFACQgFADgFAGIgCADQgIAJgIAAQgFAAgDgDQgDgDAAgFQAAgMAPgIQAOgIAWAAQANAAAJAEQAKAEAFAGQAEAFACAIQABAHAAARIAAAnIABAKQABAEADAAIAEABQAHACAAAFQAAAFgIAFQgIAFgLAAQgFAAgGgGg");
	this.shape_8.setTransform(15.3,-3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnAuQgRgSAAgaQgBgcATgSQASgTAbAAQAXAAAOAOQANANAAAXQAAAIgCACQgCACgJAAIguAAQgEAAgCgCQgCgCAAgDQAAgDACgCQABgCAFAAIAYAAIAGgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgIgIgLAAQgOAAgHANQgHAMAAASQAAASAKAOQAJAOAPAAQAJAAAHgCQAGgCAFgEIAFgDQAGgFAEAAQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAADgCAEQgEAEgEAEQgLAJgKAEQgKAEgMAAQgZAAgRgSg");
	this.shape_9.setTransform(2.2,-3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag9BXQgHgCAAgFQAAgFAGgDIAIgEQACgCABgTIABgvIgBgsQgBgTgCgCIgHgFQgHgCAAgGQAAgEAGgCQAGgCAUAAIBLAAIAMgBIAGgBIADAAIACADQADAEACAIQACAJAAAGQAAAFgCADQgCADgEAAQgEAAgFgIIgDgGQgDgEgFgCQgGgCgJAAIgQAAIgRABQgGACgCADQgCACgBAIIgBAXIAAAKQAAAGABACQAAAAABAAQAAAAABABQAAAAABAAQABAAABAAIATAAQAKAAADgDQAEgDABgHIAAgCQADgNAGAAQAFAAACAGQACAHAAAYQAAAWgCAGQgCAHgFAAQgGAAgDgNIAAgCQgBgHgEgDQgDgDgKAAIgTAAQgEAAgBACQgBACAAAIIAAAJIABAiQABAIACABIAFADQAHADABAFQgBAFgGACQgHACgTAAQgUAAgGgCg");
	this.shape_10.setTransform(-11.4,-6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAuQgRgSgBgaQAAgcASgSQASgTAcAAQAXAAAOAOQAOANgBAXQABAIgDACQgCACgJAAIguAAQgEAAgCgCQgCgCAAgDQAAgDACgCQABgCAEAAIAZAAIAGgBQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgIgIgLAAQgOAAgHANQgHAMAAASQAAASAKAOQAJAOAPAAQAJAAAHgCQAFgCAHgEIAEgDQAGgFADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAADgCAEQgDAEgFAEQgLAJgKAEQgKAEgMAAQgZAAgRgSg");
	this.shape_11.setTransform(-32.1,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMAzQgHgMgRgnIgHgSQgJgXgFgDIgEgCQgHgCAAgFQAAgFAGgCQAGgCAUAAQAQAAAGACQAGACAAAFIAAAEIgDACIgEACQgFACAAACIADAKIAJAYIAKAXQADAFABAAQABAAAAAAQAAAAABgBQAAAAABgBQAAAAABgBIAFgLIAOgeQAEgMAAgDIgBgFIgDgDIgDgBQgGgDAAgDQAAgFAGgCQAFgCAPAAQANAAAFACQAFACAAAFQAAAFgGACIgEABQgGADgKAYIgDAIIgFAKQgcA/gHAAQgFAAgHgMg");
	this.shape_12.setTransform(-44.8,-3.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVBXQgGgCAAgFQAAgFAGgCIADgBQADgBACgEIABgOIAAgIIAAgKIAAgMQAAgUgBgFQgBgFgDgCIgFgCQgIgDAAgEQAAgCACgCIAIgFIASgGIAMgCQAEAAABACQACADAAAFIAAAHIgBAGIgBAeIAAABIAAAeQAAAMABAEQABAGADAAIAEACQAHADAAAEQAAAFgGADQgGABgQAAQgSAAgGgCgAgOg9QgGgEAAgHQAAgGAGgFQAGgFAIAAQAHAAAFAFQAGAEAAAGQAAAHgGAFQgGAEgHABQgIAAgFgFg");
	this.shape_13.setTransform(-54.7,-6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFBJQgHgBgEgFQgEgEgCgGQgCgHAAgTIAAhAIgLAAIgEgBIgBgDIAAgDQAAgEANgKIAFgFIAFgEQANgMAEABIADABQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAYIAbAAIAEABIABAEIAAADQAAADgBACIgEABIgZAAIgCABIgBADIAAA8QAAAPADAFQACADAHAAQAEAAAGgBIAJgCQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgKAGQgLAHgNgBQgHAAgFgCg");
	this.shape_14.setTransform(-62.4,-5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJA/IgMgCIgEACIgEABIgCAAIgDgCQgEgDgDgKQgEgKAAgJQAAgEADgDQACgCACAAQAGAAAGAKIAFAHQADAFAGADQAHACAGAAQAIAAAFgEQAFgEgBgHQAAgKgTgKIgHgDQgTgKgHgHQgGgIAAgLQgBgQALgKQAMgKARAAIAIAAIAIACIAHgCIADgBQAGAAAGAKQAFAJAAALQAAAEgBADQgCACgEAAQgDAAgCgCQgDgDgEgGQgEgHgFgDQgFgDgGAAQgHAAgEAEQgEAEAAAGQAAAGAEAEQAEAEAPAIIABABQAiAQAAATQAAARgNAMQgNALgUAAg");
	this.shape_15.setTransform(-72.1,-3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnAuQgSgSAAgaQABgcARgSQASgTAbAAQAYAAANAOQAOANABAXQgBAIgCACQgCACgJAAIguAAQgEAAgDgCQgCgCAAgDQAAgDACgCQADgCADAAIAZAAIAHgBQAAAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgMgIgIQgHgIgLAAQgPAAgHANQgHAMAAASQAAASAKAOQAKAOAOAAQAJAAAGgCQAHgCAGgEIAEgDQAGgFADAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAABQABAAAAABQAAADgEAEQgDAEgEAEQgLAJgKAEQgKAEgLAAQgaAAgRgSg");
	this.shape_16.setTransform(-83.7,-3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9BXQgHgCAAgFQAAgFAHgDIAIgEQABgCABgTIABgvIgBgsQgBgTgBgCIgIgFQgHgCAAgGQAAgEAGgCQAGgCAVAAIBJAAIAMgBIAGgBIAEAAIACADQACAEADAIQACAJAAAGQAAAFgCADQgCADgDAAQgFAAgFgIIgEgGQgCgEgGgCQgFgCgIAAIgRAAIgRABQgGACgCADQgCACgBAIIgBAXIAAAKQAAAGABACQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIATAAQAKAAAEgDQAEgDABgHIABgCQACgNAGAAQAFAAACAGQACAHAAAYQAAAWgCAGQgCAHgFAAQgGAAgCgNIgBgCQgBgHgEgDQgEgDgKAAIgTAAQgDAAgBACQgBACAAAIIAAAJIABAiQAAAIADABIAFADQAIADgBAFQABAFgHACQgHACgTAAQgTAAgHgCg");
	this.shape_17.setTransform(-97.3,-6.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA8QgGgBAAgGQAAgEAGgCIADgCQADgBABgEQACgEAAgKIgBgIIAAgKIAAgGQAAgXgBgGQgBgHgCgCIgGgCQgHgCAAgEQAAgDADgCQABgCAGgCIAQgFIALgCQAGAAACAQIAAADIAAAAQAHgKAHgFQAHgGAGAAQAJAAAFAGQAFAFAAAJQAAAIgEAFQgEAFgGAAIgHgCIgFgDIgDgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgIAAgDALQgDAMAAAlQAAAKABAGQACAFADABIAFACQAHACAAAFQAAAEgHACQgGACgRAAQgSAAgGgCg");
	this.shape_18.setTransform(44.9,-32.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAbA+QgCgCAAgEIAAgJIAAAAIgBAAIgEADIgBACQgHAGgHACQgGADgKAAQgIAAgIgDQgJgDgFgHQgGgHgCgKQgDgJABgaIAAgIIAAgJIAAgCQAAgKgBgDQgCgDgFgCIgEgBQgIgCABgEQgBgDADgCQACgCAJgDIAQgFIAOgCQADAAABADQACACAAAGIgBAFIgBAtQAAAYAGAKQAFAJAMAAQANAAAHgMQAFgNABgcIAAgKQAAgJgCgDQgBgDgEgCIgGgBQgGgCAAgEQAAgDACgCQACgCAJgDIARgFIAMgCQAEAAACADQABACAAAGIAAAGIgCAyIABAVIAAAIQABAFAHACIACABQAGACABAEQAAADgDACQgBACgGACIgRAGIgOACQgDAAgBgCg");
	this.shape_19.setTransform(32.6,-32.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaBXQgNgEgMgJQgSgNgJgTQgKgUAAgYQABgnAYgZQAZgYAmAAQAQAAANAFQAOAEALAJQARANAJAUQAJAUAAAXQAAAPgFANQgDAOgJALQgLAQgTAJQgTAJgWAAQgNAAgOgEgAgng4QgOAQAAAcQAAAmARAYQAQAYAZAAQAWAAAOgRQANgRAAgcQAAglgRgYQgRgYgZAAQgVAAgNARg");
	this.shape_20.setTransform(15.8,-35.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQA8QgFgBAAgFQgBgEAHgDIAEgCQADgBABgFIABgTQAAgmgFgKQgFgKgNAAQgFAAgGAEQgGAEgDAHQgDAFgBAJIgBAhIABAQQABAEADABIAEACQAGADABAEQAAAFgHACQgFABgQAAQgTAAgGgCQgHgBAAgGQABgEAFgCIAEgCQADgBACgEIAAgOIAAgIIAAgKIAAgLQAAgTAAgHQgCgFgCgCIgFgCQgIgCAAgEQAAgCACgDIAHgEIASgGIANgCQADAAACACQACACgBAEIAAAIIAAABIABAAIABAAIAAAAIAEgDIACgCQANgNAOAAQAKABAHAEQAIADAHAHQAFAHADAJQACAJAAATIAAAQIAAAIIAAAHIABANQABADADABIADACQAGACAAAEQAAAGgFABQgGACgTAAQgRAAgGgCg");
	this.shape_21.setTransform(-7.9,-32.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgVBXQgGgCAAgFQAAgFAGgCIADgBQADgBACgFIABgNIAAgIIAAgKIAAgNQAAgTgBgFQgBgGgDgBIgFgCQgIgDAAgDQAAgDACgDIAIgDIASgHIAMgCQAEAAABACQACADAAAFIAAAIIgBAFIgBAeIAAABIAAAeQAAAMABAEQABAGADABIAEABQAHADAAAFQAAAFgGACQgGABgQAAQgSAAgGgCgAgOg9QgGgEAAgGQAAgHAGgFQAGgFAIAAQAHAAAFAFQAGAEAAAHQAAAGgGAFQgGAFgHAAQgIgBgFgEg");
	this.shape_22.setTransform(-18.6,-35.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgJA/IgMgCIgEACIgDABIgDAAIgDgCQgEgDgEgKQgDgKAAgJQAAgEACgDQADgCADAAQAFAAAGAKIAFAHQADAFAHADQAGACAGAAQAIAAAFgEQAEgEAAgHQABgKgUgKIgHgDQgTgKgHgHQgHgIAAgLQAAgQAMgKQAKgKATAAIAHAAIAJACIAFgCIAEgBQAGAAAGAKQAFAJABALQAAAEgCADQgCACgEAAQgCAAgDgCQgDgDgDgGQgFgHgFgDQgFgDgHAAQgGAAgEAEQgFAEABAGQgBAGAFAEQAEAEAOAIIACABQAiAQAAATQAAARgNAMQgNALgUAAg");
	this.shape_23.setTransform(-34.1,-32.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBAkIgJg1IAAgCIAAgDQAAgGADgDQADgEAEABQAFgBADAEQADADAAAGIAAADIAAACIgIA1g");
	this.shape_24.setTransform(-41.4,-40.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFBKQgHgCgEgFQgEgEgCgGQgCgHAAgTIAAhAIgLAAIgEgBIgBgDIAAgDQAAgEANgKIAFgFIAFgEQANgMAEAAIADACQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABIAAAWIAbAAIAEABIABAFIAAADQAAADgBACIgEABIgZAAIgCABIgBADIAAA8QAAAQADADQACAFAHAAQAEAAAGgCIAJgDQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAHgKAGQgLAGgNAAQgHAAgFgBg");
	this.shape_25.setTransform(-47.8,-34);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWA6IgHgHIgFADQgOAKgPAAQgSAAgLgKQgLgLAAgRQAAgTAOgKQAOgLAZAAQAGAAADACQADACAAAEQAAAGgIAAQgMAAgHAGQgHAGAAALQAAAJAGAGQAGAGALAAQALAAAFgFQAFgGAAgMIAAguQAAgLgEgFQgFgGgIAAQgGAAgFACQgFADgFAGIgCADQgIAJgIAAQgFAAgDgDQgDgDAAgFQAAgMAPgIQAOgIAWAAQANAAAJAEQAKAEAFAGQAEAFACAIQABAHAAARIAAAnIABAKQABAEADAAIAEABQAHACAAAFQAAAFgIAFQgIAFgLAAQgFAAgGgGg");
	this.shape_26.setTransform(-58.5,-32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AARBYQgGgCAAgFQAAgEAGgDIAFgCQACgBACgFIABgSQAAgogFgJQgFgKgNAAQgGAAgGAEQgFAEgEAGQgCAFgBAJIgBAhQAAANABAEQABAEACABIAFACQAGADAAAEQAAAFgGACQgGABgQAAQgTAAgGgCQgGgBAAgGQAAgEAGgCIADgCQAEgBABgFIABgSIAAgVIAAgSIAAg3QgBgNgCgDQgBgBgIgDQgHgBAAgFQAAgDADgCIAOgHIAMgDIAMgCQAEAAABADQACACAAAGIAAAFIgBAxIAAAFIAAAEIACABIADgEIAEgEQAGgHAHgCQAGgDAIgBQAVAAAKAOQAKAOAAAbIAAALIAAAVIAAAHQAAAGACADQABADADABIADACQAGACAAAEQAAAGgGABQgGACgTAAQgQAAgGgBg");
	this.shape_27.setTransform(-72.6,-35.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AARArIgahDIgNghQgFgKgEgDIgHgDQgGgCAAgFQAAgFAGgCQAFgCAYAAQAWAAAFACQAGACAAAFQAAAFgJADIgBABIgEACQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAAEAGARIAUA0IAJAUQADAFABAAQACAAADgEIAIgSIACgFQAZg8AAgHQAAgEgCgDQgCgCgEgCIgCgBQgIgDAAgFQAAgFAFgCQAFgCAUAAQATAAAFACQAFACAAAFQAAAFgHADIgFACQgIAGgQAqIgLAYIgXA6IgEAKQgIAUgFAAQgGAAgSgvgAgyBQIgBgEQgQgigYg+IgLgdIgHgPQgDgFgEgCIgEgCQgHgCAAgFQAAgFAFgCQAGgCAXAAQAXAAAGACQAFACAAAFQAAAFgJADIgBABIgEACQgBABAAAAQAAABAAAAQgBABAAABQAAAAAAABQAAAEAFAOIAVA2IAJAWQADAEACAAQACAAADgGIAFgOQADgIAHAAQAHAAAAAIIgBAIIgQAnIgEAJQgHAUgFAAQgEAAgFgKg");
	this.shape_28.setTransform(-92.3,-35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.whatsinour, new cjs.Rectangle(-106.8,-52.1,158.3,91), null);


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
	this.shape.setTransform(0,-26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B63100").s().p("AnSCgQhCAAgwgvQgugvgBhCQABhBAugvQAwgvBCAAIOmAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAg");
	this.shape_1.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.updatedctavid, new cjs.Rectangle(-63.7,-43,127.5,34), null);


(lib.updatedctaseventeen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D63900").ss(2,1,1).p("AnTifIOnAAQBCAAAuAvQAwAvAABBQAABCgwAvQguAvhCAAIunAAQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAg");
	this.shape.setTransform(0,-26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnSCgQhCAAgwgvQgugvgBhCQABhBAugvQAwgvBCAAIOmAAQBCAAAuAvQAwAvgBBBQABBCgwAvQguAvhCAAg");
	this.shape_1.setTransform(0,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.updatedctaseventeen, new cjs.Rectangle(-63.7,-43,127.5,34), null);


(lib.spiralcutham = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABKBTQgHgCgBgHQAAgGAJgDIAGgDQAFgDABgHQACgJAAgUQAAgxgHgNQgHgNgSAAQgTAAgJARQgIAQAAAoIAAAJQAAATACAGQABAFAFADIAFACQAHACAAAGQABAHgIADQgIADgZAAQgXAAgJgDQgHgCgBgHQAAgGAJgDIAGgDQAEgCACgHIABgaQAAg1gHgNQgGgNgSAAQgJAAgIAFQgIAFgFAJQgDAIgCAOQgCANAAAfQAAAPACAHQABAFAEACIAHADQAIADAAAGQAAAHgIACQgJADgWAAQgZAAgIgDQgJgCABgIQgBgGAJgCIAEgCQAEgDACgFQACgGAAgMIgBgMIAAgOIAAgKQAAgdgBgKQgBgJgEgCIgIgDQgJgDgBgGQAAgEAEgDIAKgFIAZgIIAQgEQAEAAADADQACADAAAGIAAAJIAAACIABACIABAAIABAAIABgBIADgDIACgDQAUgSAVAAQAIAAAHADQAHACAHAEQAFAFAHAIQAGAHABAAQADAAAEgFIAHgIQAMgJAHgDQAIgEAKAAQAUAAAPAIQAOAIAHAOQAHAQAAAwIAAARIAAAJIAAAIQAAAJACAEQACAFAEACIAEACQAJACgBAGQAAAHgIADQgHADgaAAQgYAAgJgDg");
	this.shape.setTransform(-24.9,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgHAEQgUAOgWAAQgYAAgPgOQgPgPAAgXQAAgbATgOQAUgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgQAAgKAIQgKAIAAAOQAAANAJAIQAIAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgGAHIgEAFQgKANgLAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAeAAQASAAAOAFQANAFAHAKQAFAGADAKQACALAAAYIAAA1QgBAJACAFQACAFADABIAFABQALADAAAGQAAAIgMAGQgLAHgPAAQgHAAgJgJg");
	this.shape_1.setTransform(-48.9,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlB2QgJgDAAgHQAAgHALgEIAHgEQADgBABgLIABgnIAAgYIgBgHQgCgDgIgBQgJgBgfAAIgjABQgJAAgDADIgCAFIgBAMIAAAPIABAnQABALADABIAIAEQAKAEAAAHQAAAHgJADQgKADgaAAQgaAAgKgDQgJgDAAgHQAAgHAKgEIAIgEQADgCACgVQABgWAAgxIgBg/QgCgZgCgDQgBgCgJgEQgJgEAAgGQAAgHAHgCQAIgDAeAAQAdAAAIADQAIACAAAHQAAAGgKAEIgIAEQgDACgBALIgBAxQAAAHAGACQAGACAZABIANAAIAjgCQALgBADgCIACgDIAAgHIAAgHIgBgpQgBgJgDgCIgHgEQgLgEAAgGQAAgHAIgCQAIgDAdAAQAeAAAIADQAHACAAAHQAAAGgKAEIgIAEQgDADgCAWQgBAXAAAtIABBAQABAZADAEQABACAJAEQAJAEAAAGQAAAHgJADQgKADgaAAQgbAAgJgDg");
	this.shape_2.setTransform(-70.8,16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgFQgHgGgCgJQgDgKAAgZIAAhZIgPAAIgFgBIgBgEIAAgEQAAgGARgOIAIgHIAGgFQARgPAGAAIAFABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAfIAlAAQAEABACABQABACABAFIAAADQgBAFgBABQgCACgEAAIgiAAIgDACIgBAEIAABSQAAAWAEAFQADAGALAAQAEAAAJgDIAMgDQADAAACACQADACAAAEQAAAKgOAIQgOAJgTAAQgJgBgJgCg");
	this.shape_3.setTransform(66,-21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgKAEgMAAQgNAAgLgFQgKgEgIgJQgIgKgDgNQgEgOABgjIAAgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAEAAACAEQACADAAAIIAAAGIgCA/QAAAhAIANQAHANARAAQASAAAJgRQAIgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgHgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIARgDQAGAAABAEQACADAAAIIAAAJIgCBEIAAAdIABALQACAHAIADIAEABQAJADAAAGQAAAEgDACQgDADgHADIgYAIQgMADgFAAQgGAAgBgDg");
	this.shape_4.setTransform(49.8,-20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZB1QgXgIgRgQQgTgRgLgZQgKgZAAgdQABgXAGgUQAHgVANgQQARgUAYgLQAXgKAbAAIAVABIAgAHIAEgBIAMgDIAGACIAEAFQAGAJADANQADANAAAKQAAAHgCADQgDAEgFAAQgHAAgNgPIgKgMQgKgKgNgFQgOgFgQAAQgfAAgTAXQgTAWAAAnQAAAxAYAgQAYAgAkAAQAOAAAOgFQANgEAIgJIAIgJQAIgKAFAAQAEAAADAEQADAFAAAIQgBAPgEAJQgEAJgHAAIgCAAIgDAAQgPAIgQAEQgQAEgRAAQgYAAgWgIg");
	this.shape_5.setTransform(28.7,-23.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggASQgGAAgCgCQgCgCAAgFIACgIIADgJQACgEADgCQADgCAHAAIAIABIAOAAIAdgBIAEgBQAFAAADACQACACAAAFQAAAJgFAIQgGAIgIAAIgHAAIgKgBIgkACIgDAAg");
	this.shape_6.setTransform(11.3,-20.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgbB5QgJgDAAgIQAAgFAHgDIAJgEQADgDABgKIABgiIAAgaIAAgfIAAgNQAAgqgCgMQgBgMgEgCIgKgEQgLgDAAgGQAAgEAEgDQADgCAMgEIAWgHIARgCQAFAAACADQACADAAAIIAAANQgCA8AAA8IABA5QABAMADADIAJAFQAIADAAAHQAAAGgIADQgJACgWAAQgYAAgIgCg");
	this.shape_7.setTransform(0.5,-24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgIAEQgUAOgUAAQgZAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgLAIAAAOQABANAIAIQAJAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgHAHIgDAFQgLANgKAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGACAKQADALAAAYIAAA1QAAAJABAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgMAHgPAAQgHAAgJgJg");
	this.shape_8.setTransform(-12.6,-20.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBUQgIgDAAgIQAAgFAIgDIAEgDQAFgCABgFQACgGAAgMIAAgMIAAgNIAAgKQAAgfgCgJQgBgJgEgCIgHgDQgKgDAAgGQAAgEADgCQADgEAHgDIAXgHIAPgDQAIAAADAXIAAADIABABQAIgOAKgGQAJgIAKAAQALAAAHAIQAHAGAAAMQAAALgFAIQgGAGgJAAIgJgCIgHgEIgDgHQgCgFgCABQgMAAgEAPQgEARAAAyQAAAOABAIQACAHAFACIAGADQAKACAAAIQAAAGgJADQgJACgWAAQgaAAgIgCg");
	this.shape_9.setTransform(-27.8,-20.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgIQAAgFAIgDIAEgCQAFgCABgGQACgGAAgMIAAgLIAAgOIAAgSQAAgagBgHQgCgIgDgCIgIgDQgKgDAAgGQAAgDADgDQADgDAHgDIAagIIARgEQAEAAACAEQACADAAAIIAAAKIAAAHIgBArIAAABIgBAoQAAARABAGQACAHAEACIAGACQAIADAAAHQAAAGgIADQgIADgWAAQgZAAgIgDgAgUhUQgHgFAAgJQAAgKAIgHQAIgGALgBQAKABAHAFQAHAHAAAJQAAAJgHAGQgIAHgLAAQgLAAgHgGg");
	this.shape_10.setTransform(-39.5,-23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_11.setTransform(-54.6,-17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpB5QgSgEgMgHQgHgEgEgOQgFgOAAgUQAAgHADgEQADgFAGAAQAIAAAIAPIAEAIQAKATANAIQANAJARAAQASgBANgKQAMgMAAgPQAAgYgxgVIgFgDQgpgRgNgOQgOgPAAgYQAAgfAXgSQAWgUAjAAIATACIAYAFIAGgFIAGgBQAEAAADACQAEADADAGQAGALADAKQADALAAAJQAAAGgCADQgDADgEAAQgJAAgJgMIgCgEQgKgMgLgGQgLgFgOAAQgSgBgLAJQgLAJAAAPQAAAOAJAJQAJAJAjAPIAIAEQAeAMANALQAJAJAFALQAFALAAANQAAAjgYATQgYATgqAAQgUAAgTgEg");
	this.shape_12.setTransform(-73.8,-23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.spiralcutham, new cjs.Rectangle(-85.4,-45.9,159.5,83.8), null);


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
	this.shape.setTransform(30.2,-23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D63900").s().p("AgOAhQgGgCgFgFQgFgFgDgHQgDgGAAgIQAAgHADgHQADgGAFgFQAEgFAHgDQAHgCAHAAQAIAAAHACQAGADAFAFQAFAFADAGQADAHAAAHQAAAIgDAGQgDAHgFAFQgFAFgGACQgHADgIAAQgHAAgHgDgAgJgWQgEACgDADQgDAEgBAEQgCAFAAAEQAAAFACAEQABAFADADQADAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEQADgDABgFQACgEAAgFQAAgEgCgFQgBgEgDgEQgDgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_1.setTransform(20.2,-23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D63900").s().p("AARAjIAAglIAAgIIgCgGIgGgFQgDgCgEAAQgIAAgFAGQgEAGAAALIAAAjIgOAAIAAg1IAAgHIgBgHIANAAIAAAFIAAAGIABAAIAEgFIAFgFIAGgCIAGgBQAHAAAFACIAIAGQADAEACAFQABAFAAAGIAAApg");
	this.shape_2.setTransform(11.6,-23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D63900").s().p("AgSAjIAAg1IgBgHIAAgHIANAAIAAAGIAAAFIABAAQADgGAEgEIAGgCIAHgBIAFAAIAAANIgHgBQgFAAgDACIgFAFQgDADgBAEIgBAIIAAAjg");
	this.shape_3.setTransform(1.7,-23.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63900").s().p("AgMAiQgGgDgFgFQgFgEgDgHQgDgHAAgIQAAgHADgHQADgGAFgFQAEgFAHgDQAHgCAGAAQAIAAAGACQAGADAFAEQAEAFACAGQADAHAAAIIAAACIgBACIg1AAIACAIIAEAHQAEADADABQAEACAEAAQAHAAAFgDQAFgDADgFIAJAIQgFAHgHAEIgIACIgJABQgHAAgHgCgAAUgFQABgEgCgEQgBgDgCgDQgDgDgDgBQgEgCgFAAQgDAAgEACQgEABgDADQgDADgBADQgCAEAAAEIAnAAIAAAAg");
	this.shape_4.setTransform(-5.5,-23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D63900").s().p("AgPA1QgGgDgFgFQgEgFgDgHQgDgGABgIQgBgHADgHQADgFAEgFQAFgFAGgDQAHgDAHAAQAHAAAHAEQAGADADAFIABAAIAAgzIAOAAIAABtIgOAAIAAgLIAAAAQgEAGgHADQgGAEgGAAQgJAAgGgDgAgIgDIgIAFQgCADgBAFQgCAEAAAFQAAAFACAFQABAEACADQADAEAFACQAEACAFAAQAFAAAEgCQAFgCADgDQADgEABgEQACgFAAgFQAAgFgCgEQgBgFgDgDIgIgFQgEgCgFAAQgFAAgEACg");
	this.shape_5.setTransform(-14.5,-25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63900").s().p("AgSAjIAAg1IgBgHIAAgHIANAAIAAAGIAAAFIABAAQADgGAEgEIAGgCIAHgBIAFAAIAAANIgHgBQgFAAgDACIgFAFQgDADgBAEIgBAIIAAAjg");
	this.shape_6.setTransform(-21,-23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D63900").s().p("AgLA1IgKgDQgKgEgHgHQgHgHgEgKQgFgKAAgMQAAgLAFgKQAEgKAHgHQAHgHAKgEIAKgDIALgBQAMAAAKAEIAJAFIAIAGQAIAHADAKQAEAKAAALQAAAMgEAKQgDAKgIAHIgIAGIgJAFQgKAEgMAAIgLgBgAgPglQgHADgFAGQgGAFgCAIQgCAIgBAHQABAIACAIQACAHAGAHQAFAFAHADQAHADAIAAQAJAAAHgDQAHgDAGgFQAFgHACgHQADgIAAgIQAAgHgDgIQgCgIgFgFQgGgGgHgDQgHgDgJAAQgIAAgHADg");
	this.shape_7.setTransform(-30.2,-25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.seventeenordernow, new cjs.Rectangle(-38.4,-36.4,76.4,21.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AhNBvQgIgHAAgLQAAgIAGgGQAGgGAIAAIAIABIAFAEIAEAGQAFAHADAAQAIAAAJgMQAJgNAAgNQAAgOgMgbIgCgEIgag6IgQghQgDgGgJgEIgBAAQgFgCgCgDQgCgCAAgDQAAgIAIgDQAJgDAZAAQAYAAAIADQAJADAAAGIgBAGIgDADIgGADQgHACAAADIADANIAOAhIANAgQAEAIADAAQABAAAEgIIALgbIANghQADgMAAgEQAAgFgJgFQgJgGAAgEQAAgGAHgCQAIgDATAAQAUAAAHADQAHADAAAGQAAAHgJACIgHACQgKAGgKAcIgFANIgWA1QgbBGgRAVQgSAVgZAAQgMAAgIgHg");
	this.shape.setTransform(37,19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDADQgDAEgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgCAFAAIAjAAIAIgBQACgCAAgDQAAgRgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEABQAEAAACACQADADAAADQAAAEgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_1.setTransform(19.6,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3B7IgHgBQgIgDgQgVIgHgJIgDgDQgog1gDAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIAAAHIAAAHIABAjQABAKACADIAKAFQAHADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgDAAgIQAAgFAIgDIAEgCQAFgDACgIQACgIAAgTIgBgVIAAgaIAAgUIgBg/QgBgPgCgDQgCgCgIgCIgFgCIgHgDIgBgFQAAgEADgDQAEgCALgEIAXgHIARgCQAFAAACADQADADAAAIIgBAgIgBAsIAAApIAAAJQABAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIAHgDIAMgKIAQgQQAEgFAAgCQAAgCgGgDQgFgDAAgGQAAgHAHgDQAJgDAYAAQAQAAAHADQAIADAAAGQAAAIgMADQgNADgFADQgGAEgOAOIgDACIgGAHIgBADQAAADAOATIACADIAdAjQAMAOAGAEQAFADAKAEQALADAAAHQAAAHgHADQgIADgSAAg");
	this.shape_2.setTransform(2,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgyBUQgIgEAAgHQAAgFAIgDIAEgDQAFgBABgHQACgFAAgNIAAgLIAAgNIAAgKQAAgfgCgJQgBgJgEgCIgHgDQgKgEAAgFQAAgEADgCQADgDAHgEIAXgHIAPgDQAIAAADAXIAAAEIABAAQAIgOAKgGQAJgIAKAAQALAAAHAIQAHAGAAAMQAAALgFAIQgGAGgJAAIgJgCIgHgEIgDgHQgCgFgCABQgMAAgEAPQgEARAAAyQAAAOABAIQACAHAFACIAGADQAKACAAAIQAAAFgJAEQgJACgWAAQgaAAgIgCg");
	this.shape_3.setTransform(-14,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBVQgCgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgNAAQgNAAgKgFQgLgEgIgJQgIgKgDgNQgDgOgBgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAEAAADAEQACADAAAIIgBAGIgBA/QAAAhAGANQAHANASAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEAEgDQACgDAMgEIAXgGIASgDQAEAAACAEQADADAAAIIAAAJIgDBEIAAAdIACALQABAHAJADIACABQAKADAAAGQAAAEgCACQgDADgIADIgYAIQgLADgHAAQgEAAgDgDg");
	this.shape_4.setTransform(-30.9,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjB3QgJgCAAgIQAAgHAJgDQAJgEACgCQACgDABgbIABhPIgBgsIgBgbQgBgFgDgBQgDgCgGAAIgIAAQgLAAgHADQgGADgFAGIgFAMIgFALIgFAFQgDACgDAAQgFAAgCgEQgCgFAAgKQAAgWAFgOQAFgNAIAAIACAAQANACAUAAIBiAAQAVAAANgCIACAAQAIAAAFANQAFAOAAAWQAAAKgCAFQgCAEgGAAIgFgCIgFgFIgFgLIgFgMQgFgGgGgDQgHgDgMAAIgHAAQgGAAgDACQgDABgBAFIgBAbIgBAsIABBPQABAbACADQACACAJAEQAJADAAAHQAAAIgKACQgJADgaAAQgZAAgKgDg");
	this.shape_5.setTransform(-51.6,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJBlQgUgWAAgkQAAgpAXgZQAXgaAjAAIAMACQAFABADAEQADADAAAFQAAAIgLAAIgEAAIgFAAQgTAAgLAQQgLAOABAaQgBAdAMARQAMASAUAAQAQAAAKgKQAKgJAAgUIAAguIAAhMQAAgLgDgFQgCgFgGgCIgEgBQgLgDAAgGQAAgEAEgEQAFgDAMgFIASgFIARgCQAFAAADADQACADAAAIIAAAJIgCBmIABBGQACAQACACIAMAFQAIACABAFQgBAIgYAIIgRAFIgMABQgFgBgCgCQgCgCAAgGIAAgIIAAgEIgBgBIgGAEIgHAFQgKAIgJADQgKAEgJAAQggAAgUgXg");
	this.shape_6.setTransform(53,-27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgmAZgaQAYgaAmAAQAgAAATATQATATAAAfQAAALgDACQgDAEgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIAjAAIAIgBQACgBAAgDQAAgRgLgLQgKgLgPAAQgUAAgKARQgKASAAAYQAAAaAOATQANATAVAAQAMAAAJgCQAIgDAIgGIAGgFQAJgGAEAAQAEAAACACQADADAAADQAAADgEAHQgFAFgHAGQgOAMgOAGQgNAEgQAAQgjABgYgYg");
	this.shape_7.setTransform(33.6,-24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJBlQgIgDgFgGQgGgFgDgJQgCgKAAgYIAAhZIgQAAIgFgCIgBgEIAAgEQAAgFARgQIAIgFIAGgGQARgPAGgBIAFACQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAAgIAlAAQAFAAABABQACABgBAFIAAAFQABADgCADQgBACgFAAIgiAAIgDABIgBAEIAABTQAAAVAEAGQADAFAKAAQAFAAAJgDIAMgCQADAAACACQADACAAADQAAAJgOAJQgOAJgSgBQgKAAgJgCg");
	this.shape_8.setTransform(18.9,-25.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgMBXIgSgDIgEADIgGABIgDAAIgEgDQgGgEgEgOQgFgOAAgMQAAgGADgDQADgEAEAAQAIAAAHAOIAHAKQAFAHAJADQAJAEAJABQALAAAGgGQAHgGgBgJQAAgOgbgOIgKgEQgagNgJgLQgJgLAAgQQAAgWAPgNQAQgOAYAAIALABIAMACIAIgDIAEgBQAJAAAIANQAHANAAAPQABAGgDADQgDAEgFgBQgDAAgEgDIgJgLQgGgLgHgEQgGgDgKAAQgIgBgHAGQgFAGAAAIQAAAIAFAFQAHAHATAKIACABQAvAWAAAcQAAAXgRAPQgTAQgaAAg");
	this.shape_9.setTransform(5.5,-24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgIAEQgUAOgUAAQgZAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgLAIAAAOQABANAIAIQAJAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgHAHIgDAFQgLANgKAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGACAKQADALAAAYIAAA1QAAAJABAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgMAHgPAAQgHAAgJgJg");
	this.shape_10.setTransform(-10.4,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlAAQAkAAAXAYQAXAYAAAkQAAAngZAaQgYAZgkAAQgkAAgYgYgAgfgxQgKAOAAAWQAAAgAOAXQAOAWATAAQARAAAKgOQAKgOAAgXQAAgfgOgXQgOgWgTAAQgRAAgKAOg");
	this.shape_11.setTransform(-29,-24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkBUQgQg2gMgKQgLgLgRAAQgNAAAAgLQAAgKALAAQAbAAAOgLQANgLAAgXQAAgWgOgLQgNgLgaAAQgNAAgEACQgFABgCAFIgCAPIgBAiIAABJIABAyQABAMAEACIAHAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDQgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgCQAFgDALAAIAlAAIAhgBIAbgBQAkAAAUAQQATAPAAAeQAAAWgNAQQgNAQgXAHIAAACQASADALALQAKALAIAbIAEARQAHAaAKAAIAEAAIAGAAQAEAAACACQADADAAADQAAAIgKAFQgJAFgQAAQgiAAgLgng");
	this.shape_12.setTransform(-50.1,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.roastedturkey, new cjs.Rectangle(-64.5,-49.9,129.1,83.8), null);


(lib.organicturkeygravy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+BuQgVgOAAgSQAAgIAFgGQAEgFAJgBQAHAAAEAFQAEADACAJQAEAMALAGQAKAIAVAAQAVAAAPgJQAPgIAAgNQAAgIgGgFQgFgEgKAAIgUACIgZABQgeAAgQgKQgQgLAAgNQAAgJAGgIQAFgGANgIQgKgJgFgKQgFgLAAgNQAAgcAVgRQAUgTAgAAIARACIAZAFQAHAAAHgEQAHgCALgIIAFAGIACAFQAAAHgFAHQgGAHgKAEIAGAOIABAOQAAAcgUARQgUAQggAAIgSgBIgQgCIgFAFIgCAGQAAAJAIADQAIAEARAAIAYgBIAagDQAYAAAMAKQANAKAAARQAAAbgbASQgaARgoAAQgfAAgWgMgAgbhTQgJALAAAQQAAASAJALQAIAKAOAAQANAAAKgKQAJgMAAgQQAAgRgJgLQgJgLgOAAQgNAAgJALg");
	this.shape.setTransform(48.3,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWBUQgHgDAAgGQgBgHAJgDIAGgDQAEgCACgHQABgIAAgSQAAg1gHgNQgGgOgSAAQgJAAgHAGQgJAFgEAKQgEAGgBAOQgCAMAAAhQAAARACAFQABAFAEACIAGADQAJADAAAHQgBAGgHADQgJACgVAAQgbAAgHgCQgJgEAAgHQAAgFAJgDIADgDQAFgBACgHQABgFAAgNIAAgLIAAgNIAAgRQAAgbgBgHQgCgJgDgBIgHgDQgLgEAAgFQAAgDAEgDQACgDAIgEIAYgIIASgCQAEAAACACQACADAAAFIAAALIABACIABABIABAAIAAgBIAEgEIAEgCQARgSAVAAQAMAAAMAFQAKAGAIAIQAIAKADAMQAEANgBAcIAAAVIAAALIAAAKQAAALACAGQACAEADACIAFADQAIADAAAFQAAAIgHACQgJADgZAAQgXAAgJgCg");
	this.shape_1.setTransform(28.8,15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgIQAAgFAIgDIAEgCQAFgCABgGQACgGAAgMIAAgLIAAgOIAAgSQAAgagBgHQgCgIgDgCIgIgDQgKgDAAgGQAAgDADgDQADgDAHgDIAagIIARgEQAEAAACAEQACADAAAIIAAAKIAAAIIgBAqIAAABIgBAoQAAARABAGQACAHAEACIAGACQAIADAAAHQAAAGgIADQgIACgWAAQgZAAgIgCgAgUhUQgHgGAAgIQAAgKAIgHQAIgHALAAQAKAAAHAHQAHAGAAAJQAAAJgHAGQgIAHgLAAQgLAAgHgGg");
	this.shape_2.setTransform(14,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguB4QgJgCAAgHQABgFAHgDIAEgDQAFgBABgGQACgGAAgOIAAgQIAAhQIgTAAQgEAAgCgCQgBgBAAgFIAAgEQAAgFACgBQACgCADAAIASAAIgBgNIgBgMQAAgZAPgPQAQgOAaAAQATAAAMAJQAMAIAAAOQAAAIgEADQgEAFgJAAQgFgBgEgCQgEgCgEgEIgCgHQgGgMgLAAQgGAAgDAEQgDAFAAAGIADASQADAQABALIAYAAQAEAAACACQABABAAAFIAAAEQAAAEgBACQgCACgEAAIgYAAIAABVQAAAWABAGQABAHADACIAIADQAJACAAAIQAAAGgIADQgIACgYAAQgZAAgHgDg");
	this.shape_3.setTransform(6,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvB4QgHgCgBgHQAAgFAIgDIAFgDQAEgBABgGQACgGAAgOIAAgQIAAhQIgTAAQgEAAgBgCQgCgBAAgFIAAgEQAAgFACgBQACgCAEAAIARAAIgCgNIgBgMQAAgZAQgPQAQgOAaAAQATAAAMAJQAMAIAAAOQAAAIgEADQgFAFgHAAQgGgBgEgCQgEgCgDgEIgEgHQgGgMgJAAQgHAAgDAEQgEAFAAAGIAEASQADAQAAALIAZAAQAEAAABACQACABAAAFIAAAEQAAAEgCACQgCACgDAAIgZAAIAABVQABAWABAGQABAHAEACIAGADQAKACAAAIQAAAGgIADQgJACgXAAQgYAAgJgDg");
	this.shape_4.setTransform(-3.5,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgMAAQgNAAgMgFQgLgEgHgJQgIgKgDgNQgEgOAAgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQAEgDAMgEIAWgGIASgDQAFAAACAEQABADAAAIIAAAGIgBA/QgBAhAIANQAHANARAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEAEgDQADgDAMgEIAWgGIARgDQAFAAADAEQABADAAAIIAAAJIgBBEIAAAdIABALQABAHAIADIADABQAKADAAAGQAAAEgDACQgCADgIADIgYAIQgLADgHAAQgEAAgCgDg");
	this.shape_5.setTransform(-19.8,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBlQgIgDgGgFQgGgGgCgJQgCgJgBgaIAAhZIgPAAIgFgBIgBgEIAAgEQAAgGASgOIAHgHIAGgFQARgPAHAAIAEABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAgIAmAAQADgBACACQACABAAAGIAAADQAAAFgCACQgCABgDAAIgjAAIgDACIgBAEIAABSQAAAWAEAFQAEAGAKAAQAEAAAJgDIALgDQAEABACABQADACAAAEQAAAKgOAIQgPAJgSAAQgJgBgJgCg");
	this.shape_6.setTransform(-35.5,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpB5QgSgEgMgHQgHgEgEgOQgFgPAAgSQAAgJADgDQADgFAGAAQAIABAIAPIAEAHQAKATANAIQANAJARAAQASAAANgMQAMgKAAgQQAAgYgxgWIgFgCQgpgRgNgOQgOgQAAgXQAAgeAXgTQAWgUAjAAIATACIAYAFIAGgEIAGgCQAEAAADADQAEACADAGQAGALADAKQADALAAAJQAAAFgCAEQgDADgEAAQgJAAgJgMIgCgEQgKgMgLgGQgLgFgOgBQgSAAgLAJQgLAJAAAPQAAANAJAKQAJAJAjAPIAIAEQAeAMANALQAJAJAFALQAFALAAANQAAAjgYATQgYATgqAAQgUAAgTgEg");
	this.shape_7.setTransform(-51.3,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXB5QgNgEgKgIIgLAHQgFADgEAAIgGgBIgGgCIAAgDQAGgHADgOQACgPAAglIAAgmIAAglQABgfgCgLQgCgKgEgCIgIgDQgLgDAAgGQAAgDAEgDQADgDAMgFIAVgGIAQgCQAGAAADACQACADAAAGIAAAJIgCAxIAABJIABAsQAAAZAHAIQAIAJASAAQAVAAAMgSQALgSAAgfQAAgbgLgPQgLgQgUAAIgGAAIgCABQgNAAgBgMQAAgIANgFQALgFAOAAQAgAAATAWQATAWAAAkQAAAqgXAaQgYAZgoAAQgPAAgPgDg");
	this.shape_8.setTransform(3.8,-27.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBTQgIgDAAgHQAAgGAIgDIAEgCQAFgBABgHQACgFAAgNIAAgLIAAgOIAAgKQAAgdgCgKQgBgJgEgCIgHgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIIAPgDQAIAAADAXIAAAEIABAAQAIgNAKgIQAJgHAKAAQALAAAHAHQAHAHAAAMQAAAMgFAGQgGAHgJAAIgJgCIgHgFIgDgGQgCgEgCgBQgMABgEAPQgEARAAAxQAAAQABAHQACAHAFACIAGACQAKADAAAHQAAAHgJACQgJADgWAAQgaAAgIgDg");
	this.shape_9.setTransform(-11.1,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgmAZgaQAYgaAmAAQAgAAATATQATATAAAfQAAALgDACQgDAEgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIAjAAIAIgBQACgBAAgDQAAgRgLgLQgKgLgPAAQgUAAgKARQgKASAAAYQAAAaAOATQANATAVAAQAMAAAJgCQAIgDAIgGIAGgFQAJgGAEAAQAEAAACACQADADAAADQAAADgEAHQgFAFgHAGQgOAMgOAGQgNAEgQAAQgjABgYgYg");
	this.shape_10.setTransform(-26.8,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlB2QgJgDAAgHQAAgHALgEIAHgDQADgDABgLIABgmIAAgYIgBgHQgCgDgIgBQgJgCgfABIgjABQgJABgDACIgCAFIgBAMIAAAPIABAmQABALADADIAIADQAKAEAAAHQAAAHgJADQgKADgaAAQgaAAgKgDQgJgDAAgHQAAgHAKgEIAIgDQADgDACgVQABgWAAgxIgBg/QgCgZgCgDQgBgDgJgDQgJgEAAgHQAAgGAHgDQAIgCAeAAQAdAAAIACQAIADAAAGQAAAIgKADIgIAEQgDACgBAKIgBAyQAAAHAGADQAGACAZAAIANAAIAjgBQALgBADgDIACgDIAAgHIAAgHIgBgpQgBgJgDgCIgHgEQgLgDAAgIQAAgGAIgDQAIgCAdAAQAeAAAIACQAHADAAAGQAAAIgKADIgIAEQgDADgCAWQgBAXAAAtIABBAQABAaADADQABACAJADQAJAEAAAHQAAAHgJADQgKADgaAAQgbAAgJgDg");
	this.shape_11.setTransform(-48.3,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.organicturkeygravy, new cjs.Rectangle(-63,-49.9,121.7,83.8), null);


(lib.organiccranberrysauce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXB5QgIgDAAgGQAAgHAIgDIAHgDQAEgCABgHQACgIAAgRQAAg2gHgNQgHgOgSAAQgIAAgIAGQgIAFgEAJQgEAGgBAOQgCANAAAgQAAARACAFQABAGADACIAHADQAIADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgEAAgHQAAgFAIgDIAEgDQAFgCACgHQABgHAAgSIAAgcIAAgZIgBhMQgBgSgCgDQgCgDgKgDQgKgDAAgFQAAgFAEgDQAEgDAPgGIARgEIAPgCQAGAAADADQACADAAAIIgBAHIgBBCIAAAJIABAEIACACIAEgFIAGgGQAIgIAKgFQAIgEALAAQAdAAAOATQAOASAAAlIAAAQIAAAeIAAAJQAAAJACAEQACADADACIAFADQAIADAAAFQAAAHgIAEQgIACgbAAQgWAAgIgCg");
	this.shape.setTransform(-26.4,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEgBIgDgCQgFgFgFgNQgFgOAAgMQAAgGADgDQADgEAEABQAIAAAHANIAHAKQAFAGAJAEQAJAFAIAAQALgBAHgFQAGgGAAgJQAAgOgagOIgKgEQgagOgKgKQgJgKAAgRQAAgVAPgOQAQgOAYAAIAKABIANACIAHgDIAFgBQAJAAAIANQAIAOAAAOQAAAGgDADQgCAEgFAAQgFAAgDgEIgJgLQgGgKgHgFQgHgEgJAAQgJABgFAFQgHAGAAAIQAAAIAHAGQAFAFAVALIABABQAvAWAAAbQAAAYgSAQQgRAPgcAAg");
	this.shape_1.setTransform(-43.5,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeBPIgJgJIgIAEQgUAOgVAAQgYAAgPgOQgPgPAAgXQAAgbATgOQAUgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgKAIQgKAIAAAOQAAANAJAIQAJAIAPAAQAPAAAHgHQAHgHAAgSIAAg/QAAgPgGgHQgHgIgLAAQgIAAgHADQgHAEgHAHIgDAFQgLANgLAAQgGAAgEgFQgEgEAAgHQAAgQAUgLQATgLAeAAQASAAAOAFQANAFAHAKQAFAGACAKQACALAAAYIAAA1QABAJABAFQABAFAEABIAFABQALADAAAGQAAAIgMAGQgKAHgPAAQgIAAgIgJg");
	this.shape_2.setTransform(-59.4,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkBVQgCgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgNAAQgNAAgKgFQgLgEgIgJQgIgKgDgNQgDgOgBgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAFAAABAEQADADAAAIIgBAGIgCA/QABAhAGANQAIANARAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgIgCQgJgCAAgGQAAgEADgDQAEgDALgEIAXgGIASgDQAEAAACAEQACADABAIIAAAJIgDBEIAAAdIABALQACAHAJADIADABQAJADAAAGQAAAEgCACQgEADgHADIgYAIQgMADgFAAQgFAAgDgDg");
	this.shape_3.setTransform(-78.7,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARBzQgIgDAAgHQAAgGAIgEIAJgFQADgEABgKIACgeIAAhmQgBgTgIgJQgKgJgSAAQgUAAgLAPQgMAPAAAbQAAAdAMAQQANASASAAIAGAAIAGgBQAIAAAAAJQgBAJgJAHQgKAGgRAAQgeAAgUgWQgTgXAAgjQAAgqAXgZQAXgaAmAAQALAAAMADQAKACAKAFIATgIIALgDIAFACIAAAFIAAAEIgBAYIAABXIAAANQAAAqABAOQACANAEAEIAIAEQAHAEAAAFQAAAIgJADQgHADgZAAQgZAAgJgDg");
	this.shape_4.setTransform(-98,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpB5QgSgEgMgHQgHgEgEgOQgFgPAAgSQAAgJADgDQADgFAGAAQAIABAIAPIAEAHQAKATANAIQANAJARAAQASAAANgMQAMgKAAgQQAAgYgxgWIgFgCQgpgRgNgOQgOgQAAgXQAAgeAXgTQAWgUAjAAIATACIAYAFIAGgEIAGgCQAEAAADADQAEACADAGQAGALADAKQADALAAAJQAAAFgCAEQgDADgEAAQgJAAgJgMIgCgEQgKgMgLgGQgLgFgOgBQgSAAgLAJQgLAJAAAPQAAANAJAKQAJAJAjAPIAIAEQAeAMANALQAJAJAFALQAFALAAANQAAAjgYATQgYATgqAAQgUAAgTgEg");
	this.shape_5.setTransform(-117.9,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBlQgIgDgHgGQgFgFgDgJQgCgKgBgYIAAhZIgPAAIgEgCIgCgEIAAgEQAAgFASgQIAGgFIAHgGQARgPAHgBIAEACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAgIAmAAQAEAAABABQABABAAAFIAAAFQAAADgBADQgBACgEAAIgjAAIgDABIgBAEIAABTQAAAVAEAGQAEAFAJAAQAGAAAIgDIALgCQAEAAADACQACACAAADQAAAJgOAJQgPAJgRgBQgKAAgIgCg");
	this.shape_6.setTransform(15.6,-25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBVQgCgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgMAAQgNAAgMgFQgLgEgHgJQgIgKgDgNQgEgOAAgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQAEgDAMgEIAWgGIASgDQAFAAACAEQABADAAAIIAAAGIgBA/QgBAhAIANQAGANASAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEAEgDQADgDALgEIAXgGIASgDQAFAAACAEQACADAAAIIAAAJIgCBEIAAAdIABALQABAHAJADIACABQAKADAAAGQAAAEgCACQgDADgIADIgYAIQgLADgHAAQgEAAgDgDg");
	this.shape_7.setTransform(-0.5,-24.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWBTQgHgCgBgHQAAgGAJgDIAGgDQAEgCACgHQABgHAAgTQAAg0gHgOQgGgOgSAAQgJABgIAFQgHAGgFAIQgEAIgBANQgCAMAAAhQAAAQACAGQABAFAEACIAGADQAJADAAAGQgBAHgHACQgJADgWAAQgZAAgIgDQgJgDAAgHQAAgGAJgDIADgCQAFgBACgHQABgFAAgNIAAgLIAAgOIAAgQQAAgbgBgHQgCgJgDgBIgIgDQgKgEAAgFQAAgEAEgDQACgDAIgCIAYgIIARgDQAFAAACADQACACAAAGIAAAKIAAACIACAAIABAAIAAAAIAEgDIAEgEQASgRAUAAQAMAAAMAFQAKAFAIAKQAIAJADAMQAEAOgBAbIAAAVIAAALIAAAJQAAANACAEQACAGADABIAFACQAIADAAAGQAAAHgHADQgJADgZAAQgXAAgJgDg");
	this.shape_8.setTransform(-20.4,-24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgyBTQgIgDAAgHQAAgGAIgDIAEgCQAFgBABgHQACgFAAgNIAAgLIAAgOIAAgKQAAgdgCgKQgBgJgEgCIgHgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIIAPgDQAIAAADAXIAAAEIABAAQAIgNAKgIQAJgHAKAAQALAAAHAHQAHAHAAAMQAAAMgFAGQgGAHgJAAIgJgCIgHgFIgDgGQgCgEgCgBQgMABgEAPQgEARAAAxQAAAQABAHQACAHAFACIAGACQAKADAAAHQAAAHgJACQgJADgWAAQgaAAgIgDg");
	this.shape_9.setTransform(-36.3,-24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgmAZgaQAYgaAmAAQAgAAATATQATATAAAfQAAALgDACQgDAEgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIAjAAIAIgBQACgBAAgDQAAgRgLgLQgKgLgPAAQgUAAgKARQgKASAAAYQAAAaAOATQANATAVAAQAMAAAJgCQAIgDAIgGIAGgFQAJgGAEAAQAEAAACACQADADAAADQAAADgEAHQgFAFgHAGQgOAMgOAGQgNAEgQAAQgjABgYgYg");
	this.shape_10.setTransform(-52,-24.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgGQgGgFgDgJQgCgKAAgYIAAhZIgQAAIgFgCIgBgEIAAgEQAAgFARgQIAIgFIAGgGQARgPAGgBIAFACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAgIAlAAQAFAAABABQABABAAAFIAAAFQAAADgBADQgBACgFAAIgiAAIgDABIgBAEIAABTQAAAVAEAGQADAFALAAQAEAAAJgDIAMgCQADAAACACQADACAAADQAAAJgOAJQgPAJgSgBQgJAAgJgCg");
	this.shape_11.setTransform(-66.7,-25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgGQgHgFgCgJQgDgKAAgYIAAhZIgPAAIgFgCIgBgEIAAgEQAAgFASgQIAHgFIAGgGQARgPAGgBIAFACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAgIAlAAQAEAAACABQABABABAFIAAAFQgBADgBADQgCACgEAAIgiAAIgDABIgBAEIAABTQAAAVAEAGQADAFALAAQAEAAAJgDIALgCQAEAAACACQADACAAADQAAAJgOAJQgOAJgTgBQgJAAgJgCg");
	this.shape_12.setTransform(-78.6,-25.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgKAEgMAAQgNAAgLgFQgKgEgIgJQgIgKgDgNQgEgOABgjIAAgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIASgDQAEAAACAEQACADAAAIIAAAGIgCA/QAAAhAIANQAGANASAAQASAAAJgRQAIgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgHgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIARgDQAGAAABAEQACADAAAIIAAAJIgCBEIAAAdIABALQACAHAIADIAEABQAJADAAAGQAAAEgDACQgDADgHADIgYAIQgMADgFAAQgGAAgBgDg");
	this.shape_13.setTransform(-94.7,-24.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMB5IgggBIgRAAIgTAAQgLAAgGgCQgGgEAAgGQAAgGAJgEQAJgDABgCQADgEABgZIABhBIgBg/QgBgYgDgEQgBgCgJgDQgJgFAAgFQAAgHAFgDQAFgDAKAAIASAAIATAAIAigBIAaAAQAkAAAUAPQATAPAAAcQAAAXgOAOQgOAPgaAEQAiADASAQQARAQAAAcQAAAfgWARQgWASgoAAgAgZhgQgGABgBACQgDAFgBAPIgBAxIAABFIABAhQABAJADAFQACADAIACQAJACANAAQAbAAAPgLQAOgMAAgVQAAgZgQgLQgQgLgfAAQgOAAAAgKQAAgMAOAAQAWAAAOgJQAOgKAAgXQAAgVgNgKQgNgLgbAAg");
	this.shape_14.setTransform(-116.3,-27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.organiccranberrysauce, new cjs.Rectangle(-129.5,-49.9,153.2,83.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEgBIgDgCQgFgFgFgNQgFgOAAgMQAAgGADgDQADgEAEABQAIAAAIANIAGAKQAFAGAJAEQAIAFAJAAQALgBAHgFQAGgGABgJQAAgOgbgOIgKgEQgagOgKgKQgJgKAAgRQAAgVAPgOQAPgOAZAAIAKABIAMACIAIgDIAGgBQAIAAAIANQAIAOgBAOQAAAGgCADQgDAEgFAAQgEAAgDgEIgJgLQgGgKgHgFQgHgEgJAAQgJABgFAFQgHAGABAIQgBAIAHAGQAFAFAVALIACABQAuAWAAAbQAAAYgSAQQgRAPgcAAg");
	this.shape.setTransform(58.5,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDADQgDAEgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgCAFAAIAjAAIAIgBQACgCAAgDQAAgRgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEABQAEAAACACQADADAAADQAAAEgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_1.setTransform(42.5,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlAAQAkABAXAXQAXAXAAAmQAAAmgZAaQgYAagkAAQgkgBgYgYgAgfgxQgKANAAAXQAAAhAOAWQAOAWATAAQARAAAKgNQAKgPAAgWQAAgggOgXQgOgWgTAAQgRAAgKAOg");
	this.shape_2.setTransform(24.2,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJBlQgHgDgGgFQgGgGgDgJQgCgJAAgaIAAhZIgQAAIgFgBIgBgEIAAgEQAAgGARgOIAIgHIAGgFQARgPAGAAIAFABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIAAAgIAlAAQAFgBABACQABABAAAGIAAADQAAAFgBACQgBABgFAAIgiAAIgDACIgBAEIAABSQAAAWAEAFQADAGALAAQAEAAAJgDIAMgDQADABACABQADACAAAEQAAAKgOAIQgPAJgSAAQgJgBgJgCg");
	this.shape_3.setTransform(8.9,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgIAEQgUAOgUAAQgZAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgLAIAAAOQABANAIAIQAJAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgHAHIgDAFQgLANgKAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGACAKQADALAAAYIAAA1QAAAJABAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgMAHgPAAQgHAAgJgJg");
	this.shape_4.setTransform(-5.9,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBlQgIgDgHgFQgFgGgDgJQgDgJABgaIAAhZIgQAAIgEgBIgCgEIAAgEQAAgGARgOIAHgHIAHgFQARgPAHAAIAEABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAgIAmAAQAEgBABACQABABAAAGIAAADQAAAFgBACQgBABgEAAIgjAAIgDACIgBAEIAABSQAAAWAEAFQADAGAKAAQAGAAAIgDIALgDQAEABADABQACACAAAEQAAAKgOAIQgPAJgRAAQgKgBgIgCg");
	this.shape_5.setTransform(-20.9,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlAAQAkABAXAXQAXAXAAAmQAAAmgZAaQgYAagkAAQgkgBgYgYgAgfgxQgKANAAAXQAAAhAOAWQAOAWATAAQARAAAKgNQAKgPAAgWQAAgggOgXQgOgWgTAAQgRAAgKAOg");
	this.shape_6.setTransform(-36.4,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhWB3QgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgDQAGgDAKAAIARABIAUAAIAhgBIAbgBQAlAAATAQQATAQAAAgQAAAjgXATQgYARgsAAQgQAAAAgLQAAgLAOAAQAVAAANgLQANgLAAgZQAAgXgNgLQgOgLgaAAQgMAAgFACQgFACgCAEIgCAQIgBAjIAABJIABAvQACANACACIAIAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDg");
	this.shape_7.setTransform(-55.5,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJBlQgTgWAAgkQAAgpAWgZQAWgaAlAAIALACQAFABADAEQADADAAAFQAAAIgLAAIgFAAIgEAAQgTAAgKAQQgMAOAAAaQAAAdANARQAMASASAAQARAAAKgKQAJgJAAgUIAAguIAAhMQAAgLgBgFQgDgFgGgCIgEgBQgLgDAAgGQAAgEAFgEQADgDANgFIATgFIAQgCQAFAAACADQADADAAAIIAAAJIgCBmIABBGQABAQADACIALAFQAJACAAAFQAAAIgYAIIgQAFIgOABQgEgBgCgCQgCgCAAgGIAAgIIgBgEIgBgBIgEAEIgIAFQgKAIgIADQgLAEgKAAQgfAAgUgXg");
	this.shape_8.setTransform(45,-27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgmAZgaQAYgaAmAAQAgAAATATQATATAAAfQAAALgDACQgDAEgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgEADgDQADgDAFAAIAjAAIAIgBQACgBAAgDQAAgRgLgLQgKgLgPAAQgUAAgKARQgKASAAAYQAAAaAOATQANATAVAAQAMAAAJgCQAIgDAIgGIAGgFQAJgGAEAAQAEAAACACQADADAAADQAAADgEAHQgFAFgHAGQgOAMgOAGQgNAEgQAAQgjABgYgYg");
	this.shape_9.setTransform(25.6,-24.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXB4QgIgCAAgHQAAgGAIgDIAHgDQAEgCABgHQACgHAAgSQAAg2gHgMQgHgOgSgBQgIABgIAFQgIAGgEAHQgEAIgBANQgCAMAAAiQAAAQACAFQABAGADACIAHADQAIADAAAGQAAAHgIACQgIADgWAAQgaAAgIgDQgIgDAAgHQAAgGAIgDIAEgCQAFgCACgHQABgHAAgSIAAgcIAAgZIgBhLQgBgTgCgEQgCgCgKgCQgKgDAAgGQAAgEAEgEQAEgDAPgGIARgFIAPgBQAGAAADADQACADAAAIIgBAHIgBBCIAAAJIABAEIACACIAEgFIAGgGQAIgJAKgEQAIgEALAAQAdAAAOATQAOASAAAmIAAAPIAAAeIAAAJQAAAJACAEQACADADACIAFACQAIADAAAGQAAAHgIADQgIADgbAAQgWAAgIgDg");
	this.shape_10.setTransform(6.5,-27.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMBXIgSgDIgEADIgGABIgDAAIgEgDQgGgEgEgOQgFgOAAgMQAAgGADgDQADgEAEAAQAIAAAIAOIAGAKQAFAHAJADQAIAEAKABQALAAAGgGQAHgGAAgJQAAgOgcgOIgKgEQgZgNgKgLQgJgLAAgQQAAgWAPgNQAPgOAZAAIALABIALACIAIgDIAGgBQAIAAAIANQAHANAAAPQABAGgDADQgDAEgFgBQgDAAgEgDIgJgLQgGgLgHgEQgHgDgJAAQgIgBgHAGQgFAGAAAIQAAAIAFAFQAHAHATAKIADABQAuAWAAAcQAAAXgRAPQgTAQgaAAg");
	this.shape_11.setTransform(-10.6,-24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdBPIgIgJIgHAEQgVAOgUAAQgZAAgPgOQgPgPAAgXQAAgbATgOQAUgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgJAIQgKAIAAAOQAAANAJAIQAIAIAPAAQAPAAAIgHQAGgHAAgSIAAg/QAAgPgGgHQgGgIgLAAQgJAAgHADQgHAEgGAHIgEAFQgKANgLAAQgIAAgDgFQgEgEAAgHQAAgQATgLQAUgLAfAAQARAAANAFQAOAFAHAKQAFAGADAKQACALAAAYIAAA1QgBAJACAFQACAFADABIAFABQALADAAAGQAAAIgMAGQgLAHgPAAQgHAAgJgJg");
	this.shape_12.setTransform(-26.5,-24.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AA/B2QgKgDAAgHQAAgHALgEIAHgDQADgDABgIQABgHAAgWIAAgJIAAhHIgBgqIgVA4QgxB/gKAAQgGAAgJgRQgKgSgYg3IgkhTIgCBBIAAAuIABAfQABAHACADIAIADQAKAEAAAHQAAAHgIADQgJADgUAAQgTAAgIgDQgIgDAAgIQAAgFAJgFQAJgEABgDQACgIADgsQACgqAAg0IAAgGQAAgSgBgFQgCgHgEgCIgHgEQgLgDAAgIQAAgGAHgDQAIgCAYAAIAYABIAHABQADACAMAeIAJAYIAFAMQApBkADAAQADAAAPgkQAPgjAVg8IADgKQAGgSAFgGQADgDAHgBIAXgBQAWAAAIACQAHADAAAGQAAAIgJADIgFACQgFADgCAGQgBAHAAAZIABBgQACAqACAHQABAEAHADIAEAAIAGAFQACACAAAEQAAAHgJADQgKADgbAAQgZAAgJgDg");
	this.shape_13.setTransform(-50.9,-27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mashedpotatoes, new cjs.Rectangle(-68,-49.9,136,83.8), null);


(lib.mainsides = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAwIgEgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIAAgFIAAgDIADgEIApgfQAEgDACgEQACgEAAgEQAAgDgBgDIgFgEIgFgDIgGgCQgGABgDACIgHAEIgEAEQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgDAAIgCgCIgDgDIgBgDIABgCQADgFAEgDIAIgFQAIgEAKAAQAHAAAGACQAGACAFAEQAFAEADAFQACAGAAAGQAAAJgEAGQgFAGgHAEIgXATIgBACIgBABQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAjAAIACABIACABIABADIAAADIgBAFQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape.setTransform(68.2,-17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHAvIgEAAIgDgCIAAgDIAAg6IgBgCIgCgBIgDABQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgDAAgCgDQgCgDAAgDIABgEIADgDIADgCIAEgCIAFgEIAFgDIAEgCIADgBIADABIACADIAABUQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgEABg");
	this.shape_1.setTransform(61.1,-17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXAwIgBgBIgCgBIgBgBIgQgZIgDgDIgEgBIgMAAIgEABIgBAEIAAAWQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgDACIgEAAIgDAAIgFgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBIAAhWQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIADgBIAnAAQAIAAAGACQAGADAFADQAEAFADAFQACAHAAAHQAAAIgDAFQgDAEgDADIgHAFQgDACAAACIAAACIADAFIAGAIIAFAHIADAFQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgDACIgDACIgEAAgAgTgeQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIAAAVQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABAAABAAIASAAIAHgBIAFgCQAEgCABgDQABgDAAgEQAAgIgGgEIgFgDIgHAAIgSAAIgFAAg");
	this.shape_2.setTransform(50.9,-17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAwIgKgDQgFgBgEgDIgHgGQgHgHgEgJIgDgJIAAgKIAAgJIADgKQAEgJAHgGIAHgGIAJgFIAKgCIAJgBIALABQAFAAAEACQAJAFAHAGQAGAGAFAJQADAKAAAJIAAAKIgDAJQgFAJgGAHQgHAHgJADIgJADIgLABIgJgBgAgLgdQgGADgFAEQgEAEgDAGQgCAGAAAGQAAAHACAGQADAFAEAFQAFAFAGACQAGACAFABQAGgBAGgCQAGgCAEgFQAFgFADgFQACgGAAgHQAAgGgCgGQgDgGgFgEQgEgEgGgDQgGgCgGAAQgFAAgGACg");
	this.shape_3.setTransform(40.1,-17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAwQgEAAgBgEIAAhWQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIACgBIBBAAIACABIABACIABAEIAAACIgBAFIgDADIgvAAIgDABIgBADIAAAMIABADQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAIAeAAIADABIABAEIAAADIAAACIgBAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgeAAIgBAAIgCABIgBACIgBACIAAAhIgCADIgDABIgDAAg");
	this.shape_4.setTransform(31.3,-17.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAtQgKgEgIgHIgBgCIAAgBIABgDIACgEIAEgCIADgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABIAHAEIAIAEQAFABAFAAIAHAAIAIgCIAFgFQACgCAAgFQAAgDgDgDQgCgCgFgBIgJgCIgKgCIgLgCQgGgCgEgBQgEgDgDgFQgDgFABgHQgBgHAEgGQAEgFAFgEIANgFIAMgBIAJAAIAKADIAJADIAHAGIABABIAAACQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCADIgEACIgEABIgCAAQgGgFgFgCQgGgDgGAAIgGABIgGACIgGAEQgBADAAADQgBAGAFACQAEACAIABIANACQAIABAHADQAGACAFAFQAFAFAAAKQgBAIgEAGQgEAFgGAEQgFAEgHACQgIACgGAAQgLAAgJgEg");
	this.shape_5.setTransform(17.6,-17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggAvIgCgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAhWQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIACgBIBCAAIACABIAAAEIABADIAAACIgBAEIgCADIgxAAIgCABIgBACIAAAOIABACIADABIAfAAQAAAAAAABQABAAAAAAQAAAAAAAAQABABAAAAIAAAEIABADIAAACQAAAEgDABIgfAAQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAABIAAAOIABAEIADABIAwAAQACACAAADIAAADIAAADIAAAEIgDABg");
	this.shape_6.setTransform(9,-17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnAvIgEgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhUQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAEgBIAjAAIAJABIAJACQAJAEAIAFQAGAHAEAIIADAKIABAJQAAALgEAIIgFAIIgGAHIgHAGIgJAEQgJADgJAAgAgZgcQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAIAAAzQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIAEABIARAAQAGAAAFgDQAGgCAFgDQAEgFADgFQADgGAAgHQAAgGgDgFQgDgGgEgEQgFgEgGgDQgFgBgGAAIgRAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_7.setTransform(-1.1,-17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAxIgCAAQgEAAgCgDIAAhbIADgCIADgBIADAAIADAAQAEAAABAEIAABZIgCADIgEABg");
	this.shape_8.setTransform(-9,-17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAtQgKgEgHgHIgBgCIgBgBIACgDIADgEIADgCIADgBQABAAAAAAQABAAAAAAQABAAAAABQABAAABABIAFAEIAJAEQAEABAGAAIAHAAIAHgCIAGgFQACgCAAgFQAAgDgCgDQgDgCgFgBIgJgCIgKgCIgMgCQgFgCgEgBQgEgDgDgFQgDgFAAgHQAAgHAEgGQAEgFAGgEIAMgFIANgBIAJAAIAJADIAJADIAIAGIAAABIABACQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgDADIgDACIgEABIgDAAQgEgFgGgCQgGgDgGAAIgGABIgHACIgEAEQgDADAAADQAAAGAFACQAFACAGABIAOACQAIABAGADQAIACAEAFQAEAFAAAKQAAAIgDAGQgFAFgFAEQgGAEgIACQgHACgGAAQgLAAgKgEg");
	this.shape_9.setTransform(-15.6,-17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAvQgGgCgFgDQgFgEgDgFQgDgGAAgIQAAgGADgGQADgFAFgDIACgBIAAgCIgBgEIgCgDIgDgFIgBgGQAAgHADgFQADgFAEgDQAEgDAGgCIALgBIALABQAGADAFAEQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAIgBADIgDADIgCACIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIgDgDIgDgCQgCgBgEgBIgFABIgEADQgDABgBADIgBAFQAAAHACACIAGADIAHABIAEABQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIAAADIAAADQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgIABQgEAAgDACQgEACgCADQgBADAAAFQAAAEABADQACADADACIAGADIAHABQAGAAAFgDQAEgDADgFQACgFABgGIABgMIAAgCIAAgCIAEgEQACgBADgBIAOAAQABAAAAABQABAAAAAAQABAAAAAAQAAABAAAAIABAEIgBADIgDAAIgDABQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgCACIAAABQgBAJgCAJQgDAHgFAFQgFAHgHACQgHAEgIAAQgHAAgHgCg");
	this.shape_10.setTransform(-28.8,-17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcAxQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBIgmg0QAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgCABIgCADIAAAwQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBAAIgFABIgFAAQgDgBgBgDIAAhYIABgDIADgBIADgBIADAAQAEAAACADIAnAzIACABIABAAIABgCIAAgwIACgCIAEgBIADAAIAEAAQAEAAABAEIAABZIgCADIgFABg");
	this.shape_11.setTransform(-42.9,-17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAxIgCAAQgEAAgCgDIAAhbIADgCIADgBIADAAIADAAQAEAAABAEIAABZIgCADIgEABg");
	this.shape_12.setTransform(-50,-17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAlAwIgDAAIgEgBQgDgBgCgCIgEgNIgCgCIgDgBIgfAAIgBABIgBABIgCABIgBAAIgFANIgBACIgDABIgDAAIgCAAIgDAAIgDAAIgCgBIgBgCIAmhYQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIADgBIADABQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABIAmBYIAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAABgBAAIgDABgAAAgOIgBABIgCADIgCAEIgBAGIgDAEIgCAEIAAACIAAACIADABIASAAIACgBIAAgCIgBgEIgEgGIgDgJIgBgEIgDgBg");
	this.shape_13.setTransform(-56.6,-17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgAvIgFgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgrIgBgBIgCgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABIgOAXQgCADgCAAIgDAAIgCgDIgNgXQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIgDABIgBABIAAAqQgBADgDAAIgGABIgCAAIgCgBIgCgBIgBgCIAAhWQAAAAABgBQAAAAAAgBQABAAAAgBQABAAABAAIAFAAIAEABIACACIAXAlQABADACAAIADgBIACgCIAWglQADgDAEAAIAFAAIADADIAABWQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgDABIgEAAg");
	this.shape_14.setTransform(-66.4,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainsides, new cjs.Rectangle(-73.7,-26.3,148.3,17.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEgBIgDgCQgFgFgFgNQgFgOAAgMQAAgGADgDQADgEAEABQAIAAAHANIAHAKQAFAGAJAEQAJAFAIAAQALgBAHgFQAGgGAAgJQAAgOgbgOIgJgEQgbgOgJgKQgJgKAAgRQAAgVAPgOQAPgOAZAAIAKABIANACIAIgDIAEgBQAJAAAIANQAIAOAAAOQgBAGgCADQgCAEgFAAQgEAAgEgEIgJgLQgGgKgHgFQgHgEgJAAQgJABgFAFQgHAGAAAIQAAAIAHAGQAFAFAVALIABABQAvAWAAAbQAAAYgSAQQgSAPgbAAg");
	this.shape.setTransform(107.8,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDADQgDAEgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgCAFAAIAjAAIAIgBQACgCAAgDQAAgRgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEABQAEAAACACQADADAAADQAAAEgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_1.setTransform(91.8,15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgIQAAgFAIgDIAEgCQAFgCABgGQACgGAAgMIAAgLIAAgOIAAgSQAAgagBgHQgCgIgDgCIgIgDQgKgDAAgGQAAgDADgDQADgDAHgDIAagIIARgEQAEAAACAEQACADAAAIIAAAKIAAAIIgBAqIAAABIgBAoQAAARABAGQACAHAEACIAGACQAIADAAAHQAAAGgIADQgIACgWAAQgZAAgIgCgAgUhUQgHgGAAgIQAAgKAIgHQAIgHALAAQAKAAAHAHQAHAGAAAJQAAAJgHAGQgIAHgLAAQgLAAgHgGg");
	this.shape_2.setTransform(78.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWB3QgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgDQAGgDAKAAIARABIAUAAIAhgBIAbgBQAlAAATAQQATAQAAAgQAAAjgXATQgYARgsAAQgQAAAAgLQAAgLAOAAQAVAAANgLQANgLAAgZQAAgXgNgLQgOgLgaAAQgMAAgFACQgFACgCAEIgCAQIgBAjIAABJIABAvQACANACACIAIAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDg");
	this.shape_3.setTransform(63.8,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A/QgYgYAAgkQAAgmAZgaQAYgaAmAAQAgABATASQATASAAAgQAAAKgDADQgDAEgNAAIg/AAQgGAAgDgDQgDgCAAgFQAAgEADgDQADgCAFAAIAjAAIAIgBQACgCAAgDQAAgRgLgLQgKgLgPAAQgUAAgKASQgKARAAAYQAAAaAOATQANATAVAAQAMAAAJgDQAIgDAIgFIAGgEQAJgIAEABQAEAAACACQADADAAADQAAAEgEAFQgFAGgHAGQgOAMgOAFQgNAGgQAAQgjAAgYgZg");
	this.shape_4.setTransform(35.2,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbB5QgJgDAAgIQAAgFAHgDIAJgEQADgDABgKIABgiIAAgaIAAgfIAAgNQAAgqgCgMQgBgMgEgCIgKgEQgLgDAAgGQAAgEAEgDQADgCAMgEIAWgHIARgCQAFAAACADQACADAAAIIAAANQgCA8AAA8IABA5QABAMADADIAJAFQAIADAAAHQAAAGgIADQgJACgWAAQgYAAgIgCg");
	this.shape_5.setTransform(21.3,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_6.setTransform(6.5,18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_7.setTransform(-13.4,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlB4QgKgCAAgJQAAgGAMgEIACgBQAFgBACgCQACgDAAgEIgDgOIgGgSIgDgFIgDgBIgNgBIgZgBIgOAAQgOAAAAgMQAAgOAOABIAIAAIARAAIASABIgRgtIgQgoIgFAAIgRAqIgRArIgQArQgEAJAAAGQAAAGACADQACAEAGACIAFACQALAEAAAGQAAAJgJACQgIADgaAAQgZAAgJgDQgIgCAAgJQAAgGAKgEIAGgDQANgHALgdIAEgKIAYg8IAGgPQAYg8AGgZQACgIADgCQAEgCAJAAQAFAAAEACQAEADADAGIAaA3IAhBPIAIATQASAyAMAFIAGACQAKAEAAAGQAAAJgKACQgKADgeAAQgeAAgJgDg");
	this.shape_8.setTransform(-34.9,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhlBmQgfgYAAgnQAAgWAKgRQAKgPAWgPIABgCQgHgHgEgIQgEgJAAgIQAAgbAUgRQATgQAfAAQAUAAAOAIQAOAIAAAKQAAAEgDADQgEACgEAAIgOgEQgLgEgKAAQgOAAgIAIQgIAJAAAPQAAAGACAFQACAFAFAEQAEAEAHADIAKAEIADABIACADQAAADgGAHQgHAHgFAAIgHgBIgMgEQgJAIgFALQgFAMAAAPQAAAgAVAVQAVAVAgAAQAbAAARgOQAQgOAAgXQAAgOgGgJQgHgIgMAAQgLAAgIAHQgHAHAAAKIAAADIAAACIgCABIgDAAQgGAAgDgEQgEgFAAgIQAAgZBJghIAFgCQAUgKAKgKQAKgKAAgMQAAgIgFgEQgEgEgJAAIgGABIgGABQgEAAgCgCQgDgDAAgDQAAgIAKgFQAJgFAOAAQASAAAKAKQALAKAAARQAAAVgSARQgSARgmAOQAQAGAIAMQAIANAAARQAAANgFAMQgFAMgKAKQgPARgXAIQgXAIgdAAQgzAAgfgXg");
	this.shape_9.setTransform(116,-27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWBTQgHgCgBgHQAAgGAJgDIAGgDQAEgCACgHQABgHAAgTQAAg0gHgOQgHgOgRAAQgIABgJAFQgHAGgFAIQgEAIgBANQgBAMgBAhQABAQABAGQABAFAEACIAGADQAJADAAAGQgBAHgHACQgJADgWAAQgaAAgHgDQgJgDAAgHQAAgGAJgDIADgCQAFgBACgHQACgFAAgNIAAgLIgBgOIAAgQQAAgbgBgHQgCgJgDgBIgIgDQgKgEAAgFQAAgEAEgDQACgDAIgCIAYgIIARgDQAFAAACADQACACAAAGIAAAKIAAACIABAAIACAAIAAAAIAEgDIADgEQATgRAUAAQAMAAALAFQALAFAIAKQAIAJADAMQADAOAAAbIAAAVIAAALIAAAJQAAANACAEQACAGAEABIAEACQAIADAAAGQAAAHgIADQgHADgaAAQgYAAgIgDg");
	this.shape_10.setTransform(81.7,-24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdB4QgIgDAAgHQAAgGAIgDIAEgCQAFgCABgGQACgFAAgNIAAgMIAAgNIAAgRQAAgbgBgHQgCgIgDgCIgIgCQgKgEAAgFQAAgEADgDQADgDAHgDIAagIIARgEQAEABACADQACADAAAIIAAAKIAAAIIgBApIAAABIgBApQAAARABAGQACAGAEACIAGAEQAIADAAAGQAAAHgIACQgIADgWgBQgZABgIgDgAgUhUQgHgGAAgJQAAgJAIgGQAIgIALABQAKgBAHAHQAHAGAAAJQAAAJgHAGQgIAHgLAAQgLAAgHgGg");
	this.shape_11.setTransform(66.9,-27.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA3B7IgHgBQgIgDgQgVIgHgJIgDgDQgog1gDAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIAAAHIAAAHIABAjQABAKACADIAKAFQAHADAAAHQAAAGgIADQgIACgWAAQgaAAgIgCQgIgDAAgIQAAgFAIgDIAEgCQAFgDACgIQACgIAAgTIgBgVIAAgaIAAgUIgBg/QgBgPgCgDQgCgCgIgCIgFgCIgHgDIgBgFQAAgEADgDQAEgCALgEIAXgHIARgCQAFAAACADQADADAAAIIgBAgIgBAsIAAApIAAAJQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAHgDIAMgKIAQgQQAEgFAAgCQAAgCgGgDQgFgDAAgGQAAgHAHgDQAJgDAYAAQAQAAAHADQAIADAAAGQAAAIgMADQgNADgFADQgGAEgOAOIgDACIgGAHIgBADQAAADAOATIACADIAdAjQAMAOAGAEQAFADAKAEQALADAAAHQAAAHgHADQgIADgSAAg");
	this.shape_12.setTransform(53.4,-28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhRByQgIgCAAgHQAAgGAHgDIAJgEQADgDABgOQACgNAAgqIAAgaQAAgugCgNQgCgNgDgCIgIgDQgKgEAAgFQAAgEADgDQADgDAHgCIAXgIQALgDAGAAQAFAAACACQACADAAAGIAAAIIAAADIABABIAHgEIAGgFQALgIAIgDQAKgEAKAAQAfAAAUAXQATAXAAAkQAAAngWAaQgWAagiAAQgPAAgEgEQgGgEAAgHQAAgDACgDQADgDAFAAIAEABIAGABQASAAALgQQAMgPAAgaQAAgcgMgSQgNgRgTAAQgQAAgKAKQgKAJAAAZIAABqIABARQAAAHACACQADADAHACIAHACIADADIACAFQAAAGgKADQgKACgYAAQgYAAgJgDg");
	this.shape_13.setTransform(33,-21.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABLBTQgJgCABgHQAAgGAIgEIAGgCQAEgDACgHQABgJAAgUQABgxgHgNQgHgOgRAAQgUABgIAQQgJARAAAoIAAAJQAAATACAFQACAHAEABIAEACQAJADgBAGQAAAHgHADQgIADgZAAQgXAAgJgDQgIgCAAgHQAAgGAJgDIAHgDQADgCACgHIABgaQAAg0gGgOQgIgOgRAAQgJABgIAFQgIAGgEAIQgFAIgBAOQgBANgBAfQABAQABAFQACAGADACIAGADQAJADAAAGQAAAHgJACQgHADgXAAQgZAAgJgDQgHgDgBgHQABgGAHgDIAFgCQAFgBABgHQACgFAAgNIAAgLIAAgOIAAgKQAAgdgCgKQgBgJgEgCIgIgDQgKgEAAgFQAAgEADgDIALgFIAYgIIARgEQAEAAADADQACADAAAGIAAAJIAAABIABACIABAAIABAAIAAAAIAFgDIABgCQAVgTAUAAQAIAAAHADQAHACAHAFQAGADAFAJQAHAHABAAQACAAAFgGIAIgHQAKgJAJgDQAHgEALAAQATAAAPAIQAOAIAHAOQAHAPAAAxIABARIgBAJIAAAIQAAAJACAEQACAEAEACIAEACQAIADAAAGQABAHgJADQgHADgbAAQgXAAgIgDg");
	this.shape_14.setTransform(8.1,-24.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgKAEgMAAQgNAAgLgFQgKgEgIgJQgIgKgDgNQgEgOABgjIAAgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgHgCQgJgCAAgGQAAgEADgDQADgDAMgEIAXgGIASgDQAEAAACAEQACADAAAIIAAAGIgCA/QAAAhAHANQAIANARAAQASAAAJgRQAIgRAAgoIAAgMQAAgOgCgDQgCgEgFgDIgHgCQgKgCAAgGQAAgEADgDQADgDANgEIAWgGIARgDQAGAAABAEQACADAAAIIAAAJIgCBEIAAAdIABALQACAHAIADIAEABQAJADAAAGQAAAEgDACQgDADgHADIgYAIQgMADgFAAQgGAAgBgDg");
	this.shape_15.setTransform(-17.2,-24.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhWB3QgKgDAAgHQAAgHALgEIAHgEQAEgDABgUQACgUAAg0IgCg/QgBgYgCgDQgCgDgJgDQgJgEAAgGQAAgHAFgDQAGgDAKAAIARABIAUAAIAhgBIAbgBQAlAAATAQQATAQAAAgQAAAjgXATQgYARgsAAQgQAAAAgLQAAgLAOAAQAVAAANgLQANgLAAgZQAAgXgNgLQgOgLgaAAQgMAAgFACQgFACgCAEIgCAQIgBAjIAABJIABAvQACANACACIAIAEQAKAEAAAHQAAAHgJADQgJADgbAAQgaAAgJgDg");
	this.shape_16.setTransform(-36.7,-27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.greenbeans, new cjs.Rectangle(-49.2,-49.9,180.9,83.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOBEQgHgHAAgJQAAgJAHgHQAFgGAJAAQAKAAAFAGQAHAHAAAJQAAAJgHAHQgGAGgJAAQgJAAgFgGgAgOgkQgHgGAAgJQAAgJAHgHQAFgGAJAAQAKAAAFAGQAHAHAAAJQAAAJgHAGQgFAHgKAAQgJAAgFgHg");
	this.shape.setTransform(81.5,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBGQgHgCAAgGQAAgFAHgCIADgCQAEgCACgFQABgEAAgLIAAgKIAAgLIAAgJQAAgZgBgIQgBgIgDgCIgHgCQgJgDAAgFQAAgDADgDQADgCAGgCIATgGIANgDQAHAAACATIAAADIABAAQAHgLAIgGQAIgGAIAAQAKAAAGAGQAGAGAAAKQAAAKgFAGQgEAFgIAAIgIgBIgGgEIgDgGQAAgBgBgBQAAAAAAgBQgBAAAAAAQAAAAgBAAQgKAAgEANQgDAOAAAqQAAAMABAHQACAGAEABIAFADQAJACAAAGQAAAFgIACQgIADgTAAQgVAAgHgDg");
	this.shape_1.setTransform(72.4,21.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguA2QgUgVAAgfQAAggAVgWQAVgVAfAAQAcAAAQAPQAQAQAAAbQAAAIgDADQgCADgLAAIg2AAQgFAAgCgCQgDgDAAgDQAAgEADgCQACgCAFAAIAdAAIAHgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQAAgNgJgKQgJgJgNAAQgRAAgIAPQgIAPAAAUQAAAWALAQQAMAQARAAQAKAAAIgCQAHgCAHgFIAFgEQAHgGAEAAQADAAACACQACACAAADQAAADgDAFQgEAFgGAFQgMAKgMAFQgLAEgOAAQgdAAgVgUg");
	this.shape_2.setTransform(59.2,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhFBGQgIgCAAgGQABgFAGgCIAFgCQADgCABgFQACgEAAgLIAAgKIAAgLIAAgOQAAgXgCgGQgBgIgCgBIgHgCQgIgDgBgFQABgDACgDIAJgEIAVgHIAOgCQAEAAACACQABACAAAFIAAAJIABACIABAAIAAAAIABgBIAEgDIACgDQAQgOARAAQAKAAAKAEQAJAFAHAHQAHAJACAKQADALAAAXIAAASIgBAJIAAAIQABALABAEQACAEADACIADACQAIACAAAFQgBAGgGACQgGADgWAAQgUAAgHgDQgHgBAAgGQAAgFAHgDIAGgDQADgCABgFIABgWQABgtgGgLQgGgMgPABQgHgBgGAFQgIAFgDAHQgDAHgCAKQgBALAAAcQAAANABAGQABAEAEABIAFADQAHADAAAFQAAAGgHABQgHADgTAAQgVAAgHgDg");
	this.shape_3.setTransform(43.2,21.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhFBGQgHgCgBgGQAAgFAIgCIADgCQAEgCACgFQABgEAAgLIAAgKIAAgLIAAgOQAAgXgBgGQgBgIgDgBIgHgCQgJgDABgFQAAgDACgDIAJgEIAUgHIAPgCQAEAAACACQACACAAAFIAAAJIAAACIABAAIABAAIAAgBIADgDIAEgDQAPgOARAAQAKAAAKAEQAJAFAHAHQAGAJADAKQADALAAAXIAAASIAAAJIAAAIQAAALABAEQABAEAEACIAEACQAGACABAFQAAAGgHACQgHADgVAAQgUAAgHgDQgHgBAAgGQAAgFAIgDIAEgDQAEgCACgFIABgWQgBgtgFgLQgGgMgPABQgGgBgIAFQgGAFgEAHQgDAHgBAKQgCALAAAcQAAANACAGQABAEACABIAGADQAHADAAAFQAAAGgHABQgHADgTAAQgVAAgHgDg");
	this.shape_4.setTransform(26.2,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYBlQgIgCAAgGQAAgFAHgCIAEgCQAEgCABgFQACgEAAgMIAAgJIAAgLIAAgPQAAgXgCgFQgBgIgCgBIgHgCQgJgDAAgFQAAgDADgDIAJgEIAVgHIAOgDQAEAAACADQACADAAAGIAAAJIgBAGIgBAkIAAAAIAAAjIABAUQABAFADABIAGADQAHADAAAFQAAAGgHABQgHADgTAAQgUAAgHgDgAgRhHQgGgFAAgHQAAgIAHgHQAHgFAJAAQAJAAAGAFQAGAGAAAHQAAAIgHAFQgHAGgJAAQgJAAgGgFg");
	this.shape_5.setTransform(13.7,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeBmIgRAAIgNAAIgLAAQgSABgGgDQgFgCAAgGQAAgGAIgCQAIgDABgDQABgCACgWIABg2IgBg1QgCgVgBgDQgBgCgIgEQgIgCAAgHQAAgFAGgCQAHgDAQAAIAMAAIAPABIATgBIAQAAQA0AAAdAbQAdAbAAAyQAAAygdAZQgeAag4AAgAgfhQQgFACgCAEQgDAGAAAQIgCAsIACA2QABAVACAFQABAFAKADQAJADANAAQAgAAAQgUQAQgUABgoQgBgpgSgWQgTgXgjAAQgLABgHACg");
	this.shape_6.setTransform(-1.4,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhBBeQgHgGAAgJQAAgHAFgFQAFgFAHAAIAHABIAEADIAEAFQADAGADAAQAHAAAIgKQAHgLAAgLQAAgMgKgXIgBgDIgXgxIgNgcQgCgFgJgEQgFgCgBgCQgCgCAAgDQAAgGAHgCQAIgDAVAAQAUAAAHACQAHADAAAFIAAAFIgDACIgFADQgGACAAACIADALIAMAdIAKAaQAEAHACAAQACAAADgHIAJgWIALgcQADgKAAgEQAAgEgIgFQgIgEAAgEQAAgFAHgCQAGgCAQAAQARAAAGACQAGADAAAFQAAAGgIACIgGACQgIAEgJAYIgEALIgSAtQgYA7gOASQgPASgVAAQgKAAgHgGg");
	this.shape_7.setTransform(-27.1,24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguA2QgUgVAAgfQAAggAVgWQAVgVAfAAQAcAAAQAPQAQAQAAAbQAAAIgDADQgCADgLAAIg2AAQgFAAgCgCQgDgDAAgDQAAgEADgCQACgCAFAAIAdAAIAHgBQABgBAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQAAgNgJgKQgJgJgNAAQgRAAgIAPQgIAPAAAUQAAAWALAQQAMAQARAAQAKAAAIgCQAHgCAHgFIAFgEQAHgGAEAAQADAAACACQACACAAADQAAADgDAFQgEAFgGAFQgMAKgMAFQgLAEgOAAQgdAAgVgUg");
	this.shape_8.setTransform(-41.8,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBoIgGgBQgGgCgNgSIgGgHIgDgDQgigtgDAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAIAAAGIAAAHIABAeQAAAIACACIAIAFQAHACAAAGQAAAFgHACQgHADgTAAQgWAAgGgDQgHgCAAgGQAAgFAHgDIADgBQAEgCACgHQABgHAAgRIAAgSIAAgWIAAgQIgBg1QgBgNgCgDQgBgBgHgCIgFgCIgFgCIgBgEQAAgEADgCQACgDALgDIATgGIAOgCQAFAAABADQACADAAAGIgBAcIAAAlIAAAjIAAAHQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAAAIAGgDIALgIIANgNQADgFAAgCQAAgBgFgDQgEgDAAgEQAAgGAGgDQAIgCAUAAQANAAAHACQAGADAAAFQAAAHgKADQgLACgEADQgFADgMALIgDACIgEAGIgCACQAAADANARIABACIAZAdQAKAMAFAEQAEADAJADQAJACAAAGQAAAGgGADQgHADgPAAg");
	this.shape_9.setTransform(-56.7,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqBGQgHgCAAgGQAAgFAHgCIADgCQAEgCACgFQABgEAAgLIAAgKIAAgLIAAgJQAAgZgBgIQgBgIgDgCIgHgCQgJgDAAgFQAAgDADgDQADgCAGgCIATgGIANgDQAHAAACATIAAADIABAAQAHgLAIgGQAIgGAIAAQAKAAAGAGQAGAGAAAKQAAAKgFAGQgEAFgIAAIgIgBIgGgEIgDgGQAAgBAAgBQgBAAAAgBQgBAAAAAAQAAAAgBAAQgKAAgEANQgDAOAAAqQAAAMABAHQACAGAEABIAFADQAJACAAAGQAAAFgIACQgIADgTAAQgVAAgHgDg");
	this.shape_10.setTransform(-70.3,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfBIQgCgCAAgFIAAgKIAAAAIgBAAQgCAAgDADIgCACQgHAHgIAEQgIADgKAAQgLAAgKgEQgJgEgGgIQgHgIgDgLQgDgMAAgdIABgKIAAgKIAAgDQAAgMgCgDQgCgDgFgCIgFgCQgIgCAAgFQAAgEACgCQADgDAKgDIAUgFIAPgCQAEAAABADQACACAAAHIAAAFIgCA2QAAAcAGALQAGALAPAAQAPAAAHgPQAHgOAAgiIAAgLQAAgLgBgDQgCgDgFgCIgFgCQgIgCAAgFQAAgEACgCQADgCAKgEIATgFIAPgCQAEAAACACQACADAAAHIAAAIIgCA5IAAAZIABAJQABAGAHADIABAAIACABQAIACAAAFQAAADgCADQgDACgGACIgUAHIgPACQgEAAgCgCg");
	this.shape_11.setTransform(-84.6,21.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBlQgIgCAAgHQAAgFAIgDQAHgDACgCQABgDABgXIABhDIAAglIgCgXQAAgEgDgBIgIgBIgGAAQgKAAgFACQgGACgEAGIgEAJIgEAKIgEAFIgGABQgEAAgCgEQgCgDAAgJQAAgTAFgLQAEgMAHAAIABAAQAMACARAAIBTAAQARAAAMgCIABAAQAHAAAEAMQAFALAAATQAAAJgCADQgCAEgFAAIgEgBIgFgFIgEgKIgEgJQgEgGgGgCQgFgCgKAAIgGAAIgIABQgDABAAAEIgBAXIgBAlIABBDQABAXABADQACACAIADQAHADAAAFQAAAHgIACQgIADgWAAQgVAAgIgDg");
	this.shape_12.setTransform(-102.2,18.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhVBWQgagVAAghQAAgSAIgOQAIgNATgMIABgCQgHgGgCgHQgEgHAAgHQAAgXAQgOQARgOAaAAQARgBAMAIQAMAGAAAJQAAADgDACQgDADgEAAIgLgEQgKgEgIAAQgLAAgIAIQgGAHgBANQABAFACAFQACAEADADQADADAHADIAIADIADACIABACQAAACgFAHQgGAFgEAAIgHgBIgJgDQgIAGgEAKQgFAKAAAMQAAAcASARQASASAbAAQAXAAAPgMQAOgLgBgUQABgMgGgHQgGgIgJABQgLAAgGAFQgGAHAAAJIAAACIAAABIgCABIgCAAQgFAAgDgEQgDgDAAgHQAAgVA+gdIAEgCQARgHAIgJQAJgIAAgLQgBgGgDgEQgEgCgIAAIgFAAIgFABQgDAAgCgCQgCgDAAgDQAAgFAIgFQAHgEANAAQAPAAAJAIQAJAJAAAOQgBASgPAOQgPAOggAMQAOAGAGAKQAHAKAAAPQAAAKgEALQgEALgJAIQgNAOgTAHQgTAIgZAAQgrgBgagUg");
	this.shape_13.setTransform(-28,-15.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhzBHQgHgDAAgGQAAgFAHgDIAEgBQADgCACgFQACgFgBgLIAAgJIAAgMIAAgIQABgZgCgIQgBgIgDgCIgGgDQgJgCAAgFQAAgDACgCIAJgFIAVgIIAOgCQAEAAACACQACADAAAFIAAAIIAAABIABABIAAABIABgBIAAAAIAEgDIACgBQARgQARAAQAGAAAHACQAGACAGAEQAEAEAFAGIAHAHQACAAAEgFIAGgHQAKgHAGgDQAHgDAIAAQARAAAMAHQANAGAFANQAHANAAApIAAANIAAAIIAAAGQgBAJACADQACAEADACIADABQAIADAAAFQAAAGgHADQgGABgWAAQgVAAgHgBQgHgCAAgGQAAgGAIgDIAEgCQAEgCACgGIABgZQAAgpgFgLQgHgMgPAAQgQAAgHAPQgHAOAAAiIAAAIQAAAPABAFQACAFAEACIADABQAHADAAAFQAAAGgHADQgGABgWAAQgTAAgGgBQgIgCAAgGQAAgGAIgCIAFgCQADgCABgGQACgGAAgQQAAgsgGgMQgGgMgPAAQgHABgHAEQgHAEgEAJQgDAFgBANIgBAlIABASQABAFADACIAFACQAIACAAAGQAAAGgIACQgGACgUAAQgVAAgHgCg");
	this.shape_14.setTransform(-61.8,-12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAZBDIgHgHIgHADQgQALgSAAQgVAAgNgMQgNgMABgTQAAgXAQgMQAQgNAfAAQAGAAADADQAEACAAAFQAAAIgKAAQgNAAgJAGQgIAHAAAMQAAAMAHAGQAIAHAMAAQANAAAGgGQAGgGAAgPIAAg1QAAgNgGgHQgFgGgJAAQgHAAgGADQgGADgFAGIgEAEQgIALgKAAQgGAAgDgEQgDgDgBgHQAAgNARgJQARgJAaAAQAOAAAMAEQALAEAHAIQAEAFABAJQACAJAAAUIAAAtIACAMQABAEADABIAFABQAIADABAFQAAAGgKAGQgKAFgNAAQgGAAgHgHg");
	this.shape_15.setTransform(-82.1,-12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAfBkQgHgCAAgHQAAgFAJgEIAGgDQADgCAAgJIABghIAAgUIgBgFQgBgDgIgBQgGgBgbAAIgeAAQgHABgDACIgBAFIgBAKIAAAMIABAhQABAJACACIAGADQAJAEAAAFQAAAHgIACQgHADgXAAQgWAAgIgDQgJgCAAgHQABgFAIgEIAHgDQADgCACgSIABg8IgBg1QgCgVgCgDQgBgCgIgDQgHgDgBgGQAAgGAHgCQAGgCAaAAQAZAAAGACQAHACAAAGQAAAGgJADIgGADQgCACgBAJIgBAqQgBAGAGACQAFACAVAAIALAAIAegBQAJgBACgCIACgDIAAgFIAAgHIgBgjQAAgHgDgCIgGgDQgJgDAAgGQAAgGAGgCQAIgCAYAAQAZAAAHACQAGACABAGQgBAGgIADIgHADQgDACgBAUQgCATAAAmIACA2QABAWACADQABACAIADQAIADAAAFQgBAHgHACQgJADgWAAQgXAAgIgDg");
	this.shape_16.setTransform(-100.7,-15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.classicturkeydinner, new cjs.Rectangle(-113.4,-34.1,201.1,71.6), null);


(lib.andsomuchmore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSATQgHgIAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape.setTransform(93.7,26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BAQgYgZAAgkQAAgnAZgZQAYgaAmABQAgAAATASQATATAAAfQAAALgDADQgDADgNAAIg/AAQgGAAgDgDQgDgDAAgEQAAgFADgCQADgCAFgBIAjAAIAIgBQACgBAAgEQAAgQgLgLQgKgLgPAAQgUAAgKARQgKASAAAZQAAAZAOATQANATAVAAQAMAAAJgCQAIgEAIgFIAGgFQAJgGAEgBQAEAAACADQADACAAADQAAAFgEAFQgFAHgHAFQgOAMgOAGQgNAEgQAAQgjAAgYgXg");
	this.shape_1.setTransform(80.2,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBTQgIgCAAgIQAAgGAIgCIAEgCQAFgDABgFQACgGAAgMIAAgMIAAgOIAAgKQAAgdgCgKQgBgJgEgCIgHgDQgKgDAAgGQAAgEADgDQADgCAHgDIAXgIIAPgDQAIAAADAXIAAADIABABQAIgNAKgIQAJgHAKAAQALAAAHAHQAHAHAAAMQAAAMgFAGQgGAHgJAAIgJgBIgHgGIgDgGQgCgEgCgBQgMABgEAQQgEAPAAAyQAAAQABAHQACAHAFACIAGADQAKADAAAGQAAAHgJACQgJADgWAAQgaAAgIgDg");
	this.shape_2.setTransform(65.3,19.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8A/QgYgZAAglQAAglAZgZQAZgaAlABQAkgBAXAYQAXAXAAAlQAAAmgZAaQgYAagkAAQgkABgYgZgAgfgxQgKAOAAAWQAAAhAOAWQAOAWATAAQARAAAKgOQAKgNAAgYQAAgfgOgWQgOgXgTAAQgRAAgKAOg");
	this.shape_3.setTransform(49.1,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABKBTQgHgCgBgHQAAgGAJgDIAGgDQAFgDABgHQACgJAAgUQAAgxgHgNQgHgNgSAAQgTAAgJARQgIAQAAAoIAAAJQAAATACAGQABAFAFADIAFACQAHACAAAGQABAHgIADQgIADgZAAQgXAAgJgDQgHgCgBgHQAAgGAJgDIAGgDQAEgCACgHIABgaQAAg1gHgNQgGgNgSAAQgJAAgIAFQgIAFgFAJQgDAIgCAOQgCANAAAfQAAAPACAHQABAFAEACIAHADQAIADAAAGQAAAHgIACQgJADgWAAQgZAAgIgDQgJgCABgIQgBgGAJgCIAEgCQAEgDACgFQACgGAAgMIgBgMIAAgOIAAgKQAAgdgBgKQgBgJgEgCIgIgDQgJgDgBgGQAAgEAEgDIAKgFIAZgIIAQgEQAEAAADADQACADAAAGIAAAJIAAACIABACIABAAIABAAIABgBIADgDIACgDQAUgSAVAAQAIAAAHADQAHACAHAEQAFAFAHAIQAGAHABAAQADAAAEgFIAIgIQALgJAHgDQAIgEAKAAQAUAAAPAIQAOAIAHAOQAHAQAAAwIAAARIAAAJIAAAIQAAAJACAEQACAFAEACIAEACQAJACgBAGQAAAHgIADQgHADgaAAQgYAAgJgDg");
	this.shape_4.setTransform(24.2,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXB4QgIgCAAgHQAAgGAIgDIAHgDQAEgCABgHQACgHAAgSQAAg2gHgNQgHgOgSABQgIAAgIAFQgIAFgEAIQgEAIgBAMQgCANAAAhQAAARACAGQABAFADACIAHADQAIADAAAGQAAAHgIACQgIADgWAAQgaAAgIgDQgIgCAAgIQAAgGAIgCIAEgCQAFgDACgHQABgHAAgSIAAgbIAAgaIgBhLQgBgTgCgEQgCgCgKgCQgKgDAAgGQAAgFAEgDQAEgDAPgGIARgFIAPgBQAGAAADADQACADAAAIIgBAHIgBBDIAAAIIABAEIACABIAEgDIAGgHQAIgJAKgDQAIgFALAAQAdAAAOATQAOASAAAmIAAAPIAAAeIAAAKQAAAIACAEQACAEADACIAFACQAIACAAAGQAAAIgIACQgIADgbAAQgWAAgIgDg");
	this.shape_5.setTransform(-10.6,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag1BAQgXgZAAgkQAAgmAZgZQAZgaAlAAQAbAAAUAOQATAOAAAUQAAAHgFAGQgGAEgIAAQgJAAgFgDQgFgFgGgNQgFgMgGgFQgHgFgKAAQgTAAgLAPQgKAOAAAaQAAAdAPATQAPASAYABQAIAAAIgCQAHgDAGgEIAHgFQAJgHAFAAQADAAADACQABACAAADQAAAFgDAGQgEAGgFAEQgNAMgOAFQgPAGgRgBQgiAAgYgXg");
	this.shape_6.setTransform(-28.9,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlBVQgDgCAAgGIAAgMIAAgBIgBAAQgCAAgEAEIgCADQgIAIgKAEQgJAEgMAAQgNAAgMgFQgLgEgHgJQgIgKgDgNQgEgOAAgjIABgLIAAgMIAAgEQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEADgDQAEgDAMgEIAWgGIASgDQAFAAACAEQABADAAAIIAAAGIgBA/QgBAhAIANQAHANARAAQASAAAIgRQAJgRAAgoIAAgMQAAgOgCgDQgCgEgGgDIgGgCQgKgCAAgGQAAgEAEgDQADgDAMgEIAWgGIARgDQAFAAADAEQABADAAAIIAAAJIgBBEIAAAdIABALQABAHAIADIADABQAKADAAAGQAAAEgDACQgCADgIADIgYAIQgLADgHAAQgEAAgCgDg");
	this.shape_7.setTransform(-47.7,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABKBTQgHgCgBgHQAAgGAJgDIAGgDQAFgDABgHQACgJAAgUQAAgxgHgNQgHgNgSAAQgTAAgJARQgIAQAAAoIAAAJQAAATACAGQABAFAFADIAFACQAHACAAAGQABAHgIADQgIADgZAAQgXAAgJgDQgHgCgBgHQAAgGAJgDIAGgDQAEgCACgHIABgaQAAg1gHgNQgGgNgSAAQgJAAgIAFQgIAFgFAJQgDAIgCAOQgCANAAAfQAAAPACAHQABAFAEACIAHADQAIADAAAGQAAAHgIACQgJADgWAAQgZAAgIgDQgJgCABgIQgBgGAJgCIAEgCQAEgDACgFQACgGAAgMIgBgMIAAgOIAAgKQAAgdgBgKQgBgJgEgCIgIgDQgJgDgBgGQAAgEAEgDIAKgFIAZgIIAQgEQAEAAADADQACADAAAGIAAAJIAAACIABACIABAAIABAAIABgBIADgDIACgDQAUgSAVAAQAIAAAHADQAHACAHAEQAFAFAHAIQAGAHABAAQADAAAEgFIAHgIQAMgJAHgDQAIgEAKAAQAUAAAPAIQAOAIAHAOQAHAQAAAwIAAARIAAAJIAAAIQAAAJACAEQACAFAEACIAEACQAJACgBAGQAAAHgIADQgHADgaAAQgYAAgJgDg");
	this.shape_8.setTransform(-73,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8A/QgYgYAAgmQAAglAZgZQAZgaAlAAQAkAAAXAYQAXAXAAAmQAAAmgZAZQgYAbgkAAQgkgBgYgYgAgfgxQgKANAAAXQAAAhAOAWQAOAWATAAQARAAAKgNQAKgPAAgWQAAgggOgWQgOgXgTAAQgRAAgKAOg");
	this.shape_9.setTransform(30.6,-20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMBXIgRgDIgGADIgFABIgEgBIgDgCQgFgFgFgNQgFgNAAgNQAAgGADgDQADgEAEABQAIAAAHANIAHAKQAFAGAJAFQAJADAJAAQAKAAAHgFQAGgGAAgJQAAgOgbgOIgKgFQgagNgJgKQgJgKAAgRQAAgVAPgOQAPgOAZAAIAKABIANACIAIgDIAEgBQAJAAAIANQAHAOABAOQgBAGgCADQgDADgEABQgFAAgDgEIgJgLQgGgLgHgDQgGgFgKAAQgIABgHAFQgFAGgBAIQABAIAFAGQAGAFAVALIABABQAvAWAAAbQAAAYgSAQQgSAPgbAAg");
	this.shape_10.setTransform(13.9,-20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhJBmQgTgXgBglQABgpAWgYQAXgaAjAAIAMABQAFACADAEQADADAAAFQAAAJgLAAIgFAAIgEgBQgSAAgMAPQgKAOgBAbQABAcALASQAMASAUAAQARAAAJgKQAJgJAAgTIAAguIAAhNQAAgLgBgFQgCgFgHgCIgFgCQgKgDAAgFQAAgFAFgDQADgDANgFIATgFIAPgCQAGAAACADQADADAAAIIAAAIIgCBnIABBHQABAPADADIALADQAKACgBAHQABAHgZAIIgQAEIgOABQgEABgCgDQgCgDAAgFIAAgJIgBgCIgBgBIgFADIgHAGQgKAHgJAEQgJADgLAAQgfAAgUgWg");
	this.shape_11.setTransform(-11.9,-23.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXBUQgJgDAAgGQABgHAIgDIAGgDQAEgCABgHQACgIAAgSQAAg0gGgOQgHgNgSAAQgIgBgJAGQgIAFgEAKQgDAGgCANQgCANABAhQgBARACAFQABAFAEACIAGADQAIADAAAHQABAGgJADQgIACgWAAQgZAAgJgCQgIgDAAgIQAAgFAIgDIAFgDQAEgCABgFQACgGABgMIAAgMIgBgNIAAgRQAAgagBgJQgBgHgEgCIgIgDQgKgDAAgGQAAgDADgDQADgEAHgDIAZgIIARgCQAFAAACACQACADAAAFIAAALIAAACIABABIABAAIABgBIAEgEIADgCQASgSAVAAQAMAAALAGQALAEAIAJQAIAKADANQADANABAaIAAAWIgBALIAAAKQAAALACAGQACAEAEACIAEADQAIADAAAFQAAAIgIACQgHADgaAAQgYAAgHgCg");
	this.shape_12.setTransform(-32.5,-20.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAeBPIgJgJIgIAEQgTAOgWAAQgYAAgPgOQgPgPAAgXQAAgbAUgOQATgPAjAAQAIAAAEADQAEACAAAHQAAAJgLAAQgRAAgKAIQgKAIAAAOQAAANAJAIQAJAIAPAAQAPAAAHgHQAHgHAAgSIAAg/QAAgPgGgHQgHgIgLAAQgIAAgHADQgHAEgHAHIgDAFQgLANgLAAQgGAAgEgFQgEgEAAgHQAAgQAUgLQATgLAeAAQASAAANAFQAOAFAHAKQAFAGACAKQACALAAAYIAAA1QAAAJACAFQABAFAEABIAFABQALADAAAGQAAAIgLAGQgLAHgPAAQgIAAgIgJg");
	this.shape_13.setTransform(-51.2,-20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRATQgIgIAAgLQAAgKAIgIQAHgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_14.setTransform(-65,-13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape_15.setTransform(-74.3,-13.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAIQgHAHgLAAQgKAAgIgHg");
	this.shape_16.setTransform(-83.6,-13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.andsomuchmore, new cjs.Rectangle(-90.3,-45.9,190.8,83.8), null);


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
p.nominalBounds = new cjs.Rectangle(-63.7,-43,127.5,44.6);


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