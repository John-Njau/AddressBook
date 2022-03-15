// buiness logic
// constructor
function AddressBook(firstName, lastname, phoneNo) {
    this.addressBook = firstName;
    this.lastname = lastname;
    this.phoneNo = phoneNo;
}
// contact constructor
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// var newP = new Contact('john', 'kim');
// console.log(newP);

// jQuery
// user Interface Logic
$().ready(function(){
   $("form#new-contact").submit(function(event){
    event.preventDefault();

    var firstNameInput = $("input#newFirstName").val();
    var lastNameInput = $("input#newLastName").val();

    var newContact = new Contact(firstNameInput, lastNameInput);
    
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#newFirstName").val("");
    $("input#newLastName").val("");
   });
});
