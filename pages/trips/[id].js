function Trip({ data }) {}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3002/museumSuggestions`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default Trip;
