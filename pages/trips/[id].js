import { useRouter } from "next/router";
import DailyPlanner from "../components/DailyPlanner";
import UploadFile from "../components/Upload";

function Trip() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1> {id} </h1>
      <br/>
      <DailyPlanner />
      <UploadFile />
    </div>
  );

}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3002///museumSuggestions`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Trip;
