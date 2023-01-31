import Header from "@/components/Header";
import Footer from "@/components/Footer";


type DashboardLayoutProps = {
  children: React.ReactNode,
};

function BaseLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <Header/>
      <main>{ children }</main>
      <Footer/>
    </>
  )
}

export default BaseLayout