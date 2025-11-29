'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github } from 'lucide-react';
import Link from 'next/link';

interface Contributor {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export default function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/Buddhsen-tripathi/openvscan/contributors',
        );
        if (response.ok) {
          const data = await response.json();
          setContributors(data);
        }
      } catch (error) {
        console.error('Failed to fetch contributors', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4">
        {contributors.map((contributor) => (
          <Link
            key={contributor.login}
            href={contributor.html_url}
            target="_blank"
            className="group relative"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300">
              <Image
                src={contributor.avatar_url}
                alt={contributor.login}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-popover text-popover-foreground text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10 pointer-events-none">
              {contributor.login}
            </div>
          </Link>
        ))}
        <Link
          href="https://github.com/Buddhsen-tripathi/openvscan/graphs/contributors"
          target="_blank"
          className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-2 border-transparent hover:border-primary transition-all duration-300 group"
        >
          <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>
    </div>
  );
}
