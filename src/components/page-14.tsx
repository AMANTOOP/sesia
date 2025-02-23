
export function Page14() {
  return (
    <section className=" relative h-screen flex items-center justify-center bg-gray-100">
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/b0c4/9374/88a629ca90f1928d488e64bc59a1eaf7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aeUqsyDRXyWSjhVloOOPVAIzdU10IA5gN~QOvN~1sB9Di-nqyiQTXeVgha7PSoGkLYSWDAb0ZULIeajLyEUATyoWgFMRTUtfja8wIMhr6Lp6csz8jnKKYIWnzdCdQpCNeas3zsLEsnZuRwYtZMuvtid0rxbygotihaqS8rDz0R~oUfOHJc12JPtFDHfwbLvbdfgZqTMrZtgFqy1J8aKm~jOSYWvZ4frfC-nCBCHdnE97VWJKLpOi6brkodldzkeKRZhhZoIeQiZIBFcQeo3JNk15P5eGOfhLYtnOz0OYTnE2-XDOjBJ4yh5Tc--vXgNJrqwQnu44QsoyUeaQ8LExSQ__')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div> 
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Text */}
          <div className="text-left">
            <p className="uppercase text-sm tracking-wider text-gray-600">
              Contacts
            </p>
            <h2 className="text-5xl font-light text-gray-900 mt-[2rem]">
              Get <em className="italic font-playground">in</em> touch
            </h2>
            <p className="mt-4 text-gray-700 max-w-[20rem]">
              Leave your contact details below to register your interest in
              Sensia.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="w-full">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-commuters">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 text-left">First Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 p-2 bg-transparent"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 text-left">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 p-2 bg-transparent"
                />
              </div>

              {/* Mobile Country Code */}
              <div>
                <label className="block text-gray-700 text-left">
                  Mobile Country Code
                </label>
                <select className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 p-2 bg-transparent">
                  <option>Select one...</option>
                </select>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 text-left">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 p-2 bg-transparent"
                />
              </div>

              {/* Prospect Type */}
              <div>
                <label className="block text-gray-700 text-left">Prospect Type</label>
                <select className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 p-2 bg-transparent">
                  <option>Select one...</option>
                </select>
              </div>

              {/* Interested Property Type */}
              <div>
                <label className="block text-gray-700 text-left">
                  Interested Property Type
                </label>
                <select className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-600 p-2 bg-transparent">
                  <option>Select one...</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="col-span-2 flex justify-start text-left">
                <button className="bg-red-700 text-white px-6 py-3 text-sm uppercase tracking-wide font-semibold flex items-center gap-2 hover:bg-red-800 font-commuters">
                  Submit <span>&gt;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
