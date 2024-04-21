import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
