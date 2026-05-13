'use client';

import React, { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building2, Gavel, Home, TrendingUp } from 'lucide-react';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export default function LawRealEstateROICalculators() {
  const [avgCaseValue, setAvgCaseValue] = useState(12000);
  const [afterHoursLeads, setAfterHoursLeads] = useState(20);
  const [qualifiedRate, setQualifiedRate] = useState(35);

  const [avgCommission, setAvgCommission] = useState(9000);
  const [monthlyInquiries, setMonthlyInquiries] = useState(120);
  const [aiInquiryToShowing, setAiInquiryToShowing] = useState(18);
  const [aiShowingToClose, setAiShowingToClose] = useState(12);

  const lawMetrics = useMemo(() => {
    const qualifiedLeads = afterHoursLeads * (qualifiedRate / 100);
    const monthlyRevenue = qualifiedLeads * avgCaseValue;
    const annualRevenue = monthlyRevenue * 12;

    return {
      qualifiedLeads,
      monthlyRevenue,
      annualRevenue,
    };
  }, [avgCaseValue, afterHoursLeads, qualifiedRate]);

  const realEstateMetrics = useMemo(() => {
    const aiDeals = monthlyInquiries * (aiInquiryToShowing / 100) * (aiShowingToClose / 100);
    const aiRevenue = aiDeals * avgCommission;

    const manualInquiryToShowing = 10;
    const manualShowingToClose = 7;
    const manualDeals = monthlyInquiries * (manualInquiryToShowing / 100) * (manualShowingToClose / 100);
    const manualRevenue = manualDeals * avgCommission;

    return {
      aiDeals,
      aiRevenue,
      monthlyUplift: Math.max(aiRevenue - manualRevenue, 0),
      annualUplift: Math.max(aiRevenue - manualRevenue, 0) * 12,
    };
  }, [avgCommission, monthlyInquiries, aiInquiryToShowing, aiShowingToClose]);

  return (
    <section id="legal-realestate-roi" className="py-20 bg-slate-50 border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-indigo-100 text-indigo-700 border border-indigo-200 mb-4 px-3 py-1">
            Niche ROI Closers
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Show the Revenue Hidden in Slow Follow-Up
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto mt-3">
            Interactive calculators for law and real estate prospects. Demonstrate how instant intake and response speed
            turn missed opportunities into retained clients and booked showings.
          </p>
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          <Card className="shadow-xl border-indigo-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Gavel className="w-5 h-5 text-indigo-600" />
                Law Firm ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="avgCaseValue">Average Case Value</Label>
                <Input
                  id="avgCaseValue"
                  type="number"
                  min={1000}
                  step={500}
                  value={avgCaseValue}
                  onChange={(e) => setAvgCaseValue(Number(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="afterHoursLeads">After-Hours Leads per Month</Label>
                <Input
                  id="afterHoursLeads"
                  type="number"
                  min={0}
                  step={1}
                  value={afterHoursLeads}
                  onChange={(e) => setAfterHoursLeads(Number(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="qualifiedRate">Qualified Intake Rate (%)</Label>
                <Input
                  id="qualifiedRate"
                  type="number"
                  min={1}
                  max={100}
                  step={1}
                  value={qualifiedRate}
                  onChange={(e) => setQualifiedRate(Number(e.target.value) || 0)}
                />
              </div>

              <div className="mt-3 rounded-xl bg-slate-900 text-white p-5 border border-slate-800">
                <p className="text-xs uppercase tracking-wide text-slate-300">Projected Monthly Captured Revenue</p>
                <p className="text-3xl font-extrabold mt-1">{currency.format(lawMetrics.monthlyRevenue)}</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                    <p className="text-slate-300 text-xs">Qualified Leads</p>
                    <p className="font-bold">{lawMetrics.qualifiedLeads.toFixed(1)}</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                    <p className="text-slate-300 text-xs">Annual Impact</p>
                    <p className="font-bold text-emerald-300">{currency.format(lawMetrics.annualRevenue)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-emerald-200">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <Home className="w-5 h-5 text-emerald-600" />
                Real Estate ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="avgCommission">Average Commission per Closed Deal</Label>
                <Input
                  id="avgCommission"
                  type="number"
                  min={1000}
                  step={500}
                  value={avgCommission}
                  onChange={(e) => setAvgCommission(Number(e.target.value) || 0)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyInquiries">Monthly Zillow/MLS Inquiries</Label>
                <Input
                  id="monthlyInquiries"
                  type="number"
                  min={0}
                  step={1}
                  value={monthlyInquiries}
                  onChange={(e) => setMonthlyInquiries(Number(e.target.value) || 0)}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="aiInquiryToShowing">AI Inquiry-to-Showing (%)</Label>
                  <Input
                    id="aiInquiryToShowing"
                    type="number"
                    min={1}
                    max={100}
                    step={1}
                    value={aiInquiryToShowing}
                    onChange={(e) => setAiInquiryToShowing(Number(e.target.value) || 0)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aiShowingToClose">AI Showing-to-Close (%)</Label>
                  <Input
                    id="aiShowingToClose"
                    type="number"
                    min={1}
                    max={100}
                    step={1}
                    value={aiShowingToClose}
                    onChange={(e) => setAiShowingToClose(Number(e.target.value) || 0)}
                  />
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-slate-900 text-white p-5 border border-slate-800">
                <p className="text-xs uppercase tracking-wide text-slate-300">Projected Monthly Commission Captured</p>
                <p className="text-3xl font-extrabold mt-1">{currency.format(realEstateMetrics.aiRevenue)}</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                    <p className="text-slate-300 text-xs">Extra Revenue vs Manual Follow-Up</p>
                    <p className="font-bold text-emerald-300">{currency.format(realEstateMetrics.monthlyUplift)}</p>
                  </div>
                  <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                    <p className="text-slate-300 text-xs">Annual Uplift</p>
                    <p className="font-bold text-emerald-300">{currency.format(realEstateMetrics.annualUplift)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-xs text-slate-500 flex items-center gap-2 justify-center">
          <Building2 className="w-4 h-4" />
          <TrendingUp className="w-4 h-4" />
          Assumes response-time automation and structured qualification workflows are active.
        </div>
      </div>
    </section>
  );
}
