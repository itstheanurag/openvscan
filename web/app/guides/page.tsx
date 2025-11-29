import { Metadata } from 'next';
import {
  Play,
  FileText,
  Download,
  ArrowRight,
  Terminal,
  Search,
  ShieldCheck,
  BarChart,
  ChevronRight,
  Code,
} from 'lucide-react';
import Link from 'next/link';
import ColorBends from '@/components/ui/ColorBends';
import { SplitText, BlurText } from '@/components/ui/TextAnimations';

export const metadata: Metadata = {
  title: 'Guides - OpenVScan',
  description: 'Step-by-step guides on how to use OpenVScan effectively.',
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ColorBends className="opacity-20" colors={['#1E69DC', '#7033FF', '#000000']} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto mb-6">
            <SplitText
              text="Master OpenVScan"
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4 justify-center"
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <BlurText
              text="Comprehensive guides to help you secure your applications, analyze vulnerabilities, and manage reports."
              className="text-xl text-muted-foreground leading-relaxed"
              delay={0.3}
            />
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <section className="py-16 container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Guide 1: Running a Scan */}
          <div className="group bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Play className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Running a Scan</h2>
            <p className="text-muted-foreground mb-8 min-h-[3rem]">
              Learn how to configure and initiate a vulnerability scan for your web application.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                </div>
                <div className="pb-2">
                  <h4 className="font-semibold text-sm">Dashboard</h4>
                  <p className="text-xs text-muted-foreground">Navigate to the main dashboard.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-secondary text-foreground flex items-center justify-center text-xs font-bold border border-border">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2"></div>
                </div>
                <div className="pb-2">
                  <h4 className="font-semibold text-sm">New Scan</h4>
                  <p className="text-xs text-muted-foreground">Click the "New Scan" button.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-secondary text-foreground flex items-center justify-center text-xs font-bold border border-border">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Target</h4>
                  <p className="text-xs text-muted-foreground">Enter URL or upload file.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Guide 2: Interpreting Findings */}
          <div className="group bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Search className="w-7 h-7 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Analyzing Results</h2>
            <p className="text-muted-foreground mb-8 min-h-[3rem]">
              Understand vulnerability severity levels and use AI to filter false positives.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span className="font-semibold text-sm">Severity Levels</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Findings are categorized as Critical, High, Medium, or Low based on CVSS scores.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Terminal className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold text-sm">AI Analysis</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Click on any finding to see an AI-generated explanation and remediation code.
                </p>
              </div>
            </div>
          </div>

          {/* Guide 3: Exporting Reports */}
          <div className="group bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
              <Download className="w-7 h-7 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Exporting Reports</h2>
            <p className="text-muted-foreground mb-8 min-h-[3rem]">
              Generate comprehensive reports for your team or compliance audits.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border text-center hover:bg-secondary/50 transition-colors cursor-pointer">
                <FileText className="w-8 h-8 mx-auto mb-3 text-red-500" />
                <span className="block font-semibold text-sm">PDF</span>
                <span className="text-xs text-muted-foreground">Executive Summary</span>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border text-center hover:bg-secondary/50 transition-colors cursor-pointer">
                <Code className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
                <span className="block font-semibold text-sm">JSON</span>
                <span className="text-xs text-muted-foreground">Machine Readable</span>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/30 border border-border text-center hover:bg-secondary/50 transition-colors cursor-pointer col-span-2">
                <BarChart className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                <span className="block font-semibold text-sm">CSV / Excel</span>
                <span className="text-xs text-muted-foreground">Data Analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-secondary/20 border border-border backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need more technical details?</h3>
            <p className="text-muted-foreground mb-6">
              Check out our comprehensive documentation on GitHub for advanced configuration, API
              usage, and contribution guidelines.
            </p>
            <Link
              href="https://github.com/Buddhsen-tripathi/openvscan"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Visit GitHub Wiki <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
