// ==========================================
// SMART FARMING - PROFILE JAVASCRIPT
// ==========================================


// Get saved farmer information

const farmerName =
    localStorage.getItem("farmerName");

const farmerMobile =
    localStorage.getItem("farmerMobile");

const farmerState =
    localStorage.getItem("farmerState");

const farmerDistrict =
    localStorage.getItem("farmerDistrict");

const farmerTaluka =
    localStorage.getItem("farmerTaluka");

const farmerVillage =
    localStorage.getItem("farmerVillage");

const farmerCrop =
    localStorage.getItem("farmerCrop");

const farmerLand =
    localStorage.getItem("farmerLand");

const farmerSoil =
    localStorage.getItem("farmerSoil");

const farmerIrrigation =
    localStorage.getItem("farmerIrrigation");


// ==========================================
// DISPLAY DATA
// ==========================================

if (farmerName) {
    document.getElementById("profileName").textContent =
        farmerName;
}

if (farmerMobile) {
    document.getElementById("profileMobile").textContent =
        farmerMobile;
}

if (farmerState) {
    document.getElementById("profileState").textContent =
        farmerState;
}

if (farmerDistrict) {
    document.getElementById("profileDistrict").textContent =
        farmerDistrict;
}

if (farmerTaluka) {
    document.getElementById("profileTaluka").textContent =
        farmerTaluka;
}

if (farmerVillage) {
    document.getElementById("profileVillage").textContent =
        farmerVillage;
}

if (farmerCrop) {
    document.getElementById("profileCrop").textContent =
        farmerCrop;
}

if (farmerLand) {
    document.getElementById("profileLand").textContent =
        farmerLand + " Acres";
}

if (farmerSoil) {
    document.getElementById("profileSoil").textContent =
        farmerSoil;
}

if (farmerIrrigation) {
    document.getElementById("profileIrrigation").textContent =
        farmerIrrigation;
}