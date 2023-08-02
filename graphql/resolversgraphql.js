
// The root provides a resolver function for each API endpoint
 const graphresolvers = {
    hello: () => {
      return "Hello world!"
    },
    //getTeachers:teachersGet,
    //getCourses:coursesGet,
  
  }

  module.exports={
    graphresolvers
  }