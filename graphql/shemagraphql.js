const { buildSchema } = require("graphql");

const  schema = buildSchema(`
    type teachear {
        _id: ID
        first_name: String!
        last_name: String!
        cedula: String!
        age:Int!

    }

    type course {
      _id: ID!
      name: String!
      credits: Int!
      teacher: ID!

  }
    
    type Query {
        getTeacher(_id: ID): teachear
        getTeachers: [teachear!]
        getCourses:  [course!]
        hello:String
    }

  
`)
module.exports ={
    schema
}