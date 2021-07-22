try {
  console.log("Awal blok try"); // (1)
  errorCode; // (2)
  console.log("Akhir blok try"); // (3)
} catch (error) {
  console.log("Terjadi error!"); // (4)
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

/* output
Awal blok try
Terjadi error!
*/
