import { auth } from "@/auth"
import StartupForm from "@/components/layout/StartupForm";
import { redirect } from "next/navigation";

const page = async () => {
  // not authenficated user don't allowed to access this page
  const session = await auth();
  if (!session) redirect('/');

  return (
    <>
    <section className="pink_container">
        <p className="heading">
            submit your startup pitch
        </p>
    </section>

    <StartupForm/>
    </>
  )
}

export default page