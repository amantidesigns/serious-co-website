export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  categories: string[];
}

export const faqs: FAQItem[] = [
  {
    id: "what-work",
    question: "What kind of work do you do?",
    answer:
      "Websites, advertisements, product launches, investor decks—if it's a creative problem, we take it seriously and build what it needs.",
    categories: ["services", "process"],
  },
  {
    id: "pricing",
    question: "How much does it cost?",
    answer:
      "Depends on the project. We scope within 24 hours once we understand what we're delivering. Most engagements fall between $15k and $75k.",
    categories: ["pricing"],
  },
  {
    id: "timeline",
    question: "How long does it take?",
    answer:
      "Fast enough to matter, never rushed enough to break. Projects typically run 2–6 weeks based on complexity.",
    categories: ["process"],
  },
  {
    id: "difference",
    question: "What makes you different?",
    answer:
      "We strip the process down to what matters. One team handles brand, web, and production so decisions happen in days, not months.",
    categories: ["services"],
  },
  {
    id: "getting-started",
    question: "How do I get started?",
    answer:
      "Use the intake form below or email hello@averyseriouscompany.com. We'll respond within one business day with next steps.",
    categories: ["process"],
  },
  {
    id: "ai",
    question: "Do you use AI in your projects?",
    answer:
      "Yes—strategically. We train custom models when it speeds up production without sacrificing craft, and we show you how to use them in-house.",
    categories: ["services", "capabilities"],
  },
  {
    id: "collaboration",
    question: "What does collaboration look like?",
    answer:
      "You get direct access to the team doing the work. We meet once a week, share builds as they happen, and keep decisions moving asynchronously.",
    categories: ["process"],
  },
];
