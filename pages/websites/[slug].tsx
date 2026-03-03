import WebsiteHeader from "@/components/ui/WebsiteHeader";
import { WebsiteType } from "@/types/Website";
import fs from "fs";
import path from "path";

export async function getStaticPaths() {
  const websites: WebsiteType[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "public", "websites.json"), "utf-8")
  );
  const paths = websites.map((w) => ({
    params: { slug: w.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const websites: WebsiteType[] = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "public", "websites.json"), "utf-8")
  );
  const currentWebsite = websites.find((w) => w.slug === slug);
  if (!currentWebsite) return { notFound: true };

  return { props: { website: currentWebsite } };
}

type WebsitePageType = {
  website: WebsiteType;
};

export default function WebsitePage({ website }: WebsitePageType) {
  return (
    <main>
      <WebsiteHeader website={website} />
    </main>
  );
}
