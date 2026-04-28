import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xs font-bold text-sygo-pink uppercase tracking-[0.2em] mb-2">Get In Touch</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-sygo-purple dark:text-sygo-purple-light mb-4">Contact Our Team</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Have questions or want to partner with us? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <MapPin size={24} />, title: 'Visit Us', text: 'Mogadishu, Somalia', color: 'text-sygo-purple bg-sygo-purple/10' },
                { icon: <Phone size={24} />, title: 'Call Us', text: '+252 61 7725555', color: 'text-sygo-pink bg-sygo-pink/10' },
                { icon: <Mail size={24} />, title: 'Email Us', text: 'info@sygo.org', color: 'text-sygo-blue bg-sygo-blue/10' },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-5 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-transparent hover:border-sygo-purple/10 transition-all group">
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-lg font-black dark:text-white">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-10 rounded-[3rem] shadow-xl border border-gray-100 dark:border-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-sygo-purple transition-all outline-none dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-sygo-purple transition-all outline-none dark:text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 ml-1">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-sygo-purple transition-all outline-none dark:text-white"></textarea>
              </div>
              <button className="w-full bg-brand-gradient text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <Send size={24} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
