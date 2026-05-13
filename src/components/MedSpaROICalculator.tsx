'use client';

import React, { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Crown, Gem, Sparkles, TrendingUp } from 'lucide-react';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat('en-US');

export default function MedSpaROICalculator() {
  const [averageProcedureValue, setAverageProcedureValue] = useState(350);
  const [monthlyMissedCalls, setMonthlyMissedCalls] = useState(30);
  const [conversionRate, setConversionRate] = useState(35);

  const projected = useMemo(() => {
    const qualifiedLeads = monthlyMissedCalls * (conversionRate / 100);
    const monthlyRevenueCapture = qualifiedLeads * averageProcedureValue;
    const annualRevenueCapture = monthlyRevenueCapture * 12;

    return {
      qualifiedLeads,
      monthlyRevenueCapture,
      annualRevenueCapture,
    };
  }, [averageProcedureValue, monthlyMissedCalls, conversionRate]);

  return (
    <section id="medspa-roi" className="py-20 bg-gradient-to-b from-blue-50 via-white to-white border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mb-4 px-3 py-1">
            HVAC Revenue Leak Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Estimate Monthly Revenue You Could Recover
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            Model how much additional revenue a 24/7 HVAC intake assistant can capture from missed service calls.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                <Gem className="w-5 h-5 text-blue-500" />
                Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="procedureValue">Average Service Call Value</Label>
                  <span className="text-sm font-semibold text-blue-700">
                    {currency.format(averageProcedureValue)}
                  </span>
                </div>
                <Input
                  id="procedureValue"
                  type="number"
                  min={250}
                  step={10}
                  value={averageProcedureValue}
                  onChange={(e) => setAverageProcedureValue(Number(e.target.value) || 0)}
                />
                <input
                  type="range"
                  min={250}
                  max={500}
                  step={10}
                  value={averageProcedureValue}
                  onChange={(e) => setAverageProcedureValue(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="missedCalls">Monthly Missed Calls (Estimate)</Label>
                  <span className="text-sm font-semibold text-blue-700">{number.format(monthlyMissedCalls)}</span>
                </div>
                <Input
                  id="missedCalls"
                  type="number"
                  min={0}
                  step={1}
                  value={monthlyMissedCalls}
                  onChange={(e) => setMonthlyMissedCalls(Number(e.target.value) || 0)}
                />
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={1}
                  value={monthlyMissedCalls}
                  onChange={(e) => setMonthlyMissedCalls(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="conversionRate">Conversion Rate</Label>
                  <span className="text-sm font-semibold text-blue-700">{conversionRate}%</span>
                </div>
                <Input
                  id="conversionRate"
                  type="number"
                  min={1}
                  max={100}
                  step={1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value) || 0)}
                />
                <input
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-xl bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Crown className="w-5 h-5 text-amber-300" />
                Projected Revenue Capture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-xl bg-white/10 border border-white/10 p-5">
                <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">Projected Monthly Revenue Capture</p>
                <p className="text-4xl font-extrabold text-white">
                  {currency.format(projected.monthlyRevenueCapture)}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">Recovered Qualified Leads</p>
                  <p className="text-2xl font-bold">{projected.qualifiedLeads.toFixed(1)}</p>
                </div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">Projected Annual Impact</p>
                  <p className="text-2xl font-bold text-emerald-300">
                    {currency.format(projected.annualRevenueCapture)}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-blue-200/30 bg-blue-400/10 p-4 text-sm text-blue-100 flex items-start gap-2">
                <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Based on your estimates, Switflow AI can help your HVAC business respond instantly, recover missed service calls,
                  and convert more urgent inquiries into booked jobs.
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <TrendingUp className="w-4 h-4 text-emerald-300" />
                Assumes missed HVAC inquiries are captured 24/7 by the AI intake workflow.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
