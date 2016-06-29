// var awesomeThoughts;
// awesomeThoughts = "I am He Zhang and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// $("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "He Zhang");
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);

// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
// $("#header").prepend(formattedRole);

var bio = {
	"name" : "He Zhang",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "hezhang757@gmail.com",
		"location" : "San Jose, CA",
		"mobile" : "949-701-5277"
	},
	"bioPic" : "images/me.jpg",
	"welcomeMessage" : "",
	"skills" : ["Javascript","HTML","CSS","JQuery","React","Responsive/Mobile web dev","web tooling and automation", "SASS"]
}

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedLocation);
$("#header").append(formattedWelcome);
$("#header").append(formattedPic);

if(bio.skills.length > 0){

	   $("#header").append(HTMLskillsStart);
	// var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	// $("#skills").append(formattedSkill);
	// formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	// $("#skills").append(formattedSkill);
	// formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	// $("#skills").append(formattedSkill);

	var formattedSkill;
	var skillNumber = bio.skills.length;
	for (var i=0; i < skillNumber; i++){
		formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);

	}

}

var education = {
	"schools" : [
		{
			"name": "Boston University",
			"location": "Boston",
			"degree": "Master",
			"major" : "EE",
			"yearsAttend" : "2013-2015"
		},
		{
			"name" : "NCUT",
			"location" : "Beijing",
			"degree" : "BS",
			"major" : "EE",
			"yearsAttend" : "2009-2013"
		}
    ]
}

var work = {
	"jobs" : [
		{
			"employer" : "Chesapeake Technology Inc",
			"title" : "Web Developer",
			"location" :  "Mountain View",
			"dates" : "04/2016 - present",
			"description" : "Add new functions and featrues on existing web page"
		},
		{
			"employer" : "Geometrics Inc",
			"title" : "Software Engineer",
			"location" : "San Jose",
			"dates" : "03/2015 - 03/2016",
			"description" : "DSP filters implemention in RTOS, I2C driver, fitting funtion integration"
		}
	]
}

function displayWork(){
	for (job in work.jobs){
	    $("#workExperience").append(HTMLworkStart);
	    var formattedEmployer = HTMLworkEmployer.replace
	    ("%data%", work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace
	    ("%data%", work.jobs[job].title);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle;
	    $(".work-entry:last").append(formattedEmployerTitle);
	    var formattedDates = HTMLworkDates.replace
	    ("%data%", work.jobs[job].dates);
	    $(".work-entry:last").append(formattedDates);
	    var formattedDescription = HTMLworkDescription.replace
	    ("%data%", work.jobs[job].description);
	    $(".work-entry:last").append(formattedDescription);
	}
}
displayWork();


var projects = {
	"projects" : [
		{
			"title" : "Chinese food map",
			"dates" : "06/2016",
            "description" : "Create a website for searching Chinese restaurant in Bay area.",
            "image" : "images/fry.jpg"
		},
		{
			"title" : "personal website",
			"dates" : "07/2016",
			"description" : "Plan to create personal website with high level techniques, like dynamic elements.",
			"image" : "images/fry.jpg"
		}
	]
}

projects.display = function(){
	for(var project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedrPojectTitle = HTMLprojectTitle.replace
		("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedrPojectTitle);

		var formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedProjectDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

        var formattedProjectImage = HTMLprojectImage.replace
        ("%data%", projects.projects[project].image);
        $(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();

// $("#main").append(internationalizeButton);
// function inName(name){
//     var res = name.split(" ");
//     var firstName = res[0].slice(0,1).toUpperCase() + res[0].slice(1).toLowerCase();
//     var lastName = res[1].toUpperCase();
//     var internationalizeName = firstName + " " +lastName;
// 	return internationalizeName;
// }

$("#mapDiv").append(googleMap);
//googleMap API key: AIzaSyDdtvyr16Ioe5o3AnpO6JV2HplSA7jVxIM

