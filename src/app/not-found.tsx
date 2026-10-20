import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-x py-40">
      <h1 className="text-5xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist. Head back home or browse our work.</p>
      <div className="mt-8 flex gap-3"><Button href="/">Go home</Button><Button href="/work/websites" variant="secondary">Our work</Button></div>
    </div>
  );
}
