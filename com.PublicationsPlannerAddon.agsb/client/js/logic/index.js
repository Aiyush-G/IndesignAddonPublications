/* Create an instance of CSInterface. */
var csInterface = new CSInterface();


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