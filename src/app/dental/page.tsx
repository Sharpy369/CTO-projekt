'use client';
import React from 'react';
import ChatWidget from '@/components/ChatWidget';
import DentalROICalculator from '@/components/DentalROICalculator';
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
            <span className="text-xl font-bold tracking-tight">Switflow AI | Westgate</span>
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
                  Westgate Family Dental — Custom Solution
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                  24/7 Patient Intake.<br />
                  <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">Zero</span> No-Shows.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  We are testing your custom AI assistant. It handles appointment reminders, 
                  new patient intake, and FAQ — syncing directly with your practice management software.
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
                    <span className="text-[10px] text-slate-400 font-mono">Westgate AI Assistant — Live Preview</span>
                  </div>
                  <CardContent className="p-0 bg-slate-50">
                    <div className="h-[300px] flex flex-col p-4">
                      <div className="flex justify-start mb-4">
                        <div className="bg-white border rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          Hi! I&apos;m the Westgate Dental Assistant. I can help you book a cleaning or answer questions about our practice. What can I do for you today?
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

        {/* Focus Section: No-Show Reduction */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Target Outcome: No-Show Reduction</h2>
              <p className="text-slate-600">
                Our SMS reminder sequence doesn&apos;t just notify; it engages. 
                Patients can confirm, reschedule, or ask questions in real-time without calling the front desk.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Auto-Scheduling</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Synced with your calendar. Patients book when they want, even at 2 AM.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Instant SMS</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Immediate confirmation and reminder texts sent to every patient.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>Clean Data</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Insurance info and medical history captured before they walk in.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <DentalROICalculator />

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
                  <span className="text-blue-400 font-mono">6a043b265add4fb758709d96</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>GHL Webhook</span>
                  <span className="text-green-400 font-mono">Active</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>SMS Logic</span>
                  <span className="text-yellow-400 font-mono">In Testing (Stage 2)</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-xs">
          © 2026 Switflow AI Staging — Westgate Family Dental Internal Demo
        </div>
      </footer>
      <ChatWidget projectID="6a043b265add4fb758709d96" />
    </div>
  );
}
