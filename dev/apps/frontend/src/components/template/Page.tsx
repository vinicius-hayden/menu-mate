import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

export interface PageProps {
  className?: string;
  children: any;
  noHeader?: boolean;
  noFooter?: boolean;
  noContainer?: boolean;
  noPadding?: boolean;
}

export default function Page(props: PageProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col w-full"> 
          {props.noHeader ? null : <Header />}
          <main
            className={`flex-1 flex flex-col ${props.className ?? ""} ${
              props.noContainer ? "" : "container"
            } ${props.noPadding ? "" : "py-10"}`}
          >
            {props.children}
          </main>
          {props.noFooter ? null : <Footer />}
        </div>
      </div>
    </>
  );
}
