document.getElementById("login-btn").addEventListener("click", (event) => {
    event.preventDefault();

    let inputValue = document.getElementById("myInput").value;
    let pass = document.getElementById("password").value;
    let heroSection = document.getElementById("hero-section");
    let logOut = document.getElementById("logOut");
    let nav = document.getElementById("nav");

    if (inputValue.trim() !== "") {
        if (pass.trim() == "123456") {
            Swal.fire({
                title: "Success!",
                text: "English জানালাতে আপনাকে সাগতম",
                icon: "success",
                confirmButtonText: "OK"
            })

            heroSection.classList.add("hidden")
            nav.classList.remove("absolute");

            document.getElementById("logOut").addEventListener("click", (event) => {
                event.preventDefault();

                if (!logOut.classList.contains("hidden")) {
                    heroSection.classList.remove("hidden")
                    nav.classList.add("absolute");

                    Swal.fire({
                        title: "LogOut Success!",
                        text: "English জানালাতে আপনাকে সাগতম",
                        icon: "success",
                        confirmButtonText: "OK"
                    })
                }
            })
        } else {
            Swal.fire({
                title: "Wrong Password!!",
                text: "পাসওয়ার্ড 123456 ব্যাবহার করুণ",
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    } else {
        Swal.fire({
            title: "You Must Have to Fill the Namae Input Must",
            text: "আপনার নাম দিন",
            icon: "error",
            confirmButtonText: "OK"
        })
    }

})