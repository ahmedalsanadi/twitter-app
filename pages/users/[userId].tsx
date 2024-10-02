//pages/users/[userId].tsx
import { useRouter } from "next/router"

import useUser from "@/hooks/useUser"
import Header from "@/components/Header"
import { ClipLoader } from "react-spinners";
import UserHero from "@/components/users/UserHero";

const UserView = () => {
    const router = useRouter();
    const { userId } = router.query;

    const { data: fetchedUser, isLoading } = useUser({ userId: userId as string })

    if (isLoading || !fetchedUser) {
        return (
            <div className="flex justify-center items-center h-full">
               <ClipLoader color="lightblue"  size={80}/>
            </div>
        )
    }

  return (
   <>
    <Header showBackArrow label={fetchedUser?.name} />
    
     {/* UserHero component */}
      <UserHero userId={userId as string} />

   </>
  )
}

export default UserView