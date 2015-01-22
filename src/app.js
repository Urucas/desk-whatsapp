var jf = require("jsonfile"), config;
		config = jf.readFileSync("package.json");

var gui = require("nw.gui");

if(config.debug == 1)	{
	gui.Window.get().showDevTools();
}

var mb = new gui.Menu({type:"menubar"});
		mb.createMacBuiltin("Whatsapp");
		gui.Window.get().menu = mb;

var win = gui.Window.get();
