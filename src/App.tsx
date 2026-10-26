import { useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { ProductsPage } from '@/pages/ProductsPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

function App() {
  const { route } = useRouter();

  let page;
  switch (route.name) {
    case 'home':
      page = <HomePage />;
      break;
    case 'products':
      page = <ProductsPage />;
      break;
    case 'product':
      page = <ProductDetailPage id={route.id} />;
      break;
    case 'services':
      page = <ServicesPage />;
      break;
    case 'about':
      page = <AboutPage />;
      break;
    case 'contact':
      page = <ContactPage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop trigger={route.name + ('id' in route ? route.id : '')} />
      <Header />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}

export default App;
