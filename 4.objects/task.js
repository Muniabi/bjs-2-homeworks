function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let stud1 = new Student("Алиса", "женский", 23);
let stud2 = new Student("Лев", "мужской", 19);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('marks') && this.marks.length !== 0) {
        let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        this.avarage = sum / this.marks.length;
        return this.avarage;
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
