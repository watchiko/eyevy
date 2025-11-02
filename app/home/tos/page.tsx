export const metadata = {
  title: "Terms of Service",
};

export default function tos() {
  return (
    <>
      <div className="p-6 text-black">
        <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Acceptance of Terms</h2>
          <p className="text-sm text-gray-700">
            By creating an account or using the Service you agree to these Terms.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Accounts and Authentication</h2>
          <p className="text-sm text-gray-700">
            You are responsible for your account security and for activity that occurs under your
            account.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Acceptable Use</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Do not use the Service for illegal activities or to violate third‑party rights.</li>
            <li>Do not interfere with or disrupt the Service.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Limitation of Liability</h2>
          <p className="text-sm text-gray-700">
            Our liability is limited to the fullest extent permitted by law.
          </p>
        </section>

        {/* <section>
          <h2 className="text-lg font-medium mb-2">Contact</h2>
          <p className="text-sm text-gray-700">support@example.com</p>
        </section> */}
      </div>
    </>
  );
}
