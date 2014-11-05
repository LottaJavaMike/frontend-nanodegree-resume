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
		"github" : "LottaJavaMike",
		"blog" : "contemplatingtech.com"
	},
	"welcome message" : "welcome to whatever this is",
	"picture url" : "url to image later",
	"skills": ["networking", "server administration", "powershell", "programming"]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
$("#footerContacts").append(formattedPhone);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGithub);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#footerContacts").append(formattedBlog);

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

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);

	}
};

education.display();

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
			"dates" : "Jan 2010 - June 2012",
			"description" : "description of whatever Project A would be",
			"images" : [
				"url to image 1" , "url to image 2"
			]
		},
		{
			"title" : "Project B",
			"dates" : "Aug 2012 - Oct 2013",
			"description" : "description of whatever Project B would be",
			"images" : [
				"url to image 1" , "url to image 2"
			]
		}
	]
};


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

$("#mapDiv").append(googleMap);