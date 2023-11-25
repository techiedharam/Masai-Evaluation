// Instructions
// Student details Object
// Description
// You need to create a Constructor function which will create object for Student details of the following properties:

// name: It will store student name
// roll_no: Stores the roll number
// class: Stores the class
// section: Stores the section
// marks_of_5_subjects: It will store marks of science, maths, social science, english & hindi. You can store marks in this format:
// {
//     science: 72,
//     maths: 75,
//     social_science: 79,
//     english: 80,
//     hindi: 67
// }
// printTop3Subjects: It is a function method. It will print top three subject names based on marks.
// printReportCard: It is also a function method. It will create and print a report card of a student. For example:
// +--------------------+
// |     REPORT CARD    |
// +--------------------+
// | Name     - Huzaifa |
// | Roll no. - 16      |
// | Class    - X       |
// | Section  - A       |
// | Science  - 73      |
// | S.Sc     - 79      |
// | Maths    - 75      |
// | English  - 80      |     
// | Hindi    - 67      |
// | Prectage - 74.8 %  |
// +--------------------+
// Please submit the GitHub link of your code file.



function Studentdetails (s_name , s_roll_no , s_class ,s_section , s_marks) {
    this.s_name = s_name;
    this.s_roll_no = s_roll_no;
    this.s_class = s_class;
    this.s_section = s_section;
    this.s_marks = s_marks;

    this.printTop3Subjects = function() {

    }

    this.printReportCard = function() {
        // Calculate Percentage 
        let totalMarks = 0;
         for (let sub in this.s_marks) {
               totalMarks+=this.s_marks[sub];
         }   
         const Percentage = (totalMarks / 5);

        console.log(`+------------------------------------+`);
        console.log(`|              REPORT CARD           |`);
        console.log(`+------------------------------------+`);
        console.log(`| Name     - ${this.s_name}     |`)
        console.log(`| RollNo   - ${this.s_roll_no}             |`)
        console.log(`| Class    - ${this.s_class}      |`)
        console.log(`| Section  - ${this.s_section}    |`)
        console.log(`| Science  - ${this.s_marks.science} |`)
        console.log(`| S.Sc     - ${this.s_marks.ssc}  |`)
        console.log(`| Maths    - ${this.s_marks.maths}      |`)
        console.log(`| English  - ${this.s_marks.english}    |`)
        console.log(`| Hindi    - ${this.s_marks.hindi}      |`)
        console.log(`| Prectage - ${Percentage}    |`)
        console.log(`+----------------------------------+`);

    }

    // this.print = function() {
    //     console.log("Code is runnig  India")
    // }

}

let student1 = new Studentdetails("Dharmender" , 12 , "x" , "D" , { science: 72,maths: 75,ssc: 79,   english: 80, hindi: 67 })

let student2 = new Studentdetails("Naresh" , 18 , "ix" , "C" , { science: 50,maths: 65,ssc: 69,   english: 80, hindi: 73 })

let student3 = new Studentdetails("Sujit" , 7 , "x" , "E" , { science: 72,maths: 75,ssc: 89,   english: 60, hindi: 75 })

 student1.printReportCard();
 student2.printReportCard();
 student3.printReportCard();