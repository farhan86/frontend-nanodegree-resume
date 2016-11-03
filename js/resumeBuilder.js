var bio = {
    "name" : "John Doe",
    "role" : "Web Developer",
    "Contacts" : {
        "mobile":"630-333-6666",
        "email":"john@example.com",
        "github":"johndoe",
        "twitter":"@johndoe",
        "location":"San Francisco"
    },
    "welcomeMessage":"lorem ipsum dolor sit amet",
    "skills":[
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ],
    "biopic":"images/fry.jpg"
}

var education = {
    "schools":[
        {
            "name": "North South University",
            "city":"Dhaka",
            "degree":"Honors",
            "majors":["CSE"],
            "dates":2016,
            "url":"http://example.com"
        },
        {
            "name": "eckerd college",
            "city":"bahadur",
            "degree":"masters",
            "majors":["CSE"],
            "dates":2003,
            "url":"http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title":"JavaScript Crash Course",
            "school":"Udacity",
            "dates":2014,
            "url":"http://www.udacity.com/course/ud804"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer":"Pizza Palace",
            "title":"Delivery Boy",
            "dates":"2651 - december 335965",
            "description":"Abdul Kuddus akjon boyati j ajaira chillachilli kore nd stuff so ore always avoid kora bhalo r dim kinte poysha lage onk.Dim khaite onk moja kintu"
        },
        {
            "employer":"Planet Express",
            "title":"Delivery Boy",
            "dates":"January 3000-Future",
            "description":"Abdul Kuddus akjon boyati j ajaira chillachilli kore nd stuff so ore always avoid kora bhalo r dim kinte poysha lage onk.Dim khaite onk moja kintu"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "abdul kuddus boyati hello hi how are you are you dump are you so stupid hello hey sweet sweet pie pour in the cup and eat it all up.",
            "images":[
                "HERE WAS SUPPOSE TO BE A PIC",
                "HERE WAS ALSO SUPPOSE TO BE A PIC"
            ]
        }
    ]
}

var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHeaderName);

if(bio.skills.length > 0)
    {
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
function displayWork(){
for (job in work.jobs)
{
    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
}