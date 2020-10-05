import "regenerator-runtime/runtime";
import TETSUO from "@SolidSolutionsDev/tetsuo";

let renderer, assets, clock, syncer;

/**
 * demo initialization
 */
function init() {
    // prepare the viewport element
    TETSUO.Utils.prepareViewport({ width: 1920, height: 1080 });

    // bootstrap tetsuo
    let bootstrap = new TETSUO.Bootstrap({ dev: false, autoStart: false });
    renderer = bootstrap.renderer;

    // create the update clock
    clock = new TETSUO.Clock(false, update);

    // load assets
    new TETSUO.Preloader().loadManifest("manifest.json", (loaded) => {
        // create a start button to start the demo
        TETSUO.Utils.createStartButton(start, {
            label: "tetsuo demo template",
            sublabel: "6th place combined demo compo @ inercia demoparty 2020",
        });

        // setup the node pipeline
        setupPipeline();
    });
}

/**
 * node tree setup
 */
function setupPipeline() {
    let node = new TETSUO.THREENode();
    renderer.connectToScreen(node);
}

/**
 * demo start
 */
function start() {
    clock.start();
    syncer.play();
}

/**
 * update cycle function
 */
function update(elapsed, delta, frameCount) {
    renderer.update(elapsed, delta, frameCount);
    renderer.render();
    syncer.update();
}

init();
