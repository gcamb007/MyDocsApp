import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Archives extends Component {

  constructor(props) {
    super(props)
    this.state = {
      records: []
    };
  }

  componentDidMount() {
    axios.get("/api/records")
      .then(res => {
        this.setState({ records: res.data });
        console.log(this.state.records);
      });
  }

  render() {

    return (
      <div>
        <div style={{ height: "45vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
               <b>Patient's</b> Archive
                <p className="flow-text grey-text text-darken-1">
                    View your records, prescriptions, and download your exams results
                </p>
              </h4>
              <div className="row">
                <Link to="/dashboard" className="btn-flat waves-effect">
                  <i className="material-icons left">arrow_back</i> Dashboard  
                </Link>
                <Link to="/forms" className="btn-flat waves-effect">
                  Forms <i className="material-icons right">arrow_forward</i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <Link to="/create" className="btn btn-small waves-effect waves-light hoverable blue accent-3" style={{margin: "1rem", width: "180px"}}>
                <i className="material-icons right">add_circle_outline</i>Add a file
              </Link>
            </div>
            <div class="cards white darken-1">
              <div class="card-content grey-text">
                <table className="table table-stripe">
                  <thead>
                    <tr>
                      <th>Document ID</th>
                      <th>Document Name</th>
                      <th>Record Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.records.map(records =>
                      <tr>
                        <td><Link to={`/show/${records._id}`}>{records.id}</Link></td>
                        <td>{records.title}</td>
                        <td>{records.author}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Archives;