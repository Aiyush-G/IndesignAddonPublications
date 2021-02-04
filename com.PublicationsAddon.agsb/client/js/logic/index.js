/* Create an instance of CSInterface. */
var csInterface = new CSInterface();
var templatePath = '/client/templates/'

// Create Alert
/* Make a reference to your HTML button and add a click handler. */
var openButton = document.querySelector("#open-button");
openButton.addEventListener("click", openDoc);
/* Write a helper function to pass instructions to the ExtendScript side. */
function openDoc() {
	csInterface.evalScript("openDocument()");
};


function newPageBlank(){
	console.log("ButtonClicked");
	csInterface.evalScript("newPage()");
};

function redirectToPlanner(){
	console.log("Planner Redirect");
	//csInterface.evalScript("plannerWebpage()");

	//window.location.href="https://www.office.com/?auth=2";

	location.href = 'https://tasks.office.com/agsb.co.uk/Home/PlanViews/B7wK_Vz6X0eeLpYNnocV85cAFnB6?Type=PlanLink&Channel=Link&CreatedTime=637473642749100000';
 };


// Templates

function multipicsBlueDouble(){
 	//csInterface.evalScript("csmultipicsBlueDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('csmultipicsBlueDouble(' + JSON.stringify(extensionPath) + ')');
 };

function multipicsGreenDouble(){

	// Get Path of Extensions + send to extendScript
	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('csmultipicsGreenDouble(' + JSON.stringify(extensionPath) + ')');
 };

function multipicsRedDouble(){
 	//csInterface.evalScript("csmultipicsRedDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('csmultipicsRedDouble(' + JSON.stringify(extensionPath) + ')');
 };

function multipicsYellowDouble(){
 	//csInterface.evalScript("csmultipicsYellowDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('csmultipicsYellowDouble(' + JSON.stringify(extensionPath) + ')');
 };

 // Single Pic

function singlepicBlueDouble(){
 	//csInterface.evalScript("cssinglepicBlueDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssinglepicBlueDouble(' + JSON.stringify(extensionPath) + ')');
 };

function singlepicGreenDouble(){
 	//csInterface.evalScript("cssinglepicGreenDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssinglepicGreenDouble(' + JSON.stringify(extensionPath) + ')');
 };

function singlepicRedDouble(){
 	//csInterface.evalScript("cssinglepicRedDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssinglepicRedDouble(' + JSON.stringify(extensionPath) + ')');
 };

function singlepicYellowDouble(){
 	//csInterface.evalScript("cssinglepicYellowDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssinglepicYellowDouble(' + JSON.stringify(extensionPath) + ')');
 };

// Double Page 2 Pictures

function twopicsBlueDouble(){
 	//csInterface.evalScript("cstwopicsBlueDoublee()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cstwopicsBlueDoublee(' + JSON.stringify(extensionPath) + ')');
 };

 function twopicsGreenDouble(){
 	//csInterface.evalScript("cstwopicsGreenDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cstwopicsGreenDouble(' + JSON.stringify(extensionPath) + ')');
 };

 function twopicsRedDouble(){
 	//csInterface.evalScript("cstwopicsRedDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cstwopicsRedDouble(' + JSON.stringify(extensionPath) + ')');
 };

 function twopicsYellowDouble(){
 	//csInterface.evalScript("cstwopicsYellowDouble()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cstwopicsYellowDouble(' + JSON.stringify(extensionPath) + ')');
 };

 // Single Page

  function singleBlue(){
 	//csInterface.evalScript("cssingleBlue()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssingleBlue(' + JSON.stringify(extensionPath) + ')');
 };

  function singleGreen(){
 	//csInterface.evalScript("cssingleGreen()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssingleGreen(' + JSON.stringify(extensionPath) + ')');
 };

  function singleRed(){
 	//csInterface.evalScript("cssingleRed()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssingleRed(' + JSON.stringify(extensionPath) + ')');
 };

  function singleYellow(){
 	//csInterface.evalScript("cssingleYellow()");

 	var extensionPath = (csInterface.getSystemPath(SystemPath.EXTENSION)+templatePath);
 	csInterface.evalScript('cssingleYellow(' + JSON.stringify(extensionPath) + ')');
 };
