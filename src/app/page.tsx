import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import { LOGO_URL } from "@/lib/utils/config";

const HomePage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ann's SoleCraft Studio",
            url: "https://chibuike07.github.io/annas_solecraft_studio",
            logo: LOGO_URL,
            description:
              "Designer shoes handcrafted for Nigerian streets and events with instant WhatsApp checkout",
            sameAs: ["https://wa.me/2348121485310"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-812-148-5310",
              contactType: "Customer Sales",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Ann's SoleCraft Studio Collection",
            description:
              "Discover Nigerian designer shoes: heels, loafers, sneakers and sandals crafted for Lagos, Abuja and beyond.",
            url: "https://chibuike07.github.io/annas_solecraft_studio",
            mainEntity: {
              "@type": "Product",
              name: "Curated Designer Shoe Collection",
              description:
                "Explore 40+ carefully selected designer shoes and accessories across multiple categories",
            },
          }),
        }}
      />
      <ProductShowcase />
    </>
  );
};

export default HomePage;
