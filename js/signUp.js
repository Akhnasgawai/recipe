function changeIcon(iconElement, password) {
    ele = document.getElementById(iconElement);
    passwordField = document.getElementById(password);
    if (ele.classList.contains("fa-eye")) {
        ele.classList.remove("fa-eye");
        ele.classList.add("fa-eye-slash");
        passwordField.type = "password";
    }
    else{
        ele.classList.remove("fa-eye-slash");
        ele.classList.add("fa-eye");
        passwordField.type = "text";
    }
}

function validateNumber(input) {
    var re = /^\+91?[789]\d{9}$/
    return re.test(input)
}

function validateUser() {
    const userMob = "9611767705";
    const userPass = "Hello@123";
    var userMobile = document.getElementById("mobile-number").value;
    var password = document.getElementById("password").value;
    var ele = document.getElementById("error");
    var userProfile = document.getElementById("user-profile");
    var countryCodeList = document.getElementById("country-code-list");
    var countryCode = countryCodeList.value;
    mob = countryCode + userMobile;
    if (userProfile.selectedIndex == 0) {
        ele.innerHTML = "Please select a user profile";
        ele.classList.add("show");
    }
    else if(userMobile == ""){
        ele.innerHTML = "Please enter your mobile number";
        ele.classList.add("show");
    }
    else if(!(validateNumber(mob))){
        ele.innerHTML = "Incorrect number";
        ele.classList.add("show");
    }
    else if(password == ""){
        ele.innerHTML = "Please enter your password";
        ele.classList.add("show");
    }
    else {
        if (userMobile == userMob && password == userPass) {
            window.location.href = "index.html";
        }
        else{
            ele.innerHTML = "Incorrect Mobile Number or Password";
            ele.classList.add("show");
        }
    }

}