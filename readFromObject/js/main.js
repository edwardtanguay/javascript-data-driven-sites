// npm init -y
import { employees } from '../data/employees.js';
// const employees = require('../data/employees.js');

const contentElem = document.querySelector('.content');

contentElem.innerHTML += `There are ${employees.length} employees.`;

contentElem.innerHTML += employees.map(emp => {
	return `
<h2>${emp.firstName} ${emp.lastName} (${emp.address.country})</h2>
<section class="body">
${emp.notes}
</section>
`;
}).join('');