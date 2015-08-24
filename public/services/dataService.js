app.service('dataService', function($http, $q) {

  var aboutSWYC = [{
    about: "GYC Southwest is a grassroots movement of Seventh-day Adventist youth and young adults.  Our purpose is to support the mission and message of the Seventh-day Adventist Church by encouraging young people in the southwestern United States to be actively involved in the ministry of the Church and equipping them for service to God and man."
  }]

  var purpose = [
    "1. Providing an annual meeting, the Southwest Youth Conference (SWYC), to revitalize our love for His Word, renew our commitment to work where He leads, and deepen our desire to see Him return",
    "2. Encouraging a full dedication to Christ through earnest study of the Bible, prayer and service to others ",
    "3. Meeting each year for worship and Bible study",
    "4. Collaborating with local Seventh - day Adventist churches and organizations",
    "5. Reaching out to the young people in the southwestern United States encouraging them to an acceptance and full commitment to Christ ",
    "6. Using outreach to touch our local and global community in tangible ways",
    "7. and Hastening the soon return of Jesus Christ through proclamation of the Three Angels’ Messages, thus encouraging others to prepare to meet Him."
  ];

  var ecom = [{
    name: "John Ross Diel",
    position: "President",
    occupation: "Registered Nurse"
  }, {
    name: "Marte Gerald Asumen",
    position: "Vice President",
    occupation: "Physical Therapist"
  }, {
    name: "Tiffany Nasralla",
    position: "Treasurer",
    occupation: "Digital Marketing Strategist"
  }, {
    name: "Laurent Jauwena",
    position: "Secretary/Speaker Liason",
    occupation: "College Student"
  }, {
    name: "Anchelle Diel",
    position: "Registration Coordinator",
    occupation: "Psychiatric Technician"
  }, {
    name: "Elaine Lucrida",
    position: "Event Coordinator",
    occupation: "College Student"
  }, {
    name: "Alexandra Lopez",
    position: "Public Relations"
  }, ]

  var members = [{
    name: "James Alte",
    position: "VP of Evangelism"
  }, {
    name: "Grace Mogi",
    position: "Webmaster"
  }, {
    name: "Destiny Joshua",
    position: "Assistant Event Coordinator"
  }, {
    name: "Mike Alvarico",
    position: "Audio/Visual Director"
  }, {
    name: "Ryan Booth",
    position: "Camp Logistics and Operations"
  }];

  var board = [{
    name: "Norman McNulty",
    occupation: "Neurologist"
  }, {
    name: "Peter K. Chung",
    occupation: "History Teacher, San Gabriel Academy"
  }, {
    name: "Kyle Allen",
    occupation: "Secretary-Treasurer, ASI"
  }];

  var conferenceInfo = [{
    theme: "Christ Our Righteousness",
    themeVerse: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me. - Galatians 2:20",
    speakers: "Doug Batchelor, Dwayne Lemon, Norman McNulty, Virna Santos, Keala Thompson, Esmie Brenner",
    date: "September 4 - 7, 2015",
    location: "Pine Springs Ranch in Mountain, CA"
  }];

  this.aboutSWYC = function() {
    return aboutSWYC;
  };

  this.purpose = function() {
    return purpose;
  };

  this.ecom = function() {
    return ecom;
  };

  this.members = function() {
    return members;
  };

  this.board = function() {
    return board;
  }

  //end service

})
