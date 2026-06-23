type IntakePayload = {
  submittedAt: string;
  source: string;
  answers: Record<string, string>;
};

export async function POST(request: Request) {
  const body = (await request.json()) as IntakePayload;

  const prompt = [
    'You are a business systems analyst.',
    'Summarize this intake and produce a workflow discovery document.',
    '',
    JSON.stringify(body, null, 2),
  ].join('\n');

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
    },
    body: JSON.stringify({
      model: 'gpt-4.1',
      input: prompt,
    }),
  });

  if (!response.ok) {
    return Response.json(
      { ok: false, error: 'OpenAI request failed' },
      { status: 500 }
    );
  }

  const result = await response.json();

  return Response.json({
    ok: true,
    intake: body,
    result,
  });
}
