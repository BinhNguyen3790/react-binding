const name = "binhdev";
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
function BindingFc() {
  return (
    <div>
      <h1>BindinngFC value </h1>
      <p>{name}</p>
      <h1>BindinngFC obj </h1>
      <p>name: {student2.name}</p>
      <p>age: {student2.age}</p>
      <p>gender: {student2.gender}</p>
      <h1>BindinngFC function </h1>
      {renderStudent2()}
    </div>
  );
}

export default BindingFc;
