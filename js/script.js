// buiness logic
// constructor
// function AddressBook(firstName, lastname, phoneNo) {
//     this.addressBook = firstName;
//     this.lastname = lastname;
//     this.phoneNo = phoneNo;
// }



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

// Contact object and an Address object
var newP = new Contact('john', 'kim');
var home = new Address("671 Ngong Road", "Nairobi", "Nairobi");
console.log(newP);
console.log(home);
newP.addresses.push(home);
console.log(newP);
console.log(newP.addresses[0]);
console.log(newP.addresses[0].cityName);
// jQuery
// user Interface Logic
$().ready(function () {
    $("form#new-contact").submit(function (event) {
        event.preventDefault();

        var firstNameInput = $("input#newFirstName").val();
        var lastNameInput = $("input#newLastName").val();
        var emailInput = $("input#emailAddress").val();
        var city = $("input#city").val();

        var newContact = new Contact(firstNameInput, lastNameInput, emailInput, city);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "<br>" + emailInput + city + "</span></li>");

        $(".contact").last().click(function () {
            $("#showContact").show();
            $("#showContact h2").text(newContact.firstName + newContact.lastName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
        $("input#newFirstName").val("");
        $("input#newLastName").val("");
    });
});

$().ready(function () {
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
})