-- Create table for article links
CREATE TABLE public.article_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'general',
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.article_links ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing article links
CREATE POLICY "Anyone can view article links" 
ON public.article_links 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_article_links_updated_at
BEFORE UPDATE ON public.article_links
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample article links
INSERT INTO public.article_links (title, url, description, category, tags, featured) VALUES
('The Complete Guide to React Hooks', 'https://react.dev/reference/react/hooks', 'Comprehensive guide to all React hooks with examples and best practices', 'React', ARRAY['react', 'hooks', 'frontend'], true),
('JavaScript Algorithms and Data Structures', 'https://github.com/trekhleb/javascript-algorithms', 'Algorithms and data structures implemented in JavaScript with explanations', 'DSA', ARRAY['javascript', 'algorithms', 'data-structures'], true),
('System Design Primer', 'https://github.com/donnemartin/system-design-primer', 'Learn how to design large-scale systems', 'System Design', ARRAY['system-design', 'scalability', 'architecture'], true),
('CSS Grid Complete Guide', 'https://css-tricks.com/snippets/css/complete-guide-grid/', 'Complete guide to CSS Grid with visual examples', 'CSS', ARRAY['css', 'grid', 'layout'], false),
('Node.js Best Practices', 'https://github.com/goldbergyoni/nodebestpractices', 'The Node.js best practices list with detailed explanations', 'Backend', ARRAY['nodejs', 'backend', 'best-practices'], true);