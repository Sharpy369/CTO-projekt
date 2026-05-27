'use client';
import React from 'react';
import ChatWidget from '@/components/ChatWidget';
import MedSpaROICalculator from '@/components/MedSpaROICalculator';
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
  Bot,
  Sparkles
} from "lucide-react";

export default function MedSpaStagingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Switflow AI | Luxe Med-Spa</span>
          </div>
          <Badge variant="outline" className="text-pink-600 border-pink-200">Staging Environment</Badge>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="secondary" className="mb-4 py-1 px-3 bg-pink-50 text-pink-700 border-pink-100">
                  Luxe Med-Spa — Custom Concierge Solution
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                  24/7 VIP Intake.<br />
                  <span className="text-pink-600 underline decoration-pink-200 underline-offset-4">Instant</span> Consultation.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  We are testing your custom AI concierge. It handles treatment FAQs, 
                  lead qualification for high-ticket procedures, and instant consultation booking — syncing directly with GHL.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700 w-full sm:w-auto px-8 text-white">
                    View Demo Blueprints
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-[500px]">
                <Card className="relative border-2 shadow-2xl overflow-hidden">
                  <div className="bg-slate-900 p-3 flex items-center justify-between border-b border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono">Luxe Med-Spa AI Concierge — Live Preview</span>
                  </div>
                  <CardContent className="p-0 bg-slate-50">
                    <div className="h-[300px] flex flex-col p-4">
                      <div className="flex justify-start mb-4">
                        <div className="bg-white border rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          Welcome to Luxe Med-Spa. I'm your AI concierge. Are you interested in learning more about Botox, CoolSculpting, or our other premium treatments?
                        </div>
                      </div>
                      <div className="mt-auto text-center p-4">
                        <p className="text-xs text-slate-400 italic">Use the bubble in the bottom right to test the live concierge.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Section: Zero Lead Leakage */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Target Outcome: Zero Lead Leakage</h2>
              <p className="text-slate-600">
                High-ticket aesthetic leads don't wait. Our AI concierge qualifies intent and 
                books consultations the moment interest peaks, even at 10 PM on a Sunday.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 text-pink-600 mb-2" />
                  <CardTitle>Direct GHL Booking</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Appointments are created directly in your GHL/Acuity calendar with full lead context.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-pink-600 mb-2" />
                  <CardTitle>VIP Procedure Alerts</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  High-value procedure inquiries trigger instant SMS alerts to your practice manager.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="w-8 h-8 text-pink-600 mb-2" />
                  <CardTitle>HIPAA-Conscious</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Secure lead intake following privacy-first protocols for aesthetic clinics.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <MedSpaROICalculator />

        {/* Deployment Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <Card className="bg-slate-900 text-white p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bot className="w-6 h-6 text-pink-400" />
                Integration Status
              </h3>
              <div className="space-y-4 text-sm text-slate-400">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>Voiceflow Bot ID</span>
                  <span className="text-pink-400 font-mono">PENDING_VERIFICATION</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>GHL Sync</span>
                  <span className="text-green-400 font-mono">Active</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span>VIP Alert Logic</span>
                  <span className="text-yellow-400 font-mono">Live</span>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-xs">
          © 2026 Switflow AI Staging — Luxe Med-Spa Internal Demo
        </div>
      </footer>
      <ChatWidget projectID="PENDING_VERIFICATION" />
    </div>
  );
}
