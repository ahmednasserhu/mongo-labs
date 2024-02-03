use FacultySystemDB
db.FacultySystemDB.insertOne({
    firstName:"Ahmed",
    lastName:"Nasser",
    age:22,
    Faculty: {
    Name: "Computer Science",
    Address: "Helwan, Cairo"
  },
    Grades: [
    { CourseName: "AI", Grade: 90, Pass: true },
    { CourseName: "Machine Learning", Grade: 75, Pass: true },
    { CourseName: "Deep Learning", Grade: 88, Pass: true }
  ],
  isFired:false
})

show dbs
db



db.FacultySystemDB.insertOne({
  firstName: "Mariam",
  lastName: "Abdullah",
  age: 23,
  Faculty: {
    Name: "Mathematics",
    Address: "Helwan University"
  },
  Grades: [
    { CourseName: "Calculus", Grade: 88, Pass: true },
    { CourseName: "Statistics", Grade: 76, Pass: true },
    { CourseName: "Linear Algebra", Grade: 94, Pass: true }
  ],
  isFired: false
}
)

db.FacultySystemDB.insertMany([
{
  firstName: "Yasmine",
  lastName: "Mahmoud",
  age: 24,
  Faculty: {
    Name: "Chemistry",
    Address: "123 Lab Street"
  },
  Grades: [
    { CourseName: "Organic Chemistry", Grade: 82, Pass: true },
    { CourseName: "Physical Chemistry", Grade: 89, Pass: true },
    { CourseName: "Inorganic Chemistry", Grade: 95, Pass: true }
  ],
  isFired: false
},
{
  firstName: "Sophia",
  lastName: "Brown",
  age: 21,
  Faculty: {
    Name: "Psychology",
    Address: "Mind Institute"
  },
  Grades: [
    { CourseName: "Cognitive Psychology", Grade: 86, Pass: true },
    { CourseName: "Abnormal Psychology", Grade: 79, Pass: true },
    { CourseName: "Social Psychology", Grade: 88, Pass: true }
  ],
  isFired: false
}
])

db.FacultySystemDB.find({})

db.FacultySystemDB.find({firstName:"Ahmed"})


db.FacultySystemDB.find({ firstName: { $ne: "Ahmed" } })

db.FacultySystemDB.find({
  $and: [
    { age: { $gte: 21 } },
    { Faculty: { $ne: null } }
  ]
})

db.FacultySystemDB.findOne(
  { firstName: "Ahmed" },
  { firstName: 1, lastName: 1, isFired: 1, _id: 0 }
)


db.FacultySystemDB.updateOne({firstName:"Yasmine"},{$set:{lastName:"Ali"}})

db.FacultySystemDB.find({})


db.FacultySystemDB.updateOne({ firstName: "Sophia" }, { $set: { isFired: true } })

db.FacultySystemDB.deleteMany({isFired:true})

db.FacultySystemDB.drop()
db.dropDatabase() 




