import Layout from './components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">About Goods Paradise</h1>
        <p className="text-lg mb-6">
          Welcome to <strong>Goods Paradise</strong>, your ultimate destination for finding the best deals on top tech products! Whether you’re a gadget enthusiast, a tech-savvy shopper, or simply looking for great offers, we’ve got you covered with a curated selection of affiliate links to the hottest products on the market.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-lg mb-6">
          At <strong>Goods Paradise</strong>, our mission is simple: to help you find the best deals on high-quality tech products. We scour the web to bring you the latest and greatest products at unbeatable prices, ensuring you make the smartest purchasing decisions.
        </p>

        <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
        <p className="text-lg mb-6">
          We specialize in finding deals across a wide range of tech categories, including:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Smartphones from leading brands like Apple, Samsung, and OnePlus</li>
          <li>Cutting-edge laptops and tablets for work, gaming, and creativity</li>
          <li>Home tech gadgets to enhance your everyday life</li>
          <li>Accessories such as headphones, smartwatches, and more</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Why Choose Goods Paradise?</h2>
        <p className="text-lg mb-6">
          What sets us apart is our dedication to providing trustworthy, up-to-date, and accurate deal links. We aim to save you time and money by aggregating the best offers from reputable retailers. Our team works tirelessly to keep our deals fresh and relevant, so you can always find something worth exploring.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Affiliate Disclosure</h2>
        <p className="text-lg mb-6">
          Transparency is key to our business. As an affiliate site, we earn commissions from qualifying purchases made through the links on our website. This helps support our work and allows us to continue bringing you the best deals without any extra cost to you.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Join the Goods Paradise Community</h2>
        <p className="text-lg mb-6">
          We’re not just a deals website — we’re building a community of tech lovers who are always on the lookout for the latest trends and the best prices. Stay connected with us by subscribing to our newsletter, following us on social media, or checking back regularly to stay updated on all the amazing deals we have in store for you.
        </p>

        <p className="text-lg font-semibold">Thank you for visiting Goods Paradise — your go-to place for unbeatable tech deals!</p>
      </div>
    </Layout>
  );
}
