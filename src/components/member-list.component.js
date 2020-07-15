import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

// Individual Member

const Member = (props) => (
  <td>
    <div className="member-name">{props.member.membername}</div>
    <br />
    <button
      onClick={() => {
        props.deleteMember(props.member._id);
      }}
    >
      Supprimer
    </button>
  </td>
);

// Member List Component

export default class MemberList extends Component {
  constructor(props) {
    super(props);
    this.deleteMember = this.deleteMember.bind(this);
    this.state = { members: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/members/")
      .then((response) => {
        this.setState({
          members: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Delete member
  deleteMember(id) {
    axios
      .delete("http://localhost:8080/members/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      members: this.state.members.filter((el) => el._id !== id),
    });
  }

  // Render Member list
  memberList() {
    return this.state.members.map((currentmember) => {
      return (
        <Member
          member={currentmember}
          deleteMember={this.deleteMember}
          key={currentmember._id}
        />
      );
    });
  }

  render() {
    return (
      <main id="list-component">
        <h2>Membres de l'équipage</h2>
        <Table className="member-list" responsive bordered variant="light">
          <tbody>
            <tr>{this.memberList()}</tr>
          </tbody>
        </Table>
      </main>
    );
  }
}
