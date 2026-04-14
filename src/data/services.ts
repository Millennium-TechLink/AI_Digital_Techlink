import { ClipboardCheck, Activity, Award, FlaskConical, Settings } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: 'Design Verification & Validation',
    slug: 'design-verification',
    description:
      'Ensure your product designs meet all specified requirements and industry standards through rigorous analytical and practical verification and validation processes.',
    features: ['Requirement Analysis', 'Compliance Verification', 'Design Validation'],
    color: 'from-primary-600 to-secondary-500',
  },
  {
    icon: Activity,
    title: 'Pre-compliance Testing',
    slug: 'testing',
    description:
      'Comprehensive pre-compliance testing services to validate the performance, reliability, and security of your products and systems.',
    features: ['Functional Testing', 'Reliability Testing', 'Pre-compliance Checks'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Certification',
    slug: 'certification',
    description:
      'End-to-end management of your product certification journey, working directly with accredited bodies to secure your global market access.',
    features: ['Global Approvals', 'Documentation Management', 'Agency Coordination'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: FlaskConical,
    title: 'Lab Management System (LMS)',
    slug: 'lms',
    description:
      'A comprehensive digital platform to streamline your testing facility operations, from equipment calibration to resource allocation and test tracking.',
    features: ['Equipment Tracking', 'Test Scheduling', 'Resource Allocation'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    title: 'Quality Management System (QMS)',
    slug: 'qms',
    description:
      'Digital infrastructure to maintain industry compliance guidelines, track non-conformances, conduct audits, and drive continuous improvement across operations.',
    features: ['Audit Management', 'Non-conformance Tracking', 'Compliance Analytics'],
    color: 'from-emerald-400 to-teal-500',
  },
];
