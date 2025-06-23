import { NextResponse } from 'next/server';

const messages = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "I told my computer I needed a break, and it said 'no problem, I'll go to sleep.'",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Random number: " + Math.random(),
  "Server time: " + new Date().toISOString(),
];

export async function GET() {
  const random = messages[Math.floor(Math.random() * messages.length)];

  return NextResponse.json({
    message: random,
    timestamp: Date.now(),
  });
}
