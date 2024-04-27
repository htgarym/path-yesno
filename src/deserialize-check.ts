import * as fs from 'fs';

// Read the JSON document from the file
// Example using Node.js fs module
const r = fs.readFileSync('regex.txt', 'utf8');

// Convert the regular expression string back to a regular expression
const deserializedRegex = new RegExp(r);

console.log(deserializedRegex.test('/users/123'));
console.log(deserializedRegex.test('/api/admin/brands/123/products/456'));
console.log(deserializedRegex.test('/api/admin/brands/123/menu/1234'));
