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

              {/* SEO Meta Info Box */}
              <div className="bg-accent/50 border border-border p-6 rounded mb-8">
                <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-3">SEO Metadata</h4>
                <div className="space-y-2 font-body text-sm">
                  <p><span className="text-foreground font-medium">Meta Title:</span> <span className="text-muted-foreground">{post.metaTitle}</span></p>
                  <p><span className="text-foreground font-medium">Meta Description:</span> <span className="text-muted-foreground">{post.metaDescription}</span></p>
                  <p><span className="text-foreground font-medium">URL Slug:</span> <span className="text-gold">/blog/{post.slug}</span></p>
                  <p><span className="text-foreground font-medium">Primary Keyword:</span> <span className="text-gold font-semibold">{post.primaryKeyword}</span></p>
                  <p><span className="text-foreground font-medium">Secondary Keywords:</span> <span className="text-muted-foreground">{post.secondaryKeywords.join(', ')}</span></p>
                </div>
              </div>

              <div className="w-full h-px bg-border" />
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

          {/* Keyword Research Section */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16">
              <div className="text-center mb-10">
                <span className="section-subtitle block">Academic Research</span>
                <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">
                  Keyword Research <span className="italic text-gold">Documentation</span>
                </h2>
              </div>

              {/* Google Keyword Planner */}
              <div className="mb-10">
                <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  Google Ads Keyword Planner
                </h3>
                <div className="border border-border rounded overflow-hidden mb-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Search Volume</TableHead>
                        <TableHead>Competition</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {post.googleKeywords.map((kw, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{kw.keyword}</TableCell>
                          <TableCell>{kw.searchVolume}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-0.5 rounded text-xs font-body ${
                              kw.competition === 'High' ? 'bg-destructive/10 text-destructive' :
                              kw.competition === 'Medium' ? 'bg-gold/10 text-gold' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {kw.competition}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                {/* Screenshot Placeholder */}
                <div className="p-6 border-2 border-dashed border-gold/30 bg-accent/20 rounded text-center">
                  <p className="font-body text-sm text-muted-foreground">
                    📸 <strong>Screenshot – Google Keyword Planner – {post.category} Blog – February 2025</strong>
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">[Insert screenshot from Google Ads Keyword Planner here]</p>
                </div>
              </div>

              {/* WordStream */}
              <div className="mb-10">
                <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  WordStream Free Keyword Tool
                </h3>
                <div className="border border-border rounded overflow-hidden mb-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Search Volume</TableHead>
                        <TableHead>Competition</TableHead>
                        <TableHead>Trend</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {post.wordstreamKeywords.map((kw, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{kw.keyword}</TableCell>
                          <TableCell>{kw.searchVolume}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-0.5 rounded text-xs font-body ${
                              kw.competition === 'High' ? 'bg-destructive/10 text-destructive' :
                              kw.competition === 'Medium' ? 'bg-gold/10 text-gold' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {kw.competition}
                            </span>
                          </TableCell>
                          <TableCell className="text-xs">{kw.extra}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="p-6 border-2 border-dashed border-gold/30 bg-accent/20 rounded text-center">
                  <p className="font-body text-sm text-muted-foreground">
                    📸 <strong>Screenshot – WordStream – {post.category} Blog – February 2025</strong>
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">[Insert screenshot from WordStream Free Keyword Tool here]</p>
                </div>
              </div>

              {/* SEMrush */}
              <div className="mb-10">
                <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  SEMrush Keyword Analysis
                </h3>
                <div className="border border-border rounded overflow-hidden mb-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Search Volume</TableHead>
                        <TableHead>Keyword Difficulty</TableHead>
                        <TableHead>Difficulty Level</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {post.semrushKeywords.map((kw, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{kw.keyword}</TableCell>
                          <TableCell>{kw.searchVolume}</TableCell>
                          <TableCell>{kw.competition}%</TableCell>
                          <TableCell className="text-xs">{kw.extra}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="p-6 border-2 border-dashed border-gold/30 bg-accent/20 rounded text-center">
                  <p className="font-body text-sm text-muted-foreground">
                    📸 <strong>Screenshot – SEMrush – {post.category} Blog – February 2025</strong>
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">[Insert screenshot from SEMrush Keyword Analysis here]</p>
                </div>
              </div>

              {/* Final Keywords & Justification */}
              <div className="bg-charcoal text-cream p-8 rounded">
                <h3 className="font-display text-xl text-gold-light mb-4">Final Target Keywords Selected</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.finalKeywords.map((kw) => (
                    <span key={kw} className="px-4 py-2 border border-gold/40 text-gold font-body text-sm rounded">
                      {kw}
                    </span>
                  ))}
                </div>
                <h4 className="font-body text-xs uppercase tracking-widest text-cream/60 mb-2">Why These Keywords Were Chosen</h4>
                <p className="font-body text-cream/80 text-sm leading-relaxed">{post.keywordJustification}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Published URL Placeholder */}
          <AnimatedSection delay={0.45}>
            <div className="mt-12 p-6 border border-border rounded">
              <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-3">Published Blog URL</h4>
              <p className="font-body text-sm text-muted-foreground">
                🔗 <strong>Published URL:</strong> <span className="text-gold">[Insert published blog URL here after deployment]</span>
              </p>
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
