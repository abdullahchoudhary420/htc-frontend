// Simple types for contact form submissions - no database needed
export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
  submittedAt: Date;
}

export type InsertContactSubmission = Omit<ContactSubmission, 'id' | 'submittedAt'>;