console.log("political campaign")



const ElizabethCampaign = {
    district: "davidson county",
    platform: {
        taxes: "",
        jobs: [],
        infrastructions: "",
        healthCare: "",
        enforcement: ""
    },
    donationURL: "",
    events: [],
    volunteerInfo: {
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
        availability: "",
        activities: ""
    },
    Biography: "",
    imageGallery: {
        headShot: "",
        familyPic: "",
        constituentPic: ""
    },
    missionStatement: "",
    registrationURL: ""
}


function addToImageGallery (newImage) {
    
}

function changeBiography (newBiography) {
    ElizabethCampaign.Biography = newBiography
    console.log(ElizabethCampaign.Biography)
}
changeBiography("vasage on the floor")

function changePlatform (topic, newPlatformStatement) {

}