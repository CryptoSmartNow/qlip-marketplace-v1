import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";


type DashboardLayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: DashboardLayoutProps) {
  return (
    <>
    
      <Header/> 
      <main>{children}</main>
      <Hero/>
      <Footer/>
    </>
  )
}

export default BaseLayout