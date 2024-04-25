import { Component } from "react";

class Binding extends Component {
  name = "Binhdev";
  student = {
    name: "Nam",
    age: 20,
    gender: "male",
  };
  renderStudent = () => {
    const studentFc = {
      name: "Ken",
      age: 22,
      gender: "female",
    };
    return (
      <div>
        <p>student name: {studentFc.name}</p>
        <p>student age: {studentFc.age}</p>
        <p>student gender: {studentFc.gender}</p>
      </div>
    );
  };
  render() {
    const name2 = "Hoang";

    const student2 = {
      name: "Nam",
      age: 20,
      gender: "male",
    };

    const renderStudent2 = () => {
      const studentFc = {
        name: "Ken2",
        age: 222,
        gender: "female2",
      };
      return (
        <div>
          <p>student name: {studentFc.name}</p>
          <p>student age: {studentFc.age}</p>
          <p>student gender: {studentFc.gender}</p>
        </div>
      );
    };
    return (
      <div>
        <h1>component binding</h1>
        <p>{this.name}</p>
        <p>{name2}</p>
        <h1>binding object</h1>
        <p>student name: {this.student.name}</p>
        <p>student age: {this.student.age}</p>
        <p>student gender: {this.student.gender}</p>
        <h1>binding object value</h1>
        <p>student name: {student2.name}</p>
        <p>student age: {student2.age}</p>
        <p>student gender: {student2.gender}</p>
        <h1>binding function</h1>
        {this.renderStudent()}
        <h1>binding function value</h1>
        {renderStudent2()}
      </div>
    );
  }
}

export default Binding;
