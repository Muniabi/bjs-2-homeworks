class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this.stateg = 0;
        } else if (newState > 100) {
            this.stateg = 100;
        } else {
            this.stateg = newState;
        }
    }

    get state() {
        return this.stateg;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


// ЗАДАНИЕ №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(key, value) {
        return this.books.find(book => book[key] === value) || null;
    }

    giveBookByName(bookName) {
        let book = this.books.find(book => book.name === bookName);
        if (!book) { return null; }
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
    }
}



// ЗАДАНИЕ №3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks[subject]) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }
        let average = this.marks[subject].reduce((acc, el) => acc + el, 0);
        return average / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }
        const totalSum = subjects.reduce((acc, el) => {
            return acc + this.getAverageBySubject(el);
        }, 0);
        return totalSum / subjects.length;
    }
}