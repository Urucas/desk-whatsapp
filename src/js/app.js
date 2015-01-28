
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
  shareBtt.addEventListener("click", function(){
    gui.Shell.openExternal("https://github.com/Urucas/desk-whatsapp");
  });
  


// TODO - improve this feature
setInterval(function(){
  try{
    var iframe = document.getElementsByTagName("iframe")[0];
    var content = iframe.contentDocument;
    var pane = content.getElementsByClassName("pane-chat")[0];
    var list = pane.getElementsByClassName("message-list")[0];
    var msgs = list.getElementsByClassName("msg");
    for(var i=0; i<msgs.length;i++){
      var a = msgs[i].getElementsByTagName("a");
      for(var j=0;j<a.length;j++){
        var href = a[j].getAttribute("href");
        if(href == null || href.indexOf("http") == -1) continue;
        console.log(href);
        a[j].removeAttribute("href");
        a[j].addEventListener("click", function(){
          gui.Shell.openExternal(href);
        });
      }
    };
  }catch(e){}
}, 500);

