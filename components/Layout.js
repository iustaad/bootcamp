import NavBar from "../components/NavBar";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
