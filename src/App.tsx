/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VittaMilestones } from './components/VittaMilestones';
import { ProblemSection } from './components/ProblemSection';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Transformation } from './components/Transformation';
import { ProgressSection } from './components/ProgressSection';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';

export default function App() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  const handleOpenEnrollment = () => {
    setIsEnrollmentOpen(true);
  };

  const handleCloseEnrollment = () => {
    setIsEnrollmentOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F0] font-sans antialiased flex flex-col selection:bg-[#B8F23D] selection:text-[#080808]">
      {/* Navigation Header */}
      <Header onOpenEnrollment={handleOpenEnrollment} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenEnrollment={handleOpenEnrollment} />

        {/* 2. Transição Visual do Hero: Treinar Sem Plano É Só Repetir // Direção Muda Tudo */}
        <ProblemSection onOpenEnrollment={handleOpenEnrollment} />

        {/* 3. Exclusive Visual Concept: 30 Dias. Uma Nova Rotina */}
        <VittaMilestones />

        {/* 4. Benefits Section */}
        <Benefits />

        {/* 5. How It Works Section */}
        <HowItWorks onOpenEnrollment={handleOpenEnrollment} />

        {/* 6. Transformation Section: Grande Momento Visual (Fundo #172116) */}
        <Transformation onOpenEnrollment={handleOpenEnrollment} />

        {/* 7. Progress & Telemetry Section (30 DIAS / Checkpoints / +24% Consistência) */}
        <ProgressSection />

        {/* 8. Testimonials Section: Editorial Spread */}
        <Testimonials />

        {/* 8. Pricing & Offer Section */}
        <Pricing onOpenEnrollment={handleOpenEnrollment} />

        {/* 9. FAQ Accordion Section */}
        <FAQ />

        {/* 10. Final Conversion CTA */}
        <FinalCTA onOpenEnrollment={handleOpenEnrollment} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demonstrative Single Action Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollmentOpen}
        onClose={handleCloseEnrollment}
      />
    </div>
  );
}

