import "../styles/globals.scss";
import Contentlayout from "@/shared/layout-components/layout/contentlayout";
import Custompageslayout from "@/shared/layout-components/layout/custompageslayout";
import { AuthProvider } from "@/shared/context/AuthContext";

const layouts: any = {
  Contentlayout: Contentlayout,
  Custompageslayout: Custompageslayout
};

function App({ Component, pageProps }: any) {
  const Layout: any = layouts[Component.layout] || ((pageProps: any) => <Component>{pageProps}</Component>);

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default App;