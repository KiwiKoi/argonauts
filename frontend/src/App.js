import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/footer.component";
import Header from "./components/header.component";
import CreateMember from "./components/create.component";
import MemberList from "./components/member-list.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CreateMember />
      <Route path="/" exact component={MemberList} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
