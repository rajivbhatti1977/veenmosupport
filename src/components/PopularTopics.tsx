
import { CreditCard, Shield, Users, DollarSign, Smartphone, AlertCircle } from 'lucide-react';

const PopularTopics = () => {
  const topics = [
    {
      icon: CreditCard,
      title: "Payment Methods",
      description: "Add, remove, and manage your payment methods",
      link: "#"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Keep your account and transactions secure",
      link: "#"
    },
    {
      icon: Users,
      title: "Friends & Social",
      description: "Manage friends, privacy settings, and social features",
      link: "#"
    },
    {
      icon: DollarSign,
      title: "Sending & Receiving",
      description: "Learn how to send and receive money",
      link: "#"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Get help with the Veenmo Support mobile app",
      link: "#"
    },
    {
      icon: AlertCircle,
      title: "Account Issues",
      description: "Resolve problems with your account",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Topics
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick access to the most common help topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <a
              key={index}
              href={topic.link}
              className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <topic.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {topic.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTopics;
