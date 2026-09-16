function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-gray-700 py-8 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-white">
           Warren Buffett Adrian  
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack Develope | c++ engineer
          </p>
        </div>

        {/* Right */}
        <div className="text-gray-500 text-center md:text-right">
          © 2026 All Rights Reserved
        </div>

      </div>

    </footer>
  );
}

export default Footer;
