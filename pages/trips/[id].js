import { useRouter } from "next/router";
import DailyPlanner from "../components/DailyPlanner";

function Trip() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1> {id} </h1>
      <br/>
      <DailyPlanner />
    </div>
  );

}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3001/location`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Trip;
