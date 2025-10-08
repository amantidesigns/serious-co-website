import { NextResponse } from "next/server";
import { z } from "zod";

const intakePayload = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  timeline: z.string(),
  budget: z.string(),
  services: z.array(z.string()),
  goals: z.string(),
  successMetric: z.string(),
  additional: z.string().optional(),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);

  const parsed = intakePayload.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // In a real deployment, push to a CRM or ticketing system.
  console.info("New project intake", parsed.data);

  return NextResponse.json({ status: "ok" });
}
