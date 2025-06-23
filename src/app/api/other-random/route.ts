import { NextResponse } from 'next/server';

const messages = [
  "Why did the developer go broke? Because he used up all his cache.",
  "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Random number: " + Math.random(),
  "Server time: " + new Date().toISOString(),
];

export async function GET() {
  const random = messages[Math.floor(Math.random() * messages.length)];

  console.log('Returning random message:', random);

  return NextResponse.json({
    message: random,
    timestamp: Date.now(),
  });
}
