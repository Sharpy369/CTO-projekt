import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowUpRight,
  Building2,
  CalendarCheck2,
  Clock3,
  DollarSign,
  Gavel,
  Home,
  Stethoscope,
  Wrench,
} from 'lucide-react';

type CaseStudy = {
  niche: string;
  client: string;
  location: string;
  challenge: string;
  outcome: string;
  metrics: Array<{ label: string; value: string }>;
  icon: React.ElementType;
  accent: string;
};

const caseStudies: CaseStudy[] = [
  {
    niche: 'Dental',
    client: 'West Lake Hills Dental',
    location: 'Austin, TX',
    challenge: 'High no-show volume and front desk overload from manual confirmations.',
    outcome: 'Automated reminders and self-scheduling increased patient throughput in 30 days.',
    metrics: [
      { label: 'No-Show Reduction', value: '20%' },
      { label: 'Admin Time Saved', value: '15 hrs/week' },
      { label: 'Recovered Appointments', value: '32 / month' },
    ],
    icon: Stethoscope,
    accent: 'text-cyan-300',
  },
  {
    niche: 'HVAC',
    client: 'ATX Comfort Systems',
    location: 'Austin, TX',
    challenge: 'After-hours emergency calls were going unanswered and leaking high-ticket revenue.',
    outcome: '24/7 AI intake captured urgent jobs and routed details to on-call techs instantly.',
    metrics: [
      { label: 'Found Revenue', value: '$10,000+/mo' },
      { label: 'Emergency Leads Captured', value: '14 / month' },
      { label: 'Response Time', value: '< 60 sec' },
    ],
    icon: Wrench,
    accent: 'text-orange-300',
  },
  {
    niche: 'Law',
    client: 'Austin Legal Group',
    location: 'Austin, TX',
    challenge: 'Intake staff spent 10+ hours/week screening non-viable leads.',
    outcome: 'AI pre-qualification routed only strong-fit cases into attorney calendars.',
    metrics: [
      { label: 'Estimated Case Value', value: '$25,000+' },
      { label: 'Qualified Leads', value: '15 in Month 1' },
      { label: 'Intake Time Reclaimed', value: '12 hrs/week' },
    ],
    icon: Gavel,
    accent: 'text-violet-300',
  },
  {
    niche: 'Real Estate',
    client: 'East Austin Realty',
    location: 'East Austin, TX',
    challenge: 'Agents missed late-night showing requests and repetitive listing inquiries.',
    outcome: 'QR + web bots answered instantly, qualified buyers, and booked viewings 24/7.',
    metrics: [
      { label: 'Viewing Bookings', value: '+25%' },
      { label: 'Qualified Leads', value: '45 / month' },
      { label: 'Time Saved', value: '8 hrs/week' },
    ],
    icon: Home,
    accent: 'text-emerald-300',
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="success-stories" className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <Badge className="bg-blue-600 mb-4 px-3 py-1">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">What This Looks Like in Your Industry</h2>
            <p className="text-slate-400 mt-3 max-w-2xl">
              Simulated trial outcomes based on our strategist&rsquo;s sales assets for Austin niche campaigns.
              These are the exact proof points prospects see during results calls.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-xs text-slate-300">
            <Building2 className="w-4 h-4 text-blue-400" />
            Dental • HVAC • Law • Real Estate
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map(({ niche, client, location, challenge, outcome, metrics, icon: Icon, accent }) => (
            <Card key={client} className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <Icon className={`w-4 h-4 ${accent}`} />
                    {niche}
                  </div>
                  <Badge variant="secondary" className="bg-slate-700 text-slate-200 border-slate-600">
                    {location}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl">{client}</CardTitle>
                  <CardDescription className="text-slate-400 mt-2">{challenge}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-slate-300 mb-5 flex items-start gap-2">
                  <ArrowUpRight className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  {outcome}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-3"
                    >
                      <p className="text-[11px] uppercase tracking-wide text-slate-500 mb-1">{metric.label}</p>
                      <p className="text-sm font-semibold text-slate-100">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <CalendarCheck2 className="w-5 h-5 text-blue-400" />
            <span className="text-slate-300">Built for 7-day &ldquo;Bot vs. Human&rdquo; trials</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <Clock3 className="w-5 h-5 text-orange-400" />
            <span className="text-slate-300">Highlights time savings by team role</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-green-400" />
            <span className="text-slate-300">Connects automation to clear revenue impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
