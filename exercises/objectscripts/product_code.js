"use strict";

function generatePartCode(partInformation) {
  return `${partInformation.supplierCode}:${partInformation.productNumber}-${partInformation.size}`;
}

function parsePartCode(partCode) {
  let colonPosition = partCode.indexOf(":");
  let dashPosition = partCode.indexOf("-");
  let supplierCode = partCode.substring(0, colonPosition);
  let productNumber = partCode.substring(colonPosition + 1, dashPosition);
  let size = partCode.substring(9, 10);
  let partInformation = {
    supplierCode: supplierCode,
    productNumber: productNumber,
    size: size,
  };
  return partInformation;
}

let partCode1 = "XYZ:1234-L";
let partInformation = parsePartCode(partCode1);
console.log(partInformation);
console.log(generatePartCode(partInformation));
