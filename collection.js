    var products = document.querySelector(".products");
    var productname = products.querySelectorAll(".product-name");
    var search = document.getElementById("search");
    console.log(productname);

    search.addEventListener("keyup", function (event) {
    var enteredtext = event.target.value;

    for (i = 0; i < productname.length; i++) {
        if (productname[i].textContent.indexOf(enteredtext) < 0) {
        productname[i].closest('.product-card').style.display = "none";
        } else {
        productname[i].closest('.product-card').style.display = "block";
        }
    }
    });

    //selecting the menu-bar
    let menubar = document.querySelector(".menu");

    function openmenu() {
    menubar.classList.add("is-open")
    }

    function closemenu() {
    menubar.classList.remove("is-open")
    }
