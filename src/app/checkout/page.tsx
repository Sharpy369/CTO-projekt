'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, ShieldCheck, ArrowRight } from "lucide-react";

export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);

  const handlePayPalCheckout = () => {
    setIsProcessing(true);
    // Simulate PayPal handshake
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Secure Your Pro Plan</h1>
          <p className="text-slate-600">Complete your onboarding for Air Conditioning Specialists</p>
        </div>

        {step === 1 ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Plan Selection</CardTitle>
                  <CardDescription>HVAC Pro Plan - Austin Loyalty Rate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <div>
                      <p className="font-bold text-blue-900">Pro Tier Subscription</p>
                      <p className="text-xs text-blue-700 font-medium">Billed Monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-blue-900">$497</p>
                      <p className="text-xs text-blue-700">per month</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      24/7 HVAC Intake Bot (Web & SMS)
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Live ServiceTitan Job Dispatch
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Urgency-Based Tech Alerts
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Monthly Optimization & ROI Reporting
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Billing Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-[#0070ba] hover:bg-[#003087] h-12 text-lg font-bold flex gap-2 items-center"
                      onClick={handlePayPalCheckout}
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        "Processing..."
                      ) : (
                        <>
                          Pay with <span className="italic">PayPal</span>
                        </>
                      )}
                    </Button>
                    <p className="text-[10px] text-center text-slate-400">
                      Your payment is processed securely via PayPal. Switflow AI does not store your credit card information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="text-lg">Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Sub</span>
                    <span>$597.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Loyalty Discount</span>
                    <span className="text-emerald-400">-$100.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Setup Fee</span>
                    <span>$497.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Setup Waiver</span>
                    <span className="text-emerald-400">-$497.00</span>
                  </div>
                  <div className="pt-4 border-t border-slate-800 flex justify-between font-bold text-lg">
                    <span>Due Today</span>
                    <span>$497.00</span>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 bg-white border rounded-xl space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <p className="text-xs text-slate-600">Secure 256-bit SSL encrypted checkout</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 shrink-0" />
                  <p className="text-xs text-slate-600">Instant activation after payment</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Card className="max-w-md mx-auto text-center p-12">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold">Payment Successful!</h2>
              <p className="text-slate-600">
                Welcome to the Pro Tier, John. Your ServiceTitan integration is now active.
              </p>
              <div className="pt-6">
                <Button className="w-full flex gap-2" onClick={() => window.location.href = '/'}>
                  Go to ROI Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
