import StoreProvider from "../provider";
import SideBar from "../ui/sidebar/SideBar";

export const metadata = {
  title: "librastore",
  description: "A Book Store Library",
};

export default function BookStoreLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex min-h-screen bg-[#E7E9EB]">
        <div className="flex  flex-col md:flex-row p-2 justify-center  ">
          <SideBar />
          {children}
        </div>
      </div>
    </StoreProvider>
  );
}
