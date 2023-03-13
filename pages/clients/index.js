import Link from "next/link";
import { useRouter } from "next/router";

const Clients = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      This is a Clients Page
      <Link href="/clients/nishant">Nishant Page</Link>
      <Link href="/clients/Naman">Naman Page</Link>
    </div>
  );
};

export default Clients;
