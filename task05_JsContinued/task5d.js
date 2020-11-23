// Getter and Setter in object initializer
let student = {
    firstName: 'Serra',
    lastName: 'Saracoglu',
    id: 1,
    courses: ['Math', 'English', 'Informatics'],
    grades: [1, 2, 3, 4, 5],
    

 get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

   set fullName (name) {
        var words = name.toString().split(' ');
        this.firstName = words[0] || '';
        this.lastName = words[1] || '';
    }

// set fullName is executed with the given value.user.fullName = "Sheldon Cooper";
    get averageGrade() {
        if (this.grades.length === 0)
            return 0;
        return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
    }
}


console.log("full name:", student.fullName, "\ngrades average:", student.averageGrade);
student.fullName = "Serra Saracoglu";
console.log("new full name:", student.fullName);
