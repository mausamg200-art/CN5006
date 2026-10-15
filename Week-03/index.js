function EmployeeInfo(name, Salary)
{
    console.log("Welcome "+ name+ " Your monthly Salary is " + Salary);

}

// Display current date and time
const currentDateTime = new Date();
console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString())

var EmpName = "Mausam "; 
var EmpSalary = 50000; 
  
// Calling the function 
EmployeeInfo(EmpName, EmpSalary); 
// Add this for Second Exercise 
const EmpSkills= (skills,Name,LabGrp)=> { 
  console.log(" 3209039"+ Name+ " Java"+ skills) 
  console.log("19 ",LabGrp) 
} 
EmpSkills("java","3209039 ","19 ") 
 
// code for third Exercise 
const student= require('./StudentInfo')  
const person = require('./Person')  
// because getName is the function so we use ()  
console.log("Student Name:" +student.getName())   
console.log(student.Location())  
console.log(student.dob)  
// because dob is a variable so we do nt use ()  
console.log(student.Studentgrade())  
console.log("grade is "+student.Studentgrade(55) ) 
person1= new person("Mausam ","26 ","gmausam99@gmail.com")  
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended") 


//Exercise 04


os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end") 

