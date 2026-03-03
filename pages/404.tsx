import { ButtonLink } from "@/components/ui/ButtonLink";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-20 text-center">
      <p className="text-8xl font-bold text-dark">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-dark">
        Page introuvable
      </h1>
      <p className="mt-3 text-medium-light max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <ButtonLink href="/" variant="filled" color="dark">
          Retour à l&apos;accueil
        </ButtonLink>
      </div>
    </main>
  );
}
