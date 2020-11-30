
function Trip({ trip }) {
  console.log(trip)
  return (<>ciao mamma, sono andato a {trip.location}</>)
}


export default Trip 

export async function getServerSideProps(context) {
  const { id } = context.query
  console.log(id)
  const res = await fetch(`http://localhost:3001/${id}`)
  const data = await res.json()

  return {
    props: { 
      trip: data
     }
  }
}
