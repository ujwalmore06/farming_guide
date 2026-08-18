// ==========================================
// SMART FARMING - FARMER DETAILS
// ==========================================

const farmerForm = document.getElementById("farmerForm");
const successMessage = document.getElementById("successMessage");


// ===============================
// FORM SUBMIT
// ===============================

farmerForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Get form values

    const name =
        document.getElementById("name").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();

    const state =
        document.getElementById("state").value;

    const district =
        document.getElementById("district").value.trim();

    const taluka =
        document.getElementById("taluka").value.trim();

    const village =
        document.getElementById("village").value.trim();

    const crop =
        document.getElementById("crop").value;

    const land =
        document.getElementById("land").value;

    const soil =
        document.getElementById("soil").value;

    const irrigation =
        document.getElementById("irrigation").value;


    // ===============================
    // MOBILE VALIDATION
    // ===============================

    if (!/^[0-9]{10}$/.test(mobile)) {

        alert("Please enter a valid 10 digit mobile number.");

        return;

    }


    // ===============================
    // SAVE DATA
    // ===============================

    localStorage.setItem("farmerName", name);

    localStorage.setItem("farmerMobile", mobile);

    localStorage.setItem("farmerState", state);

    localStorage.setItem("farmerDistrict", district);

    localStorage.setItem("farmerTaluka", taluka);

    localStorage.setItem("farmerVillage", village);

    localStorage.setItem("farmerCrop", crop);

    localStorage.setItem("farmerLand", land);

    localStorage.setItem("farmerSoil", soil);

    localStorage.setItem("farmerIrrigation", irrigation);


    // ===============================
    // SUCCESS MESSAGE
    // ===============================

    successMessage.style.display = "block";


    // ===============================
    // GO TO DASHBOARD
    // ===============================

    setTimeout(function () {

        window.location.href = "dashboard.html";

    }, 1200);

});