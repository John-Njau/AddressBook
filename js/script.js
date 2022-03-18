// buiness logic

// contact constructor
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
}

// address constructor
function Address(street, city, county) {
    this.streetName = street;
    this.cityName = city;
    this.countyName = county;
}

// Adding a full name prototype
Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

// full Address prototype

// Contact object and an Address object
// var newP = new Contact('john', 'kim');
// var home = new Address("671 Ngong Road", "Nairobi", "Nairobi");
// console.log(newP);
// console.log(home);
// newP.addresses.push(home);
// console.log(newP);
// console.log(newP.addresses[0]);
// console.log(newP.addresses[0].cityName);

// jQuery
// user Interface Logic
$().ready(function () {

    // new form fields
    $("#addAddress").click(function () {
        $("#newAddresses").append('<div class="newAddress">' + '<div class="form-group">' +
            '<label for="newStreet">Street</label>' +
            '<input type="text" class="form-control newStreet">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="newCity">City</label>' +
            '<input type="text" class="form-control newCity">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="newCounty">County</label>' +
            '<input type="text" class="form-control newCounty">' +
            '</div>' +
            '</div>');
    });

    // form submission
    $("form#new-contact").submit(function (event) {
        event.preventDefault();

        var firstNameInput = $("input#newFirstName").val();
        var lastNameInput = $("input#newLastName").val();
        var newContact = new Contact(firstNameInput, lastNameInput);

        $(".newAddress").each(function () {
            var streetInput = $(this).find("input.newStreet").val();
            var cityInput = $(this).find("input.newCity").val();
            var countyInput = $(this).find("input.newCounty").val();

            var newAddress = new Address(streetInput, cityInput, countyInput);
            newContact.addresses.push(newAddress);
        })


        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function () {
            $("#showContact").show();
            $("#showContact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

            $("ul#addresses").text("");
            newContact.addresses.forEach(function () {
                $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.County + "</li>");
            });
        });

        // clear input fields after the form is submitted
        $("input#newFirstName").val("");
        $("input#newLastName").val("");
        $("input.newStreet").val("");
        $("input.newCity").val("");
        $("input.newCounty").val("");
    });
});

$().ready(function () {

});