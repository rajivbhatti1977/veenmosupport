import { MessageCircle, Mail, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "Available 24/7",
      action: "Start Chat",
      primary: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email",
      primary: false
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with a representative",
      availability: "Mon-Fri, 9AM-6PM EST",
      action: "Call Now",
      primary: true,
      phoneNumber: "+18555742442"
    }
  ];

  const handleContactClick = (option: typeof contactOptions[0]) => {
    if (option.phoneNumber) {
      window.location.href = `tel:${option.phoneNumber}`;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Still Need Help?
          </h2>
          <p className="text-lg text-muted-foreground">
            Our support team is here to assist you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-card border rounded-lg p-8 text-center ${
                option.primary ? 'border-blue-300 shadow-lg' : 'border-border'
              }`}
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${
                option.primary ? 'bg-blue-600' : 'bg-muted'
              }`}>
                <option.icon className={`w-8 h-8 ${
                  option.primary ? 'text-white' : 'text-muted-foreground'
                }`} />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {option.title}
              </h3>
              <p>{option.phoneNumber}</p>
              
              <p className="text-muted-foreground mb-4">
                {option.description}
              </p>
              
              <div className="flex items-center justify-center text-sm text-muted-foreground mb-6">
                <Clock className="w-4 h-4 mr-2" />
                {option.availability}
              </div>
              
              <button 
                onClick={() => handleContactClick(option)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  option.primary
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}>
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Additional Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
            Veenmo Support User Agreement
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Fee Structure
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Security Center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
