"use strict";
class AddressBook {
    constructor(contacts) {
        this.contacts = contacts;
    }

    add(info) {
        this.contacts.push(info);
    }

    deleteAt(index) {
        this.contacts.splice(index, 1);

    }

    display() {
        contacts.innerHTML = '';
        nameInput.value = '';
        phoneInput.value = '';
        emailInput.value = '';
        relationSlct.value = '';


        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            const contactDiv = document.createElement('div');
            contactDiv.classList.add('contactDiv');
            const nameLine = document.createElement('p');
            const emailLine = document.createElement('p');
            const phoneLine = document.createElement('p');
            const relationLine = document.createElement('p');
            const deleteButton = document.createElement('button');
            contactDiv.innerHTML = `<p class="nameP">Name: ${contact.name}</p> <p class="emailP">Email: ${contact.email}</p> <p class="phone">Phone: ${contact.phone}</p> <p class="relationP">Relation: ${contact.relation}</p>`;
            deleteButton.classList.add('deleteButton');
            deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
          

            deleteButton.addEventListener('click', () => {
                this.deleteAt(i);
                this.display();
            });

            contactDiv.appendChild(nameLine);
            contactDiv.appendChild(emailLine);
            contactDiv.appendChild(phoneLine);
            contactDiv.appendChild(relationLine);
            contactDiv.appendChild(deleteButton);
            contacts.appendChild(contactDiv);

        }
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const nameInput = document.querySelector(".nameInput");
const emailInput = document.querySelector(".emailInput");
const phoneInput = document.querySelector(".phoneInput");
const relationSlct = document.querySelector("#relation");
const buttonAdd = document.querySelector(".buttonAdd");
const contacts = document.querySelector(".contacts");


let book = new AddressBook([new Contact('Ayaka', 'ayaka@email.com', '248.505.9864', 'Owner'), new Contact('Lou', 'lou@email.com', '313.111.2222', 'Friend'), new Contact('Maho', 'maho@email.com', '313.222.1111', 'Family')]);

buttonAdd.addEventListener('click', () => {
    book.add(new Contact(nameInput.value, emailInput.value, phoneInput.value, relationSlct.value));
    book.display();
});


book.display();
