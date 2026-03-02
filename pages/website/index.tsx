import { GetStaticProps } from 'next';
import Image from 'next/image';

interface Website {
  slug: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  colors: string[];
  scroll: string;
  date: string;
}

interface WebsiteProps {
  websites: Website[];
}

const Website = ({ title, thumbnail }: { title: string; thumbnail: string }) => {
  return (
    <div>
      <div>
        <Image
          src={`/websites/${thumbnail}`}
          alt={title}
          width={400}
          height={300}
        />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

const WebsitePage = ({ websites }: WebsiteProps) => {
  return (
    <div>
      <h1>Nos Réalisations</h1>
      <div>
        {websites.map((website) => (
          <Website
            key={website.slug}
            title={website.title}
            thumbnail={website.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs');
  const path = require('path');
  
  const filePath = path.join(process.cwd(), 'public', 'websites.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const websites = JSON.parse(jsonData);

  return {
    props: {
      websites,
    },
  };
};

export default WebsitePage;
