const contentElem = document.querySelector('.content');
contentElem.innerHTML = 'Loading...';

(async () => {
	const response = await fetch('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json');
	const employees = await response.json();


	contentElem.innerHTML = `There are ${employees.length} employees.`;

	contentElem.innerHTML += employees.map(emp => {
		return `
<h2>${emp.firstName} ${emp.lastName} (${emp.address.country})</h2>
<section class="body">
${emp.notes}
</section>
`;
	}).join('');
})();