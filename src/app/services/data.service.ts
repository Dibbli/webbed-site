import { Injectable, signal, computed } from '@angular/core';
import { Education, Experience, Profile, Project, Skill } from '../models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private _profile = signal<Profile>({
    name: 'Botond Mezei',
    email: 'botond@azesz.net',
    tagline: 'Senior Developer | Angular & TypeScript',
    bio: "I've shipped production systems including an Angular/Nx e-commerce platform with SSR and mobile apps, a real-time fleet scheduling tool with mapping and SSO, and a React/Node dealer system with AI features, all running on Kubernetes.",
    github: 'https://github.com/Dibbli',
    linkedin: 'https://www.linkedin.com/in/botond-m-a13b18128/',
  });

  private _projects = signal<Project[]>([
    {
      id: '1',
      title: 'auto26',
      description:
        'Automotive dealer system with a full booking and sales flow. REST APIs for the entire pipeline, AI-powered document processing to cut down on manual data entry, deployed on Kubernetes.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Prisma', 'Kubernetes'],
      featured: true,
    },
    {
      id: '2',
      title: 'Vitaminbar',
      description:
        'E-commerce platform with server-side rendering for SEO, shared libraries for reuse across projects, and mobile apps with Ionic/Capacitor. Lazy loading and performance tuning for weaker devices.',
      technologies: ['Angular 20', 'Nx', 'SSR', 'Ionic/Capacitor', 'Cypress'],
      featured: true,
    },
    {
      id: '3',
      title: 'SSB',
      description:
        'Fleet management and scheduling software with Keycloak SSO, real-time dispatch via WebRTC and RxJS, and dashboards with D3.js, ApexCharts, and Leaflet maps for tracking vehicles and workload.',
      technologies: ['Angular', 'Nx', 'Keycloak', 'WebRTC', 'RxJS', 'D3.js', 'Leaflet'],
      featured: true,
    },
    {
      id: '4',
      title: 'BusOxy',
      description:
        'Oxygen delivery platform serving customers, drivers, and operations staff. Dispatcher app, driver mobile app, customer-facing mobile app and website.',
      technologies: ['Next.js', 'Angular', 'Ionic', 'Prisma', 'Playwright'],
      featured: true,
    },
    {
      id: '5',
      title: 'Necrologist Horde Sync',
      description:
        'FoundryVTT module for PF2e that syncs stats between two characters. Supports AC, saves, skills, and bidirectional HP sync. Built for Necrologist hordes but works for eidolons, companions, or any stat-mirroring homebrew.',
      technologies: ['JavaScript', 'FoundryVTT', 'PF2e'],
      githubUrl: 'https://github.com/Dibbli/necrologist-horde-sync',
      featured: false,
    },
    {
      id: '6',
      title: 'webbed-site',
      description:
        "This portfolio site, built with Angular and Tailwind on Nx. Every developer ends up making one eventually. The source is public if you'd like to poke around, or if you like it enough, to feed to an AI and make a legally distinct copy ;). The name stays.",
      technologies: ['Angular 21', 'Tailwind CSS 4', 'Nx', 'Phosphor Icons'],
      githubUrl: 'https://github.com/Dibbli/webbed-site',
      featured: false,
    },
  ]);

  private _skills = signal<Skill[]>([
    { id: '1', name: 'TypeScript', icon: 'ph-file-ts'},
    { id: '2', name: 'JavaScript', icon: 'ph-file-js'},
    { id: '3', name: 'Angular', icon: 'ph-brackets-angle'},
    { id: '4', name: 'React', icon: 'ph-atom'},
    { id: '5', name: 'Node.js', icon: 'ph-tree'},
    { id: '6', name: 'Kotlin', icon: 'ph-code'},
    { id: '7', name: 'Prisma', icon: 'ph-database'},
    { id: '8', name: 'RxJS', icon: 'ph-arrows-split'},
    { id: '9', name: 'Docker', icon: 'ph-package'},
    { id: '10', name: 'Kubernetes', icon: 'ph-cube'},
    { id: '11', name: 'Linux', icon: 'ph-linux-logo'},
    { id: '12', name: 'Git', icon: 'ph-git-branch'},
    { id: '13', name: 'Cypress', icon: 'ph-test-tube'},
    { id: '14', name: 'SQL', icon: 'ph-table'},
  ]);

  private _experience = signal<Experience[]>([
    {
      id: '1',
      role: 'Senior Developer',
      company: 'Nextval Ltd.',
      project: 'auto26',
      period: '2025 - Present',
      description:
        'Lead developer on an automotive dealer system built with React, Node.js, TypeScript, and Prisma. Designing REST APIs for the full booking and sales flow, adding AI features to cut down on manual data entry. Deployed on Kubernetes.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Prisma', 'Kubernetes'],
    },
    {
      id: '2',
      role: 'Frontend Developer',
      company: 'Nextval Ltd.',
      project: 'Vitaminbar',
      period: '2023 - 2025',
      description:
        'Built an e-commerce platform in Angular 20 on an Nx monorepo. Shipped SSR for SEO, shared libraries, and mobile apps with Ionic/Capacitor. Set up lazy loading, brought Cypress E2E tests into CI.',
      technologies: ['Angular 20', 'Nx', 'SSR', 'Ionic/Capacitor', 'Cypress'],
    },
    {
      id: '3',
      role: 'Full-stack Developer',
      company: 'Nextval Ltd.',
      project: 'SSB',
      period: '2021 - 2023',
      description:
        'Fleet management and scheduling software. Added Keycloak SSO, built real-time features with WebRTC and RxJS, dashboards and maps with D3.js, ApexCharts, and Leaflet.',
      technologies: ['Angular', 'Nx', 'Keycloak', 'WebRTC', 'RxJS', 'D3.js', 'Leaflet'],
    },
    {
      id: '4',
      role: 'Junior Full-stack Developer',
      company: 'Nextval Ltd.',
      period: '2020 - 2021',
      description:
        'Built Angular front ends and Kotlin back ends, designed REST APIs, added security features. Wrote Cypress tests and wired them into CI/CD.',
      technologies: ['Angular', 'Kotlin', 'REST APIs', 'Cypress', 'CI/CD'],
    },
  ]);

  private _education = signal<Education[]>([
    {
      id: '1',
      institution: 'Budapest University of Economics and Business',
      degree: 'BSc Business Informatics (IT for Logistics)',
      period: 'June 2025',
      description:
        'Software development, database design, ERP systems, data analysis, and core business processes.',
    },
    {
      id: '2',
      institution: 'Ujpesti Bilingual Technical School',
      degree: 'IT-focused Technical High School',
      period: 'June 2016',
      description: 'Bilingual technical school specializing in informatics, IT, and engineering.',
    },
  ]);

  profile = this._profile.asReadonly();
  projects = this._projects.asReadonly();
  skills = this._skills.asReadonly();
  experience = this._experience.asReadonly();
  education = this._education.asReadonly();

  featuredProjects = computed(() => this._projects().filter(p => p.featured));
  personalProjects = computed(() => this._projects().filter(p => !p.featured));
}

