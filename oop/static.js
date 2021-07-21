class Mail {
  static isValidPhone(phone) {
    return typeof phone === "number";
  }
}

console.log(Mail.isValidPhone(0890000))
