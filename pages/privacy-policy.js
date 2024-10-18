import Layout from './components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg mb-6">
          At <strong>Goods Paradise</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information we collect, how we use and safeguard that information, and your rights regarding your personal data. By using our website, you consent to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <p className="text-lg mb-6">
          We collect different types of information to enhance your experience on <strong>Goods Paradise</strong>:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Personal Information:</strong> This includes your name, email address, and other information you may provide when subscribing to our newsletter or contacting us through our website.</li>
          <li><strong>Usage Data:</strong> We collect non-personal information such as your browser type, operating system, IP address, and browsing behavior on our site. This data helps us improve our services and the user experience.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance site functionality and provide a personalized experience. Cookies are small data files stored on your device when you visit our website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
        <p className="text-lg mb-6">
          The information we collect is used for various purposes, including:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>To Improve Our Website:</strong> Usage data helps us understand how visitors interact with our site, allowing us to improve functionality and content.</li>
          <li><strong>To Communicate with You:</strong> If you subscribe to our newsletter or contact us, we may use your personal information to respond to inquiries or send updates about our services.</li>
          <li><strong>To Provide Relevant Content:</strong> We may use cookies and other tracking technologies to deliver personalized content and offers based on your browsing behavior.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Cookies and Tracking Technologies</h2>
        <p className="text-lg mb-6">
          <strong>Goods Paradise</strong> uses cookies and similar tracking technologies to enhance your experience. Cookies help us remember your preferences and understand how you interact with our site. You can choose to disable cookies through your browser settings; however, doing so may limit the functionality of certain features.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
        <p className="text-lg mb-6">
          We may use third-party services, such as analytics providers, to help us understand how visitors use our website. These services may collect information about your browsing behavior on our site and use it to provide insights. We do not share personal information with these third parties unless required by law.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Affiliate Links</h2>
        <p className="text-lg mb-6">
          As part of our business model, <strong>Goods Paradise</strong> includes affiliate links to products and services on third-party websites. If you click on an affiliate link and make a purchase, we may earn a commission. Please note that we do not have control over the privacy practices of these third-party websites. We recommend reviewing their privacy policies before providing any personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-3">How We Protect Your Information</h2>
        <p className="text-lg mb-6">
          We implement a variety of security measures to protect your personal information. These measures include secure data storage, encryption, and limited access to sensitive data. However, no method of transmission over the internet or method of electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <p className="text-lg mb-6">
          You have certain rights regarding the personal information we collect, including:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li><strong>Access:</strong> You have the right to request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete personal information.</li>
          <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain legal obligations.</li>
          <li><strong>Opt-Out:</strong> You have the right to opt out of receiving marketing communications from us at any time.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
        <p className="text-lg mb-6">
          We reserve the right to update this Privacy Policy from time to time. When we make changes, we will update the effective date at the top of the policy and provide a notice on our website. We encourage you to review this policy periodically to stay informed about how we protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="text-lg mb-6">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="text-lg mb-6">
          <strong>Email:</strong> support@goodsparadise.com <br />
          <strong>Mailing Address:</strong> Goods Paradise, 123 Tech Street, City, Country
        </p>

        <p className="text-lg font-semibold">
          Thank you for trusting Goods Paradise with your personal information.
        </p>
      </div>
    </Layout>
  );
}
