import Link from "next/link";

export default function Home() {
  return (
    <div className="p-2 flex flex-col items-center justify-center m-6 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center text-green-700 mb-8 m-2 first-letter:text-3xl md:first-letter:text-4xl  ">
        Welcome to the Modern Form Handling Showcase
      </h1>

      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg mb-8 hover:shadow-2xl hover:shadow-primary ">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#035E35] ">
          React Hook Form + Resend + Axios
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-4 ">
          React Hook Form (RHF) simplifies form handling and validation in React
          apps with minimal re-renders. When integrated with the Resend API for
          email notifications, RHF collects and validates form data, while Axios
          handles sending it to Resend. This seamless workflow enables efficient
          email triggers like confirmations or resets, providing a streamlined
          solution for form management and user communication.
        </p>
        <Link
          href="/reactHook-validate"
          className="text-white hover:bg-secondary px-4 py-2 rounded-lg bg-green-800 transition duration-200 text-sm md:text-base "
        >
          <span className="sr-only">Click here to visit React Hook Form </span>
          Click here
        </Link>
      </div>

      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-primary m-2 ">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#035E35] ">
          React Manual Validation + Nodemailer (SMTP) + Fetch
        </h2>
        <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-4 ">
          Manually validating form inputs in React gives you complete control
          over data integrity before submission. Once the form is validated, you
          can use Nodemailer, a popular Node.js library, to send emails via SMTP
          for backend email delivery. By using fetch, you can send the validated
          data to your server, where Nodemailer handles email composition and
          delivery. This setup ensures accurate form data and reliable email
          notifications, all while giving you flexibility over validation and
          SMTP configuration.
        </p>
        <Link
          href="/manual-validate"
          className="text-white hover:bg-secondary px-4 py-2 rounded-lg bg-green-800 transition duration-200 text-sm md:text-base "
        >
          <span className="sr-only">
            Click here to visit React Manual Validation Form
          </span>
          Click here
        </Link>
      </div>
    </div>
  );
}
