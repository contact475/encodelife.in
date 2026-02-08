import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts } from "@/lib/blog";

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPage() {
  const sortedBlogs = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-ozean tracking-tight">
            News & Insights
          </h1>
          <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl">
            Discover the latest in sustainable bioplastics and eco-innovation.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlogs.map((blog) => {
            const formattedDate = formatDate(blog.date);

            return (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group block"
              >
                <div className="flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                  {blog.thumbnail && (
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
                      <time>{formattedDate}</time>
                      {blog.author && <span>By {blog.author}</span>}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
