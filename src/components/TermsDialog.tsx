import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsDialogProps {
  children: React.ReactNode;
}

export function TermsDialog({ children }: TermsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-card backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Terms of Service ⚖️
          </DialogTitle>
          <p className="text-muted-foreground">The legal stuff (written by humans, for humans)</p>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6">
            {/* Last Updated */}
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2024
              </p>
            </div>

            {/* Agreement */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🤝 The Deal</h3>
              <p className="text-sm text-muted-foreground mb-3">
                By using CSE Compass, you agree to these terms. If you don't like them, 
                feel free to close this tab and go build your own resource site (we'd probably link to it).
              </p>
            </div>

            {/* What CSE Compass Is */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🧭 What CSE Compass Is</h3>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• A curated collection of computer science resources</li>
                <li>• Learning roadmaps for different tech paths</li>
                <li>• A directory of developer communities</li>
                <li>• Built by developers, for developers</li>
                <li>• Free to use (because education should be)</li>
              </ul>
            </div>

            {/* What We're NOT */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">❌ What We're NOT</h3>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• A course platform (we just point you to good ones)</li>
                <li>• An official educational institution</li>
                <li>• Responsible if external links break or become trash</li>
                <li>• A job placement service</li>
                <li>• Your personal tech support</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">👤 Your Responsibilities</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-accent-green">✅ Do This:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Use the site for learning and personal growth</li>
                  <li>• Submit quality community suggestions</li>
                  <li>• Be respectful in any interactions</li>
                  <li>• Report broken links or outdated content</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-red-400">❌ Don't Do This:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Scrape our content without permission</li>
                  <li>• Submit spam or malicious links</li>
                  <li>• Try to hack or break the site</li>
                  <li>• Use our platform for illegal activities</li>
                  <li>• Impersonate others or spread misinformation</li>
                </ul>
              </div>
            </div>

            {/* Content and Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🔗 Content & External Links</h3>
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Real Talk:</strong> We curate and link to external resources, but we can't control them.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Links might break (the internet is wild)</li>
                  <li>• Content quality may vary</li>
                  <li>• External sites have their own terms</li>
                  <li>• We remove obviously bad stuff when we find it</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">💡 Intellectual Property</h3>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• <strong>Our Content:</strong> The curation, organization, and original text is ours</li>
                <li>• <strong>External Content:</strong> Belongs to its original creators</li>
                <li>• <strong>Your Submissions:</strong> You keep ownership, but grant us permission to feature them</li>
                <li>• <strong>Open Source:</strong> Our code is probably on GitHub if you want to contribute</li>
              </ul>
            </div>

            {/* Disclaimers */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">⚠️ Disclaimers</h3>
              <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>We provide this service "as is":</strong>
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• No guarantees that resources will make you a coding ninja</li>
                  <li>• No warranty that external links work forever</li>
                  <li>• Success depends on your effort, not our curation</li>
                  <li>• We're not liable if you make bad career decisions based on our roadmaps</li>
                </ul>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">📝 Changes to These Terms</h3>
              <p className="text-sm text-muted-foreground">
                We might update these terms occasionally. If we make major changes, 
                we'll update the date at the top. No dramatic email announcements.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🚪 Termination</h3>
              <p className="text-sm text-muted-foreground">
                You can stop using our service anytime (no hard feelings). 
                We can remove content or block access if you violate these terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg p-4 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2 text-foreground">📧 Questions or Issues?</h4>
              <p className="text-sm text-muted-foreground">
                Got questions about these terms? Found something confusing? Let us know:<br />
                <span className="text-primary font-medium">legal@csecompass.dev</span><br />
                (Yes, we actually read these emails)
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}