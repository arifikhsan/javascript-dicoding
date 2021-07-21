// cara 1
class Mail {
  constructor(author) {
    this.from = "pengirim@dicoding.com";
    console.log("is instantiated", author);
  }
}

// cara 2
// function Mail(author) {
//   this.from = author;
//   console.log("is instantiated", author);
// }

const mail1 = new Mail(085000111222); // misalkan untuk SMS
const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email
