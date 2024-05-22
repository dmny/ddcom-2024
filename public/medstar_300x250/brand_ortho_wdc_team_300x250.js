(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#EBEEF3",
	opacity: 1.00,
	manifest: [
		{src:"images/hockey_blur.png?1490630993573", id:"hockey_blur"},
		{src:"images/MEDSTAR23567ORTHOWDCBG.jpg?1490630993573", id:"MEDSTAR23567ORTHOWDCBG"},
		{src:"images/MEDSTAR23567ORTHOWDCFGpngcopy.png?1490630993573", id:"MEDSTAR23567ORTHOWDCFGpngcopy"},
		{src:"images/MEDSTAR23567ORTHOWDCPUCK.png?1490630993573", id:"MEDSTAR23567ORTHOWDCPUCK"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.hockey_blur = function() {
	this.initialize(img.hockey_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,290,400);


(lib.MEDSTAR23567ORTHOWDCBG = function() {
	this.initialize(img.MEDSTAR23567ORTHOWDCBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.MEDSTAR23567ORTHOWDCFGpngcopy = function() {
	this.initialize(img.MEDSTAR23567ORTHOWDCFGpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,400);


(lib.MEDSTAR23567ORTHOWDCPUCK = function() {
	this.initialize(img.MEDSTAR23567ORTHOWDCPUCK);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,9);


(lib.yelswoosh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBD731").s().p("Ar4OBQnUgQmzhHQjWgkhkgbIBC5wQBuBQDGB4QGODwG5DLQWEKGUyAdQxcHl1JAAQiFAAiIgFg");
	this.shape.setTransform(967.6,444.1,4.891,4.921);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1935.3,888.2);


(lib.swooshLine02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egk9AMFQkogqiagpIAAABIgBAAIAAgBIgEgBIgDgMQADgHAKABQAsANB2AWQDFAmDhAbQEtAkE4AMQGbAPGMgeQPYhLNElSQIIjTHDk0QHCk2F2mUIAPANQl5GYnGE4QnHE2oMDUQtKFTvfBJQkEASkIAAQoJAAn1hGg");
	this.shape.setTransform(1381.6,415.4,4.891,4.921);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2763.3,830.8);


(lib.swooshLine01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALxKLQtzhFuglTQqQjvprleQk3iwi4iEIAQgNQC4CAE1CtQJrFZKNDtQPDFeNFBCQIjArIGhBQIGhAHhiqIAMASQsJESthAAQjRAAjhgRg");
	this.shape.setTransform(1383.8,334.3,4.891,4.921);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5.2,2767.7,658.3);


(lib.swoosh02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#032862","#44B8E2"],[0.467,0.914],-1412.2,0.1,1116.1,0.1).s().p("EjckA6/MAAAhH7QHpCFQZCrUAhPAFYAjuABPUBzxAD5BdkgonUBHGABkA+2gWPMAE5B19g");
	this.shape.setTransform(-2110.7,-425.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3522.4,-803.3,2823.5,755);


(lib.puck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MEDSTAR23567ORTHOWDCPUCK();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,9);


(lib.photo01FGcrisp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MEDSTAR23567ORTHOWDCFGpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.588,0.588);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147,235.2);


(lib.photo01BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MEDSTAR23567ORTHOWDCBG();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MSH_4C_Pos_V-V1-2.eps
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AobBOIAAgnQCfAhCiAAQDAAAC3guQC0gqCkhWIAnAAQi0BljHAyQjKA2jXAAQiOAAiNgZg");
	this.shape.setTransform(180.4,-113.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AntAdIAAgvQDFA7DQAAQEZAAEChvIArAAQkuCNlNAAQi0AAisgqg");
	this.shape_1.setTransform(175.7,-116.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#272B73").s().p("AktB4IAAjwIJbAAIAADwg");
	this.shape_2.setTransform(156.5,-111.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6DD3E").s().p("AktB4IAAjwIJbAAIAADwg");
	this.shape_3.setTransform(217.1,-111.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AppCGIAAkLITSAAIAAELg");
	this.shape_4.setTransform(186.8,-111.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#272B73").s().p("AA3B1QgeABgPABIAAgHIAMgFQAMgFACgEQADgEAAgNIAAg5QAAgYgJgJQgKgLgUAAQgPgBgUAIIAABeQAAANADAFQACAEAKAEIALAFIAAAHQgRgBgcgBQgVABgTABIAAgHIAOgGQALgEADgEQAEgGgBgJIAAiaQAAgLgDgFQgFgEgMgDIgOgCIAAgGIAFgBQAegHAbgIIAABhQAggOAaAAQAsAAAAAyIAABCQAAAPADADQAEADAOAGIAJAEIAAAHQgQgBgagBg");
	this.shape_5.setTransform(344,-78.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#272B73").s().p("AgdA+IAAhqIgXAAIAAgGQATgIAHgJQAHgHAIgTIABgDIAIAAIAAAoIA0AAIAAAMIg0AAIAABgQAAAgAXAAQANAAAQgHIADAIQgeAMgUAAQggAAAAgjg");
	this.shape_6.setTransform(327.3,-75.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#272B73").s().p("AACB1QgbABgSABIAAgHIAOgFQALgEAEgFQADgGAAgKIAAiZQAAgLgEgFQgEgEgNgDIgNgCIAAgFIAfgHQAOgEAPgGIAADIQAAANAEAFQAEAFANAEIAKADIAAAHQgVgBgXgBg");
	this.shape_7.setTransform(315.7,-78.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#272B73").s().p("AAQA6QgeAVgVgBQgRABgLgLQgLgLAAgQQAAgYAWgJQAQgGAtgHIAEAAIAAgtQAAgSgRAAQgJAAgEACQgEACgDAFQgHAMgEAFQgFADgHAAQgGABgEgEQgEgEAAgGQAAgMAQgGQAQgIAZABQAtgBAAAlIAABNQAAAVASAAQAFAAAHgDIAEAEQgdAVgMgBQgOABgEgVgAgZALQgSAHAAATQAAALAHAGQAHAHAMAAQAOAAAQgJIAAgzQgbAGgLAEg");
	this.shape_8.setTransform(302.7,-74);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#272B73").s().p("AgvA6QgRgTAAghQgBgkAVgXQAUgYAfAAQAaAAARARQAQAQAAAbIAAAGIhmAAIAAADQAAASADAMQAEANAIAJQAPASAUAAQARAAAegLIADAJQghASgfAAQgdAAgSgUgAgbgyQgHAKgCATIBFAAQAAgXgIgLQgGgLgQAAQgTAAgLAQg");
	this.shape_9.setTransform(286.3,-73.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#272B73").s().p("AA9BmQgXABgUABIAAgIIAJgDQARgHAEgEQADgFAAgOIAAg9IhkAAIAAA9QAAAOAEAFQADAEAQAHIAJADIAAAIQgRgBghgBQgaABgRABIgBgIIAJgDQAPgFAFgFQADgGAAgOIAAh9QABgPgFgFQgFgGgOgFIgJgCIABgIQAQACAggBQAeABAPgCIAAAIIgJACQgOAFgFAGQgEAFAAAPIAAA2IBkAAIAAg2QAAgPgFgFQgEgGgPgFIgJgCIAAgIQARACAhgBQAcABAQgCIAAAIIgIACQgPAFgEAGQgFAFAAAPIAAB9QAAAOAEAFQADAEARAHIAIADIAAAIQgRgBgigBg");
	this.shape_10.setTransform(266.5,-76.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#272B73").s().p("AgRBNQggAAgPACIAAgIIAPgFQAKgDAEgEQAEgFAAgKIAAhNQAAgNgFgEQgDgEgNgCIgMgCIAAgGQATgDAogLIAAAWQAagTAVABQAXAAAAARQAAAQgQAAQgFAAgDgCQgDgCgFgGQgFgHgGAAQgNAAgNAJIAABcQAAALADAFQABAEAMADIAVAFIAAAIQgQgCgiAAg");
	this.shape_11.setTransform(239.6,-74.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#272B73").s().p("AAQA6QgdAVgWgBQgRABgLgLQgLgLAAgQQAAgXAWgKQAQgGAsgHIAFAAIAAgtQAAgSgRAAQgKAAgDACQgEACgEAFQgFAMgFAFQgFADgGAAQgHABgEgEQgEgEAAgGQAAgLAQgHQAQgIAZABQAtgBAAAlIAABNQAAAKAFAFQAEAGAJAAQAEAAAJgDIADAEQgdAVgLgBQgOABgFgVgAgaALQgRAHAAATQAAALAHAGQAHAHAMAAQAPAAAPgJIAAgzQgbAGgMAEg");
	this.shape_12.setTransform(224.5,-74);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#272B73").s().p("AgdA+IAAhqIgXAAIAAgGQASgIAIgJQAHgHAIgTIABgDIAIAAIAAAoIA0AAIAAAMIg0AAIAABgQAAAgAXAAQANAAAQgHIADAIQgeAMgUAAQggAAAAgjg");
	this.shape_13.setTransform(209.9,-75.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#272B73").s().p("AgXBnIgVgFIgPgBIgBAAIAAgDQAAgXgCgaIAIAAQAMAfAIAHQAKAKAVgBQAQAAALgKQALgJAAgPQAAgKgFgIQgGgHgPgKIgbgTIgXgPQgGgGgDgJQgFgJAAgNQAAgZARgQQAQgPAaAAQANAAAGACIAcAEIAFAAIABAvIgGAAIgCgEQgLgWgIgHQgJgIgRABQgOgBgKAKQgLAJAAAOQAAANAFAGQAFAGARAMIAfAVQAUALAIAMQAIALAAAOQAAAagTAPQgTAQgbABQgNAAgIgCg");
	this.shape_14.setTransform(196.1,-76.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#272B73").s().p("AAbBoQgPAIgMAEQgIADgNAAQgdAAgRgTQgSgUAAghQAAgnAWgVQAXgYAmAAQAQAAANAHIAAgrQAAgLgDgEQgFgFgNgCIgKgDIAAgGQAfgHAcgJIAADIQAAAKAEADQAEAEAPADIAIABIAAAGIgEABQgaAFgXAHIgGABgAgogGQgPAQAAAiQABAcAMAQQANAQAVAAQANAAATgHIADgCIAAhxQgOgIgOAAQgYAAgPAUg");
	this.shape_15.setTransform(179.2,-78);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#272B73").s().p("AgvA6QgRgTAAghQAAgkAUgXQAUgYAfAAQAaAAAQARQARAQgBAbIAAAGIhkAAIgBADQAAASADAMQAEANAIAJQAOASAVAAQAQAAAfgLIADAJQghASgfAAQgdAAgSgUgAgagyQgIAKgBATIBFAAQgBgXgHgLQgIgLgQAAQgRAAgLAQg");
	this.shape_16.setTransform(161.4,-73.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#272B73").s().p("AgIBpIhKipIAAB+QAAAPADAFQADAEAOAGIAJAEIAAAHQgMgBgfAAQgSAAgQABIAAgHIAIgDQAPgFAFgGQAEgFAAgPIAAh+QAAgOgDgFQgEgFgOgFIgIgDIAAgIQAMACAQAAQARAAAOgCIBECdIBGidIAgACIAVgBIAFgBIAAAIIgLAEQgNAFgCAEQgDAFAAAOIAAB+QAAAPAEAFQAEAGAPAFIAJADIAAAHQgOgBghAAQgaAAgRABIAAgHIAMgFQALgFADgFQADgFAAgNIAAh/IhKCpg");
	this.shape_17.setTransform(139.6,-76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(125,-125,228.8,59.1);


(lib.FGblur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.hockey_blur();
	this.instance.parent = this;
	this.instance.setTransform(3,4,0.583,0.583);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,4,169,233.1);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3DB7E4").s().p("AgIAJQgEgEAAgFQAAgEAEgDQAEgFAEAAQAFAAAEAFQAEADAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape.setTransform(109.4,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DB7E4").s().p("AgQAuQgJgDgHgHQgGgHgEgJQgEgJAAgLQAAgJAEgKQAEgJAGgHQAHgGAJgEQAJgDAIAAQALgBAIAEQAJADAGAHQAFAGAEAKQADAJAAAKIAAAFIhKAAQABAGACAFQADAFAEAEQAEAEAFADQAGACAEAAQAJAAAIgEQAGgEAFgHIANALIgIAJIgKAGIgLAEIgMABQgIgBgKgDgAAcgHQAAgGgCgFQgCgEgDgEQgDgEgFgBQgFgDgHAAQgEAAgFADQgFACgEADQgEAEgDAFQgCAEgBAGIA3AAIAAAAg");
	this.shape_1.setTransform(101.1,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3DB7E4").s().p("AgaAwIAAhIIAAgVIARAAIABAQIABAAQAEgIAGgFIAIgEIAJgBIAHABIgBARIgIgBQgHAAgFADQgFACgBAEQgDAEgCAGQgCAFAAAGIAAAwg");
	this.shape_2.setTransform(92.5,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3DB7E4").s().p("AgTAuQgJgEgHgHQgHgGgEgKQgEgJAAgKQAAgKAEgJQAEgJAHgHQAHgGAJgEQAKgDAJAAQAKAAAKADQAJAEAHAGQAHAHAEAJQAEAJgBAKQABAKgEAJQgEAKgHAGQgHAHgJAEQgKADgKABQgJgBgKgDgAgMgeQgGACgEAGQgEAEgCAHQgCAGAAAFQAAAGACAHQACAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAEgFACgGQACgHAAgGQAAgFgCgGQgCgHgEgEQgEgGgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(82.1,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3DB7E4").s().p("AA2AwIAAgyIgBgLQgBgGgDgEQgCgEgEgCQgEgCgGAAQgGAAgFACQgFADgDAEQgCAEgCAGQgBAFAAAGIAAAxIgRAAIAAg2IgBgKQgBgFgCgDQgDgEgEgCQgEgBgFAAQgFAAgFACQgEACgDAEQgEAEgBAGQgCAGAAAHIAAAwIgTAAIAAhIIgBgVIASAAIABAQIAAAAQAEgIAIgFIAIgEQAFgBAGAAQAJAAAIAEIAFAGQADAEACAFIAGgIIAHgGIAJgEIAKgBQAJAAAHADQAGADAFAFQAEAFACAIQADAGAAAIIAAA5g");
	this.shape_4.setTransform(67.1,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3DB7E4").s().p("AAXAwIAAgyIgBgLQgBgGgCgEQgDgEgEgCQgEgCgGAAQgEAAgFACQgEACgEAEQgDAEgCAGQgCAGAAAHIAAAwIgTAAIAAhIIAAgVIARAAIABAQIABAAIAFgHIAHgGIAJgEIAIgBQAJAAAHADQAGADAFAFQAEAFACAIQACAGAAAIIAAA5g");
	this.shape_5.setTransform(47.5,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3DB7E4").s().p("AgaAwIAAhIIAAgVIARAAIABAQIABAAQAEgIAGgFIAIgEIAJgBIAHABIgBARIgIgBQgHAAgFADQgFACgBAEQgDAEgCAGQgCAFAAAGIAAAwg");
	this.shape_6.setTransform(38.8,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3DB7E4").s().p("AgSAwQgHgCgEgDQgGgEgDgFQgDgGAAgIQAAgFABgFQACgEADgDQAFgEAKgDQAMgFAfgBIAAgCQAAgGgCgDQgBgEgDgDIgIgEIgJgBQgGAAgIADQgGADgFAFIgKgMQAHgHAKgEQAKgDAJAAQAKAAAIADQAHACAFAGQAFAEADAHQACAHAAAIIAAAnQAAANABAGIgRAAQgBgGAAgIIgBAAQgFAIgIAEQgIAEgJABQgGgBgFgBgAgIAFQgGACgEADQgEAEAAAGQAAAEACADIAEAFQAFACAJAAQAEAAAFgBQAFgCAEgFQADgDACgFQACgFAAgGIAAgFIgFAAQgSAAgIADg");
	this.shape_7.setTransform(28.8,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3DB7E4").s().p("AgQAuQgJgDgHgHQgGgHgEgJQgEgJAAgLQAAgJAEgKQAEgJAGgHQAHgGAJgEQAJgDAIAAQALgBAIAEQAJADAGAHQAFAGAEAKQADAJAAAKIAAAFIhKAAQABAGACAFQADAFAEAEQAEAEAFADQAGACAEAAQAJAAAIgEQAGgEAFgHIANALIgIAJIgKAGIgLAEIgMABQgIgBgKgDgAAcgHQAAgGgCgFQgCgEgDgEQgDgEgFgBQgFgDgHAAQgEAAgFADQgFACgEADQgEAEgDAFQgCAEgBAGIA3AAIAAAAg");
	this.shape_8.setTransform(17.9,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3DB7E4").s().p("AgoBGIAAiLIAUAAIAAB6IA9AAIAAARg");
	this.shape_9.setTransform(7.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.2,24);


(lib.copy25 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED130").s().p("AgSATQgFgDgBgFQgDgFAAgGQAAgEADgFQACgFADgEIAJgGQAGgCAEAAQALAAAJAIQADAEACAFQADAFAAAEQAAAFgDAFQgCAFgDAEQgJAIgLAAQgKAAgIgIg");
	this.shape.setTransform(51.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED130").s().p("AgVBmQgLgCgKgEQgJgEgJgFQgJgGgGgGQgIgHgGgIQgFgJgEgKQgEgJgCgLQgCgLgBgKQABgLACgLQACgLAEgKQAEgJAFgIQAGgJAIgGQAGgHAJgFQAJgFAJgEQAKgDALgCQALgCAKAAQALAAALACQALACAKADQAKAEAIAFQAJAFAHAHQAHAGAGAJQAFAIAEAJQAFAKACALQABALAAALQAAAKgBALQgCALgFAJQgEAKgFAJIgNAPQgHAGgJAGQgIAFgKAEQgKAEgLACQgLACgLAAQgKAAgLgCgAgVg3QgLAEgHAIQgIAJgEALQgEAKAAANQAAAMAEALQAEAMAIAHQAHAJALAFQAKAEALAAQAMAAALgEQAKgFAIgJQAHgHAEgMQAFgLgBgMQABgNgFgKQgEgLgHgJQgIgIgKgEQgLgFgMAAQgLAAgKAFg");
	this.shape_1.setTransform(36.1,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED130").s().p("AgFBmQgLgCgKgEQgKgDgIgGQgJgFgHgHQgIgHgFgIQgGgJgEgJQgEgKgCgKQgCgLAAgLQAAgKACgLQACgLAEgKQAEgJAGgIQAGgJAHgHIAQgMQAIgFAKgDQAKgEALgCQAIgCALAAQAMAAALACQALACAKADQAKAEAIAFQAJAFAGAGIgeAiQgIgIgLgFQgMgGgOAAQgMAAgJAFQgLAFgIAIQgHAJgFALQgEALAAAMQAAANAEAMQAEALAIAIQAHAJAMAEQAJAFAOAAIAQgCQAIgBAGgCIAAglIglAAIAAgkIBRAAIAABnQgPAIgTAEQgbAFgPAAQgMAAgJgCg");
	this.shape_2.setTransform(13.6,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,1,56.4,32);


(lib.copy24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpDBQgUgDgSgHQgTgHgQgKQgQgLgMgMIA7g9QAOASAWALQAYALAVAAQAWAAANgJQAHgFAEgIQAEgIAAgLQAAgKgFgIQgFgHgKgGQgNgIgrgOIgjgOQgSgJgNgJQgOgOgHgRQgJgSABgZQgBgPAEgOQADgNAGgLQAMgWAWgPQAUgOAagHQAZgHAaAAQAVAAAsAMQAQAGAPAJQAPAIAMALIg6A+QgMgPgSgJQgTgJgSAAQgTAAgOAIQgIAEgFAHQgEAIAAALQgBARARAKQAKAHAdAKIAoAOQAXAJAPALQASAMAKASQALAUAAAbQAAAQgDAOQgDAOgGAMQgLAXgVAQQgUAPgaAHQgZAIgbAAQgUAAgTgEg");
	this.shape.setTransform(125.3,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpDCQgVgEgSgHQgSgHgRgKQgQgLgOgNQgOgNgKgQQgLgQgHgSQgIgSgEgUQgEgVAAgUQAAgWAEgVQAEgUAIgSQAHgSALgQQAKgPAOgNQAOgNAQgKQARgKASgGQASgHAVgDQAUgEAVAAQAVAAAVAEQAVADASAHQATAGAQAKQAQAKANANQAPANAKAPQALAQAHASQAIASAEAUQAEAVAAAWQAAAUgEAVQgEAUgIASQgHASgLAQQgKAQgPANQgNANgQALQgQAKgTAHQgSAHgVAEQgVADgVAAQgVAAgUgDgAgrhqQgSAJgPAPQgOAQgIAVQgHAVgBAYQABAXAHAWQAIAVAOAQQAOAPAUAJQAUAJAWAAQAWAAAVgJQATgJAPgPQAOgQAIgVQAIgWAAgXQAAgYgIgVQgIgVgOgQQgOgPgUgJQgUgIgXAAQgWAAgVAIg");
	this.shape_1.setTransform(89.6,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvC7IhPiVIgfAAIAACVIhZAAIAAl1ICPAAQAbAAAYAFQAbAHATAMQAVAOALAVQAGAMADANQAEAOAAAPQAAASgGARQgFAQgKANQgKALgPAKQgOAJgSAFIBiChgAg/gaIAqAAQAaABAQgJQAKgFAGgJQAGgJAAgPQAAgMgFgJQgGgIgJgEQgPgIgXAAIgwAAg");
	this.shape_2.setTransform(53.1,28.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiMC7IAAl1ICJAAQAeAAAZAFQAcAHATANQAVAOALAWQAFAMADAMQADAPgBAPQAAAQgCAPQgDANgGAMQgMATgWAPQgTAOgbAGQgbAHgcAAIgtAAIAACNgAgygYIAmAAQAbAAAQgKQAKgFAEgJQAGgJAAgNQAAgNgGgJQgEgJgJgEQgPgIgcAAIgnAAg");
	this.shape_3.setTransform(20.1,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,5,141.6,57);


(lib.copy23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED130").s().p("AhEBiIAAjEICEAAIAAApIhWAAIAAAlIBRAAIAAAkIhRAAIAAAqIBaAAIAAAog");
	this.shape.setTransform(78.6,13.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED130").s().p("AAmBiIAAhTIhLAAIAABTIgwAAIAAjEIAwAAIAABMIBLAAIAAhMIAwAAIAADEg");
	this.shape_1.setTransform(59.5,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED130").s().p("AgWBiIAAibIg5AAIAAgpICeAAIAAApIg3AAIAACbg");
	this.shape_2.setTransform(41.2,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,0.2,57.3,32);


(lib.copy22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED130").s().p("Ag1BNIAAiZIBnAAIAAAfIhCAAIAAAeIA+AAIAAAcIg+AAIAAAhIBGAAIAAAfg");
	this.shape.setTransform(113.3,28.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED130").s().p("AATBNIggg+IgMAAIAAA+IglAAIAAiZIA7AAQAKgBAKADQALACAIAGQAJAFAFAKQACAEABAGQACAFAAAHQAAAHgCAIQgDAGgEAFQgEADgGAEQgGAEgIADIApBCgAgZgKIARAAQAKABAHgEQAEgDACgDQADgEAAgGQAAgEgDgFQgCgCgEgCQgGgEgIAAIgUAAg");
	this.shape_1.setTransform(100.2,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FED130").s().p("Ag1BNIAAiZIBnAAIAAAfIhCAAIAAAeIA+AAIAAAcIg+AAIAAAhIBGAAIAAAfg");
	this.shape_2.setTransform(86.4,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FED130").s().p("AAeBNIAAhBIg7AAIAABBIgmAAIAAiZIAmAAIAAA6IA7AAIAAg6IAlAAIAACZg");
	this.shape_3.setTransform(71.5,28.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FED130").s().p("AAfBNIgfhnIAAAAIgeBnIglAAIgsiZIAoAAIAZBlIAAAAIAchlIAlAAIAcBlIABAAIAZhlIAnAAIgsCZg");
	this.shape_4.setTransform(52.3,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39,18,82.3,26);


(lib.copy21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpDCQgUgEgTgHQgTgHgQgKQgQgLgOgNQgNgNgLgQQgLgQgIgSQgHgSgEgUQgEgVAAgUQAAgWAEgVQAEgUAHgSQAIgSALgQQALgPANgNQAOgNAQgKQAQgKATgGQATgHAUgDQAVgEAUAAQAVAAAVAEQAVADASAHQASAGAQAKQARAKAOANQAOANAKAPQALAQAHASQAIASAEAUQAEAVAAAWQAAAUgEAVQgEAUgIASQgHASgLAQQgKAQgOANQgOANgRALQgQAKgSAHQgSAHgVAEQgVADgVAAQgUAAgVgDgAgrhqQgTAJgOAPQgPAQgHAVQgIAVAAAYQAAAXAIAWQAIAVAOAQQAPAPATAJQAUAJAWAAQAXAAATgJQAVgJAOgPQAPgQAHgVQAIgWAAgXQAAgYgIgVQgHgVgPgQQgPgPgTgJQgUgIgXAAQgWAAgVAIg");
	this.shape.setTransform(63.3,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLDCQgVgEgSgHQgTgHgQgKQgRgKgNgOQgOgNgLgQQgLgPgHgSQgIgTgEgTQgEgVAAgVQAAgVAFgUQADgVAIgSQAIgTALgPQALgQANgNQANgMARgKQAQgKATgHQASgHAUgDQASgEAWAAQAVAAAWAEQAUADAUAHQASAHAQAJQAPAJANALIg6BBQgNgPgWgKQgWgKgbAAQgXAAgUAJQgTAIgPAQQgPAQgIAWQgIAVAAAYQgBAZAJAWQAHAWAOAPQAPAQAVAJQAUAJAbgBIAfgCQAOgDAMgFIAAhEIhHAAIAAhHICaAAIAADFQgdAOgjAJQg0AJgdAAQgWAAgTgDg");
	this.shape_1.setTransform(21.7,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.1,57);


(lib.copy18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAOQgDgDgCgDQgBgEgBgEIACgHQACgDADgDQACgDAFgBIAGgCQAJAAAFAGQADADACADQABAEABADIgCAIQgCADgDADQgFAGgJAAQgHAAgGgGg");
	this.shape.setTransform(-153.9,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAzIgLgFIgJgHIATgUQAFAFAGADQAHADAHAAQADAAAEgCQAEgCAAgFQAAgEgFgDIgOgFQgPgEgGgFQgEgCgDgFQgCgFAAgHQAAgJAEgHQADgHAHgEQAGgEAIgCQAHgCAGAAQAMAAALAEIAKAEQAFADAEAEIgTATQgEgEgGgDQgGgCgGAAQgEAAgDACQgEACAAAEQAAAEAFACQACACALACIALAEQAHADAEADQAFACADAFQADAGAAAHQAAAKgEAHQgEAHgHAEQgGAEgIACQgHACgIAAQgQgBgIgDg");
	this.shape_1.setTransform(-162.2,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape_2.setTransform(-170.1,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_3.setTransform(-179.4,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABAQgHgCgEgFQgEgFgCgHQgCgHAAgIIAAgqIgRAAIAAgaIARAAIAAgcIAfAAIAAAcIAZAAIAAAaIgZAAIAAAlQAAAIADADQADAEAIAAQAGAAAEgCIAAAaQgJADgLAAQgLAAgFgDg");
	this.shape_4.setTransform(-189.1,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBOIAAhnIAhAAIAABngAgNgtQgFgFAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAFQAGAGAAAIQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_5.setTransform(-196,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag5BPIAAiaIAhAAIAAANIABAAQAFgGAIgEIAJgEQADgBAGgBQALABAKAEQAJAEAGAIQAHAHADALQAEAKAAAKQAAAMgEAKQgDAHgHAIQgGAIgJAFQgNAEgIAAQgIAAgIgEQgJgEgFgGIAAAAIAAA+gAgJgvQgEACgEAEQgDAEgCAFQgCAFAAAEQAAAGACAEQACAGADADQAEAEAEAAQAFADAEgBQAFABAFgDQAFAAADgEQADgDACgGQABgFAAgFQAAgFgBgFQgCgEgDgEQgDgEgFgCQgFgCgFgBQgEABgFACg");
	this.shape_6.setTransform(-205.7,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_7.setTransform(-219,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBMIgPgEIgOgHQgGgEgFgFIgKgLIgHgOQgDgHgCgIQgBgIAAgIQAAgIABgIQACgIADgHQADgHAEgGIAKgMIAMgJQAGgEAIgCQAHgDAIgBQAGgCAIAAIAQACQAIABAHADQAIACAGAEQAGAFAFAFIgYAYQgFgGgJgEQgHgDgJAAQgKAAgGADQgHADgGAHQgGAGgDAIQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAGAEAJAAQAKAAAJgEQAIgEAEgHIAZAXIgLAKQgGAFgHADIgQAFQgIACgJAAQgJAAgGgCg");
	this.shape_8.setTransform(-231.6,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.3,1.1,92.7,25);


(lib.copy17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQA1IAAg3QAAgKgDgFIgFgFQgDgCgEAAQgDAAgDACQgEACgCADQgFAGAAAKIAAA2IgiAAIAAhmIAhAAIAAAOIABAAQADgHAJgFQAEgDACgBIALgBQAKAAAIADQAHAEAEAGQAFAGACAIQACAHAAAJIAAA+g");
	this.shape.setTransform(118.7,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgIgHQgJgIgEgKIgDgLIgCgLQAAgHAFgPQAEgKAJgHQAHgIALgDQALgEAKAAQALAAALAEQAKADAIAIQAJAHAEAKQAFAPAAAHIgCALIgDALQgEAKgJAIQgIAHgKAEQgLAEgLAAQgKAAgLgEgAgJgXQgFACgDAEQgDADgCAFQgBAFAAAEQAAAEABAFIAFAJQADAEAFACQAFACAEAAQAFAAAFgCQAFgCADgEQADgEACgFQABgFAAgEQAAgEgBgFQgCgFgDgDQgDgEgFgCQgFgDgFAAQgEAAgFADg");
	this.shape_1.setTransform(105.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABAQgGgCgFgFQgFgFgCgHQgCgHAAgIIAAgqIgQAAIAAgaIAQAAIAAgcIAhAAIAAAcIAYAAIAAAaIgYAAIAAAlQgBAIADADQADAEAHAAQAHAAADgCIABAaQgJADgLAAQgKAAgGgDg");
	this.shape_2.setTransform(94.9,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBKQgTgGgHgGIASgZQAHAHAJAEQAJADAJAAQAGAAAFgCQAGgCAEgEQADgEACgGQACgFAAgGIAAgHIgBAAQgFAGgIAEQgIAEgJAAQgLAAgKgFQgJgDgGgIQgHgHgDgIQgEgKAAgKQAAgLAEgLQADgKAGgHQAHgIAJgEIAKgDIALgCQAIABAJAEIAIAEIAHAIIAAAAIAAgNIAhAAIAABcIgCAPIgDAMQgCAGgDAEQgDAFgEADQgEAEgFADIgLAFQgQADgHAAQgTgBgJgDgAgJgvQgEABgEAEQgDAEgBAFQgCAFAAAFQAAAFACAFQABAFADAEQAEADAEABQAFACAEAAQAFAAAFgCQAFgBADgDIAFgJQACgFAAgFIgCgKQgCgFgDgEQgDgEgFgBQgFgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(83.9,15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQA1IAAg3QAAgKgDgFIgFgFQgDgCgEAAQgDAAgDACQgEACgCADQgFAGAAAKIAAA2IgiAAIAAhmIAhAAIAAAOIABAAQADgHAJgFQAEgDACgBIALgBQAKAAAIADQAHAEAEAGQAFAGACAIQACAHAAAJIAAA+g");
	this.shape_4.setTransform(70.9,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_5.setTransform(61.3,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQBPIAAg5QAAgKgDgFQgBgEgDgBQgDgCgFAAQgCAAgEACQgDABgDADQgFAHABAJIAAA5IgjAAIAAidIAjAAIAABDQAEgGAHgFQAEgCADgBQAEgCAGAAQAKAAAHAEQAIADAEAHQAFAGACAHQACAGAAAIIAABBg");
	this.shape_6.setTransform(51.8,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAzIgLgFIgJgHIATgUQAFAFAGADQAHADAHAAQADAAAEgCQAEgCAAgFQAAgEgFgDIgOgFQgPgEgGgFQgEgCgDgFQgCgFAAgHQAAgJAEgHQADgHAHgEQAGgEAIgCQAHgCAGAAQAMAAALAEIAKAEQAFADAEAEIgTATQgEgEgGgDQgGgCgGAAQgEAAgDACQgEACAAAEQAAAEAFACQACACALACIALAEQAHADAEADQAFACADAFQADAGAAAHQAAAKgEAHQgEAHgHAEQgGAEgIACQgHACgIAAQgQgBgIgDg");
	this.shape_7.setTransform(40.2,12.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_8.setTransform(29.2,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAeBKIgehjIAAAAIgcBjIgkAAIgqiTIAmAAIAYBhIABAAIAahhIAkAAIAbBhIAAAAIAYhhIAlAAIgqCTg");
	this.shape_9.setTransform(12.8,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.3,25);


(lib.copy16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAzQgKgDgIgHQgIgIgFgKIgCgLQgCgGAAgGQAAgHAEgOQAFgLAHgHQAIgHAKgEQALgEAKAAQALAAAKAEQAKAEAGAHQAIAHADALQAEAPAAAHIAAAIIhKAAQABAEACAEIAFAGQAIAGAHAAQAIAAAGgDQAFgDAEgFIAYAPQgEAFgFAEQgFAFgGACQgFADgHACQgIABgHAAQgKAAgLgEgAAWgLQAAgIgEgGIgHgEQgEgBgFAAQgDAAgEABQgEACgEADQgGAFgBAIIAqAAIAAAAg");
	this.shape.setTransform(-312.7,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBPIAAg5QAAgKgDgFQgDgEgDgBQgCgCgFAAQgDAAgDACQgDABgDADQgEAHgBAJIAAA5IgiAAIAAidIAiAAIAABDQAEgGAIgFQAEgCACgBQAGgCAFAAQAKAAAHAEQAIADAFAHQAEAGACAHQACAGAAAIIAABBg");
	this.shape_1.setTransform(-325.3,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABAQgHgCgEgFQgEgFgCgHQgCgHgBgIIAAgqIgQAAIAAgaIAQAAIAAgcIAgAAIAAAcIAZAAIAAAaIgZAAIAAAlQABAIACADQADAEAIAAQAGAAAEgCIAAAaQgJADgLAAQgLAAgFgDg");
	this.shape_2.setTransform(-335.9,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.7,0.8,37.4,25);


(lib.copy15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBRIAAhPIgTAAIAAgYIATAAIAAgKQAAgKACgIQADgJAFgHQAFgGAHgEQAJgEAMAAQAKAAAHACIgCAbQgFgBgFAAQgEAAgEACQgDABgBADQgDAFAAAJIAAAKIAXAAIAAAYIgXAAIAABPg");
	this.shape.setTransform(19.3,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgIgHQgJgIgEgKIgDgLIgCgLQAAgHAFgPQAEgKAJgHQAHgIALgDQALgEAKAAQALAAALAEQAKADAIAIQAJAHAEAKQAFAPAAAHIgCALIgDALQgEAKgJAIQgIAHgKAEQgLAEgLAAQgKAAgLgEgAgJgXQgFACgDAEQgDADgCAFQgBAFAAAEQAAAEABAFIAFAJQADAEAFACQAFACAEAAQAFAAAFgCQAFgCADgEQADgEACgFQABgFAAgEQAAgEgBgFQgCgFgDgDQgDgEgFgCQgFgDgFAAQgEAAgFADg");
	this.shape_1.setTransform(8.6,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.1,25);


(lib.copy14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxA1IAAg3QAAgKgDgFQgBgEgDgBQgDgCgFAAQgEAAgEACQgDACgCADQgEAGgBAKIAAA2IggAAIAAg5QAAgKgDgFQgEgFgHAAQgFAAgDACQgDABgDAEQgEAGAAAKIAAA2IgiAAIAAhmIAhAAIAAAOIABAAQAEgHAHgFIAJgEIAKgBIALABIAHADQAIAFAEAJQAFgJAIgEIAJgEQAFgBAGAAQALAAAHAEQAIADAEAHQAEAGACAIQACAHAAAIIAAA+g");
	this.shape.setTransform(-151.1,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_1.setTransform(-167,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgHQgIgIgFgKIgCgLQgCgGAAgGQAAgHAEgOQAEgLAIgHQAIgHAKgEQALgEAKAAQALAAAKAEQAJAEAHAHQAIAHADALQAEAPAAAHIAAAIIhKAAQABAEACAEIAFAGQAIAGAHAAQAIAAAGgDQAGgDADgFIAYAPQgDAFgGAEQgEAFgHACQgFADgHACQgHABgJAAQgJAAgKgEgAAWgLQAAgIgEgGIgHgEQgEgBgFAAQgDAAgEABQgEACgEADQgGAFgBAIIAqAAIAAAAg");
	this.shape_2.setTransform(-178.9,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABAQgHgCgEgFQgEgFgCgHQgCgHgBgIIAAgqIgQAAIAAgaIAQAAIAAgcIAgAAIAAAcIAZAAIAAAaIgZAAIAAAlQABAIACADQADAEAIAAQAFAAAFgCIAAAaQgJADgLAAQgLAAgFgDg");
	this.shape_3.setTransform(-189.2,11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,0,55.8,25);


(lib.copy13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape.setTransform(-164.6,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_1.setTransform(-173.9,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAzQgKgEgIgHQgIgHgFgKIgDgLIgBgMQAAgHAEgPQAFgKAIgHQAIgHAKgEQALgEAKAAQALAAALAEQALAEAGAGIgUAXQgDgEgFgCQgFgCgFAAQgFAAgFACQgCACgEAEQgDADgBAFQgCAFAAAEQAAAFACAFQABAFADADQAEAEACACQAFACAFAAQAGAAAFgCQAFgCADgEIATAYQgGAGgLAEQgKADgLAAQgLAAgLgEg");
	this.shape_2.setTransform(-184.4,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_3.setTransform(-193.2,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBPIgKgDQgJgFgHgIQgGgHgDgKQgEgKAAgLQAAgLAEgKQADgIAHgIQAGgIAJgEQAKgEALAAQAIAAAJAEQAIAEAFAGIAAAAIAAhBIAjAAIAACcIggAAIAAgNIgBAAIgGAHQgDADgFACQgJAEgJAAQgGAAgFgBgAgJAAQgFACgDAEQgDAEgCAFQgBAEAAAGQAAAFABAEQACAGADADQADAEAFACQAEADAFAAQAFAAAFgDQAEgCAEgEQADgDACgFQACgFAAgFQAAgFgCgFQgCgFgDgEQgEgEgEgCQgFAAgFAAQgFAAgEAAg");
	this.shape_4.setTransform(-203.5,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAzQgKgDgIgHQgIgIgEgKIgEgLQgBgGAAgGQAAgHAFgOQADgLAJgHQAHgHALgEQAKgEAJAAQAMAAAKAEQAJAEAIAHQAGAHAFALQADAPAAAHIAAAIIhKAAQAAAEADAEIAGAGQAGAGAIAAQAIAAAGgDQAFgDAEgFIAYAPQgEAFgEAEQgGAFgFACQgGADgIACQgGABgJAAQgJAAgLgEgAAXgLQgBgIgFgGIgGgEQgEgBgFAAQgDAAgFABQgDACgDADQgHAFgBAIIArAAIAAAAg");
	this.shape_5.setTransform(-216.3,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxA1IAAg3QAAgKgDgFQgCgEgDgBQgDgCgEAAQgEAAgEACQgDACgCADQgFAGAAAKIAAA2IggAAIAAg5QAAgKgEgFQgDgFgHAAQgEAAgEACQgDABgDAEQgEAGAAAKIAAA2IgjAAIAAhmIAiAAIAAAOIABAAQADgHAIgFIAIgEIALgBIALABIAHADQAIAFAEAJQAGgJAHgEIAJgEQAGgBAGAAQAJAAAJAEQAGADAFAHQAEAGADAIQACAHAAAIIAAA+g");
	this.shape_6.setTransform(-232.2,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244,0,84.8,25);


(lib.copy12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape.setTransform(90.4,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_1.setTransform(81.1,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_2.setTransform(72.3,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAzQgKgEgIgHQgIgHgFgKIgDgLIgBgMQAAgHAEgPQAFgKAIgHQAIgHAKgEQALgEAKAAQALAAALAEQALAEAGAGIgUAXQgDgEgFgCQgFgCgFAAQgFAAgFACQgCACgEAEQgDADgBAFQgCAFAAAEQAAAFACAFQABAFADADQAEAEACACQAFACAFAAQAGAAAFgCQAFgCADgEIATAYQgGAGgLAEQgKADgLAAQgLAAgLgEg");
	this.shape_3.setTransform(64.3,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_4.setTransform(55.6,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBRIAAhPIgTAAIAAgYIATAAIAAgKQAAgKACgIQADgJAFgHQAFgGAHgEQAJgEAMAAQAKAAAHACIgCAbQgFgBgFAAQgEAAgEACQgDABgBADQgDAFAAAJIAAAKIAXAAIAAAYIgXAAIAABPg");
	this.shape_5.setTransform(48.9,9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBRIAAhPIgTAAIAAgYIATAAIAAgKQAAgKACgIQADgJAFgHQAFgGAHgEQAJgEAMAAQAKAAAHACIgCAbQgFgBgFAAQgEAAgEACQgDABgBADQgDAFAAAJIAAAKIAXAAIAAAYIgXAAIAABPg");
	this.shape_6.setTransform(41.3,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAzQgKgEgIgHQgJgIgEgKIgDgLIgCgLQAAgHAFgPQAEgKAJgHQAHgIALgDQALgEAKAAQALAAALAEQAKADAIAIQAJAHAEAKQAFAPAAAHIgCALIgDALQgEAKgJAIQgIAHgKAEQgLAEgLAAQgKAAgLgEgAgJgXQgFACgDAEQgDADgCAFQgBAFAAAEQAAAEABAFIAFAJQADAEAFACQAFACAEAAQAFAAAFgCQAFgCADgEQADgEACgFQABgFAAgEQAAgEgBgFQgCgFgDgDQgDgEgFgCQgFgDgFAAQgEAAgFADg");
	this.shape_7.setTransform(30.6,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22,0,73.7,25);


(lib.copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAzQgLgDgIgHQgIgIgEgKIgEgLQgBgGAAgGQAAgHAFgOQADgLAJgHQAHgHALgEQAKgEAJAAQAMAAAKAEQAJAEAIAHQAGAHAFALQADAPAAAHIAAAIIhKAAQAAAEADAEIAGAGQAGAGAIAAQAIAAAGgDQAFgDAEgFIAYAPQgEAFgEAEQgGAFgFACQgGADgIACQgGABgJAAQgJAAgKgEgAAXgLQgBgIgFgGIgGgEQgEgBgFAAQgDAAgFABQgDACgDADQgHAFgBAIIArAAIAAAAg");
	this.shape.setTransform(33.4,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBPIAAg5QAAgKgDgFQgBgEgDgBQgDgCgFAAQgCAAgEACQgDABgDADQgFAHABAJIAAA5IgjAAIAAidIAjAAIAABDQAEgGAHgFQAEgCADgBQAEgCAGAAQAKAAAIAEQAHADAEAHQAFAGACAHQACAGAAAIIAABBg");
	this.shape_1.setTransform(20.8,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBKIAAh0IgqAAIAAgfIB3AAIAAAfIgrAAIAAB0g");
	this.shape_2.setTransform(8.1,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,25);


(lib.copy06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7E").s().p("AgNAOQgEgCgBgFQgCgDABgEIABgHQABgDAEgDQADgDADgCIAHgBQAIAAAHAGQADADABADQACAEAAADIgCAHQgBAFgDACQgHAGgIAAQgHAAgGgGg");
	this.shape.setTransform(99.2,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7E").s().p("AgSBPIgKgDQgJgFgHgIQgGgHgDgKQgEgKAAgLQAAgLAEgKQADgIAHgIQAGgIAJgEQAKgEALAAQAIAAAJAEQAIAEAFAGIAAAAIAAhBIAjAAIAACcIggAAIAAgNIgBAAIgGAHQgDADgFACQgJAEgJAAQgGAAgFgBgAgJAAQgFACgDAEQgDAEgCAFQgBAEAAAGQAAAFABAEQACAGADADQADAEAFACQAEADAFAAQAFAAAFgDQAEgCAEgEQADgDACgFQACgFAAgFQAAgFgCgFQgCgFgDgEQgEgEgEgCQgFAAgFAAQgFAAgEAAg");
	this.shape_1.setTransform(88.9,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7E").s().p("AgSAzQgKgDgIgHQgIgIgEgKIgDgLQgCgGAAgGQAAgHAFgOQAEgLAHgHQAIgHAKgEQALgEAKAAQALAAAKAEQAJAEAIAHQAGAHAEALQAEAPAAAHIAAAIIhKAAQABAEACAEIAFAGQAIAGAHAAQAIAAAGgDQAGgDADgFIAYAPQgEAFgFAEQgFAFgFACQgHADgHACQgHABgHAAQgKAAgLgEgAAWgLQABgIgGgGIgGgEQgEgBgFAAQgDAAgEABQgFACgCADQgHAFgBAIIAqAAIAAAAg");
	this.shape_2.setTransform(76,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E7E").s().p("AAQA1IAAg3QAAgKgDgFIgFgFQgDgCgEAAQgDAAgDACQgEACgCADQgFAGAAAKIAAA2IgiAAIAAhmIAhAAIAAAOIABAAQADgHAJgFQAEgDACgBIALgBQAKAAAIADQAHAEAEAGQAFAGACAIQACAHAAAJIAAA+g");
	this.shape_3.setTransform(63.4,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E7E").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_4.setTransform(53.8,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E7E").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape_5.setTransform(47.5,10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E7E").s().p("AgRAzQgLgDgIgHQgIgIgFgKIgDgLQgBgGAAgGQAAgHAEgOQAFgLAIgHQAHgHALgEQAKgEAJAAQAMAAAKAEQAKAEAGAHQAHAHAFALQADAPAAAHIAAAIIhKAAQAAAEADAEIAFAGQAIAGAHAAQAIAAAGgDQAGgDADgFIAYAPQgDAFgFAEQgGAFgGACQgGADgGACQgIABgIAAQgJAAgKgEgAAWgLQAAgIgEgGIgHgEQgEgBgFAAQgDAAgFABQgDACgEADQgGAFgBAIIAqAAIAAAAg");
	this.shape_6.setTransform(38.2,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E7E").s().p("AgSBPIgKgDQgJgFgHgIQgGgHgDgKQgEgKAAgLQAAgLAEgKQADgIAHgIQAGgIAJgEQAKgEALAAQAIAAAJAEQAIAEAFAGIAAAAIAAhBIAjAAIAACcIggAAIAAgNIgBAAIgGAHQgDADgFACQgJAEgJAAQgGAAgFgBgAgJAAQgFACgDAEQgDAEgCAFQgBAEAAAGQAAAFABAEQACAGADADQADAEAFACQAEADAFAAQAFAAAFgDQAEgCAEgEQADgDACgFQACgFAAgFQAAgFgCgFQgCgFgDgEQgEgEgEgCQgFAAgFAAQgFAAgEAAg");
	this.shape_7.setTransform(24.7,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E7E").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_8.setTransform(15,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E7E").s().p("AgYAzIgLgFIgJgHIATgUQAFAFAGADQAHADAHAAQADAAAEgCQAEgCAAgFQAAgEgFgDIgOgFQgPgEgGgFQgEgCgDgFQgCgFAAgHQAAgJAEgHQADgHAHgEQAGgEAIgCQAHgCAGAAQAMAAALAEIAKAEQAFADAEAEIgTATQgEgEgGgDQgGgCgGAAQgEAAgDACQgEACAAAEQAAAEAFACQACACALACIALAEQAHADAEADQAFACADAFQADAGAAAHQAAAKgEAHQgEAHgHAEQgGAEgIACQgHACgIAAQgQgBgIgDg");
	this.shape_9.setTransform(6.8,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.9,25);


(lib.copy05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7E").s().p("AgeAxQgHgDgEgGQgFgGgCgIQgCgHAAgJIAAg+IAiAAIAAA2QABALADAFQABADADACQAEACAEAAQACAAAEgCQAEgCACgDQAFgGgBgKIAAg2IAjAAIAABmIghAAIAAgOIgBAAQgDAHgJAFIgHAEQgEABgGAAQgKAAgIgEg");
	this.shape.setTransform(18.3,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7E").s().p("AgVAzQgKgEgIgHQgJgIgEgKIgDgLQgCgGAAgFQAAgHAFgPQAEgKAJgHQAHgIALgDQALgEAKAAQALAAALAEQAKADAIAIQAJAHAEAKQAFAPAAAHIgCALIgDALQgEAKgJAIQgIAHgKAEQgLAEgLAAQgKAAgLgEgAgJgXQgFACgDAEQgDADgCAFQgBAFAAAEQAAAEABAFIAFAJQADAEAFACQAFACAEAAQAFAAAFgCQAFgCADgEQADgEACgFQABgFAAgEQAAgEgBgFQgCgFgDgDQgDgEgFgCQgFgDgFAAQgEAAgFADg");
	this.shape_1.setTransform(5.3,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7E").s().p("AgzBLIAEgdQAGACAFAAQAIgBAEgDQADgDADgIIADgIIgrhlIAmAAIAVBDIABAAIAUhDIAlAAIgvB2IgHAPQgEAHgDADQgGAFgHADQgHACgKAAQgJAAgKgCg");
	this.shape_2.setTransform(-7.3,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.2,1.5,42.3,25);


(lib.copy04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7E").s().p("Ag5BPIAAiZIAhAAIAAAMIABAAQAFgHAIgDIAJgEQADgCAGAAQALAAAKAFQAJAEAGAIQAHAHADAKQAEALAAAKQAAALgEALQgDAIgHAHQgGAIgJAEQgNAFgIAAQgIAAgIgEQgJgEgFgHIAAAAIAAA/gAgJgvQgEACgEAEQgDAEgCAFQgCAEAAAFQAAAFACAGQACAFADADQAEAEAEAAQAFACAEAAQAFAAAFgCQAFAAADgEQADgEACgFQABgEAAgGQAAgFgBgFQgCgFgDgDQgDgEgFgCQgFgDgFAAQgEAAgFADg");
	this.shape.setTransform(46.7,-14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7E").s().p("AgSAzQgKgDgIgHQgIgIgEgKIgDgLQgCgGAAgGQAAgHAFgOQAEgLAHgHQAIgHAKgEQALgEAKAAQALAAAKAEQAJAEAIAHQAGAHAEALQAEAPAAAHIAAAIIhKAAQABAEACAEIAGAGQAHAGAHAAQAIAAAGgDQAFgDAEgFIAYAPQgEAFgFAEQgFAFgFACQgHADgHACQgHABgHAAQgKAAgLgEgAAWgLQABgIgGgGIgGgEQgEgBgFAAQgDAAgEABQgFACgCADQgHAFgBAIIAqAAIAAAAg");
	this.shape_1.setTransform(33.3,-17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7E").s().p("AgSAzQgKgDgIgHQgIgIgFgKIgCgLQgCgGAAgGQAAgHAEgOQAFgLAHgHQAIgHAKgEQALgEAKAAQALAAAKAEQAJAEAIAHQAHAHADALQAEAPAAAHIAAAIIhKAAQABAEACAEIAFAGQAIAGAHAAQAIAAAGgDQAFgDAEgFIAYAPQgEAFgFAEQgFAFgFACQgGADgHACQgIABgHAAQgKAAgLgEgAAWgLQAAgIgEgGIgHgEQgEgBgFAAQgDAAgEABQgFACgCADQgHAFgBAIIAqAAIAAAAg");
	this.shape_2.setTransform(20.8,-17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E7E").s().p("AANBPIgggyIgBAAIAAAyIgjAAIAAidIAjAAIAABfIABAAIAfgpIAqAAIgoAtIAqA6g");
	this.shape_3.setTransform(9,-19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-29.8,66.9,25);


(lib.copy03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7E").s().p("AAQA1IAAg3QAAgKgDgFIgFgFQgDgCgEAAQgDAAgDACQgEACgCADQgFAGAAAKIAAA2IgiAAIAAhmIAhAAIAAAOIABAAQADgHAJgFQAEgDACgBIALgBQAKAAAIADQAHAEAEAGQAFAGACAIQACAHAAAJIAAA+g");
	this.shape.setTransform(40.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7E").s().p("AgQBOIAAhmIAhAAIAABmgAgNgsQgFgGAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_1.setTransform(30.7,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7E").s().p("AgXA1QgHgCgGgDQgGgEgDgHQgDgGAAgJQAAgGABgEQACgFADgDQAFgFALgEQAJgEANgBIAVgBIAAgCQAAgHgGgEQgFgEgGAAQgHAAgHADQgHADgFAFIgRgTIAKgIIALgFQAIgDAPgCQAOAAAJAEQAJADAGAHQAFAGADALQACAKAAANIAAA0IgfAAIAAgLIgBAAQgEAGgIAEQgGAEgJAAQgHAAgGgCgAgGAJQgFACgDACQgDAEAAAEQAAAFAFADQAEADAGAAQADAAAFgCQAEgBACgDQADgDABgEQACgEAAgFIAAgDIgEAAQgOAAgGACg");
	this.shape_2.setTransform(21.4,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E7E").s().p("Ag5BOIAAiYIAhAAIAAAMIABAAQAFgHAIgDIAJgEQADgCAGAAQALAAAKAFQAJAEAGAIQAHAHADAKQAEALAAALQAAAKgEALQgDAIgHAHQgGAIgJAEQgNAFgIAAQgIAAgIgEQgJgEgFgHIAAAAIAAA+gAgJgvQgEACgEAEQgDAEgCAFQgCAEAAAGQAAAEACAGQACAFADADQAEAEAEAAQAFADAEAAQAFAAAFgDQAFAAADgEQADgDACgGQABgEAAgFQAAgGgBgFQgCgFgDgDQgDgEgFgCQgFgCgFAAQgEAAgFACg");
	this.shape_3.setTransform(9.2,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,25);


(lib.copy02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7E").s().p("AAABAQgGgCgFgFQgFgFgCgHQgCgHAAgIIAAgqIgQAAIAAgaIAQAAIAAgcIAhAAIAAAcIAYAAIAAAaIgYAAIAAAlQgBAIADADQADAEAHAAQAHAAADgCIABAaQgJADgLAAQgKAAgGgDg");
	this.shape.setTransform(-114.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7E").s().p("AgRAzQgLgDgIgHQgIgIgFgKIgCgLQgCgGAAgGQAAgHAEgOQAEgLAIgHQAIgHAKgEQALgEAKAAQALAAAKAEQAJAEAHAHQAIAHADALQAEAPAAAHIAAAIIhKAAQABAEACAEIAFAGQAIAGAHAAQAIAAAGgDQAGgDADgFIAYAPQgDAFgGAEQgEAFgHACQgFADgHACQgHABgJAAQgJAAgKgEgAAWgLQAAgIgEgGIgHgEQgEgBgFAAQgDAAgEABQgEACgEADQgGAFgBAIIAqAAIAAAAg");
	this.shape_1.setTransform(-124.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7E").s().p("AgQBPIAAidIAhAAIAACdg");
	this.shape_2.setTransform(-133.9,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,0,76.6,25);


(lib.copy01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E7E").s().p("AAABAQgGgCgFgFQgEgFgDgHQgBgHAAgIIAAgqIgRAAIAAgaIARAAIAAgcIAgAAIAAAcIAYAAIAAAaIgYAAIAAAlQAAAIACADQADAEAHAAQAGAAAEgCIABAaQgJADgLAAQgKAAgGgDg");
	this.shape.setTransform(54.6,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E7E").s().p("AgMAcIAAg3IAZAAIAAA3g");
	this.shape_1.setTransform(47.6,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E7E").s().p("AAQA1IAAg3QAAgKgDgFIgFgFQgDgCgEAAQgDAAgDACQgEACgCADQgFAGAAAKIAAA2IgiAAIAAhmIAhAAIAAAOIABAAQADgHAJgFQAEgDACgBIALgBQAKAAAIADQAHAEAEAGQAFAGACAIQACAHAAAJIAAA+g");
	this.shape_2.setTransform(38,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E7E").s().p("AgVAzQgKgEgIgHQgJgIgEgKIgDgLIgCgLQAAgHAFgPQAEgKAJgHQAHgIALgDQALgEAKAAQALAAALAEQAKADAIAIQAJAHAEAKQAFAPAAAHQAAAFgCAGIgDALQgEAKgJAIQgIAHgKAEQgLAEgLAAQgKAAgLgEgAgJgXQgFACgDAEQgDADgCAFQgBAFAAAEQAAAEABAFIAFAJQADAEAFACQAFACAEAAQAFAAAFgCQAFgCADgEQADgEACgFQABgFAAgEQAAgEgBgFQgCgFgDgDQgDgEgFgCQgFgDgFAAQgEAAgFADg");
	this.shape_3.setTransform(24.9,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E7E").s().p("AhEBKIAAiTIA2AAQAKAAATAEIAOAFIANAHIALAKQAFAGAEAHQADAHACAJQACAJAAAJQAAAJgCAIQgCAIgDAIQgEAHgFAGIgKAKIgNAIQgHADgHACQgSAFgKAAgAghArIARAAQAKAAAHgCQAJgDAGgFQAIgFADgIQAFgJAAgLQAAgLgFgJQgDgIgHgFQgHgFgJgCQgGgCgKAAIgSAAg");
	this.shape_4.setTransform(10.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.7,25);


(lib.blueSwoosh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#44B8E2","#032862"],[0.173,1],-87.6,0,87.7,0).s().p("AtrJRIAAgDQPGmkLDr8IBOOTQsFEStZAAIh5gCg");
	this.shape.setTransform(428.8,292.9,4.891,4.921);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,857.7,585.8);


(lib.blueBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#002664","#001944"],[0.612,1],-89.9,144,0,-89.9,144,360.5).s().p("A3aTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001944").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.swooshes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.swooshLine02 = new lib.swooshLine02();
	this.swooshLine02.parent = this;
	this.swooshLine02.setTransform(-1103.3,-5176.1,1,1,0,0,0,-800.8,-5194.3);

	this.timeline.addTween(cjs.Tween.get(this.swooshLine02).wait(1));

	// swooshLine01
	this.swooshLine01 = new lib.swooshLine01();
	this.swooshLine01.parent = this;
	this.swooshLine01.setTransform(524,-4503,1,1,0,0,0,807.8,-4451.7);

	this.timeline.addTween(cjs.Tween.get(this.swooshLine01).wait(1));

	// Layer 2
	this.swoosh03 = new lib.blueSwoosh();
	this.swoosh03.parent = this;
	this.swoosh03.setTransform(1628.7,21.2);

	this.timeline.addTween(cjs.Tween.get(this.swoosh03).wait(1));

	// Layer 5
	this.swoosh02 = new lib.swoosh02();
	this.swoosh02.parent = this;
	this.swoosh02.setTransform(3654.5,1366.8,1,1,0,0,0,431.1,89.5);

	this.timeline.addTween(cjs.Tween.get(this.swoosh02).wait(1));

	// Layer 1
	this.swoosh01 = new lib.yelswoosh();
	this.swoosh01.parent = this;
	this.swoosh01.setTransform(573.3,303.9,1,1,0,0,0,880.9,348.8);

	this.timeline.addTween(cjs.Tween.get(this.swoosh01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.6,-46.3,2832,1275.3);


(lib.photo01FG = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.FGblur = new lib.FGblur();
	this.FGblur.parent = this;
	this.FGblur.setTransform(75.1,113.8,1,1,0,0,0,86.1,118.8);

	this.timeline.addTween(cjs.Tween.get(this.FGblur).wait(1));

	// Layer 2
	this.photo01FGcrisp = new lib.photo01FGcrisp();
	this.photo01FGcrisp.parent = this;
	this.photo01FGcrisp.setTransform(86.5,117.6,1,1,0,0,0,73.5,117.6);

	this.timeline.addTween(cjs.Tween.get(this.photo01FGcrisp).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-1,169,236.2);


(lib.photo0 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// PUCK
	this.puck = new lib.puck();
	this.puck.parent = this;
	this.puck.setTransform(261.6,261.1,1,1,0,0,0,8,4.5);

	this.timeline.addTween(cjs.Tween.get(this.puck).wait(1));

	// FG
	this.photo01FG = new lib.photo01FG();
	this.photo01FG.parent = this;
	this.photo01FG.setTransform(253.4,297.2,1,1,0,0,0,102,251.6);

	this.timeline.addTween(cjs.Tween.get(this.photo01FG).wait(1));

	// BG
	this.photo01BG = new lib.photo01BG();
	this.photo01BG.parent = this;
	this.photo01BG.setTransform(266.5,150,1,1,0,0,0,266.5,150);

	this.timeline.addTween(cjs.Tween.get(this.photo01BG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,711,400);


(lib.copyBlock03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// copy25
	this.copy25 = new lib.copy25();
	this.copy25.parent = this;
	this.copy25.setTransform(247.1,78.1,1,1,0,0,0,47.4,17.4);

	this.timeline.addTween(cjs.Tween.get(this.copy25).wait(1));

	// copy24
	this.copy24 = new lib.copy24();
	this.copy24.parent = this;
	this.copy24.setTransform(197.8,72.6,1,1,0,0,0,140.3,34.8);

	this.timeline.addTween(cjs.Tween.get(this.copy24).wait(1));

	// copy23
	this.copy23 = new lib.copy23();
	this.copy23.parent = this;
	this.copy23.setTransform(54.7,73.9,1,1,0,0,0,85.2,13.3);

	this.timeline.addTween(cjs.Tween.get(this.copy23).wait(1));

	// copy22
	this.copy22 = new lib.copy22();
	this.copy22.parent = this;
	this.copy22.setTransform(163.1,34.6,1,1,0,0,0,118.7,29.2);

	this.timeline.addTween(cjs.Tween.get(this.copy22).wait(1));

	// copy21
	this.copy21 = new lib.copy21();
	this.copy21.parent = this;
	this.copy21.setTransform(83.2,23.7,1,1,0,0,0,84,23.5);

	this.timeline.addTween(cjs.Tween.get(this.copy21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0.2,258.1,99.6);


(lib.copyBlock02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// copy18
	this.copy18 = new lib.copy18();
	this.copy18.parent = this;
	this.copy18.setTransform(207,41,1,1,0,0,0,-159.1,13.8);

	this.timeline.addTween(cjs.Tween.get(this.copy18).wait(1));

	// copy17
	this.copy17 = new lib.copy17();
	this.copy17.parent = this;
	this.copy17.setTransform(120,42,1,1,0,0,0,123.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.copy17).wait(1));

	// copy16
	this.copy16 = new lib.copy16();
	this.copy16.parent = this;
	this.copy16.setTransform(201,17,1,1,0,0,0,-307.6,14.5);

	this.timeline.addTween(cjs.Tween.get(this.copy16).wait(1));

	// copy15
	this.copy15 = new lib.copy15();
	this.copy15.parent = this;
	this.copy15.setTransform(164,16,1,1,0,0,0,24.1,12.5);

	this.timeline.addTween(cjs.Tween.get(this.copy15).wait(1));

	// copy14
	this.copy14 = new lib.copy14();
	this.copy14.parent = this;
	this.copy14.setTransform(136,17,1,1,0,0,0,-142.3,13);

	this.timeline.addTween(cjs.Tween.get(this.copy14).wait(1));

	// copy13
	this.copy13 = new lib.copy13();
	this.copy13.parent = this;
	this.copy13.setTransform(77,18,1,1,0,0,0,-163.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.copy13).wait(1));

	// copy12
	this.copy12 = new lib.copy12();
	this.copy12.parent = this;
	this.copy12.setTransform(111,-5,1,1,0,0,0,93.2,12.8);

	this.timeline.addTween(cjs.Tween.get(this.copy12).wait(1));

	// copy11
	this.copy11 = new lib.copy11();
	this.copy11.parent = this;
	this.copy11.setTransform(36,-5,1,1,0,0,0,39,12.8);

	this.timeline.addTween(cjs.Tween.get(this.copy11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-17.8,221.4,71.1);


(lib.copyBlock01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// copy06
	this.copy06 = new lib.copy06();
	this.copy06.parent = this;
	this.copy06.setTransform(141.1,18,1,1,0,0,0,101,13.1);

	this.timeline.addTween(cjs.Tween.get(this.copy06).wait(1));

	// copy04
	this.copy05 = new lib.copy05();
	this.copy05.parent = this;
	this.copy05.setTransform(35.1,17.6,1,1,0,0,0,23.1,14.3);

	this.copy04 = new lib.copy04();
	this.copy04.parent = this;
	this.copy04.setTransform(196.4,-5.2,1,1,0,0,0,52,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.copy04},{t:this.copy05}]}).wait(1));

	// copy03
	this.copy03 = new lib.copy03();
	this.copy03.parent = this;
	this.copy03.setTransform(139,-4.9,1,1,0,0,0,45.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.copy03).wait(1));

	// copy02
	this.copy02 = new lib.copy02();
	this.copy02.parent = this;
	this.copy02.setTransform(88,-4.9,1,1,0,0,0,-110.5,13.1);

	this.timeline.addTween(cjs.Tween.get(this.copy02).wait(1));

	// copy01
	this.copy01 = new lib.copy01();
	this.copy01.parent = this;
	this.copy01.setTransform(54,-5.9,1,1,0,0,0,58,12.1);

	this.timeline.addTween(cjs.Tween.get(this.copy01).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-18.1,215.4,48.1);


// stage content:
(lib.brand_ortho_wdc_team_300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// **BEGIN SIZMEK CODE DO NOT ALTER**
		/*this.clickthrough_btn.cursor = "pointer";
		this.clickthrough_btn.addEventListener("click", clickthroughSizmek);
		function clickthroughSizmek() {
			console.log("Sizmek Clickthrough");
			EB.clickthrough();
			if (typeof(videlem) != 'undefined' && videlem != null) {
				videlem.pause();
			}
		}*/
		// **END SIZMEK CODE DO NOT ALTER**
		
		var words01 = [this.copyBlock01.copy01,this.copyBlock01.copy02,this.copyBlock01.copy03,this.copyBlock01.copy04,this.copyBlock01.copy05,this.copyBlock01.copy06];
		var words02 = [this.copyBlock02.copy11,this.copyBlock02.copy12,this.copyBlock02.copy13,this.copyBlock02.copy14,this.copyBlock02.copy15,this.copyBlock02.copy16,this.copyBlock02.copy17,this.copyBlock02.copy18];
		var words03 = [this.copyBlock03.copy21,this.copyBlock03.copy22,this.copyBlock03.copy23,this.copyBlock03.copy24,this.copyBlock03.copy25];
		
		tl = new TimelineMax();
		tl.add("setup",0)
		tl.add("copy01",0)
		tl.add("photo01",3.5)
		tl.add("swooshes",3.5)
		tl.add("logo",3.5)
		tl.add("copy02",3.8)
		tl.add("puck",3.887)
		tl.add("copy02out",9)
		tl.add("photo02out",9)
		tl.add("lockup",10.55)
		
		tl.timeScale(1)
		
			//SETUP SOME ELEMENTS
			.set(this.photo01.photo01BG,{alpha:0.1},"setUp")
			
			//COPY01 IN
			.staggerFrom(words01,0.5,{alpha:0, scaleX:0, scaleY:0, x:"+=30", ease:Expo.easeOut},0.1,"copy01")
			
			//SWOOSHES 
			.from(this.swooshes.swooshLine01,2,{rotation:"-=90", alpha:0, ease:Expo.easeOut}, "swooshes")
			.from(this.swooshes.swooshLine02,2,{rotation:"+=90", alpha:0, ease:Expo.easeOut}, "swooshes")
			.from(this.swooshes.swoosh01,1,{y:"+=130", alpha:0, ease:Expo.easeOut}, "swooshes+=0.5")
			.from(this.swooshes.swoosh02,1,{y:"+=130", alpha:0, ease:Expo.easeOut}, "swooshes+=0.5")
			.from(this.swooshes.swoosh03,1,{y:"+=130", alpha:0, ease:Expo.easeOut}, "swooshes+=0.5")
		
			//FADE IN PHOTO
			.to(this.copyBlock01,1.25,{alpha:0, x:"-=200", ease:Expo.easeIn},"photo01-=1")
			.to(this.photo01.photo01BG,2,{alpha:0.7, scaleX:1, scaleY:1, ease:Sine.easeOut},"photo01-=1")
			
			.from(this.photo01.photo01BG,1,{x:"-=260", ease:Sine.easeOut},"photo01")
			.from(this.photo01.photo01FG,1.5,{x:"-=280", y:"-=100", scaleX:0.6, scaleY:0.6, ease:Expo.easeIn},"photo01-=1")
			.to(this.photo01.photo01FG.FGblur,1,{alpha:0, ease:Expo.easeIn},"photo01-=1")
			.from(this.photo01.puck,0.5,{x:"+=200", ease:Sine.easeOut},"photo01")
		
			.to(this.photo01.puck,0.2,{y:"-=120",x:"+=120",scaleX:20, scaleY:20, ease:Expo.easeIn},"puck")
			.to(this.photo01.puck,0.2,{ alpha:0, ease:Expo.easeIn},"puck+=0.1")
			
			//COPY02 IN
			.to(this.photo01,1,{scaleX:1.1, scaleY:1.1, x:"+=50", y:"+=20", ease:Expo.easeIn},"photo01+=0.5")
			.staggerFrom(words03,0.5,{alpha:0, scaleX:2, scaleY:2, x:"+=100", ease:Expo.easeOut},0.1,"photo01+=1.8")
			
			//COPY02 OUT
			.staggerTo(words02,0.5,{alpha:0, scaleX:2, scaleY:2,ease:Expo.easeOut},0.1,"copy02out")
			.to(this.copyBlock03,1,{alpha:0, scaleX:1, scaleY:1,ease:Expo.easeOut},"copy02out")
			
			//PHOTO OUT
			.to(this.photo01,0.5,{alpha:0,scaleX:1.25,scaleY:1.25,ease:Sine.easeOut},"photo02out")
			
			.from(this.blueBG,0.5,{alpha:0, ease:Sine.easeIn},"photo02out")
			
			//BLUE BG
			.from(this.logo,1,{alpha:0,x:"-=100", ease:Expo.easeOut},"logo")
		
			//LOCKUP
			.staggerFrom(words02,0.3,{alpha:0, scaleX:0, scaleY:0, x:"+=50",ease:Expo.easeOut},0.1,"lockup")
			.from(this.CTA,0.5,{alpha:0, scaleX:0, scaleY:0, x:"+=100", ease:Expo.easeOut},"lockup+=1.3")
			
			//new AnimPanel(tl)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.parent = this;
	this.CTA.setTransform(88.6,125.6,1,1,0,0,0,76.4,9.5);

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(1));

	// COPY03
	this.copyBlock03 = new lib.copyBlock03();
	this.copyBlock03.parent = this;
	this.copyBlock03.setTransform(78,29.1,0.66,0.66,0,0,0,98.2,24.8);

	this.timeline.addTween(cjs.Tween.get(this.copyBlock03).wait(1));

	// COPY02
	this.copyBlock02 = new lib.copyBlock02();
	this.copyBlock02.parent = this;
	this.copyBlock02.setTransform(135.7,67.3,1.244,1.244,0,0,0,96.3,16.9);

	this.timeline.addTween(cjs.Tween.get(this.copyBlock02).wait(1));

	// COPY01
	this.copyBlock01 = new lib.copyBlock01();
	this.copyBlock01.parent = this;
	this.copyBlock01.setTransform(115.7,159.8,1.331,1.331,0,0,0,74.7,31.7);

	this.timeline.addTween(cjs.Tween.get(this.copyBlock01).wait(1));

	// SWOOSHES
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(31.1,295,0.56,0.56,0,0,0,153.4,49.8);

	this.swooshes = new lib.swooshes();
	this.swooshes.parent = this;
	this.swooshes.setTransform(-22.6,138.7,0.187,0.187,0,0,0,291.4,231.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.swooshes},{t:this.logo}]}).wait(1));

	// PHOTO02
	this.photo01 = new lib.photo0();
	this.photo01.parent = this;
	this.photo01.setTransform(110.1,87.2,0.7,0.7,0,0,0,157.3,124.5);

	this.timeline.addTween(cjs.Tween.get(this.photo01).wait(1));

	// blueBG
	this.blueBG = new lib.blueBG();
	this.blueBG.parent = this;
	this.blueBG.setTransform(0.6,250.5,1,1,0,0,0,0.1,250);

	this.timeline.addTween(cjs.Tween.get(this.blueBG).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,125,632.6,325.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;