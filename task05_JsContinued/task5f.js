class Person{
	constructor(firstName,lastName){
		this.firstName=firstName;
		this.lastName=lastName;

	}

	get fullName(){
		return '${this.firstName'} '${this.lastName}';
	}



	set fullName(name){
		var word=name.toString().split(' ');
		this.firstName=word[0]||'';
		this.lastName=word[1]||'';

	}

}

class Student extend Person{
	constructor(firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

let student = new Student("Marcin", "Jablko");
student.fullName = "Leonard Hofstadter";
console.log("new full name:", student.fullName);
}