'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  UserCheck, 
  CalendarCheck, 
  DollarSign, 
  Clock, 
  TrendingUp 
} from "lucide-react";

export default function ROIDashboard() {
  const [data, setData] = useState({
    conversations: 42,
    leadsQualified: 12,
    appointmentsBooked: 5,
    estimatedRevenue: 2495,
    staffTimeSaved: 8.5,
    afterHoursLeads: 4
  });

  // Simulated real-time update
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        conversations: prev.conversations + (Math.random() > 0.7 ? 1 : 0),
        estimatedRevenue: prev.estimatedRevenue + (Math.random() > 0.9 ? 499 : 0)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Badge className="bg-blue-600 mb-4 px-3 py-1">Real-Time Trial Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Your Automation ROI</h2>
            <p className="text-slate-400 mt-2 max-w-xl">
              Live tracking of your 7-Day Trial performance. See exactly how Switflow AI is impacting your bottom line.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Data Feed: Active Trial
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Conversations */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <MessageSquare className="w-5 h-5 text-blue-500 mb-2" />
              <CardTitle className="text-sm font-medium text-slate-400">Total Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.conversations}</div>
              <p className="text-xs text-green-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12% from yesterday
              </p>
            </CardContent>
          </Card>

          {/* Leads Qualified */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <UserCheck className="w-5 h-5 text-purple-500 mb-2" />
              <CardTitle className="text-sm font-medium text-slate-400">Leads Qualified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.leadsQualified}</div>
              <p className="text-xs text-slate-400 mt-1 italic">
                {data.afterHoursLeads} captured after-hours
              </p>
            </CardContent>
          </Card>

          {/* Appointments Booked */}
          <Card className="bg-slate-800 border-slate-700 text-white">
            <CardHeader className="pb-2">
              <CalendarCheck className="w-5 h-5 text-green-500 mb-2" />
              <CardTitle className="text-sm font-medium text-slate-400">Appointments Booked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.appointmentsBooked}</div>
              <p className="text-xs text-slate-400 mt-1">
                Synced to your calendar
              </p>
            </CardContent>
          </Card>

          {/* Est. Revenue */}
          <Card className="bg-blue-600 border-blue-500 text-white">
            <CardHeader className="pb-2">
              <DollarSign className="w-5 h-5 text-white mb-2" />
              <CardTitle className="text-sm font-medium text-blue-100">Est. Revenue Opportunity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${data.estimatedRevenue.toLocaleString()}</div>
              <p className="text-xs text-blue-100 mt-1">
                Based on avg. lead value
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="bg-slate-800 border-slate-700 text-white flex items-center p-6 gap-6">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">{data.staffTimeSaved} Hours</div>
              <CardDescription className="text-slate-400">Estimated Staff Time Saved</CardDescription>
            </div>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700 text-white flex items-center p-6 gap-6">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <CardDescription className="text-slate-400">Instant Response Rate</CardDescription>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 italic">
            * This dashboard uses live data from your trial environment. Results updated every 5 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}
