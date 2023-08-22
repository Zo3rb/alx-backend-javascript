interface Teacher {
	firstName: string;
	lastName: string;
	readonly fullTimeEmployee: boolean;
	yearsOfExperince?: number;
	readonly location: string;
	[key: string]: any;
	}

interface Directors extends Teacher {
	numberOfReports: number;
	}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
	}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
  }

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass
}

interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}

class Student implements StudentClass {
	constructor(public firstName: string, public lastName: string) {};
	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
	return this.firstName;
	}
}
