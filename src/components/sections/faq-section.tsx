import { BlurFadeHeading } from "@/components/ui/blur-fade-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How fast can this be set up?",
    answer: "Most crews are live in days, not weeks.",
  },
  {
    question: "Do we need to replace our website?",
    answer: "No. We improve what you already have.",
  },
  {
    question: "What happens to missed calls?",
    answer: "Every missed call is captured and followed up.",
  },
  {
    question: "Is there a contract?",
    answer: "No contracts. Cancel anytime.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-background" id="faq">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="space-y-10">
          <BlurFadeHeading
            as="h2"
            text="Quick questions. Clear answers."
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          />
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border/60 bg-card/70 shadow-soft"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-border/60 px-6"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
