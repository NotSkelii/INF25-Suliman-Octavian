//console.log(CIFValidator("RO12345678")); // true
//console.log(CIFValidator("12345678test")); // false
console.log(CIFValidator("RO12345678")); // true

function CIFValidator(cif) {
  const key = "753217532";

  if (cif.slice(0, 2) == "RO") {
    cif = cif.slice(2);
  }

  if (!/^\d+$/.test(cif)) {
    console.error("Invalid CIF format. CIF should contain only digits.");
    return false;
  }

  if (cif.length > 10) {
    console.error("Invalid CIF length. CIF should be 10 digits long.");
    return false;
  }
}
