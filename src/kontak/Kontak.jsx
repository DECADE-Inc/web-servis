import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";
import Spinner from "../components/Spinner";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Nama lengkap tidak boleh kosong"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  phone: Yup.string()
    .matches(/^(?:\+62|62|0)8[1-9][0-9]{6,9}$/, "Nomor telepon tidak valid")
    .required("Nomor telepon tidak boleh kosong"),
  message: Yup.string().required("Pesan tidak boleh kosong"),
});

export default function Example() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="isolate bg-gradient-to-r from-[#537fad] to-[#19385d] px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      ></div>
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-5xl md:text-4xl">
          Hubungi Kami📩
        </h2>
        <p className="mt-2 text-base text-gray-100 md:text-lg">
          Permudah urusan anda dengan menghubungi kami:
        </p>
      </div>
      <Formik
        initialValues={{
          subject: "Pesan Baru dari website Service Center Electrolux",
          from_name: "Service Center Electrolux",
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
          const data = values;
          const accessKey = "261b69cd-7c6c-4542-bedb-2453493647aa";
          const formData = Object.assign(data, { access_key: accessKey });
          const formDataJson = JSON.stringify(formData);
          setIsSubmitting(true);
          const status = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: formDataJson,
          });
          if (!status.ok) {
            setIsError(true);
          }
          setIsSubmitting(false);
          resetForm();
          alert("Pesan berhasil dikirim");
        }}
      >
        {({ errors, touched }) => (
          <Form className="mx-auto mt-8 max-w-xl space-y-6 sm:mt-20 md:mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-base font-semibold text-white md:text-lg"
                >
                  Nama Lengkap
                </label>
                <div className="mt-2.5">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none md:px-4 md:py-3"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-error mt-3 font-bold">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block font-semibold text-white md:text-lg"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none md:px-4 md:py-3"
                  />
                  {errors.email && touched.email ? (
                    <div className="mt-3 font-bold text-red-300">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block font-semibold text-white md:text-lg"
                >
                  Nomor telepon
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-lg bg-white shadow-md focus:ring-2">
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative"></div>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="0852xxxxxx"
                      className="block min-w-0 grow px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none sm:text-sm md:px-4 md:py-3"
                    />
                  </div>
                  {errors.phone && touched.phone ? (
                    <div className="mt-3 font-bold text-red-300">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-semibold text-white md:text-lg"
                >
                  Pesan
                </label>
                <div className="mt-2.5">
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    defaultValue={""}
                  />
                  {errors.message && touched.message ? (
                    <div className="mt-3 font-bold text-red-300">
                      {errors.message}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* Other fields go here */}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-lg bg-blue-800 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner /> : "Kirim"}
              </button>
            </div>
            {isError && (
              <p className="text-center text-red-300">
                Tidak dapat mengirim pesan
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
