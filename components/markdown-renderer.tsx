"use client";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown parser
  const parseMarkdown = (text: string) => {
    let html = text;

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold mt-8 mb-4">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-10 mb-6">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-8">$1</h1>');

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');

    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2">$1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>');

    // Wrap consecutive list items
    html = html.replace(/(<li.*?<\/li>\n?)+/g, (match) => {
      if (match.includes('list-decimal')) {
        return `<ol class="list-decimal ml-6 my-4 space-y-2">${match}</ol>`;
      }
      return `<ul class="list-disc ml-6 my-4 space-y-2">${match}</ul>`;
    });

    // Paragraphs (lines that don't start with special characters)
    html = html.replace(/^(?!<[h|u|o|l])(.*$)/gim, (match) => {
      if (match.trim() === '') return '<br />';
      if (match.startsWith('<')) return match;
      return `<p class="mb-4 leading-relaxed">${match}</p>`;
    });

    return html;
  };

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
    />
  );
}
