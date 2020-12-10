import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import { useSession } from "next-auth/client";

function loginCheck() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push("/");
    }
  }, [session, loading]);
}

function PastTrips() {
  return (
    <div>
      <div>{loginCheck()}</div>
      <TopNavbar />
      <Header />
      <p> -page content goes here- </p>
    </div>
  );
}
export default PastTrips;
