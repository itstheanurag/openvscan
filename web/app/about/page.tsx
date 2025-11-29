import { Metadata } from 'next';
import { Shield, Zap, Database, Brain, Code, Users, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ColorBends from '@/components/ui/ColorBends';
import { SplitText, BlurText } from '@/components/ui/TextAnimations';
import Contributors from '@/components/Contributors';
import SpotlightButton from '@/components/ui/SpotlightButton';

export const metadata: Metadata = {
  title: 'About OpenVScan',
  description: 'Learn about OpenVScan, a community-driven security project.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ColorBends className="opacity-20" colors={['#7033FF', '#1E69DC', '#E2EBFF']} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border backdrop-blur-sm mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium">Community Driven</span>
          </div>

          <div className="max-w-4xl mx-auto mb-6">
            <SplitText
              text="OpenVScan"
              className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 justify-center"
            />
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <BlurText
              text="An online community-driven project that lets you scan your project for security and package vulnerabilities through package scanning, online database checks, and LLM analysis."
              className="text-xl text-muted-foreground leading-relaxed"
              delay={0.3}
            />
          </div>

          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Link href="https://github.com/Buddhsen-tripathi/openvscan" target="_blank">
              <SpotlightButton className="bg-foreground text-background hover:bg-foreground/90 border-transparent">
                <Github className="w-4 h-4 mr-2" />
                Contribute on GitHub
              </SpotlightButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Who is it for */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who is OpenVScan for?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're building a side project or maintaining a large open-source library,
              security matters.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Developers</h3>
                  <p className="text-muted-foreground">
                    Catch vulnerabilities early in your development workflow before they reach
                    production.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Security Researchers</h3>
                  <p className="text-muted-foreground">
                    Automate routine checks and focus on complex analysis with our AI-assisted
                    tools.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Open Source Maintainers</h3>
                  <p className="text-muted-foreground">
                    Keep your community safe by ensuring your project dependencies are secure and up
                    to date.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">scan_results.json</div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex justify-between text-green-500">
                  <span>✓ Package Analysis</span>
                  <span>Done (0.4s)</span>
                </div>
                <div className="flex justify-between text-green-500">
                  <span>✓ Database Sync</span>
                  <span>Done (1.2s)</span>
                </div>
                <div className="flex justify-between text-blue-500 animate-pulse">
                  <span>➤ LLM Verification</span>
                  <span>Processing...</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="text-muted-foreground mb-2">// Vulnerability Found</div>
                  <div className="bg-red-500/10 text-red-500 p-3 rounded border border-red-500/20">
                    High Severity: Prototype Pollution in 'minimist'
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Product Roadmap</h2>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {/* Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">01</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-border bg-card shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="font-bold text-lg">Foundation</div>
                  <span className="text-xs font-medium px-2 py-1 bg-green-500/10 text-green-500 rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Core scanning engine, basic web UI, and integration with popular open-source
                  scanners (Trivy, Grype).
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">02</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-border bg-card shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="font-bold text-lg">AI Integration</div>
                  <span className="text-xs font-medium px-2 py-1 bg-blue-500/10 text-blue-500 rounded-full">
                    In Progress
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Implementing LLM-based analysis to interpret scan results, explain
                  vulnerabilities, and suggest remediation steps.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-muted-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-bold text-xs">03</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl border border-border bg-card shadow-sm opacity-60">
                <div className="flex items-center justify-between space-x-2 mb-2">
                  <div className="font-bold text-lg">Enterprise Features</div>
                  <span className="text-xs font-medium px-2 py-1 bg-secondary text-muted-foreground rounded-full">
                    Planned
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Team collaboration, advanced reporting, CI/CD integrations, and policy management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Contributors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            OpenVScan is made possible by these amazing people.
          </p>

          <Contributors />

          <div className="mt-12">
            <Link
              href="https://github.com/Buddhsen-tripathi/openvscan/graphs/contributors"
              target="_blank"
              className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
            >
              View all contributors on GitHub <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
