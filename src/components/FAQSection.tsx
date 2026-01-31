import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does construction take?',
    answer: 'Construction timelines vary based on project scope. A typical residential home takes 8-12 months, while commercial projects may take 12-24 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.',
  },
  {
    question: 'Do you provide turnkey projects?',
    answer: 'Yes! Our turnkey solutions cover everything from design and planning to construction and final finishing. You get a complete, ready-to-use space without the hassle of coordinating multiple contractors.',
  },
  {
    question: 'Do you offer free consultation?',
    answer: 'Absolutely! We offer free initial consultations to understand your project requirements, discuss possibilities, and provide preliminary cost estimates. Contact us to schedule your consultation.',
  },
  {
    question: 'Are you certified builders?',
    answer: 'Yes, Annai Construction is fully licensed and certified. We hold all necessary construction permits and certifications, and our team includes certified engineers and architects.',
  },
  {
    question: 'What materials do you use?',
    answer: 'We use only premium-quality, tested materials from trusted suppliers. All materials meet industry standards and come with proper certifications. We also provide transparency in material selection.',
  },
  {
    question: 'Do you provide warranties?',
    answer: 'Yes, we provide comprehensive warranties on our construction work. Structural work comes with a 10-year warranty, while finishing work includes a 1-year warranty. Specific terms are detailed in your contract.',
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              FAQs
            </span>
            <h2 className="section-heading mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our construction services. 
              Can't find what you're looking for? Contact us directly.
            </p>
            <div className="glass-card p-6">
              <p className="font-semibold text-foreground mb-2">Still have questions?</p>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help with any questions you have.
              </p>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center text-accent font-medium"
              >
                Call us: +91 98765 43210
              </a>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-0"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
