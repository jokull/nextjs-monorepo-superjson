"use client";

export default function ClientComponent({ date }: { date: Date }) {
  return <div>{date.toLocaleDateString()}</div>;
}
