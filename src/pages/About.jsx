import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function About() {
  return (
    <>
            <Header />
      <div className="  flex-col">
        <div className="min-h-screen flex-grow bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex"> {/* This div will grow to push footer down */}
          <h1>this is about page</h1>
          {/* Your main content goes here */}
        </div>
        <Footer />
      </div>
    
    </>
  );
}