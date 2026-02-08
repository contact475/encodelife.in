import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  summary: string;
  label?: string;
  author?: string;
  published: string;
  url: string;
  image: string;
}

interface Blog7Props {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl?: string;
  posts: Post[];
}

const Blog7 = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "/blog",
  posts = [],
}: Blog7Props) => {
  return (
    <section className="py-12 md:py-32">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4 md:gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-3 text-xs md:mb-6 md:text-sm">
            {tagline}
          </Badge>
          <h2 className="mb-2 text-pretty text-3xl font-semibold italic font-newsreader md:mb-3 md:text-5xl md:mb-4 md:text-6xl lg:mb-6 lg:max-w-3xl lg:text-7xl">
            {heading}
          </h2>
          <p className="mb-4 text-sm text-muted-foreground md:mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
          <Button variant="link" className="w-full text-sm md:text-base sm:w-auto" asChild>
            <Link href={buttonUrl}>
              {buttonText}
              <ArrowRight className="ml-2 size-3 md:size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] hover:shadow-lg transition-shadow">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <Link
                  href={post.url}
                  className="block h-full transition-opacity duration-200 hover:opacity-90"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <CardHeader className="p-3 md:p-6">
                <h3 className="text-base font-semibold hover:text-primary transition-colors md:text-lg md:text-xl">
                  <Link href={post.url}>
                    {post.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent className="p-3 pt-0 md:p-6 md:pt-0">
                <p className="text-sm text-muted-foreground line-clamp-3 md:text-base">{post.summary}</p>
              </CardContent>
              <CardFooter className="p-3 md:p-6">
                <Link
                  href={post.url}
                  className="flex items-center text-sm text-foreground hover:text-primary transition-colors md:text-base"
                >
                  Read more
                  <ArrowRight className="ml-2 size-3 md:size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog7 };
