import Scores from "./Scores"

const Students = (props) => {
  return ( 
    <>
      {props.students.map(student => 
      <>
        <h3>{student.name}</h3>
        <p>Bio: {student.bio}</p>
        <Scores scores={student.scores}/>
      </>
      )}
    </>
   )
}
 
export default Students