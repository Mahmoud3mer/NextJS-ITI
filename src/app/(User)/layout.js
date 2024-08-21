import Sidebar from "@/components/Sidebar/sidbar";

function UserLayout({children}){
    return(
        <div className="flex w-full">
            <div className="basis-1/4 my-2">
              <Sidebar/>
            </div>
            <div className="basis-3/4">{children}</div>
          </div>
    )
}

export default UserLayout;