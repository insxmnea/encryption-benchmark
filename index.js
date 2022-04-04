const fs = require("fs");
const crypto = require ("crypto");

const message = fs.readFileSync('./data.txt', 'utf8');

const algorithm = "aes-256-cbc";

const initVector = crypto.randomBytes(16);

const SecurityKey = crypto.randomBytes(32);

const cipher = crypto.createCipheriv(algorithm, SecurityKey, initVector);

let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

const decipher = crypto.createDecipheriv(algorithm, SecurityKey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);
