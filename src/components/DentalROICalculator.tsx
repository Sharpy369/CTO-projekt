'use client';

import React, { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, TrendingUp, Sparkles, Smile } from 'lucide-react';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat('en-US');

export default function DentalROICalculator() {
  const [averagePatientValue, setAveragePatientValue] = useState(450);
  const [monthlyNoShows, setMonthlyNoShows] = useState(15);
  const [recoveryRate, setRecoveryRate] = useState(40);

  const projected = useMemo(() => {
    const recoveredLeads = monthlyNoShows * (recoveryRate / 100);
    const monthlyRevenueCapture = recoveredLeads * averagePatientValue;
    const annualRevenueCapture = monthlyRevenueCapture * 12;

    return {
      recoveredLeads,
      monthlyRevenueCapture,
      annualRevenueCapture,
    };
  }, [averagePatientValue, monthlyNoShows, recoveryRate]);

  return (
    <section id="dental-roi" className="py-20 bg-gradient-to-b from-blue-50 via-white to-white border-y">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 border border-blue-200 mb-4 px-3 py-1">
            Dental Revenue Recovery Calculator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Recover Revenue from No-Shows & Missed Calls
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            See how much more your practice could earn by automating patient reminders and after-hours intake.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-blue-200 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-slate-900">
                <Smile className="w-5 h-5 text-blue-500" />
                Practice Inputs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="patientValue">Average New Patient Value</Label>
                  <span className="text-sm font-semibold text-blue-700">
                    {currency.format(averagePatientValue)}
                  </span>
                </div>
                <Input
                  id="patientValue"
                  type="number"
                  min={100}
                  step={50}
                  value={averagePatientValue}
                  onChange={(e) => setAveragePatientValue(Number(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="noShows">Estimated Monthly No-Shows/Missed Opportunities</Label>
                  <span className="text-sm font-semibold text-blue-700">{number.format(monthlyNoShows)}</span>
                </div>
                <Input
                  id="noShows"
                  type="number"
                  min={0}
                  step={1}
                  value={monthlyNoShows}
                  onChange={(e) => setMonthlyNoShows(Number(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="recoveryRate">AI Recovery Rate (%)</Label>
                  <span className="text-sm font-semibold text-blue-700">{recoveryRate}%</span>
                </div>
                <Input
                  id="recoveryRate"
                  type="number"
                  min={1}
                  max={100}
                  step={1}
                  value={recoveryRate}
                  onChange={(e) => setRecoveryRate(Number(e.target.value) || 0)}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-xl bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <TrendingUp className="w-5 h-5 text-emerald-300" />
                Projected Recovery
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
                  <p className="text-xs uppercase tracking-wider text-slate-300 mb-1">Recovered Patients</p>
                  <p className="text-2xl font-bold">{projected.recoveredLeads.toFixed(1)}</p>
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
                  By engaging patients instantly via SMS, Switflow AI helps Westgate Family Dental reduce no-shows 
                  and capture after-hours inquiries without adding to front-desk workload.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
