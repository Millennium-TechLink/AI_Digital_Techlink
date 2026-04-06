import { ClipboardCheck, Activity } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    icon: ClipboardCheck,
    title: 'Design Verification',
    description:
      'Ensure your product designs meet all specified requirements and industry standards through rigorous analytical and practical verification processes.',
    features: ['Requirement Analysis', 'Compliance Verification', 'Design Optimization'],
    color: 'from-primary-600 to-secondary-500',
  },
  {
    icon: Activity,
    title: 'Testing',
    description:
      'Comprehensive testing services to validate the performance, reliability, and security of your products and systems.',
    features: ['Functional Testing', 'Reliability Testing'],
    color: 'from-blue-500 to-cyan-500',
  },
];
