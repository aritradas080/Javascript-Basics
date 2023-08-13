function Student(name,age,cgpa){
    this.name=name,
    this.age=age,
    this.cgpa=cgpa

    this.display = function(){
        document.write(this.name);
        document.write("<br/>");
        document.write(this.age);
        document.write("<br/>");
        document.write(this.cgpa);
    }
}

var student1 = new Student("ABC",27,3.99);
var student2 = new Student("DEF",29,3.75);
var student3 = new Student("XYZ",23,3.50);

student1.display();
document.write("<br/>");
student2.display();
document.write("<br/>");
student3.display();