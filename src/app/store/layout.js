import SideBar from "../ui/sidebar/SideBar";

export const metadata = {
  title: "librastore",
  description: "A Book Store Library",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
      <div className="flex flex-wrap p-2 justify-center">
        <SideBar />
        {children}
      </div>
    </div>
  );
}
