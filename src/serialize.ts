import { pathToRegexp } from 'path-to-regexp';
import * as fs from 'fs';


// Save the JSON document to a file
// Example using Node.js fs module

const paths = [
  '/api/admin/brands/:brandId(123|456)/products/:splat*',
  '/api/admin/brands/:brandId/menu',
  '/api/admin/brands/:brandId/menu/:menuId',
];

// Generate a single regular expression
const regex = pathToRegexp(paths);

console.log(regex.test('/api/admin/brands/123/products/456'));
console.log(regex.test('/api/admin/brands/321/products/456'));
console.log(regex.test('/api/admin/brands/456/products/456'));
console.log(regex.test('/api/admin/brands/789/products/456'));
console.log(regex.test('/api/admin/brands/123/products/456/other/menu/12344'));
console.log(regex.test('/users/123'));

fs.writeFileSync('regex.txt', regex.source);

