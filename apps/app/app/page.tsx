import ClientComponent from "./client";

export default async function Home() {
  return (
    <div>
      <ClientComponent date={new Date()} data-superjson />
    </div>
  );
}
