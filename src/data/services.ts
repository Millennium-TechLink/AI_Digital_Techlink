import { ClipboardCheck, Activity } from 'lucide-react';
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
];
