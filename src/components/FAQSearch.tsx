"use client";

import { useMemo, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { faqs } from "@/lib/content/faqs";

export function FAQSearch({ title = "People ask us..." }: { title?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set<string>();
    faqs.forEach((faq) => faq.categories.forEach((item) => set.add(item)));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = category === "all" || faq.categories.includes(category);
      const matchesQuery = query
        ? faq.question.toLowerCase().includes(query.toLowerCase()) || faq.answer.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">FAQ</p>
        <h3 className="text-2xl font-light">{title}</h3>
        <p className="text-sm text-white/70">Search the answers before you hop on a call.</p>
      </div>

      <div className="space-y-3">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for pricing, timelines, AI..."
          className="border-white/10 bg-black/30 text-white placeholder:text-white/40"
        />
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-3 py-1.5 uppercase tracking-[0.3em] transition ${
                category === item
                  ? "border-white/40 bg-white/15 text-white"
                  : "border-white/10 bg-white/[0.05] text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {filteredFaqs.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
            Nothing on that yet. Ask us directly at hello@averyseriouscompany.com.
          </div>
        )}
        {filteredFaqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            <AccordionTrigger className="px-4 py-3 text-left text-sm font-normal text-white hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-sm text-white/80">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
