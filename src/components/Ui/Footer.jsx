const Footer = () => {
  return (
    <footer className="bg-[#01352c] text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Laundry Service. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
