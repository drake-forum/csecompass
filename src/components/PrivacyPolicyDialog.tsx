import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  children: React.ReactNode;
}

export function PrivacyPolicyDialog({ children }: PrivacyPolicyDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-card backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            Privacy Policy 🔒
          </DialogTitle>
          <p className="text-muted-foreground">How we handle your data (spoiler: we barely collect any)</p>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6">
            {/* Last Updated */}
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2024
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">📊 Information We Collect</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-accent-green">✅ What We Actually Store:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Basic analytics (page views, click events) - anonymized</li>
                  <li>• Error logs to fix bugs (no personal data)</li>
                  <li>• Community submissions you voluntarily send us</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2 text-red-400">❌ What We DON'T Store:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Personal information (unless you give it to us)</li>
                  <li>• Email addresses (we don't have a newsletter)</li>
                  <li>• Location data</li>
                  <li>• Browser fingerprinting</li>
                  <li>• Social media stalking</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🛠️ How We Use Information</h3>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• <strong>Analytics:</strong> To understand which resources are helpful</li>
                <li>• <strong>Bug Fixes:</strong> To make the site work better</li>
                <li>• <strong>Community Listings:</strong> To feature communities you submit</li>
                <li>• <strong>That's it.</strong> We're not building user profiles or selling data.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🍪 Cookies & Tracking</h3>
              <div className="bg-background/50 rounded-lg p-4 border border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Essential Cookies Only:</strong> We use minimal cookies for:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Theme preferences (dark/light mode)</li>
                  <li>• Basic session management</li>
                  <li>• Nothing creepy or invasive</li>
                </ul>
              </div>
            </div>

            {/* Third Party Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🔗 Third-Party Services</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We use these external services (they have their own privacy policies):
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• <strong>Supabase:</strong> Database hosting (for resources/roadmaps)</li>
                <li>• <strong>Vercel/Netlify:</strong> Website hosting</li>
                <li>• <strong>GitHub:</strong> Code repository links</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">⚖️ Your Rights</h3>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• <strong>Access:</strong> Ask what data we have (hint: probably none)</li>
                <li>• <strong>Delete:</strong> Request data deletion</li>
                <li>• <strong>Correct:</strong> Fix any wrong information</li>
                <li>• <strong>Object:</strong> Stop processing your data</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3 ml-4">
                Email us at: <span className="text-primary font-medium">privacy@csecompass.dev</span>
              </p>
            </div>

            {/* Changes */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">📝 Policy Changes</h3>
              <p className="text-sm text-muted-foreground">
                If we update this policy, we'll post the changes here. No email spam or popup notifications.
                Just check this page occasionally if you care about updates.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg p-4 border border-primary/20">
              <h4 className="text-lg font-semibold mb-2 text-foreground">📧 Questions?</h4>
              <p className="text-sm text-muted-foreground">
                We're developers, not lawyers. If something doesn't make sense, just ask:<br />
                <span className="text-primary font-medium">hello@csecompass.dev</span>
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}