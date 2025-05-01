"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-gradient-to-r from-[#00346f] to-[#4983a2] px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Hubungi Kami
        </h2>
        <p className="mt-2 text-lg text-gray-100">
          Permudah urusan anda dengan menghubungi kami:
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-6"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-lg font-semibold text-white"
            >
              Nama depan
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-lg font-semibold text-white"
            >
              Nama belakang
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-lg font-semibold text-white"
            >
              Nomor telepon
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-lg bg-white shadow-md focus:ring-2">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="0852xxxxxx"
                  className="block min-w-0 grow py-3 px-4 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-white"
            >
              Pesan
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-lg bg-white px-4 py-3 text-base text-gray-900 shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center"></div>
          </Field>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 text-center text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}
