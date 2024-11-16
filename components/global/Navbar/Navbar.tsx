import { getServices } from "@/lib/strapi"
import NavbarClient from "./NavbarClient"

export default async function Navbar() {
  let data = await getServices(null);

  return <NavbarClient data={data} />
}
