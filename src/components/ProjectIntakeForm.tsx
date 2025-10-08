"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { serviceGroups } from "@/lib/content/services";

const intakeSchema = z.object({
  name: z.string().min(2, "Tell us who to respond to."),
  email: z.string().email("We need a working email."),
  company: z.string().min(1, "Add your company or project name."),
  timeline: z.string().min(1, "Pick a timeline."),
  budget: z.string().min(1, "Estimate the budget range."),
  services: z.array(z.string()).min(1, "Select at least one focus."),
  goals: z.string().min(10, "Give us the short version of what success looks like."),
  successMetric: z.string().min(3, "How will you know it worked?"),
  additional: z.string().optional(),
});

type IntakeFormValues = z.infer<typeof intakeSchema>;

type StepConfig = {
  id: string;
  title: string;
  description: string;
  fields: Array<keyof IntakeFormValues>;
};

const STEPS: StepConfig[] = [
  {
    id: "basics",
    title: "Start with the essentials",
    description: "We respond within 24 hours. No autoresponders.",
    fields: ["name", "email", "company"],
  },
  {
    id: "scope",
    title: "Scope the build",
    description: "Rough ranges are enough—we’ll fine tune live.",
    fields: ["timeline", "budget", "services"],
  },
  {
    id: "goals",
    title: "Define success",
    description: "Tell us why this matters and what a win looks like.",
    fields: ["goals", "successMetric", "additional"],
  },
  {
    id: "review",
    title: "Review & send",
    description: "Double-check the details before it hits our inbox.",
    fields: [],
  },
];

const timelineOptions = [
  { value: "fast", label: "We needed this yesterday" },
  { value: "month", label: "2-4 weeks" },
  { value: "quarter", label: "1-3 months" },
  { value: "flex", label: "Timeline is flexible" },
];

const budgetOptions = [
  { value: "under-15k", label: "$8k - $15k" },
  { value: "15k-35k", label: "$15k - $35k" },
  { value: "35k-75k", label: "$35k - $75k" },
  { value: "above-75k", label: "$75k+" },
];

export function ProjectIntakeForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const currentStep = STEPS[stepIndex];

  const form = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      timeline: "",
      budget: "",
      services: [],
      goals: "",
      successMetric: "",
      additional: "",
    },
  });

  const servicesByTitle = useMemo(
    () =>
      serviceGroups.flatMap((group) =>
        group.services.map((service) => ({
          value: `${group.title} – ${service.title}`,
          title: service.title,
          group: group.title,
        })),
      ),
    [],
  );

  const { register, handleSubmit, trigger, watch, setValue, getValues, formState } = form;

  const watchedServices = watch("services");

  const progress = (stepIndex / (STEPS.length - 1)) * 100;

  const nextStep = async () => {
    const requiredFields = currentStep.fields;
    if (requiredFields.length > 0) {
      const valid = await trigger(requiredFields, { shouldFocus: true });
      if (!valid) return;
    }
    setStepIndex((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async (values: IntakeFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/project-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      setIsComplete(true);
    } catch (error) {
      console.error(error);
      form.setError("name", { type: "manual", message: "We couldn't send this. Email us instead at hello@averyseriouscompany.com." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleService = (value: string) => {
    const current = new Set(watchedServices);
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    setValue("services", Array.from(current));
  };

  if (isComplete) {
    const submitted = getValues();
    return (
      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Project intake</p>
          <h3 className="text-2xl font-light">Thanks. We'll reach out next.</h3>
          <p className="text-sm text-white/70">
            Expect a response from our team at <span className="font-medium text-white">{submitted.email}</span> within one business day. If it's urgent, email us directly at hello@averyseriouscompany.com.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 rounded-3xl border border-white/10 bg-black/50 p-8 text-white backdrop-blur" id="project-intake">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Start a project</p>
        <h2 className="text-3xl font-light">Tell us what you need. We’ll take it seriously.</h2>
        <p className="text-sm text-white/70">{currentStep.description}</p>
        <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-white via-white/80 to-white/40" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="space-y-6">
        {currentStep.id === "basics" && (
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col space-y-2 md:col-span-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Your name</span>
              <Input placeholder="Amanti, Robera, Liban..." {...register("name")} aria-invalid={!!formState.errors.name} />
              {formState.errors.name && <span className="text-xs text-red-300">{formState.errors.name.message}</span>}
            </label>
            <label className="flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Email</span>
              <Input type="email" placeholder="you@company.com" {...register("email")} aria-invalid={!!formState.errors.email} />
              {formState.errors.email && <span className="text-xs text-red-300">{formState.errors.email.message}</span>}
            </label>
            <label className="flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Company / project</span>
              <Input placeholder="What do we call this?" {...register("company")} aria-invalid={!!formState.errors.company} />
              {formState.errors.company && <span className="text-xs text-red-300">{formState.errors.company.message}</span>}
            </label>
          </div>
        )}

        {currentStep.id === "scope" && (
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Timeline</span>
              <RadioGroup
                value={watch("timeline")}
                onValueChange={(value) => setValue("timeline", value, { shouldValidate: true })}
                className="grid gap-3 sm:grid-cols-2"
              >
                {timelineOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                  </label>
                ))}
              </RadioGroup>
              {formState.errors.timeline && <span className="text-xs text-red-300">{formState.errors.timeline.message}</span>}
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Budget range</span>
              <RadioGroup
                value={watch("budget")}
                onValueChange={(value) => setValue("budget", value, { shouldValidate: true })}
                className="grid gap-3 sm:grid-cols-2"
              >
                {budgetOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/[0.08]"
                  >
                    <RadioGroupItem value={option.value} />
                    <span>{option.label}</span>
                  </label>
                ))}
              </RadioGroup>
              {formState.errors.budget && <span className="text-xs text-red-300">{formState.errors.budget.message}</span>}
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">What do you need?</span>
              <div className="grid gap-3 sm:grid-cols-2">
                {servicesByTitle.map((service) => {
                  const checked = watchedServices.includes(service.value);
                  return (
                    <button
                      type="button"
                      key={service.value}
                      onClick={() => toggleService(service.value)}
                      className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        checked
                          ? "border-white/40 bg-white/15 text-white"
                          : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/30 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="block text-xs uppercase tracking-[0.3em] text-white/50">{service.group}</span>
                      <span className="mt-1 block text-white">{service.title}</span>
                    </button>
                  );
                })}
              </div>
              {formState.errors.services && <span className="text-xs text-red-300">{formState.errors.services.message}</span>}
            </div>
          </div>
        )}

        {currentStep.id === "goals" && (
          <div className="space-y-6">
            <label className="flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Goals</span>
              <Textarea
                rows={4}
                placeholder="Give us the straight story. What's happening and what needs to change?"
                {...register("goals")}
                aria-invalid={!!formState.errors.goals}
              />
              {formState.errors.goals && <span className="text-xs text-red-300">{formState.errors.goals.message}</span>}
            </label>
            <label className="flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Success looks like</span>
              <Textarea
                rows={3}
                placeholder="The metric, reaction, or outcome that tells you it worked."
                {...register("successMetric")}
                aria-invalid={!!formState.errors.successMetric}
              />
              {formState.errors.successMetric && (
                <span className="text-xs text-red-300">{formState.errors.successMetric.message}</span>
              )}
            </label>
            <label className="flex flex-col space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">Anything else?</span>
              <Textarea rows={3} placeholder="Links, must-haves, non-negotiables." {...register("additional")}></Textarea>
            </label>
          </div>
        )}

        {currentStep.id === "review" && (
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/80">
            <div>
              <h3 className="text-lg font-light text-white">Recap</h3>
              <p className="text-white/60">Make sure everything looks right before you send it.</p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Name</dt>
                <dd className="text-white">{watch("name")}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Email</dt>
                <dd className="text-white">{watch("email")}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Company</dt>
                <dd className="text-white">{watch("company")}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Timeline</dt>
                <dd className="text-white">{timelineOptions.find((option) => option.value === watch("timeline"))?.label ?? ""}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Budget</dt>
                <dd className="text-white">{budgetOptions.find((option) => option.value === watch("budget"))?.label ?? ""}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Focus areas</dt>
                <dd className="text-white">
                  {watchedServices.length ? watchedServices.join(", ") : "Not specified"}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Goals</dt>
                <dd className="text-white/80">{watch("goals")}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Success looks like</dt>
                <dd className="text-white/80">{watch("successMetric")}</dd>
              </div>
              {watch("additional") && (
                <div className="sm:col-span-2">
                  <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-white/50">Notes</dt>
                  <dd className="text-white/80">{watch("additional")}</dd>
                </div>
              )}
            </dl>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs uppercase tracking-[0.3em] text-white/50">
          Step {stepIndex + 1} of {STEPS.length}
        </div>
        <div className="flex gap-3">
          {stepIndex > 0 && (
            <Button
              type="button"
              variant="ghost"
              className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={prevStep}
            >
              Back
            </Button>
          )}
          {stepIndex < STEPS.length - 1 && (
            <Button
              type="button"
              className="bg-white/10 text-white hover:bg-white/20"
              onClick={nextStep}
            >
              Next
            </Button>
          )}
          {stepIndex === STEPS.length - 1 && (
            <Button type="submit" disabled={isSubmitting} className="bg-white text-blue-900 hover:bg-white/90">
              {isSubmitting ? "Sending..." : "Send the project"}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
