interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne: Student = {
	firstName: "Ali",
	lastName: "Abu-elfottoh",
	age: 32,
	location: "Cairo"
}

const studentTwo: Student = {
	firstName: "Ahmed",
	lastName: "Mahmoud",
	age: 20,
	location: "Alexandria"
}

const studentList: [Student] = [
	studentOne,
	studentTwo
]

const tbl = document.createElement("table");
const tblBody = document.createElement('tbody');

studentList.forEach(student => {
	const row = document.createElement("tr");
	const firstName = document.createElement("td");
	const location = document.createElement("td");

	firstName.textContent = student.firstName;
	location.textContent = student.location;

	row.appendChild(firstName);
	row.appendChild(location);
	tblBody.appendChild(row);
});

tbl.appendChild(tblBody);
document.body.appendChild(tbl);

