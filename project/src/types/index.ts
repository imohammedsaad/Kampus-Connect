// Event related types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date string
  location: string;
  image: string;
  category: EventCategory;
  registrationUrl?: string;
  organizer: string;
}

export type EventCategory = 'academic' | 'social' | 'cultural' | 'sports' | 'career' | 'workshop';

// Club related types
export interface Club {
  id: string;
  name: string;
  description: string;
  image: string;
  memberCount: number;
  category: ClubCategory;
  meetingSchedule: string;
  contactPerson: string;
  email: string;
}

export type ClubCategory = 'academic' | 'cultural' | 'social' | 'sports' | 'technical' | 'volunteer';

// Search and filter types
export interface FilterOptions {
  category?: EventCategory | ClubCategory;
  date?: string;
  query?: string;
}