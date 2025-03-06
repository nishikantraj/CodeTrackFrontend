import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4"> <strong>Effective Date:</strong> March 2025</p>
        
        <p className="text-gray-300 mb-6">Welcome to <strong>CodeChamp</strong> and <strong>CodeTracker</strong>! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data while using our services.</p>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><strong>Coding Activity Duration:</strong> The time you spend actively coding in Visual Studio Code.</li>
          <li><strong>Programming Languages Used:</strong> The languages in which you are coding, based on file extensions.</li>
          <li><strong>Session Key:</strong> A unique key generated at registration to link your activity to your account.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">2. How We Use Your Data</h2>
        <p className="text-gray-300 mb-6">The collected data is used for displaying coding statistics, ranking users, and tracking coding habits. We <strong>DO NOT</strong> collect or analyze written code.</p>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">3. What We DO NOT Collect</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>❌ Your actual code or file contents.</li>
          <li>❌ Keystrokes, variable names, function names.</li>
          <li>❌ Any personal data beyond your registered email (if provided).</li>
          <li>❌ Any sensitive or proprietary information from your projects.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">4. Data Storage & Security</h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>All activity logs are linked only to a unique session key, ensuring anonymity.</li>
          <li>Data is securely stored in our MongoDB database and is only used for leaderboard purposes.</li>
          <li>No data is shared with third parties.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">5. User Controls & Data Deletion</h2>
        <p className="text-gray-300 mb-6">You can reset your session key anytime or request data deletion by contacting us.</p>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">6. Third-Party Integrations</h2>
        <p className="text-gray-300 mb-6">The CodeTracker extension and CodeChamp platform do not use any third-party analytics or tracking services. Your data remains within our system.</p>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-300 mb-6">We may update this Privacy Policy to reflect changes in our services. Any updates will be communicated via our website.</p>
        
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">8. Contact Us</h2>
        <p className="text-gray-300 mb-6">If you have any questions, contact us at <strong>nishikantraj2311@gmail.com</strong> or visit our <Link to="/contact" className="text-green-400 hover:text-green-300">Contact Page</Link>.</p>
        
        <p className="text-gray-400 text-sm mt-8">By using CodeTracker and CodeChamp, you agree to this Privacy Policy.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
