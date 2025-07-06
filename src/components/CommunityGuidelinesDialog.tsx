import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CommunityGuidelinesDialogProps {
  children: React.ReactNode;
}

export function CommunityGuidelinesDialog({ children }: CommunityGuidelinesDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-card backdrop-blur-sm border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
            CSE Compass Community Submission Protocol 🛰️
          </DialogTitle>
          <p className="text-muted-foreground">Because every coder deserves their squad.</p>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6">
            {/* TL;DR Section */}
            <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
              <h3 className="text-lg font-semibold mb-2 text-primary">📝 TL;DR:</h3>
              <p className="text-sm text-muted-foreground">
                Wanna showcase your own community on CSE Compass?<br />
                Follow the rules. Don't be a noob. Help others level up.
              </p>
            </div>

            {/* Guidelines Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🚦 Community Guidelines:</h3>
              <p className="text-sm text-muted-foreground mb-4">(Think of this as your API docs for getting listed)</p>

              {/* What We Love */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-accent-green">✅ What We Love:</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2 text-foreground">🧩 Communities that Teach & Inspire:</h5>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-accent-green/20 text-accent-green">DSA wizards ✔️</Badge>
                    <Badge className="bg-primary/20 text-primary">Web Dev pros ✔️</Badge>
                    <Badge className="bg-accent-purple/20 text-accent-purple">Cyber geeks ✔️</Badge>
                    <Badge className="bg-orange-500/20 text-orange-400">AIML overlords ✔️</Badge>
                    <Badge className="bg-blue-500/20 text-blue-400">N8N automators ✔️</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    If you're building something that helps people learn, code, create, or hack (ethically)—we want you.
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2 text-foreground">👾 Zero Toxicity, 100% Inclusivity:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• No gatekeeping.</li>
                    <li>• No elitist nonsense.</li>
                    <li>• Everyone from "hello world" to "kubernetes deploy" is welcome.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium mb-2 text-foreground">⚙️ Active Mods & Signal over Noise:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Your community should feel alive, not like an abandoned repo.</li>
                    <li>• Share resources, memes (nerdy ones), tutorials, projects.</li>
                  </ul>
                </div>
              </div>

              {/* What We Blocklist */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-red-400">❌ What We Blocklist:</h4>
                
                <div className="mb-4">
                  <h5 className="font-medium mb-2 text-foreground">⛔ Trolls & Salt Mines:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• Racism, sexism, hate speech = instant 404.</li>
                    <li>• No drama lords allowed.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h5 className="font-medium mb-2 text-foreground">⛔ Spammy McSpamface:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>• No link farms. No constant product pushing.</li>
                    <li>• Build a real community—not just a billboard.</li>
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium mb-2 text-foreground">⛔ Dead or Illegal Nodes:</h5>
                  <p className="text-sm text-muted-foreground ml-4">
                    If your community is dead or promotes piracy, hacks, or shady stuff—access denied.
                  </p>
                </div>
              </div>

              {/* Submission Packet */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-accent-purple">📤 Submission Packet (Send us your Pull Request):</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  To get your community listed on CSE Compass, drop these deets:
                </p>
                
                <div className="bg-background/50 rounded-lg p-4 border border-border font-mono text-sm">
                  <div className="space-y-2 text-muted-foreground">
                    <div>Community Name: <span className="text-foreground">_________________</span></div>
                    <div>Platform: <span className="text-foreground">(Discord / Telegram / Slack / Forum / Other)</span></div>
                    <div>One-Liner Pitch: <span className="text-foreground">_________________</span></div>
                    <div>Link to Join: <span className="text-foreground">_________________</span></div>
                    <div>Your Name & Contact: <span className="text-foreground">_________________</span></div>
                    <div>Optional Logo/Icon: <span className="text-foreground">(PNG/JPG preferred)</span></div>
                  </div>
                </div>
                
                <div className="mt-3 text-sm text-muted-foreground">
                  👉 Submit via our <span className="text-primary font-medium">[Community Submission Form]</span> or email us:<br />
                  <span className="text-primary font-medium">hello@csecompass.dev</span>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">🕵️ What Happens Next?</h4>
                <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                  <li>• We review manually (yes, with actual humans).</li>
                  <li>• If your community passes the vibe check, you'll get featured.</li>
                  <li>• We run periodic health checks—if your server dies or goes dark side, we'll remove it.</li>
                </ul>
              </div>

              {/* Remember */}
              <div className="bg-gradient-to-r from-primary/10 to-accent-purple/10 rounded-lg p-4 border border-primary/20">
                <h4 className="text-lg font-semibold mb-2 text-foreground">🤖 Remember:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>We're here to build cool things together.</p>
                  <p>If your community is about learning, making, breaking, or hacking (legally)—</p>
                  <p className="text-primary font-medium">Welcome to the club.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}