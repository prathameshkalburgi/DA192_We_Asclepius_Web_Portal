const addBtn = document.getElementById("addBtn");
const approveBtn = document.getElementById("approveBtn");
const rejectBtn = document.getElementById("rejectBtn");
// const userNameLogin = document.getElementById("userNameLogin");
// const passwordLogin = document.getElementById("passwordLogin");
const signinBtn = document.getElementById("signinBtn");
const DownloadBtn = document.getElementById("DownloadBtn");
const DownloadBts = document.getElementById("DownloadBts");

//==========================================================================
const doctorName = document.getElementById("doctorName");
document.getElementById("doctorName").innerHTML = "Samson Kihika";
//==========================================================================
var storage = firebase.storage();
const database = firebase.database();
var storageRef = storage.ref();
var usersRef1 = storageRef.child("/doctor_application_resumes");
// var usersRef = storageRef.child("app_users/");

var resumeRef = storageRef.child(
    "/doctor_application_resumes/Professional Doctor.pdf"
);

resumeRef
    .getDownloadURL()
    .then(function(url) {
        document.getElementById("DownloadBtns").href = url;
        console.log(url);
    })
    .catch(function(error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case "storage/object-not-found":
                // File doesn't exist
                break;

            case "storage/unauthorized":
                // User doesn't have permission to access the object
                break;

            case "storage/canceled":
                // User canceled the upload
                break;

            case "storage/unknown":
                // Unknown error occurred, inspect the server response
                break;
        }
    });


//==========================================================================
const usersRef = database.ref("/app_users");
usersRef.child("rrODMEwMXtM1HShpuwPxtocnWlG3").on("value", (snapshot) => {
    var Name = snapshot.val();
    console.log(Name.fullName);
    document.getElementById("doctorName").innerHTML = Name.fullName;
});

approveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Approved");
    console.log("Approve clicked");
    const newData = {
        registeredAsDoctor: "true",
    };
    // usersRef.child(userId.value).update(newData);
    usersRef.child('rrODMEwMXtM1HShpuwPxtocnWlG3').update(newData);
});