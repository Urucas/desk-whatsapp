
var gui = require("nw.gui");

try {
  var jf = require("jsonfile");
  var	config = jf.readFileSync("./package.json");

  if(config != undefined && config.debug == 1)	{
	  gui.Window.get().showDevTools();
  }
}catch(e){}

var mb = new gui.Menu({type:"menubar"});
if (process.platform === "darwin") {  // this should indicate you're on Mac OSX
  mb.createMacBuiltin("Whatsapp");
}
  gui.Window.get().menu = mb;

var win = gui.Window.get();

var closeBtt = document.getElementsByClassName("close")[0];
    closeBtt.addEventListener("click", function(){
      gui.Window.get().close();
    });

var minBtt = document.getElementsByClassName('minimize')[0];
  minBtt.addEventListener("click", function(){
    gui.Window.get().minimize();
  });

var shareBtt = document.getElementsByClassName("share")[0];
  shareBtt.style.display = "none";

var iframe = document.getElementsByTagName("iframe");

