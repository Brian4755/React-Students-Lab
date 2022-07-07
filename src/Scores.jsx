const Score = (props) => {
  return ( 
    <>
    <p>Scores:
    {props.scores.map(score => 
      <> {score.score}</>
      )}
      </p>
    </>
   )
}
 
export default Score