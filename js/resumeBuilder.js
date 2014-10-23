/*
var name = "Michael Shea";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Front-End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);
*/
var bio = {
	"name" : "Michael Shea",
	"role" : "Front-End Developer",
	"contacts" : {
		"phone": "321-555-1212",
		"email": "emtshea@gmail.com",
		"location": "Orlando, Florida",
		"twitter" : "@MikeInVa",
		"github" : "LottaJavaMike"
	},
	"welcome message" : "welcome to whatever this is",
	"picture url" : "url to image later",
	"skills": ["networking", "server administration", "powershell", "programming"]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

var education = {
	"schools" : [
		{
			"name" : "ECPI Universitiy - College of Technology",
			"location" : "Virginia Beach, VA",
			"degree" : "Associate of Science",
			"major" : "Computer and Information Sciences",
			"graduated": "December 2009 ",
			"url" : "http://www.ecpi.edu/technology/"
			
		},
		{
			"name" : "Gibbs Long Island",
			"location" : "Melville, New York",
			"degree" : "Associate of Occupational Studies",
			"major" : "Computer Network Operations",
			"graduated" : "December 2004",
			"url" : "None"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML & CSS",
			"school" : "Udacity",
			"dates" : "2014",
			"url" : "http://www.udacity.com/course/ud304"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2014",
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Bright House Networks",
			"title" : "Computer Support Specialist II",
			"location" : "Orlando, FL",
			"dates" : "May 2012 to Present",
			"description" : "Provide desktop support for 3000+ PC environment consisting of Windows XP, Windows 7 and Apple workstations."
		},
		{
			"employer" : "4 Corner Resources",
			"title" : "Contractor - Technical Services",
			"location" : "Orlando, FL",
			"dates" : "April 2011 to May 2012",
			"description" : "Technical Services Contractor at Bright House Networks"
		}
	]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
};

displayWork();

var projects = {
	"projects" : [
		{
			"title" : "Project A",
			"dates worked" : "Jan 2010 - June 2012",
			"description" : "description of whatever Project A would be",
			"images" : [
				"url to image 1" , "url to image 2"
			]
		}
	]
};


