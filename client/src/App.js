// import React from 'react';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import DogListPage from './pages/DogList';
// import SingleDog from './pages/SingleDog';
// import Adoption from './pages/Adoption';
// //import Profile from './pages/Profile';
// //import Signup from './pages/Signup';
// import AdoptionForm from './components/AdoptionForm';
// import DogList from './components/DogList';
// import Header from './components/Header';
// import Footer from './components/Footer';

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route 
//                 path="/"
//                 element={<Home />}
//               />
//               <Route 
//                 path="/login" 
//                 element={<Login />}
//               />
//               <Route 
//                 path="/signup" 
//                 element={<Signup />}
//               />
//               <Route 
//                 path="/me" 
//                 element={<Profile />}
//               />
//               <Route 
//                 path="/profiles/:username" 
//                 element={<Profile />}
//               />
//               <Route 
//                 path="/dogList" 
//                 element={<DogList/>}
//               />
//             </Routes>
//             <Route 
//                 path="/SingleDog/:DogName" 
//                 element={<SingleDog/>}
//               />
//             </Routes>
//           </div>
//           <Footer />
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;


import React from 'react';
// First we import our Hello component from our components folder.
import DogList from './components/DogList/DogList';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return <DogList />;
};


export default App;
