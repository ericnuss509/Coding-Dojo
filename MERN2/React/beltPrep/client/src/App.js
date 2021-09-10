import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import NotFound from "./views/NotFound";
import Post from "./views/Post";
import Posts from "./views/Posts";
import NewPost from "./views/NewPost";
import EditPost from "./views/EditPost";

function App() {
  return (
    <div style={{ textAlign: "center", width: "80%", margin: "0 auto"}}>
      <header >
        <nav>
          <Link to="/posts">All Posts</Link> | {" "}
          <Link to="/posts/new">New Post</Link>
        </nav>
      </header>
      <Router>
        <Post path="/posts/:id"/>
        <Posts path="/posts" />
        <EditPost path="/posts/:id/edit" />
        <NewPost path="posts/new" />
        <Redirect from="/" to="posts" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
