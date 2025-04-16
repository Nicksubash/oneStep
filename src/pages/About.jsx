import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";


export default function About() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex flex-col p-9">
        <Header />
        <h1 className="">this is about page</h1>
        <Footer />
      </div>
    </>
  );
}