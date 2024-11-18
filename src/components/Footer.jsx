const Footer = ()=>{
    return <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* About Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">About Us</h2>
        <p className="text-sm">
          Welcome to our Book System! Explore, borrow, and enjoy books from various genres. 
          Our mission is to connect readers with the joy of reading.
        </p>
      </div>
  
      {/* Quick Links */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="/home" className="hover:underline">Home</a></li>
          <li><a href="/genres" className="hover:underline">Genres</a></li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
  
      {/* Contact Info */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <ul className="space-y-2 text-sm">
          <li>Email: <a href="mailto:info@booksystem.com" className="hover:underline">info@booksystem.com</a></li>
          <li>Phone: +1 234 567 890</li>
          <li>Address: 123 Book Street, Library City</li>
        </ul>
      </div>
    </div>
  
    {/* Footer Bottom */}
    <div className="mt-8 text-center border-t border-gray-700 pt-4">
      <p className="text-sm">
        © 2024 Book System. All rights reserved.
      </p>
    </div>
  </footer>
  
}
export default Footer;