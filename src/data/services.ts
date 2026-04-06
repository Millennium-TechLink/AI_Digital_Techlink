import { Cloud, Database, Smartphone, Shield, Zap, Code } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    icon: Database,
    title: 'Data & Analytics',
    description:
      'Unlock critical insights and drive intelligent decisions with our advanced data platforms.',
    features: ['Big Data Processing', 'Real-time Analytics', 'ML & AI Solutions'],
    color: 'from-primary-600 to-secondary-500',
  },
  {
    icon: Smartphone,
    title: 'Digital Experiences',
    description:
      'Craft seamless, intuitive, and engaging web and mobile applications that delight customers.',
    features: ['Web Applications', 'Mobile Apps', 'Progressive Web Apps'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Code,
    title: 'Custom Development',
    description:
      'Tailored software solutions built to meet your unique business requirements.',
    features: ['Enterprise Software', 'API Development', 'System Integration'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Zap,
    title: 'IT Consulting',
    description:
      'Strategic guidance to align technology with your business objectives and goals.',
    features: ['Technology Strategy', 'Digital Transformation', 'Architecture Design'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description:
      'Modernize your operations with our secure, scalable, and high-performance cloud solutions.',
    features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Container Orchestration'],
    color: 'from-blue-500 to-cyan-500',
    isComingSoon: true,
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Protect your digital assets with comprehensive security solutions and best practices.',
    features: ['Security Audits', 'Threat Detection', 'Compliance'],
    color: 'from-red-500 to-orange-500',
    isComingSoon: true,
  },
];
