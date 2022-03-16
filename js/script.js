// buiness logic
// constructor
// function AddressBook(firstName, lastname, phoneNo) {
//     this.addressBook = firstName;
//     this.lastname = lastname;
//     this.phoneNo = phoneNo;
// }
// contact constructor
function Contact(first, last, email, city) {
    this.firstName = first;
    this.lastName = last;
    this.emailAddress = email;
    this.city = city;
}

// Adding a full name prototype
Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

// var newP = new Contact('john', 'kim');
// console.log(newP);

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

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() +  "<br>" + emailInput + city + "</span></li>");

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
