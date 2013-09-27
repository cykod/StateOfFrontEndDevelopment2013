Quintus.Presentation = function(Q) {

  var slide = 1;

  Q.slide(slide++,function(stage) {

      stage.tiles("level0.json");
      stage.background("game-background.png");

      stage.presenter.del("2d");

      var started = false;
      function start() { 
        if(started) { return; }
        started = true;

        setTimeout(function() { 

        var sign = stage.insert(new Q.Sprite({ asset: "sign.png", x: Q.width/2, y: -600, type: 0 }))
                        .add("tween")
                        .animate({ y: 200 }, 2, Q.Easing.Quadratic.Out, {  z: 3 });

        },400);

        stage.presenter.add("playformerControls, 2d");
        stage.presenter.add("tween");
      }

      Q.input.on("action",function() {
        start();
        setTimeout(function() { Q.input.off("action"); },1);
      });


      stage.insert(new Q.Sprite({ sheet: "cab", x: 500, y: 630, type: 0, z: 11 }));
      stage.insert(new Q.Sprite({ sheet: "hydrant", x: 100, y: 660, type: 0, z: 11 }));

    stage.presenter.p.y = -1024;

  });

  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.title("So, who am I?").stop().set({opacity: 1});

    Q("Presenter").set({ skipMove: true, x: 0 }).first().add("tween").animate({ x: 0, vx: 0 });

    stage.insert(new Q.Sprite({ asset: "alignable-logo-beta.png", x:250, y: -200 }))
                            .add("tween")
                            .animate({ y: 657 }, 1,Q.Easing.Quadratic.Out, { delay: 0.5 });
    stage.on("10%",function() {
      stage.insert(new Q.Sprite({ asset: "front-end-developers.jpg", x:580, y:-200 })).add("tween").animate({ y: 604 });
    });

    stage.on("30%",function() {
      stage.insert(new Q.Sprite({ asset: "book.jpg", x: 840, y: -200 }))
                              .add("tween").animate({ y: 552 },1,Q.Easing.Quadratic.Out);
    });

    stage.on("50%",function() {
    });

  });

  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");


    stage.points();
    stage.title("This talk");
    stage.point("1. The Browsers");
    stage.point("2. The Trends");
    stage.point("3. Careers");

  });

 Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Browser Trends");

    stage.on("30%",function() {
      stage.insert(new Q.Sprite({ asset: "global-stats.png", x: 512, y: 380, type: 0, opacity: 0 })
                                .add("tween").animate({ opacity: 1 }));
    });
 });



  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("Take-aways");
    stage.point("Chrome is/will be top browser");
    stage.point("IE was losing market share fast");
    stage.point("Firefox losing market share slow");
    stage.point("Safari slowly gaining market share");
    stage.point("IE8 (9%) + IE9 (7%) = ~16%");
    stage.point("Which means, ~84% have a modern browser");
  });

 Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Mobile Stats");

    stage.on("30%",function() {
      stage.insert(new Q.Sprite({ asset: "mobile-stats.png", x: 512, y: 380, type: 0, opacity: 0 })
                                .add("tween").animate({ opacity: 1 }));
    });
 });


  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("Take-aways");
    stage.point("Mobile now 15% of all US traffic");
    stage.point("Some site demographics, much higher");
    stage.point("Apple still dominates traffic in the US");
    stage.point("Android Strong #2 (#1 worldwide)");
    stage.point("Windows Phone MIA");
    stage.point("Blackberry Sad Panda");
    stage.point("Android browser is the new IE8");
  });

  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.title("What I mean");

    var graph = stage.insert(new Q.Sprite({ asset: "fragmentation.png", x: 512, y: 300, type: 0, opacity: 0.01 }).add("tween"));

    var txt = stage.point("July 2013 - opensignal.com/reports/fragmentation-2013/").add("tween").set({ opacity:0, y:720, x: 512, z: 10, color:"white" });
    stage.on("30%",function() {
      graph.animate({ opacity: 1 }, null,null);
      txt.animate({ opacity: 1 }, null,null);
    });

  });

 Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("The Great Schism");

    stage.point("Google forked Webkit to Blink (Apr 2013)");
    stage.point("Chrome & Safari/iOS no longer share\nthe same rendering engine."); 
    stage.point("Opera moving over to Blink"); 
    stage.point("Firefox and IE still their own"); 
  });

  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Browser Baseline");

    stage.scroller("ie8_logo.jpg","IE8 On Windows XP","No Upgrade Path on XP\nBasic CSS2.1 (position:fixed, first-child, etc )\nNo CSS3 Goodies\nSloooooow JS Engine");
    stage.scroller("android.jpg","Android Browser on 2.3","No multi-touch support\nNo SVG\nSloooow canvas");

     stage.on("10%",function() {
       stage.triggerScroller();
     });

  });

 Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.points();
    stage.title("They are the 15%");

    stage.point("How to treat the bottom 15%");
    stage.point("Gracefully degrade your CSS3 Whiz-bangs"); 
    stage.point("Provide detection and warnings for SVG + Canvas"); 
    stage.point("Or, ignore completely and hear from your Grandma"); 
  });



 Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("game-background.png");

    stage.title("Onto the Fun Stuff");
    stage.point("the whiz bang in the browsers");
 });


  Q.slide(slide++,function(stage) {
    stage.tiles("level_gap.json");
    var bg = stage.background("background2.png");
    bg.p.opacity = 0.5;

    var hype = stage.insert(new Q.Sprite({ asset: "hype_cycle.png", x: 512, y: 360, type: 0, opacity: 0, z: 20 }).add("tween"));
    stage.title("But first, HTML5 must cross...");
    stage.point("... the trough of disillusionment.");

    hype.animate({ opacity: 1 },1, Q.Easing.Quadratic.Out, { delay: 3 });

  });


  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("HTML5 Goodies: old stuff");
    stage.point("1. Canvas (IE9+, > 90% Browsers)");
    stage.point("   - hardware accelerated in all browsers*");
    stage.point("2. SVG (IE9+, > 85% Browsers)");
    stage.point("   - performance getting bettter and better");
    stage.point("3. Debugging");
    stage.point("   - mobile support caught up with desktop");
  });


  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background2.png");

    stage.points();
    stage.title("The New Stuff");
    stage.point("1. WebGL (IE11+?!!?!!)");
    stage.point("   - on mobile on Chrome for Android");
    stage.point("2. Web Audio API");
    stage.point("   - Chrome, FF, Safari");
    stage.point("3. ASM.js");
    stage.point("   - FF Only");
  });


  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.title("ASM.js");

    var iframe = new Q.UI.IFrame({ url: "http://www.youtube.com/embed/BV32Cs_CMqo", w: 640, h: 360, x: 192, y: -520, type:0 });

    iframe.add("tween").animate({ y: 130 },1,Q.Easing.Quadratic.Out, { delay: 0.5 });

    stage.insert(iframe);
  });

  Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background3.png");

    stage.points();
    stage.title("Android pre 4.0 Means*");
    stage.point("No hardware accelerated canvas");
    stage.point("No multi-touch");
    stage.point("No Chrome for Android");
    stage.point("Barely pushing out full-screen refreshes");
    stage.point("*Firefox for Android is available");
  });


 Q.slide(slide++,function(stage) {
    stage.tiles("level0.json");
    stage.background("background5.png");

    stage.nextPoint = 150;
    stage.title("Thanks!").stop().set({opacity: 1});
    stage.title("Pascal Rettig @cykod").set({ opacity: 1});
    stage.title("Questions?").set({ opacity: 1});

    stage.on("20%",function() {
      Q("Presenter").first().add("tween").set({ angle: 0, standing: -0.5 }).animate({ angle: 45, y: -500, x: 1023 },1.5,null).del("2d");
    });
 });




  // Whatever assets you'll need
  Q.preload([
    'sprites.png','sprites.json','game-background.png', 'sign.png', 'history.png',
    'level.json', 'level2.json', 'level0.json', 'level_gap.json',
    'level_big_gap.json',
    'html5logo.png', "fragmentation.png",
    "html5gamedev.jpg","h5gdcom.png",
    "moneybg.jpg",  "book.jpg", "background2.png", "background3.png",
    "background4.png","background5.png",
     "hype_cycle.png","global-stats.png", "mobile-stats.png",
    "alignable-logo-beta.png", "front-end-developers.jpg", "android.jpg", "ie8_logo.jpg"
  ]);

  // Called after preload
  Q.presentationSetup = function() {
    Q.compileSheets("sprites.png","sprites.json");
    Q.animations('player', {
       run_right: { frames: [0,1,2,3,4,5], rate: 1/8},
       run_left: { frames: [9,10,11,12,13,14], rate: 1/8},
       stand_right: { frames: [2], rate: 1/5},
       stand_left: { frames: [11], rate: 1/5},
       jump_right: { frames: [6,7,8], rate: 1/5, loop: false },
       jump_left: { frames: [15,16,17], rate: 1/5, loop: false},
       fly_right: { frames: [8], rate: 1/5, loop: false },
       fly_left: { frames: [17], rate: 1/5, loop: false}
    });
  };


};
