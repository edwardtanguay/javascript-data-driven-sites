const employees = [
	{
		employeeID: 2,
		lastName: "Fuller",
		firstName: "Andrew",
		title: "Vice President Sales",
		titleOfCourtesy: "Dr.",
		birthDate: "1952-02-19 00:00:00.000",
		hireDate: "1992-08-14 00:00:00.000",
		address: {
			street: "908 W. Capital Way",
			city: "Tacoma",
			region: "WA",
			postalCode: 98401,
			country: "USA",
			phone: "(206) 555-9482"
		},
		notes: "Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative was promoted to sales manager",
		reportsTo: "NULL",
		territoryIDs: [
			222,
			1833,
			2116,
			2139,
			2184,
			40222,
			1581
		]
	},
	{
		employeeID: 5,
		lastName: "Buchanan",
		firstName: "Steven",
		title: "Sales Manager",
		titleOfCourtesy: "Mr.",
		birthDate: "1955-03-04 00:00:00.000",
		hireDate: "1993-10-17 00:00:00.000",
		address: {
			street: "14 Garrett Hill",
			city: "London",
			region: "NULL",
			postalCode: "SW1 8JR",
			country: "UK",
			phone: "(71) 555-4848"
		},
		notes: "Steven Buchanan graduated from St. Andrews University in Scotland with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992 he spent 6 months in an orientation program at the Seattle office.",
		reportsTo: 2,
		territoryIDs: [
			2903,
			7960,
			8837,
			222,
			10038,
			333,
			14450
		]
	},
	{
		employeeID: 1,
		lastName: "Davolio",
		firstName: "Nancy",
		title: "Sales Representative",
		titleOfCourtesy: "Ms.",
		birthDate: "1948-12-08 00:00:00.000",
		hireDate: "1992-05-01 00:00:00.000",
		address: {
			street: "507 20th Ave. E. Apt. 2A",
			city: "Seattle",
			region: "WA",
			postalCode: 98122,
			country: "USA",
			phone: "(206) 555-9857"
		},
		notes: "Education includes a BA in psychology from Colorado State University in 1970.  She also completed The Art of the Cold Call.  Nancy is a member of Toastmasters International.",
		reportsTo: 2,
		territoryIDs: [
			6897,
			19713
		]
	},
	{
		employeeID: 3,
		lastName: "Leverling",
		firstName: "Janet",
		title: "Sales Representative",
		titleOfCourtesy: "Ms.",
		birthDate: "1963-08-30 00:00:00.000",
		hireDate: "1992-04-01 00:00:00.000",
		address: {
			street: "722 Moss Bay Blvd.",
			city: "Kirkland",
			region: "WA",
			postalCode: 98033,
			country: "USA",
			phone: "(206) 555-3412"
		},
		notes: "Janet has a BS degree in chemistry from Boston College (1984). She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.",
		reportsTo: 2,
		territoryIDs: [
			30346,
			222,
			32859,
			33607
		]
	},
	{
		employeeID: 4,
		lastName: "Peacock",
		firstName: "Margaret",
		title: "Sales Representative",
		titleOfCourtesy: "Mrs.",
		birthDate: "1937-09-19 00:00:00.000",
		hireDate: "1993-05-03 00:00:00.000",
		address: {
			street: "4110 Old Redmond Rd.",
			city: "Redmond",
			region: "WA",
			postalCode: 98052,
			country: "USA",
			phone: "(206) 555-8122"
		},
		notes: "Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.",
		reportsTo: 2,
		territoryIDs: [
			20852,
			27403,
			333
		]
	},
	{
		employeeID: 6,
		lastName: "Suyama",
		firstName: "Michael",
		title: "Sales Representative",
		titleOfCourtesy: "Mr.",
		birthDate: "1963-07-02 00:00:00.000",
		hireDate: "1993-10-17 00:00:00.000",
		address: {
			street: "Coventry House Miner Rd.",
			city: "London",
			region: "NULL",
			postalCode: "EC2 7JR",
			country: "UK",
			phone: "(71) 555-7773"
		},
		notes: "Michael is a graduate of Sussex University (MA Economics 1983) and the University of California at Los Angeles (MBA marketing 1986).  He has also taken the courses Multi-Cultural Selling and Time Management for the Sales Professional.",
		reportsTo: 5,
		territoryIDs: [
			85014,
			85251,
			333,
			98104,
			222
		]
	},
	{
		employeeID: 7,
		lastName: "King",
		firstName: "Robert",
		title: "Sales Representative",
		titleOfCourtesy: "Mr.",
		birthDate: "1960-05-29 00:00:00.000",
		hireDate: "1994-01-02 00:00:00.000",
		address: {
			street: "Edgeham Hollow Winchester Way",
			city: "London",
			region: "NULL",
			postalCode: "RG1 9SP",
			country: "UK",
			phone: "(71) 555-5598"
		},
		notes: "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992 the year he joined the company.",
		reportsTo: 5,
		territoryIDs: [
			60601,
			80202,
			80909,
			19428,
			94025,
			94105,
			95008,
			95054,
			95060,
			60179
		]
	},
	{
		employeeID: 8,
		lastName: "Callahan",
		firstName: "Laura",
		title: "Inside Sales Coordinator",
		titleOfCourtesy: "Ms.",
		birthDate: "1958-01-09 00:00:00.000",
		hireDate: "1994-03-05 00:00:00.000",
		address: {
			street: "4726 11th Ave. N.E.",
			city: "Seattle",
			region: "WA",
			postalCode: 98105,
			country: "USA",
			phone: "(206) 555-1189"
		},
		notes: "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
		reportsTo: 2,
		territoryIDs: [
			19428,
			44122,
			45839,
			53404
		]
	},
	{
		employeeID: 9,
		lastName: "Dodsworth",
		firstName: "Anne",
		title: "Sales Representative",
		titleOfCourtesy: "Ms.",
		birthDate: "1966-01-27 00:00:00.000",
		hireDate: "1994-11-15 00:00:00.000",
		address: {
			street: "7 Houndstooth Rd.",
			city: "London",
			region: "NULL",
			postalCode: "WG2 7LT",
			country: "UK",
			phone: "(71) 555-4444"
		},
		notes: "Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.",
		reportsTo: 5,
		territoryIDs: [
			3049,
			3801,
			48075,
			48084,
			48304,
			55113,
			55439
		]
	}
];

// 1. output the array
// console.log(employees);

// 2. output total number of employees
console.log(employees.length);

// 3. get id from one employee
console.log(employees[3].employeeID);

// 4. output employee IDs (old school with for-of)
for (const employee of employees) {
	console.log(employee.employeeID);
}

// 5. output employee IDs with forEach 
employees.forEach(employee => {
	console.log(employee.employeeID);
});

// 6. output employee IDs as array (for-of) 
const ids = [];
for (const employee of employees) {
	ids.push(employee.employeeID);
}
console.log(ids);

// 7. output employee IDs as array (for) 
const ids2 = [];
employees.forEach(employee => {
	ids2.push(employee.employeeID);
});
console.log(ids2);

// 8. output employee IDs as array (map)
const ids3 = employees.map(employee => {
	return employee.employeeID;
});
console.log(ids3);

// higher order functions: foreach(), map(), filter(), find(), reduce()
// chaining functions: sort()

// 9. output employee IDs as array in sorted order - with chaining
const ids4 = employees.map(employee => {
	return employee.employeeID;
}).sort();
console.log(ids4);

// 10. output employee IDs as array in sorted order - without chaining
const unsortedIds = employees.map(employee => {
	return employee.employeeID;
});
let array1 = [11, 12, 13, 44];
array1 = [...array1, ...unsortedIds];
console.log(array1);
array1.sort((a, b) => a - b);
console.log(array1);
const sortedIds = [...unsortedIds]; // ... = spread operator
sortedIds.sort();
console.log(unsortedIds);
console.log(sortedIds);

// 11. sort the employee by id 
const emp3 = employees.sort((emp1, emp2) => emp1.employeeID - emp2.employeeID);
console.log(emp3.map(employee => employee.employeeID));

// 12. sort the employee by lastname
// see: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values 
// sort callback returns -1, 0, 1
// const emp2 = employees.sort((emp1, emp2) => emp1.lastName < emp2.lastName ? -1 : emp1.lastName > emp2.lastName ? 1 : 0);
const emp2 = employees.sort((emp1, emp2) => {
	if (emp1.lastName < emp2.lastName) {
		return -1;
	} else if (emp1.lastName > emp2.lastName) {
		return 1;
	} else {
		return 0;
	}
});
console.log(emp2.map(employee => employee.lastName));
console.log(employees.map(employee => employee.lastName));

// Question: was macht die Map Funktion intern?
// Answer: nimmt eine Funktion (callback), führt diese aus bei jeder Iteration (auf jedem Item), und pusht den Wert in das neue Array

// 13. return array with full name and country: "Jim Smith (UK)" 
const nameWithCountryItems = employees.map(employee => {
	// return `${employee.firstName} ${employee.lastName} (${employee.address.country})`;
	return employee.firstName + " " + employee.lastName + "(" + employee.address.country + ")"; 
});
console.log(nameWithCountryItems);

// 14. return array with HTML blocks for every employee
const htmlItems = employees.map(emp => {
	return `
<div className="container">
	<h2>${emp.firstName} ${emp.lastName}</h2>
	<div className="body">
		${emp.notes}	
	</div>
</div>
	`;
});
console.log(htmlItems);

// Question: was macht die Filter Funktion intern?
// Answer: nimmt eine Funktion (callback), führt diese aus bei jeder Iteration (auf jedem Item), und pusht den Wert in das neue Array


// Question: was macht die Find Funktion intern?

// Question: was macht die ForEach Funktion intern?

// Question: was macht die Reduce Funktion intern?


// x. output employee IDs sorted

// x. output all lastnames of employees
