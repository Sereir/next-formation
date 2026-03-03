import { WebsiteType } from "@/types/Website";
import Link from "next/link";

export default function Website({ title, thumbnail, slug }: WebsiteType) {
  return (
    <Link href={`websites/${slug}`}>
      <div>
        <div className="text-xl font-bold ">{title}</div>
        <img src={`/websites/${thumbnail}`} alt={title} />
      </div>
    </Link>
  );
}
