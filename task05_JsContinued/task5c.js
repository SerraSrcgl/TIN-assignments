function Student(firstName, lastName, id) {
    // ***************************
    const studentPrototype = {
        firstName: 'Serra',
        lastName: 'Saracoglu',
        id: 1,
        courses: ['Math', 'English', 'Informatics','Physics','Biology'],
        grades: [],
        averageGrade: function () {
            if (this.grades.length === 0)
                return 0;
            return this.grades.reduce((sum, grade) => sum + grade) / this.grades.length;
        }
    }
    // ********************************
    let newstudent = Object.create(studentPrototype);
    newstudent.firstName = firstName;
    newstudent.lastName = lastName;
    newstudent.id = id;
    return newstudent
}

let newstudent = Student('Aysenur', 'Alacati', 2);

function printProperties(object) {
    for (let propertyName in object) {
        let property = object[propertyName];
        console.log("name: " + propertyName + "\nvalue:" + property + "\ntype:" + typeof property + "\n");
    }
}

printProperties(newstudent);
