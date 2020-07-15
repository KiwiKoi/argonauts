import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

// Create member component
export default class CreateMember extends Component {
  constructor(props) {
    super(props);

    this.onChangeMemberName = this.onChangeMemberName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      membername: "",
      members: [],
      reload: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/members").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          members: response.data.map((member) => member.membername),
          membername: response.data[0].membername,
        });
      }
    });
  }

  onChangeMemberName(e) {
    this.setState({
      membername: e.target.value,
    });
  }

  // Save new member to database on submit
  onSubmit(e) {
    const member = {
      membername: this.state.membername,
    };

    console.log(member);

    axios
      .post("http://localhost:8080/members/add", member)
      .then((res) => console.log(res.data));

    this.setState({
      membername: "",
      //reload to re-render member list with new member
      reload: true,
    });
  }

  //Render create component
  render() {
    return (
      <div id="create-component">
        <form onSubmit={this.onSubmit} className="new-member-form">
          <label htmlFor="name">
            <h2>Ajouter un(e) Argonaute</h2>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={this.onChangeMemberName}
            placeholder="Nom"
          />
          <br />
          <Button
            className="customBtn"
            variant="outline-danger"
            type="submit"
            value="Créer Argonaute"
          >
            Envoyer
          </Button>
        </form>
      </div>
    );
  }
}
