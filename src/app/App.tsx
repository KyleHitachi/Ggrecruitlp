import { HeroSection } from './components/hero-section';
import { JobIntroduction } from './components/job-introduction';
import { JobPositions } from './components/job-positions';
import { InterviewSection } from './components/interview-section';
import { First30Days } from './components/first-30-days';
import { ApplicationProcess } from './components/application-process';
import { ApplicationFormSection } from './components/application-form-section';
import { FaqSection } from './components/faq-section';
import { ConditionsSection } from './components/conditions-section';
import { SiteFooter } from './components/site-footer';
import { StickyHeader } from './components/sticky-header';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <div style={{ paddingTop: '72px' }}>
        <HeroSection />
        <JobIntroduction />
        <JobPositions />
        <InterviewSection />
        <First30Days />
        <ApplicationProcess />
        <ApplicationFormSection />
        <FaqSection />
        <ConditionsSection />
        <SiteFooter />
      </div>
    </div>
  );
}