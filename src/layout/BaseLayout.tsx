import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";


type DashboardLayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: DashboardLayoutProps) {
  return (
    <>
    <div className="hidden lg:block">
        <Header />
      </div>
      <div className=" lg:hidden">
        <MobileNav/>
      </div>
      <main>{children}</main>
      <Hero/>
      <Footer/>
    </>
  )
}

export default BaseLayout