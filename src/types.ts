/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BenefitItem {
  title: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface SubpageContent {
  title: string;
  subtitle?: string;
  introduction: string;
  whyChooseUsTitle?: string;
  whyChooseUsText?: string;
  benefits?: BenefitItem[];
  servicesTitle?: string;
  services?: { title: string; description: string }[];
  stepsTitle?: string;
  stepsHeader?: string;
  steps?: StepItem[];
  advantagesTitle?: string;
  advantagesText?: string;
  advantagesPoints?: string[];
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
  images?: string[];
}

export interface CompanyInfo {
  nameLabel: string;
  nameValue: string;
  hqLabel: string;
  hqValue: string;
  capitalLabel: string;
  capitalValue: string;
  liberatedLabel: string;
  liberatedValue: string;
  sharesLabel: string;
  sharesValue: string;
  addressLabel: string;
  addressValue: string;
  categoriesTitle: string;
  servicesTitle: string;
}

export interface ContactFormInfo {
  title: string;
  buttonText: string;
  nameField: string;
  phoneField: string;
  emailField: string;
  messageField: string;
  successMessage: string;
}

export interface AppContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    introTitle: string;
    introContent: string[];
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    card3Title: string;
    card3Text: string;
  };
  verlegung: SubpageContent;
  erstellung: SubpageContent;
  montage: SubpageContent;
  bereitstellung: SubpageContent;
  operativer: SubpageContent;
  immobilien: SubpageContent;
  kontakte: {
    title: string;
    form: ContactFormInfo;
  };
  footer: {
    locationTitle: string;
    categoriesTitle: string;
    servicesTitle: string;
    categories: string[];
    services: string[];
    companyDetails: string;
  };
  whatsapp: {
    title: string;
    subtitle: string;
    agentName: string;
  };
  nav: {
    home: string;
    hauptmassnahmen: string;
    verlegung: string;
    erstellung: string;
    montage: string;
    bereitstellung: string;
    operativer: string;
    immobilien: string;
    kontakte: string;
  };
}

