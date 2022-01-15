import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import NoteList from "./components/NoteList";
import createNote from "./components/createNote";
import createUser from "./components/createUser";

function App() {
  return (
    <Router>
      <Navigation />

      <div className="container p-4">
        <Route path="/" exact component={NoteList} />
        <Route path="/edit/:id" component={createNote} />
        <Route path="/create" component={createNote} />
        <Route path="/user" component={createUser} />
      </div>
    </Router>
  );
}

export default App;
