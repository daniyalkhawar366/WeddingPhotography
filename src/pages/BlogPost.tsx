import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { blogPosts } from '@/data/blogPosts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="font-display text-3xl md:text-4xl font-light text-foreground mt-12 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="font-display text-2xl font-light text-foreground mt-8 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={key++} className="font-display text-xl font-medium text-foreground mt-6 mb-3">
            {line.replace('#### ', '')}
          </h4>
        );
      } else if (line.startsWith('![')) {
        // Handle markdown image syntax: ![alt](src)
        const imageMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
        if (imageMatch) {
          const [, altText, imageSrc] = imageMatch;
          elements.push(
            <div key={key++} className="my-8">
              <img 
                src={imageSrc} 
                alt={altText} 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          );
        }
      } else if (line.startsWith('[Insert image here')) {
        const altMatch = line.match(/alt text: "([^"]+)"/);
        const altText = altMatch ? altMatch[1] : 'Blog image';
        elements.push(
          <div key={key++} className="my-8 p-8 border-2 border-dashed border-gold/30 bg-accent/30 text-center rounded">
            <div className="text-gold mb-2">📸</div>
            <p className="font-body text-sm text-muted-foreground italic">
              [Insert image here]
            </p>
            <p className="font-body text-xs text-gold mt-1">
              Alt text: "{altText}"
            </p>
          </div>
        );
      } else if (line.startsWith('- **') || line.startsWith('- ✅') || line.startsWith('- ❌')) {
        // Collect consecutive list items
        const listItems: string[] = [line];
        while (i + 1 < lines.length && (lines[i + 1].startsWith('- ') || lines[i + 1].startsWith('  - '))) {
          i++;
          listItems.push(lines[i]);
        }
        elements.push(
          <ul key={key++} className="space-y-2 my-4 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="font-body text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-gold mt-1.5 text-xs">◆</span>
                <span dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^-\s+/, '')
                    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold underline hover:text-gold-light transition-colors">$1</a>')
                }} />
              </li>
            ))}
          </ul>
        );
      } else if (line.startsWith('- ')) {
        const listItems: string[] = [line];
        while (i + 1 < lines.length && lines[i + 1].startsWith('- ')) {
          i++;
          listItems.push(lines[i]);
        }
        elements.push(
          <ul key={key++} className="space-y-2 my-4 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="font-body text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-gold mt-1.5 text-xs">◆</span>
                <span dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^-\s+/, '')
                    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
                    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold underline hover:text-gold-light transition-colors">$1</a>')
                }} />
              </li>
            ))}
          </ul>
        );
      } else if (line.startsWith('| ') && line.includes('|')) {
        // Table handling
        const tableLines: string[] = [line];
        while (i + 1 < lines.length && lines[i + 1].startsWith('|')) {
          i++;
          tableLines.push(lines[i]);
        }
        const headerCells = tableLines[0].split('|').filter(c => c.trim());
        const dataRows = tableLines.slice(2); // skip header and separator
        elements.push(
          <div key={key++} className="my-6 border border-border rounded overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  {headerCells.map((cell, idx) => (
                    <TableHead key={idx}>{cell.trim()}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataRows.map((row, rowIdx) => {
                  const cells = row.split('|').filter(c => c.trim());
                  return (
                    <TableRow key={rowIdx}>
                      {cells.map((cell, cellIdx) => (
                        <TableCell key={cellIdx}>{cell.trim()}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        );
      } else if (line.trim() === '') {
        // skip empty lines
      } else {
        elements.push(
          <p key={key++} className="font-body text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold underline hover:text-gold-light transition-colors">$1</a>')
          }} />
        );
      }
    }
    return elements;
  };

  return (
    <Layout navigationVariant="solid">
      <div className="pt-28 pb-20">
        {/* Back Link */}
        <div className="container mx-auto max-w-4xl px-6 mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="container mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 font-body text-xs uppercase tracking-widest text-gold">
                  <Tag size={12} />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-light text-foreground leading-tight mb-6">
                {post.title}
              </h1>

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </header>
          </AnimatedSection>

          {/* Blog Content */}
          <AnimatedSection delay={0.2}>
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 p-8 bg-charcoal text-cream text-center rounded">
              <h3 className="font-display text-2xl mb-4 text-gold-light">Ready to Take Action?</h3>
              <p className="font-body text-cream/80 max-w-2xl mx-auto mb-6">{post.cta}</p>
              <Link to="/contact" className="btn-hero-primary">
                Book Your Session
              </Link>
            </div>
          </AnimatedSection>

          {/* Internal & External Links */}
          <AnimatedSection delay={0.35}>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 border border-border rounded">
                <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-4">Internal Links</h4>
                <ul className="space-y-2">
                  {post.internalLinks.map((link) => (
                    <li key={link.url}>
                      <Link to={link.url} className="font-body text-sm text-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                        <ArrowLeft size={12} className="rotate-180" />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-border rounded">
                <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-4">External Resources</h4>
                <ul className="space-y-2">
                  {post.externalLinks.map((link) => (
                    <li key={link.url}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
                        <ExternalLink size={12} />
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Navigation to other blogs */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-2xl mb-6 text-center">More Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/blog/${p.slug}`}
                    className="p-6 border border-border rounded group hover:border-gold/50 transition-colors"
                  >
                    <span className="font-body text-xs text-gold uppercase tracking-widest">{p.category}</span>
                    <h4 className="font-display text-lg mt-2 group-hover:text-gold transition-colors">{p.title}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
