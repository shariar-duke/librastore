import SideBar from "../ui/sidebar/SideBar";

export const metadata = {
  title: "librastore",
  description: "A Book Store Library",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex">
      <div className="flex  flex-col md:flex-row p-2 justify-center">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
