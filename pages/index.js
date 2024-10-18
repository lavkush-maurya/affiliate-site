import Link from "next/link";
import Head from "next/head";
import Layout from "./components/Layout";
import data from "../public/data/productList.json"; // Keep your static data for fallback or other uses
import { useState } from "react";

export default function ProductList({ productList }) {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = productList.filter((product) => {
    if (searchQuery === "") {
      return true; // Show all products when the input is blank
    }
    return product.hashCode && product.hashCode.toString() === searchQuery;
  });

  return (
    <>
      <Head>
        <title>Products - GoodsHub</title>
        <meta
          name="description"
          content="Explore our range of products available at great prices. Search for your favorite items!"
        />
        <meta property="og:title" content="Product List - GoodsHub" />
        <meta
          property="og:description"
          content="Explore our range of products available at great prices. Search for your favorite items!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/icon-512x512.jpg" />
      </Head>

      <Layout>
        {/* Search Input */}
        <main className="p-4">
          <section className="mb-4">
            <input
              type="text"
              placeholder="Search by hashCode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 rounded-lg w-full text-black"
              aria-label="Search products"
            />
          </section>

          {/* Products Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article
                  key={product.name}
                  className="border p-4 rounded-lg shadow-lg"
                >
                  <Link href={product.productUrl || "#"}
                    className="grid grid-flow-col gap-x-2"
                  >
                    <img
                      src={product.imageUrl}
                      alt={`Image of ${product.name}`}
                      title={product.name}
                      className="w-full lg:h-48 object-contain"
                    />
                    <div className="mt-2">
                      <p className="text-green-500 font-bold">
                        #{product.hashCode}
                      </p>
                      <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                      {product.productUrl ? null : (
                        <p className="text-red-500">
                          Error: Product link is missing.
                        </p>
                      )}
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <p>No matching products found</p>
            )}
          </section>
        </main>
      </Layout>
    </>
  );
}

// This function runs on the server for every request
export async function getServerSideProps() {
  // Simulating data fetching; in real use, you can fetch from an API
  const productList = data; // Replace with actual data fetching logic if needed

  return {
    props: {
      productList, // Pass the fetched data to the component
    },
  };
}
