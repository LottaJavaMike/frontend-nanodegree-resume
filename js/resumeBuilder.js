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
	"message" : "welcome to whatever this is",
	"picture" : "./images/resume.jpg",
	"skills": ["networking, desktop & server administration", "server & client side scripting", "web development", "android development"]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedbioPic);

// Contact info at top of page

var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
$("#topContacts").append(formattedPhone);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);

// Contact info at bottom of page

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

// skillset
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
};


var education = {
	"schools" : [
		{
			"name" : "ECPI Universitiy - College of Technology",
			"location" : "Virginia Beach, VA",
			"degree" : "Associate of Science",
			"major" : "Computer and Information Sciences",
			"dates": "December 2009 ",
			"url" : "http://www.ecpi.edu/technology/"
			
		},
		{
			"name" : "Gibbs Long Island",
			"location" : "Melville, NY",
			"degree" : "Associate of Occupational Studies",
			"major" : "Computer Network Operations",
			"dates" : "December 2004",
			"url" : "None"
		},
		{
			"name" : "Suburban Technical Schools",
			"location" : "Bay Shore, NY",
			"degree" : "Computer Electronics Certificate",
			"major" : "Computer and Network Operations",
			"dates" : "October 1995",
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
			"description" : "supporting end users in an environment consisting of Windows XP and Windows 7 PCs. Support includes Dell and HP desktops, notebooks and printers. Software titles include (but not limited to) Office 2007/2010 Enterprise, Internet Explorer 8/9, Mozilla Firefox, Winzip, Adobe Photoshop/Illustrator, Custom in-house applications, Remedy Help Desk, Outlook 2007/2010, Altiris, etc."
		},
		{
			"employer" : "4 Corner Resources",
			"title" : "Contractor - Technical Services",
			"location" : "Orlando, FL",
			"dates" : "April 2011 to May 2012",
			"description" : "Technical Services Contractor at Bright House Networks"
		},
		{
			"employer" : "The NPD Group, Inc.",
			"title" : "Technical Support Specialist",
			"location" : "Port Washington, NY",
			"dates" : "October 1999 to 2010",
			"description" : "Senior level technical support specialist. Support 1800+ end users in a hybrid envroment (Win2000/Win2003 servers) consisting of Win XP/7 workstations and Win 2000/2003 Server. Currently support desktop and notebook hardware/software, limited server hardware, and networking environment. Software titles include (but not limited to) Office 2003/2007 Pro, Internet Explorer, Mozilla Firefox, Winzip, Adobe Photoshop/Illustrator, Custom in-house applications, Remedy Help Desk, Outlook 2003/2007,Imagecast, Altiris, etc."
		},
		{
			"employer" : "Alternative Resources Corp",
			"title" : "Contractor - Technical Support",
			"location" : "New York, NY",
			"dates" : "April 1999 to October 1999",
			"description" : "On-site technical support for The NPD Group, Inc. providing support in an environment consisting of Dell PCs running Microsoft Windows along with various hardware. Software support included (but not limited to) Office 2007/2010 Enterprise, Internet Explorer, Mozilla Firefox, Winzip, Adobe Photoshop/Illustrator, and other custom in-house applications."
		},
		{
			"employer" : "TEKsystems",
			"title" : "Consultant - Technical Services",
			"location" : "New York, NY",
			"dates" : "June 1997 to April 1999",
			"description" : "Systems consultant. Various projects including helpdesk support in windows environments, OS conversions from Win 3.x to Win NT, and token ring to ethernet conversions. Clients included: Best Foods Baking Company, The NPD Group, Inc., MTV Networks(Viacom), Compucom, Corstar and Unisys"
		},
		{
			"employer" : "Universal Computer Services",
			"title" : "Field Service Technician",
			"location" : "New York, NY",
			"dates" : "November 1994 to June 1997",
			"description" : "New York City based field service technician responsible for maintenance of clients systems (proprietary and PC based) and peripherals."
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
			"title" : "Online Portfolio",
			"dates" : "2014",
			"description" : "Portfolio showcasing links to web development projects",
			"images" : [
				
			]
		},
		{
			"title" : "Interactive Resume",
			"dates" : "2014",
			"description" : "The very interactive online resume you are looking at right now!",
			"images" : [
				
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