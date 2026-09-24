function toggleMenu() {

const menu = document.querySelector(".nav-links");

if (menu) {
    menu.classList.toggle("active");
}

}
const BUSINESS_PHONE = "251913615433";

const DISPLAY_PHONE = "+251 913615433";

function copyPhone() {

navigator.clipboard.writeText(DISPLAY_PHONE)
    .then(function () {

        alert(
            "Phone number copied: " + DISPLAY_PHONE
        );

    })
    .catch(function () {

        alert(
            "Phone number: " + DISPLAY_PHONE
        );

    });


}

function searchProducts() {


const searchInput =
    document.getElementById("productSearch");

const noResults =
    document.getElementById("noResults");

if (!searchInput) {
    return;
}
const input =
    searchInput.value
    .toLowerCase()
    .trim();


const products =
    document.querySelectorAll(".product-card");


let found = false;


products.forEach(function(product) {

    const productData =
        product.getAttribute("data-product");


    const productName =
        product.querySelector("h3");

    const searchableText =
        (
            (productData || "")
            + " "
            +
            (productName
                ? productName.textContent
                : "")
        )
        .toLowerCase();
  
    if (input === "") {

        product.style.display = "block";

        found = true;
        return;
    }
  
    if (searchableText.includes(input)) {

        product.style.display = "block";

        found = true;

    }
    else {

        product.style.display = "none";

    }

});

if (noResults) {
    if (found) {

        noResults.style.display = "none";

    }
    else {

        noResults.style.display = "block";

    }

}

}
function contactProduct(productName) {

const telegramUsername =
    "yourbusiness";


const message =
    "Hello, I am interested in the product: "
    + productName
    + ". Please give me more information.";


const telegramURL =
    "https://t.me/"
    + telegramUsername
    + "?text="
    + encodeURIComponent(message);


window.open(
    telegramURL,
    "_blank"
);


}

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document
            .getElementById("name")
            .value
            .trim();

        const email =
            document
            .getElementById("email")
            .value
            .trim();

        const subject =
            document
            .getElementById("subject")
            .value
            .trim();

        const message =
            document
            .getElementById("message")
            .value
            .trim();

              const whatsappMessage =

            "Hello Makiba Uniform of Students!"
            + "\n\n"

            + "Name: "
            + name
            + "\n"

            + "Email: "
            + email
            + "\n"

            + "Subject: "
            + subject
            + "\n\n"

            + "Message:"
            + "\n"

            + message;

              const whatsappURL =

            "https://wa.me/"
            + BUSINESS_PHONE
            + "?text="
            + encodeURIComponent(
                whatsappMessage
            );

               window.open(
            whatsappURL,
            "_blank"
        );

        contactForm.reset();

    }
);


}

