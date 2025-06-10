
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I send money to someone?",
      answer: "To send money, open the Veenmo Support, tap 'Pay or Request', search for the person you want to send money to, enter the amount, add a note (optional), and tap 'Pay'."
    },
    {
      question: "Is Veenmo Support safe to use?",
      answer: "Yes, Veenmo Support uses encryption and other security measures to protect your account information and transactions. We also monitor accounts for unauthorized transactions."
    },
    {
      question: "How long do Veenmo Support transfers take?",
      answer: "Standard transfers to your bank account typically take 1-3 business days. Instant transfers are available for a small fee and arrive within 30 minutes."
    },
    {
      question: "What are Veenmo Support's fees?",
      answer: "Veenmo Support doesn't charge fees for standard transfers, sending money from your Veenmo Support balance, bank account, or debit card. There are fees for instant transfers and credit card transactions."
    },
    {
      question: "How do I add a bank account or card?",
      answer: "Go to Settings > Payment Methods > Add Bank or Card. Follow the prompts to securely link your bank account or add a debit/credit card."
    },
    {
      question: "Why was my payment declined?",
      answer: "Payments can be declined due to insufficient funds, bank restrictions, security concerns, or if your account needs verification. Check your payment method and account status."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-card-foreground">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
