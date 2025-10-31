export default function Privacy() {
  return (
    <>
      <div className="p-6 text-black ">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Information we collect</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>
              <strong>Account info:</strong> Email, name, and profile picture from Google.
            </li>
            <li>
              <strong>Usage data:</strong> Anonymous analytics and error reports.
            </li>
            <li>
              <strong>Session data:</strong> Encrypted session identifiers in cookies.
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">How we use information</h2>
          <p className="text-sm text-gray-700">
            Authentication, service delivery, security, and aggregated analytics.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Sharing and third parties</h2>
          <p className="text-sm text-gray-700">
            We do not sell personal data. We share only with trusted service providers needed to
            operate the app.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-lg font-medium mb-2">Your choices</h2>
          <p className="text-sm text-gray-700">
            Revoke access via Google account settings or contact support@example.com to delete your
            account.
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
