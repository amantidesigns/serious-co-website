"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight, ChevronLeft, Check } from "lucide-react";
import {
  SESSION_TYPES,
  SERVICE_TYPES,
  BUDGET_RANGES,
  TIMELINES,
  REFERRAL_SOURCES,
  PREP_NOTES,
  CONTACT_EMAIL,
  type SessionType,
  type ServiceType,
} from "@/lib/booking";

type Step = 1 | 2 | 3 | 4;

const TOTAL_STEPS = 4;

const stepVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

const inputClass =
  "w-full p-3 rounded-lg bg-white/5 border border-white/20 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 transition-colors";
const selectClass =
  "w-full p-3 rounded-lg bg-white/5 border border-white/20 text-sm text-white focus:outline-none focus:border-white/50 transition-colors appearance-none";
const labelClass =
  "text-xs font-mono uppercase tracking-[0.12em] text-white/50 mb-1.5 block";

// Generate placeholder time slots for Phase 1 UI
function generatePlaceholderSlots(date: Date): string[] {
  const slots: string[] = [];
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) return slots; // No weekends
  for (let hour = 9; hour <= 16; hour++) {
    slots.push(`${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"}`);
    if (hour < 16) {
      slots.push(`${hour > 12 ? hour - 12 : hour}:30 ${hour >= 12 ? "PM" : "AM"}`);
    }
  }
  return slots;
}

function getNextTwoWeeks(): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      dates.push(d);
    }
  }
  return dates;
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export function BookingWizard() {
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState(1);
  const [sessionType, setSessionType] = useState<SessionType>("discovery");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    serviceType: "" as ServiceType | "",
    budget: "",
    timeline: "",
    goal: "",
    referralSource: "",
  });

  const set =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const goTo = useCallback(
    (next: Step) => {
      setDirection(next > step ? 1 : -1);
      setStep(next);
    },
    [step],
  );

  const canProceedStep2 = form.serviceType && form.budget;
  const canProceedStep3 = form.firstName && form.lastName && form.email;
  const canSubmit = canProceedStep3 && selectedDate && selectedTime;

  const handleSubmit = () => {
    if (!canSubmit) return;
    const subject = `Book a Call: ${SESSION_TYPES[sessionType].label}`;
    const body = [
      "Hi there,",
      "",
      "I'd like to book a call with A Very Serious Company.",
      "",
      `Session: ${SESSION_TYPES[sessionType].label} (${SESSION_TYPES[sessionType].duration})`,
      `Requested time: ${formatDateShort(selectedDate!)} at ${selectedTime} Central`,
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Service: ${form.serviceType || "Not provided"}`,
      `Budget: ${form.budget || "Not provided"}`,
      `Timeline: ${form.timeline || "Not provided"}`,
      `Goal: ${form.goal || "Not provided"}`,
      `Referral source: ${form.referralSource || "Not provided"}`,
      "",
      "Thanks!",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const availableDates = getNextTwoWeeks();
  const timeSlots = selectedDate ? generatePlaceholderSlots(selectedDate) : [];

  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-16">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/50 mb-2">
          Book a Call
        </p>
        <h1 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] font-medium tracking-tight text-white mb-3">
          Let&apos;s talk about your project.
        </h1>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-10">
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
          <div key={s} className="flex-1 h-1 rounded-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={false}
              animate={{ width: step >= s ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        ))}
      </div>

      {/* Step content */}
      <div className="relative min-h-[480px]">
        <AnimatePresence mode="wait" custom={direction}>
          {/* ── Step 1: Session Type ── */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-sm text-white/60">
                What kind of conversation are you looking for?
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {(Object.keys(SESSION_TYPES) as SessionType[]).map((type) => {
                  const meta = SESSION_TYPES[type];
                  const selected = sessionType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setSessionType(type)}
                      className={`p-5 rounded-xl border text-left transition-all duration-200 ${
                        selected
                          ? "border-white/60 bg-white/10 scale-[1.02]"
                          : "border-white/15 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-white/50" />
                        <span className="text-xs font-mono uppercase text-white/50">
                          {meta.duration}
                        </span>
                      </div>
                      <p className="font-medium text-white">{meta.label}</p>
                      <p className="text-xs text-white/50 mt-1">{meta.description}</p>
                      {selected && (
                        <div className="mt-3 flex items-center gap-1 text-xs text-white/70">
                          <Check className="w-3 h-3" /> Selected
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => goTo(2)}
                className="w-full py-3 rounded-full bg-white text-[#0B3D91] text-sm font-medium transition-opacity hover:opacity-90"
              >
                Continue
              </button>
            </motion.div>
          )}

          {/* ── Step 2: Project Scope ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-sm text-white/60">
                Tell us about your project.
              </p>

              <div className="space-y-4">
                <div>
                  <label className={labelClass}>What do you need? *</label>
                  <select
                    required
                    className={selectClass}
                    value={form.serviceType}
                    onChange={set("serviceType")}
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {SERVICE_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Budget range *</label>
                  <select
                    required
                    className={selectClass}
                    value={form.budget}
                    onChange={set("budget")}
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Timeline</label>
                  <select className={selectClass} value={form.timeline} onChange={set("timeline")}>
                    <option value="" disabled>
                      Select...
                    </option>
                    {TIMELINES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>What does success look like?</label>
                  <textarea
                    placeholder="Tell us about the outcome you're looking for..."
                    className={`${inputClass} min-h-20 resize-none`}
                    value={form.goal}
                    onChange={set("goal")}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="flex-1 py-3 rounded-full border border-white/20 text-sm font-medium text-white hover:border-white/40 transition-colors flex items-center justify-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  disabled={!canProceedStep2}
                  onClick={() => goTo(3)}
                  className="flex-1 py-3 rounded-full bg-white text-[#0B3D91] text-sm font-medium disabled:opacity-30 transition-opacity hover:opacity-90 flex items-center justify-center gap-1"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Contact Info ── */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-sm text-white/60">How can we reach you?</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>First name *</label>
                    <input
                      required
                      placeholder="Jane"
                      className={inputClass}
                      value={form.firstName}
                      onChange={set("firstName")}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last name *</label>
                    <input
                      required
                      placeholder="Doe"
                      className={inputClass}
                      value={form.lastName}
                      onChange={set("lastName")}
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className={inputClass}
                    value={form.email}
                    onChange={set("email")}
                  />
                </div>
                <div>
                  <label className={labelClass}>Company / Organization</label>
                  <input
                    placeholder="Acme Inc."
                    className={inputClass}
                    value={form.company}
                    onChange={set("company")}
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className={inputClass}
                    value={form.phone}
                    onChange={set("phone")}
                  />
                </div>
                <div>
                  <label className={labelClass}>How&apos;d you find us?</label>
                  <select
                    className={selectClass}
                    value={form.referralSource}
                    onChange={set("referralSource")}
                  >
                    <option value="" disabled>
                      Select...
                    </option>
                    {REFERRAL_SOURCES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => goTo(2)}
                  className="flex-1 py-3 rounded-full border border-white/20 text-sm font-medium text-white hover:border-white/40 transition-colors flex items-center justify-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  disabled={!canProceedStep3}
                  onClick={() => goTo(4)}
                  className="flex-1 py-3 rounded-full bg-white text-[#0B3D91] text-sm font-medium disabled:opacity-30 transition-opacity hover:opacity-90 flex items-center justify-center gap-1"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Step 4: Pick a Time ── */}
          {step === 4 && (
            <motion.div
              key="step4"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="text-sm text-white/60">
                Pick a time for your {SESSION_TYPES[sessionType].label.toLowerCase()}.
              </p>

              {/* Date picker */}
              <div>
                <label className={labelClass}>Select a date</label>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                  {availableDates.map((date) => {
                    const isSelected =
                      selectedDate?.toDateString() === date.toDateString();
                    return (
                      <button
                        key={date.toISOString()}
                        type="button"
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedTime(null);
                        }}
                        className={`flex-shrink-0 px-4 py-3 rounded-lg border text-center transition-all duration-200 min-w-[100px] ${
                          isSelected
                            ? "border-white/60 bg-white/10"
                            : "border-white/15 hover:border-white/30"
                        }`}
                      >
                        <p className="text-xs font-mono text-white/50">
                          {date.toLocaleDateString("en-US", { weekday: "short" })}
                        </p>
                        <p className="text-sm font-medium text-white mt-0.5">
                          {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <label className={labelClass}>Select a time (Central)</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`px-3 py-2.5 rounded-lg border text-sm transition-all duration-200 ${
                            isSelected
                              ? "border-white/60 bg-white/10 text-white"
                              : "border-white/15 text-white/70 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Prep notes preview */}
              {form.serviceType && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-white/50 mb-2">
                    What to prepare
                  </p>
                  <ul className="space-y-1.5">
                    {PREP_NOTES[form.serviceType as ServiceType]?.map((note, i) => (
                      <li key={i} className="text-sm text-white/70 flex items-start gap-2">
                        <span className="text-white/30 mt-0.5">-</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Summary */}
              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-xl border border-white/10 bg-white/5"
                >
                  <p className="text-xs font-mono uppercase tracking-[0.12em] text-white/50 mb-2">
                    Booking summary
                  </p>
                  <div className="space-y-1 text-sm text-white/80">
                    <p>
                      <Calendar className="w-3.5 h-3.5 inline mr-1.5 text-white/40" />
                      {selectedDate && formatDateShort(selectedDate)} at {selectedTime}
                    </p>
                    <p>
                      <Clock className="w-3.5 h-3.5 inline mr-1.5 text-white/40" />
                      {SESSION_TYPES[sessionType].label} ({SESSION_TYPES[sessionType].duration})
                    </p>
                    <p className="text-white/50">
                      {form.firstName} {form.lastName} &middot; {form.serviceType} &middot;{" "}
                      {form.budget}
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => goTo(3)}
                  className="flex-1 py-3 rounded-full border border-white/20 text-sm font-medium text-white hover:border-white/40 transition-colors flex items-center justify-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  className="flex-1 py-3 rounded-full bg-white text-[#0B3D91] text-sm font-medium disabled:opacity-30 transition-opacity hover:opacity-90 flex items-center justify-center gap-1"
                >
                  Confirm Booking <Check className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
