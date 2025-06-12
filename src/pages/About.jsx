import Navbar from "../components/navbar/Navbar";
import Footer from "../components/shared/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="flex-col">
        <div className="min-h-screen flex-grow bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex">
          <h1>this is about page</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
