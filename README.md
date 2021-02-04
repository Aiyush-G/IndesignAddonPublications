# Welcome to the Publications Repository for our school Indesign Plugin- created by Aiyush Gupta

The aim of this repository is to provide the source code on a release by release basis where you can look at the architecture of the addon. When I created this addon there was very little documentation and support for the process so I have tried to document it best as I can here. 


# Files

This repository currently contains two different adding **publications quick access addon** and the **publications planner addon**, upon reading this you are probably thinking why have I created two separate add-ons and not bundled them into one. 

The thinking behind this has a lot to do with how the CEP and CEF interact with indesign and the limitations of the software.

CEP - adobe's addon library  (Common Extensibility Platform)
CEF - chromium embedded framework - to understand this better look at the next section on architecture.

## Architecture

CEP (Common Extensibility Platform) lets you build extensions in Adobe Creative Cloud applications like Photoshop, Illustrator, InDesign, After Effects, and many more. Extensions built with CEP let us customise our Creative Cloud experience for our unique workflows. To see more on what functionality this addon provides look at the functionality section.


To further understand how this addon works it is advised that you have knowledge (beginner) in the following *languages*.

 1. HTML
 2. CSS
 3. Javascript
 4. Patience

If you have never coded before then don't worry, if you have a scope that is reasonable in size and lots of determination you could probably get started developing in 2 weeks after learning.

If you haven't coded yet I recommend that you spend time watching tutorials on web development using css, html and javascript. HTML you could probably pick up in a day, CSS isn't necessary but it makes everything you do look nicer, javascript is essential you should understand functions/proceures beforehand. At the time of writing this I only started learning Javascript 1 month ago and it wasn't super hard to get started since I had prerequisite knowledge in other programming languages like Python and Go. 

This is how each of the add-ons are divided:

![enter image description here](https://github.com/Adobe-CEP/Getting-Started-guides/blob/master/.meta/readme-assets/extension-structure.png?raw=true)

So within each extension I have 3 folders. The first is CSXS where I have the manifest .xml which contains basic information about the extension. I will talk more about this later.

We have the client folder which is like the front-end (what the end user sees) and contains the html, style, javascript and also another file called CSInterface.js which you don't modify. You will download this from the Adobe CEP resources in their GitHub repository. You should definitely look at the GitHub repository for Adobe CEP before continuing. The host folder contains the index.jsx which is like the backend and interacts with the host application API (application programming interface). Please note that these are the minimum requirements for creating an addon.
 
## Breaking down what Each part of the add-on does

This repository doesn't aim to educate you on how exactly you can create your own application but to understand how this addon works. 

When I created this addon I couldn't do all of this addon development in a day, it took around 2 weeks including time when I just slept on it and did various experiments. 

### Foreword

We are all aware of the possibilities of automating and expanding the functionality of Adobe applications. Many people, surely, would like to learn the art of programming, so as to add such functionality, to make their workflow more productive and adapted to their personal needs.

Now that we can create Extensions for Creative Cloud applications, all this has been made possible. Adobe Configurator, although misunderstood throughout its life, was the tool that allowed even the less experienced to approach this magical world. Its removal from the scene has limited such access to programmers, who can only navigate the process of creating Panels and Extensions in the new HTML format with great difficulty, owing to the lack of adequate documentation.

Of course, nothing is difficult for programmers with considerable experience or a great aptitude for the subject. 

The difficulty of obtaining information and the sudden changes in requirements caused many, albeit reluctantly, to abandon the development of extensions. To say nothing of the beginners who did not enter the field for fear of being stranded on a desert island!

Like a boat in a fierce storm, or in a minefield, those who are not well equipped and aware of the problems they face risk being shipwrecked. The solution is training, and the exchange of information and experiences.

The interchange of ideas, the sharing of a project, the grasping of a new technique, is much easier in a collaborative environment. Learning what others have experienced, and sharing common problems, is often the easiest path, assuming that colleagues share the same goals. But how do we overcome the lack of information?

Special-interest online discussion groups are today’s equivalent of that collaborative environment. They are places where neophytes and experts can each find complete responses and partial solutions to their problems. Google searches, blogs and private sites of independent developers, open source communities such as the social network GitHub can also be quite useful for tapping into resources, collaborating on a project, and/or putting information at the disposition of the community. So, despite all the difficulties, there is some sharing of this ocean of knowledge.

### Foreword ii

We must therefore know how to glean the exact information needed for our specific needs, to find the one best suited to our particular problem. And time is also a factor: it is essential to get quick answers, so as to concentrate more on the real problems instead of spending whole days in research, and ending up with a fistful of nothing. It can be an exasperating experience that in most cases yields only partial answers. And the information on how to create an HTML extension is as fragmented as it could possibly be.

There is no one place to find all the explanations and the assembly of concepts, and the search for it is likely to be frustrating and debilitating. What is lacking is a place where experts and novices can find everything needed for a proper and rapid development, allowing free rein to creativity and inventiveness.

This material, however, gets us only halfway there, since in most cases the transition from theory to practice does not occur without problems. The rest of the process depends on our own energy and capacity. But where can we find the correct, complete, exhaustive and effective presentation of the basic material? For me there is no doubt, it is right here in the pages of this book.

Above all, you will learn to comprehend the reasons and concepts behind each step, and thus to achieve the autonomy to develop and create your own extension. Adding to the completeness of the information,  
*{Reference Davide}*

### Breaking down the extension

Lets start with the multifunctional extension which allows you to do the following:

 - Download and open templates straight from indesign 
 - Access the stock footage
 - Checklist of things that need doing beforehand.


This is what the folder structure looks like.
