import { useRouter } from "next/router";

const Client = () => {
  const router = useRouter();
  console.log(router.query);
  const loadProjectA = () => {
    router.push(`/clients/${router.query.id}/atamadaProject`);
  };
  const loadProjectB = () => {
    router.push({
      pathname: "/clients/[id]/[clientpage]",
      query: { id: router.query.id, clientpage: "barmundaProject" },
    });
  };
  return (
    <div>
      THis is a client Pagsssss
      <button onClick={() => loadProjectA()}>Load Project A</button>
      <button onClick={() => loadProjectB()}>Load Project B</button>
    </div>
  );
};

export default Client;
