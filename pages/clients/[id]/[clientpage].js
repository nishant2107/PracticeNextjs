import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  console.log(router.query);
  const a = router.query.clientpage;
  return <div>This is a client page of {a} </div>;
};

export default ClientPage;
