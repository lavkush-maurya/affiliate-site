import Layout from './components/Layout';

export default function FAQ() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
        
        <p className="text-lg mb-6">
          At <strong>Goods Paradise</strong>, we aim to provide the best affiliate deals on top tech products. We understand you may have questions, so we’ve compiled a list of frequently asked questions to help clarify how we work, what we offer, and how you can benefit from our services.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. What is Goods Paradise?</h2>
            <p className="text-lg">
              <strong>Goods Paradise</strong> is an affiliate website dedicated to bringing you the best deals on a variety of tech products. We curate top-notch items from different online retailers, providing you with easy access to the best prices through affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. How does Goods Paradise make money?</h2>
            <p className="text-lg">
              We earn a commission from retailers when you make a purchase through one of our affiliate links. This does not affect the price you pay for the product. Our recommendations are based on product quality and value, not commission rates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Are the prices higher if I buy through an affiliate link?</h2>
            <p className="text-lg">
              No, using our affiliate links will not increase the price you pay for any product. The prices are the same as they would be if you visited the retailer directly. In some cases, you may even find exclusive deals or discounts through our links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. How do I know if a product is available?</h2>
            <p className="text-lg">
              Product availability is subject to change based on the retailer's stock. We make every effort to keep the product listings updated, but we recommend clicking on the product link to check the latest availability and price.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. How can I trust the product recommendations?</h2>
            <p className="text-lg">
              We take product quality seriously. Our team researches and selects items based on their performance, reviews, and overall value. We aim to provide honest and accurate recommendations to help you make informed purchasing decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Can I return a product I purchased through Goods Paradise?</h2>
            <p className="text-lg">
              Yes, but the return policies depend on the retailer you purchase from. We recommend reviewing the return and refund policies on the retailer's website before making your purchase. If you have any issues with the product, you can contact the retailer directly for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Does Goods Paradise store my personal information?</h2>
            <p className="text-lg">
              No, <strong>Goods Paradise</strong> does not store your personal information unless you subscribe to our newsletter or contact us directly. For more details, please refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. How often do you update your product listings?</h2>
            <p className="text-lg">
              We regularly update our product listings to ensure they reflect the latest deals and availability. Our goal is to keep our recommendations fresh and relevant, helping you find the best products at the best prices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Can I suggest products to be featured on Goods Paradise?</h2>
            <p className="text-lg">
              Absolutely! We welcome suggestions for new products or categories to feature on our site. If you have a product in mind that you think would be a good fit, feel free to <a href="/contact" className="text-blue-600 underline">contact us</a> and share your thoughts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">10. How can I contact Goods Paradise?</h2>
            <p className="text-lg">
              If you have any questions, concerns, or suggestions, feel free to reach out to us via our <a href="/contact" className="text-blue-600 underline">Contact Page</a>. You can also email us at <strong>support@goodsparadise.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
