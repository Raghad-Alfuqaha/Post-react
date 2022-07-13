
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostDetails from "./components/posts/PostDetails";
import CreatePost from "./components/posts/CreatePost";
import Error from './components/Error'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/post/:id" component={PostDetails} />
            <Route path="/create" component={CreatePost} />
            <Route path="*" component={Error} />

          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


// function App() {
//   return (
//     <Router>
//     <div className="App">
    
//       <div className="content">
//       <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/post"> 
//           <PostDetails />
//         </Route>
//         <Route path="/create">
//           <CreatePost /> 
//         </Route>
        
//         </Switch>
//       </div>
//     </div>
//     </Router>
//   );
// }


export default App;