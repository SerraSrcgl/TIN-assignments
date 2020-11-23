class Student {
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }
get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

    set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }

   
}
let student=new Student("Mark","Zuckerberg")
student.fullName = "Serra Sar";
console.log("new full name:", student.fullName);