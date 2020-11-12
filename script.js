// Create the Class
class student {
    constructor (name,family,age,bornIn) {
        this.name = name
        this.family = family
        this.age = age
        this.bornIn  = bornIn
    }
    showDetails () {
        let id = this.id = Date.now()
        console.log("Student ID : " + id)
        console.log("Full name is : " + this.name + " " + this.family)
        console.log("Age is : " + this.age)
        console.log("Born in : " + this.bornIn)
    }
}
// Initialize
var myStudent = new student ("Kaveh","Rezaei",29,"Tehran")
//Call the class method
myStudent.showDetails()