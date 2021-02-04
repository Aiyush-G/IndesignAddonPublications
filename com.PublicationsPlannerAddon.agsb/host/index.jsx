function openDocument(){
	alert("It's great!");

}; 

function newPage(){
	alert("Creating New Document!");
	
	var myDocument = app.documents.add();
	var myTextFrame = myDocument.pages.item(0).textFrames.add(); 
	myTextFrame.geometricBounds = ["6p", "6p", "24p", "24p"]; 
	myTextFrame.contents = "Hello World!";

};

function plannerWebpage(){
	alert ("Planner")
};