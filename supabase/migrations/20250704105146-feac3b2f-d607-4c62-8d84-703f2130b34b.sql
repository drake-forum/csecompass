-- Create enum for resource types
CREATE TYPE resource_type AS ENUM ('roadmap', 'course', 'tutorial', 'tool', 'cheat_sheet', 'project_idea');

-- Create enum for difficulty levels
CREATE TYPE difficulty_level AS ENUM ('beginner', 'intermediate', 'advanced', 'expert');

-- Create enum for event types
CREATE TYPE event_type AS ENUM ('hackathon', 'contest', 'workshop', 'webinar', 'conference');

-- Create resources table
CREATE TABLE public.resources (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    type resource_type NOT NULL,
    difficulty difficulty_level,
    resources TEXT[] DEFAULT '{}',
    url TEXT,
    featured BOOLEAN DEFAULT false,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create roadmaps table
CREATE TABLE public.roadmaps (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[] DEFAULT '{}',
    difficulty difficulty_level NOT NULL,
    duration TEXT,
    featured BOOLEAN DEFAULT false,
    tags TEXT[] DEFAULT '{}',
    roadmap_url TEXT,
    download_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT,
    category TEXT NOT NULL,
    read_time TEXT,
    featured BOOLEAN DEFAULT false,
    tags TEXT[] DEFAULT '{}',
    published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create events table
CREATE TABLE public.events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    type event_type NOT NULL,
    date_start TIMESTAMP WITH TIME ZONE,
    date_end TIMESTAMP WITH TIME ZONE,
    location TEXT,
    is_online BOOLEAN DEFAULT false,
    registration_url TEXT,
    featured BOOLEAN DEFAULT false,
    tags TEXT[] DEFAULT '{}',
    organizer TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roadmaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no auth required for viewing)
CREATE POLICY "Anyone can view resources" ON public.resources FOR SELECT USING (true);
CREATE POLICY "Anyone can view roadmaps" ON public.roadmaps FOR SELECT USING (true);
CREATE POLICY "Anyone can view blog posts" ON public.blog_posts FOR SELECT USING (true);
CREATE POLICY "Anyone can view events" ON public.events FOR SELECT USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_resources_updated_at
    BEFORE UPDATE ON public.resources
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_roadmaps_updated_at
    BEFORE UPDATE ON public.roadmaps
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON public.events
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for resources
INSERT INTO public.resources (title, description, category, type, difficulty, resources, featured, tags) VALUES
('Data Structures & Algorithms Roadmap', 'Complete roadmap for mastering DSA with curated resources and practice problems.', 'DSA', 'roadmap', 'beginner', ARRAY['LeetCode', 'GeeksforGeeks', 'Striver SDE Sheet'], true, ARRAY['algorithms', 'data-structures', 'interview-prep']),
('Full Stack Web Development', 'Learn React, Node.js, MongoDB and build real-world projects.', 'Web Dev', 'course', 'intermediate', ARRAY['FreeCodeCamp', 'The Odin Project', 'MDN Docs'], true, ARRAY['react', 'nodejs', 'mongodb', 'fullstack']),
('Machine Learning Fundamentals', 'Start your AI/ML journey with Python, scikit-learn, and TensorFlow.', 'AI/ML', 'course', 'intermediate', ARRAY['Coursera', 'Kaggle Learn', 'Fast.ai'], false, ARRAY['python', 'machine-learning', 'tensorflow']),
('Cybersecurity Essentials', 'Learn ethical hacking, network security, and penetration testing.', 'Cyber Security', 'roadmap', 'intermediate', ARRAY['TryHackMe', 'HackTheBox', 'OWASP'], false, ARRAY['cybersecurity', 'ethical-hacking', 'penetration-testing']),
('React Native Mobile Development', 'Build cross-platform mobile apps using React Native and Expo.', 'App Dev', 'tutorial', 'intermediate', ARRAY['React Native Docs', 'Expo', 'YouTube'], false, ARRAY['react-native', 'mobile', 'cross-platform']),
('AWS Cloud Computing', 'Master cloud services with AWS fundamentals and hands-on projects.', 'Cloud & DevOps', 'course', 'intermediate', ARRAY['AWS Training', 'Cloud Guru', 'YouTube'], true, ARRAY['aws', 'cloud', 'devops']);

-- Insert sample data for roadmaps
INSERT INTO public.roadmaps (title, description, technologies, difficulty, duration, featured, tags) VALUES
('Frontend Developer Roadmap 2024', 'Complete path from beginner to advanced frontend developer', ARRAY['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'], 'beginner', '6-12 months', true, ARRAY['frontend', 'web-development']),
('Backend Developer Roadmap', 'Master server-side development with modern technologies', ARRAY['Node.js', 'Express', 'Database', 'APIs', 'Deployment'], 'intermediate', '8-14 months', true, ARRAY['backend', 'server-side']),
('Data Structures & Algorithms', 'Comprehensive DSA roadmap for competitive programming and interviews', ARRAY['Arrays', 'Trees', 'Graphs', 'DP', 'Greedy'], 'beginner', '4-8 months', false, ARRAY['dsa', 'algorithms']),
('DevOps Engineer Roadmap', 'Learn CI/CD, containerization, and cloud infrastructure', ARRAY['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'], 'advanced', '6-10 months', false, ARRAY['devops', 'cloud']),
('Machine Learning Engineer', 'From Python basics to deploying ML models in production', ARRAY['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Statistics'], 'intermediate', '8-12 months', true, ARRAY['machine-learning', 'ai']),
('Cybersecurity Specialist', 'Comprehensive security roadmap covering ethical hacking to defense', ARRAY['Network Security', 'Penetration Testing', 'OSINT', 'Forensics'], 'intermediate', '10-16 months', false, ARRAY['cybersecurity', 'ethical-hacking']);

-- Insert sample data for blog posts
INSERT INTO public.blog_posts (title, excerpt, category, read_time, featured, tags) VALUES
('The Future of Web Development in 2024', 'Exploring emerging trends, technologies, and frameworks that will shape web development this year.', 'Web Dev', '5 min read', true, ARRAY['React', 'Next.js', 'AI', 'WebAssembly']),
('Master Data Structures: A Complete Guide', 'Everything you need to know about fundamental data structures for competitive programming and interviews.', 'DSA', '12 min read', true, ARRAY['Arrays', 'Trees', 'Graphs', 'Interview Prep']),
('AI and Machine Learning Trends to Watch', 'Latest developments in AI/ML that every tech student should be aware of in 2024.', 'AI/ML', '8 min read', false, ARRAY['AI', 'Machine Learning', 'Trends', 'Career']),
('Building Secure Applications: Security Best Practices', 'Essential security practices every developer should implement in their applications.', 'Cyber Security', '10 min read', false, ARRAY['Security', 'Best Practices', 'OWASP', 'Development']),
('Cloud Computing for Beginners: AWS vs Azure vs GCP', 'Comprehensive comparison of major cloud platforms and how to choose the right one.', 'Cloud & DevOps', '15 min read', true, ARRAY['AWS', 'Azure', 'GCP', 'Cloud', 'Comparison']);

-- Insert sample data for events
INSERT INTO public.events (title, description, type, date_start, date_end, is_online, registration_url, featured, tags, organizer) VALUES
('Global Hackathon 2024', 'Join developers worldwide in this 48-hour coding marathon to build innovative solutions.', 'hackathon', '2024-03-15 09:00:00+00', '2024-03-17 18:00:00+00', true, 'https://globalhackathon.dev', true, ARRAY['hackathon', 'coding', 'innovation'], 'TechCorp'),
('AI/ML Workshop Series', 'Learn machine learning fundamentals with hands-on projects and expert guidance.', 'workshop', '2024-02-20 14:00:00+00', '2024-02-20 17:00:00+00', true, 'https://aiworkshop.com', true, ARRAY['ai', 'machine-learning', 'workshop'], 'AI Institute'),
('Cybersecurity Contest 2024', 'Test your security skills in this capture-the-flag style competition.', 'contest', '2024-04-10 10:00:00+00', '2024-04-10 20:00:00+00', false, 'https://cybercontest.org', false, ARRAY['cybersecurity', 'ctf', 'competition'], 'SecureTech'),
('React Conference 2024', 'The biggest React conference featuring talks from core team members and industry experts.', 'conference', '2024-05-25 09:00:00+00', '2024-05-27 18:00:00+00', false, 'https://reactconf.dev', true, ARRAY['react', 'frontend', 'conference'], 'React Foundation'),
('DevOps Webinar: Kubernetes Best Practices', 'Learn advanced Kubernetes deployment strategies and monitoring techniques.', 'webinar', '2024-03-05 15:00:00+00', '2024-03-05 16:30:00+00', true, 'https://devopswebinar.com', false, ARRAY['devops', 'kubernetes', 'webinar'], 'CloudMasters');
