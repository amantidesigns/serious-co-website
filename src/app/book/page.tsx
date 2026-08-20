import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking/booking-wizard";

export const metadata: Metadata = {
  title: "Book a Call - A Very Serious Company",
  description:
    "Schedule a discovery call or quick chat with A Very Serious Company. Let's talk about your next web design, development, or creative project.",
  openGraph: {
    title: "Book a Call - A Very Serious Company",
    description:
      "Schedule a discovery call or quick chat with A Very Serious Company.",
  },
};

export default function BookPage() {
  return (
    <div
      className="min-h-screen pt-20"
      style={{ backgroundColor: "var(--brand-blue, #0B3D91)" }}
    >
      <BookingWizard />
    </div>
  );
}
