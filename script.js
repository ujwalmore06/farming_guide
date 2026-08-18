// ==========================================
// SMART FARMING - DASHBOARD JAVASCRIPT
// ==========================================


// ===============================
// GET FARMER DATA
// ===============================

const farmerName = localStorage.getItem("farmerName");
const farmerCrop = localStorage.getItem("farmerCrop");
const farmerLand = localStorage.getItem("farmerLand");


// ===============================
// FARMER NAME
// ===============================

const farmerNameElement =
    document.getElementById("farmerName");

const topFarmerNameElement =
    document.getElementById("topFarmerName");


if (farmerName) {

    if (farmerNameElement) {
        farmerNameElement.textContent = farmerName;
    }

    if (topFarmerNameElement) {
        topFarmerNameElement.textContent = farmerName;
    }

}


// ===============================
// CROP NAME
// ===============================

const dashboardCrop =
    document.getElementById("dashboardCrop");


if (dashboardCrop && farmerCrop) {

    dashboardCrop.textContent = farmerCrop;

}


// ===============================
// LAND AREA
// ===============================

const dashboardLand =
    document.getElementById("dashboardLand");


if (dashboardLand && farmerLand) {

    dashboardLand.textContent =
        farmerLand + " Acres";

}


// ===============================
// TASK BUTTONS
// ===============================

const taskButtons =
    document.querySelectorAll(".task button");


taskButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.textContent.trim() === "Done") {

            button.textContent = "Completed";

            button.style.background = "#2e7d32";

            button.style.color = "white";

            alert("✅ Task completed successfully!");

        } else {

            alert(
                "💧 Please check your soil moisture and irrigation."
            );

        }

    });

});


// ===============================
// DASHBOARD CARD MESSAGE
// ===============================

const dashboardCards =
    document.querySelectorAll(".dashboard-card");


dashboardCards.forEach(function (card) {

    card.addEventListener("click", function () {

        console.log(
            "Opening: " + card.innerText
        );

    });

});
document.addEventListener("DOMContentLoaded", function () {

    // Farmer name
    const farmerName = localStorage.getItem("farmerName");

    // Crop
    const farmerCrop = localStorage.getItem("farmerCrop");

    // Land
    const farmerLand = localStorage.getItem("farmerLand");


    // Show farmer name
    if (farmerName) {

        const sidebarName =
            document.getElementById("farmerName");

        const topName =
            document.getElementById("topFarmerName");


        if (sidebarName) {
            sidebarName.textContent = farmerName;
        }

        if (topName) {
            topName.textContent = farmerName;
        }

    }


    // Show crop
    if (farmerCrop) {

        const crop =
            document.getElementById("dashboardCrop");

        if (crop) {
            crop.textContent = farmerCrop;
        }

    }


    // Show land
    if (farmerLand) {

        const land =
            document.getElementById("dashboardLand");

        if (land) {
            land.textContent = farmerLand + " Acres";
        }

    }


    // Today's task buttons
    const taskButtons =
        document.querySelectorAll(".task-btn");


    taskButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.textContent.trim() === "Done") {

                button.textContent = "✓ Done";

                button.style.background = "#e8f5e9";

            } else {

                alert("Please check your crop and soil moisture.");

            }

        });

    });

});