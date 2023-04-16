import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import NFTCaption from "@/components/NFTCaption";
import Footer from "@/components/Footer";



type DashboardLayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: DashboardLayoutProps) {
  return (
    <>
    <div className="hidden lg:block">
        <Header />
      </div>
      <div className="lg:hidden">
        <MobileNav/>
      </div>
     <main>{children}</main> 
      <Footer/>
    </>
  )
}

export default BaseLayout