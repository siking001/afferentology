import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // This is the data Supabase sends when a "Webhook" triggers
    const { record } = await req.json();

    const title = record.title;
    const content = record.content;
    const slug = record.slug;

    // The "Health Magazine" Logic
    const hasNailInFoot = content.toLowerCase().includes("nail");
    
    const linkedInDraft = `
${title.toUpperCase()} 🔬

Stop treating 'Hardware' (muscles) for a 'Software' (neurological) problem.

${hasNailInFoot ? "📍 The Nail in the Foot: If you have a nail in your heel, you’ll limp. Treating the hip won't fix the foot. Afferentology finds the nail." : ""}

Read the full breakdown:
🔗 https://www.afferentology.org/blog/${slug}

#Afferentology #Neurology #HealthMagazine
    `;

    // For now, we just log it. 
    // You can see this in your Vercel Logs (Dashboard > Project > Logs)
    console.log("--- GENERATED LINKEDIN POST ---");
    console.log(linkedInDraft);

    return NextResponse.json({ success: true, draft: linkedInDraft });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
