'use client';
import React from 'react';
import ChatWidget from '@/components/ChatWidget';
import LawRealEstateROICalculators from '@/components/LawRealEstateROICalculators';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Calendar, 
  Zap, 
  Clock, 
  ShieldCheck,
  User,
  Bot
} from "lucide-react";

export default function WestgateStagingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Switflow AI | Rasansky Law</span>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200">Staging Environment</Badge>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="secondary" className="mb-4 py-1 px-3 bg-blue-50 text-blue-700 border-blue-100">
                  Rasansky Law Firm — Custom Solution
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                  24/7 Legal Intake.<br />
                  <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">Automated</span> Conflict Checks.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  We are testing your custom AI assistant. It handles lead qualification, 
                  conflict of interest checks, and consultation booking — syncing directly with GHL.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-8">
                    View Integration Docs
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-[500px]">
                <Card className="relative border-2 shadow-2xl overflow-hidden">
                  <div className="bg-slate-900 p-3 flex items-center justify-between border-b border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono">Rasansky AI Assistant — Live Preview</span>
                  </div>
                  <CardContent className="p-0 bg-slate-50">
                    <div className="h-[300px] flex flex-col p-4">
                      <div className="flex justify-start mb-4">
                        <div className="bg-white border rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          Hi! I'm the Rasansky Law Assistant. I can help you determine if you have a case and check for potential conflicts. How can I help you?
                        </div>
                      </div>
                      <div className="mt-auto text-center p-4">
                        <p className="text-xs text-slate-400 italic">Use the bubble in the bottom right to test the live bot.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Section: Conflict Check Logic */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Target Outcome: Automated Conflict Checks</h2>
              <p className="text-slate-600">
                Our AI doesn't just take messages; it identifies potential conflicts of interest in real-time, 
                saving your intake team hours of manual vetting.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Case Qualification</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Leads are qualified based on your specific criteria before they reach your team.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Conflict Logic</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Immediate cross-referencing with your client database to flag potential conflicts.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>GHL Sync</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Qualified leads and consultation bookings are pushed directly into your CRM.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* ROI Section */}
        <LawRealEstateROICalculators />

        {/* Deployment Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-slate-900 text-white p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6 text-blue-400" />
                Integration Status
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Voiceflow Bot ID</span>
                  <span className="text-blue-400 font-mono">6a043c5123bc6fb75870a112</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>GHL Integration</span>
                  <span className="text-green-400 font-mono">Active</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Conflict Check Logic</span>
                  <span className="text-yellow-400 font-mono">Functional</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-xs">
          © 2026 Switflow AI Staging — Rasansky Law Firm Internal Demo
        </div>
      </footer>
      <ChatWidget projectID="6a043c5123bc6fb75870a112" />
    </div>
  );
}
