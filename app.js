const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers={
	Query:{
		user:()=>{
			return{
				name:"Apollo",
				age: 32
			}
		},
		course:()=>{
			return{
				name:"GraphQL",
				courseId:123
			}
		}
	}
}

const server = new ApolloServer({ typeDefs,resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
