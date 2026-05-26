'use client';
import React from 'react';
import ChatWidget from '@/components/ChatWidget';
import ROIDashboard from '@/components/dashboard/ROIDashboard';
import CaseStudiesSection from '@/components/case-studies/CaseStudiesSection';
import HVACROICalculator from '@/components/HVACROICalculator';
import LawRealEstateROICalculators from '@/components/LawRealEstateROICalculators';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Calendar, 
  PhoneCall, 
  Zap, 
  TrendingUp, 
  Clock, 
  ShieldCheck,
  User,
  Bot
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">Switflow AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#medspa-roi" className="hover:text-blue-600 transition-colors">ROI Calculator</a>
            <a href="#success-stories" className="hover:text-blue-600 transition-colors">Success Stories</a>
            <a href="#demo" className="hover:text-blue-600 transition-colors">Live Demo</a>
          </nav>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <Badge variant="secondary" className="mb-4 py-1 px-3 bg-blue-50 text-blue-700 border-blue-100">
                  Austin&apos;s Leading Business Automation
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                  Stop Missing Leads.<br />
                  <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">Automate</span> Your Growth.
                </h1>
                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  We build AI-powered systems for local businesses in Austin. 
                  From 24/7 dental booking to after-hours HVAC intake, our bots capture 
                  every opportunity while you sleep.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-8" onClick={() => window.location.href='/checkout'}>
                    Book a Free Audit
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                    Watch Demo Bot
                  </Button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    No-Show Reduction
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    24/7 Coverage
                  </div>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <Card className="relative border-2 shadow-2xl overflow-hidden">
                  <div className="bg-slate-900 p-3 flex items-center justify-between border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">Switflow AI - Dental Demo</span>
                  </div>
                  <CardContent className="p-0 bg-slate-50">
                    <div className="h-[400px] flex flex-col p-4">
                      <div className="flex justify-end mb-4">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          I need to book a cleaning for Tuesday morning.
                        </div>
                      </div>
                      <div className="flex justify-start mb-4">
                        <div className="bg-white border rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          Hi there! I can help with that. We have an opening at 9:00 AM on Tuesday. Would you like to secure this slot?
                        </div>
                      </div>
                      <div className="flex justify-end mb-4">
                        <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          Yes please, that works perfectly.
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-white border rounded-2xl rounded-tl-none px-4 py-2 text-sm max-w-[80%] shadow-sm">
                          Perfect! You&apos;re all set for 9:00 AM Tuesday. I&apos;ve sent a calendar invite to your email. See you then!
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t">
                        <div className="flex gap-2">
                          <Input disabled placeholder="Type a message..." className="bg-white border-slate-200" />
                          <Button size="icon" className="bg-blue-600 shrink-0"><Zap className="w-4 h-4 fill-current" /></Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section id="roi" className="py-20 bg-slate-50 border-y">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Humans vs. Switflow AI Bots</h2>
            <p className="text-slate-600 mb-12 max-w-xl mx-auto">See how automation transforms your business operations.</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-slate-200">
                <CardHeader className="bg-slate-100/50 pb-4">
                  <div className="flex items-center gap-2 justify-center mb-2">
                    <User className="w-5 h-5 text-slate-600" />
                    <CardTitle className="text-lg">Traditional Staffing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-500 flex items-center gap-2"><Clock className="w-4 h-4" /> Availability</span>
                    <span className="font-semibold text-slate-700">8 AM - 5 PM Only</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-500 flex items-center gap-2"><Zap className="w-4 h-4" /> Response Time</span>
                    <span className="font-semibold text-slate-700">5 - 30 Minutes</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-500 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Human Error</span>
                    <span className="font-semibold text-slate-700 text-red-500">Occasional</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-slate-900 pt-2">
                    <span>Monthly Cost</span>
                    <span>$3,500+ / mo</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 ring-2 ring-blue-500/20 relative">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Badge className="bg-blue-600">Recommended</Badge>
                </div>
                <CardHeader className="bg-blue-50 pb-4">
                  <div className="flex items-center gap-2 justify-center mb-2">
                    <Bot className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg text-blue-900">Switflow AI System</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-500 flex items-center gap-2"><Clock className="w-4 h-4" /> Availability</span>
                    <span className="font-semibold text-blue-700">24/7/365</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-500 flex items-center gap-2"><Zap className="w-4 h-4" /> Response Time</span>
                    <span className="font-semibold text-blue-700">Instant ({"<"} 2s)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-slate-500 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Human Error</span>
                    <span className="font-semibold text-blue-700">Zero Error Rate</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-blue-900 pt-2">
                    <span>Monthly Cost</span>
                    <span>From $297 / mo</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Niche ROI Calculators */}
        <HVACROICalculator />
        <LawRealEstateROICalculators />

        {/* Live Dashboard Section */}
        <ROIDashboard />

        {/* Success Stories Section */}
        <CaseStudiesSection />

        {/* Solutions Section */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Niche-Specific Automations</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We don&apos;t build generic bots. We build solutions designed for your industry&apos;s unique pain points.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Dental & Medical Clinics</h3>
                <p className="text-slate-600">
                  Slash no-show rates and keep your chairs full without manual phone calls. Our AI syncs with your practice software to book, reschedule, and remind patients automatically.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Automated Appointment Scheduling
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    SMS & Email Reminder Sequences
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Review Generation After Visits
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">HVAC, Plumbing & Home Services</h3>
                <p className="text-slate-600">
                  Don&apos;t lose a $[Value] emergency call just because it&apos;s 2 AM. Our voice and text AI qualifies leads, checks availability, and notifies your on-call technician instantly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    24/7 After-Hours Intake Bot
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Instant SMS Follow-up for New Inquiries
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    Urgency-Based Dispatch Alerts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">Experience the AI Receptionist</h2>
                <p className="text-slate-400 mb-8 text-lg">
                  Talk to our Voice AI demo right now. No sign-up required. See how it handles scheduling, qualification, and FAQ without missing a beat.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Natural Voice</p>
                      <p className="text-sm text-slate-500">Human-like tone and zero lag.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">Data Sync</p>
                      <p className="text-sm text-slate-500">Immediately pushes lead data to your CRM.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex flex-col items-center">
                <div className="w-full aspect-video bg-slate-800 rounded-2xl border-2 border-slate-700 flex flex-col items-center justify-center gap-4 p-8 text-center group cursor-pointer hover:border-blue-500 transition-all">
                   <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                     <Zap className="w-10 h-10 fill-current" />
                   </div>
                   <div>
                     <p className="text-xl font-bold mb-1">Launch Demo Voice Bot</p>
                     <p className="text-slate-500 text-sm">Requires microphone access</p>
                   </div>
                   <p className="text-xs text-slate-600 mt-4 italic">[Placeholder for Voiceflow / Vapi Integration]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Automation Audit</h2>
              <p className="text-slate-600">We&apos;ll analyze your current intake process and show you exactly where you&apos;re losing money.</p>
            </div>
            
            <Card className="shadow-xl border-slate-100">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business">Business Name</Label>
                    <Input id="business" placeholder="Austin Dental Care" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <select id="industry" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Dental / Medical</option>
                      <option>Home Services (HVAC, Plumbing)</option>
                      <option>Legal / Professional</option>
                      <option>Real Estate</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(512) 555-0123" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg">Send My Audit Request</Button>
                  <p className="text-[10px] text-center text-slate-400">
                    By submitting, you agree to receive automated SMS updates regarding your audit. Msg & data rates may apply.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <Zap className="text-white w-4 h-4 fill-current" />
              </div>
              <span className="font-bold">Switflow AI</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2026 Switflow AI. Built with love in Austin, TX.
            </p>
            <div className="flex gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600">Terms</a>
              <a href="#" className="hover:text-blue-600">Privacy</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
      <ChatWidget projectID="6a043b265add4fb758709d96" />
    </div>
  );
}
