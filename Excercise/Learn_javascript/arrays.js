function logGrades(grades) {
    grades.forEach(function(grade) {
        console.log(grade);
        return 10;
    });
    return 20;
}

console.log(logGrades([5, 15, 30]))