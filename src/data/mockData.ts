import { Event, Club } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Summit',
    description: 'Join the biggest tech event of the year featuring industry experts, workshops, and networking opportunities for tech enthusiasts.',
    date: '2025-07-15T09:00:00Z',
    location: 'Main Auditorium',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'academic',
    organizer: 'Computer Science Department',
    registrationUrl: '#',
    registrationDeadline: '2025-07-10T23:59:59Z'
  },
  {
    id: '2',
    title: 'Spring Music Festival',
    description: 'A night of musical performances featuring student bands, solo artists, and special guest performers across various genres.',
    date: '2025-04-20T18:00:00Z',
    location: 'Campus Amphitheater',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cultural',
    organizer: 'Music Club',
    registrationUrl: '#',
    registrationDeadline: '2025-04-18T23:59:59Z'
  },
  {
    id: '3',
    title: 'Career Fair 2025',
    description: 'Connect with top employers from various industries, attend resume workshops, and explore internship and job opportunities.',
    date: '2025-05-10T10:00:00Z',
    location: 'University Hall',
    image: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'career',
    organizer: 'Career Services Center',
    registrationUrl: '#',
    registrationDeadline: '2025-05-08T23:59:59Z'
  },
  {
    id: '4',
    title: 'AI & Machine Learning Workshop',
    description: 'Hands-on workshop covering the fundamentals of AI and ML with practical applications and coding exercises.',
    date: '2025-06-05T13:00:00Z',
    location: 'Tech Lab 101',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'workshop',
    organizer: 'AI Research Group',
    registrationUrl: '#',
    registrationDeadline: '2025-06-03T23:59:59Z'
  },
  {
    id: '5',
    title: 'Campus Olympics',
    description: 'Annual sports competition featuring various athletic events, team sports, and games for students of all fitness levels.',
    date: '2025-09-20T08:00:00Z',
    location: 'Sports Complex',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sports',
    organizer: 'Athletics Department',
    registrationUrl: '#',
    registrationDeadline: '2025-09-15T23:59:59Z'
  },
  {
    id: '6',
    title: 'Entrepreneurship Summit',
    description: 'Learn from successful entrepreneurs, participate in startup pitches, and network with potential investors and mentors.',
    date: '2025-08-15T09:30:00Z',
    location: 'Business School Auditorium',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'career',
    organizer: 'Entrepreneurship Club',
    registrationUrl: '#',
    registrationDeadline: '2025-08-10T23:59:59Z'
  },
  {
    id: '7',
    title: 'International Food Festival',
    description: 'Experience cuisines from around the world prepared by international students. A celebration of diversity through food and culture.',
    date: '2025-10-05T11:00:00Z',
    location: 'Student Center Plaza',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cultural',
    organizer: 'International Students Association',
    registrationUrl: '#',
    registrationDeadline: '2025-10-01T23:59:59Z'
  },
  {
    id: '8',
    title: 'Hackathon 2025',
    description: '48-hour coding challenge where teams compete to build innovative solutions. Prizes for winners and networking opportunities.',
    date: '2025-11-15T09:00:00Z',
    location: 'Innovation Center',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'academic',
    organizer: 'Computer Science Department',
    registrationUrl: '#',
    registrationDeadline: '2025-11-10T23:59:59Z'
  },
  {
    id: '9',
    title: 'Wellness Workshop',
    description: 'Learn techniques for managing stress, improving mental health, and maintaining work-life balance during your academic journey.',
    date: '2025-03-25T14:00:00Z',
    location: 'Health Center',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'workshop',
    organizer: 'Student Wellness Office',
    registrationUrl: '#',
    registrationDeadline: '2025-03-20T23:59:59Z'
  },
  {
    id: '10',
    title: 'Basketball Tournament',
    description: 'Annual inter-department basketball tournament. Form a team or join as a spectator to support your department.',
    date: '2025-12-10T09:00:00Z',
    location: 'University Arena',
    image: 'https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'sports',
    organizer: 'Athletics Department',
    registrationUrl: '#',
    registrationDeadline: '2025-12-05T23:59:59Z'
  },
  {
    id: '11',
    title: 'Networking Mixer',
    description: 'Casual networking event for students to connect with alumni and industry professionals in a relaxed setting.',
    date: '2025-02-15T17:00:00Z',
    location: 'Alumni Center',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'social',
    organizer: 'Alumni Association',
    registrationUrl: '#',
    registrationDeadline: '2025-02-10T23:59:59Z'
  },
  {
    id: '12',
    title: 'Research Symposium',
    description: 'Showcase of student research projects across all disciplines. Present your work or learn about ongoing research.',
    date: '2025-05-22T10:00:00Z',
    location: 'Science Building',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'academic',
    organizer: 'Research Office',
    registrationUrl: '#',
    registrationDeadline: '2025-05-15T23:59:59Z'
  }
];

export const clubs: Club[] = [
  {
    id: '1',
    name: 'Robotics Club',
    description: 'A community of robotics enthusiasts working on exciting projects, participating in competitions, and hosting workshops for beginners to advanced learners.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 87,
    category: 'technical',
    meetingSchedule: 'Thursdays, 5:00 PM - 7:00 PM',
    contactPerson: 'Alex Chen',
    email: 'robotics@campus.edu'
  },
  {
    id: '2',
    name: 'Drama Society',
    description: 'A vibrant community of theater enthusiasts presenting multiple productions each year, from classic plays to student-written original works.',
    image: 'https://images.pexels.com/photos/11323166/pexels-photo-11323166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 65,
    category: 'cultural',
    meetingSchedule: 'Tuesdays & Fridays, 6:00 PM - 8:30 PM',
    contactPerson: 'Maya Williams',
    email: 'drama@campus.edu'
  },
  {
    id: '3',
    name: 'Eco Warriors',
    description: 'Environmental advocacy group working on campus sustainability initiatives, community clean-ups, awareness campaigns, and eco-friendly projects.',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 112,
    category: 'volunteer',
    meetingSchedule: 'Wednesdays, 4:00 PM - 5:30 PM',
    contactPerson: 'Jordan Miller',
    email: 'ecowarriors@campus.edu'
  },
  {
    id: '4',
    name: 'Debate Club',
    description: 'A forum for students to develop critical thinking and public speaking skills through regular debates on contemporary social, political, and ethical issues.',
    image: 'https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 48,
    category: 'academic',
    meetingSchedule: 'Mondays, 5:30 PM - 7:30 PM',
    contactPerson: 'Sophia Patel',
    email: 'debate@campus.edu'
  },
  {
    id: '5',
    name: 'Basketball Club',
    description: 'Casual and competitive basketball for players of all skill levels, with weekly practice sessions, friendly matches, and tournament participation.',
    image: 'https://images.pexels.com/photos/2277981/pexels-photo-2277981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 74,
    category: 'sports',
    meetingSchedule: 'Saturdays, 10:00 AM - 12:00 PM',
    contactPerson: 'Marcus Johnson',
    email: 'basketball@campus.edu'
  },
  {
    id: '6',
    name: 'Photography Club',
    description: 'Explore the art of photography through workshops, photo walks, exhibitions, and collaborative projects with fellow photography enthusiasts.',
    image: 'https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/sites/26/2021/03/DSC_0003-1024x380.jpg',
    memberCount: 93,
    category: 'cultural',
    meetingSchedule: 'Fridays, 4:00 PM - 6:00 PM',
    contactPerson: 'Liam O\'Connor',
    email: 'photography@campus.edu'
  },
  {
    id: '7',
    name: 'Coding Collective',
    description: 'A community of programmers working on open-source projects, participating in coding competitions, and sharing knowledge through peer learning sessions.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 128,
    category: 'technical',
    meetingSchedule: 'Wednesdays, 6:00 PM - 8:00 PM',
    contactPerson: 'Priya Sharma',
    email: 'coding@campus.edu'
  },
  {
    id: '8',
    name: 'Chess Club',
    description: 'Join fellow chess enthusiasts for regular games, strategy sessions, and participation in inter-university tournaments.',
    image: 'https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 42,
    category: 'academic',
    meetingSchedule: 'Tuesdays & Thursdays, 5:00 PM - 7:00 PM',
    contactPerson: 'Ethan Rodriguez',
    email: 'chess@campus.edu'
  },
  {
    id: '9',
    name: 'Dance Crew',
    description: 'Express yourself through various dance styles including hip-hop, contemporary, jazz, and traditional forms. Regular performances and workshops.',
    image: 'https://images.pexels.com/photos/1701202/pexels-photo-1701202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 76,
    category: 'cultural',
    meetingSchedule: 'Mondays & Wednesdays, 6:00 PM - 8:00 PM',
    contactPerson: 'Aisha Patel',
    email: 'dance@campus.edu'
  },
  {
    id: '10',
    name: 'Soccer Team',
    description: 'Join our competitive or recreational soccer teams. Regular training sessions, friendly matches, and participation in university leagues.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 65,
    category: 'sports',
    meetingSchedule: 'Tuesdays & Thursdays, 4:00 PM - 6:00 PM',
    contactPerson: 'Carlos Mendez',
    email: 'soccer@campus.edu'
  },
  {
    id: '11',
    name: 'Community Service',
    description: 'Make a difference in the community through various volunteer initiatives, fundraisers, and service projects both on and off campus.',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 108,
    category: 'volunteer',
    meetingSchedule: 'Saturdays, 9:00 AM - 12:00 PM',
    contactPerson: 'Emma Thompson',
    email: 'community@campus.edu'
  },
  {
    id: '12',
    name: 'Gaming Society',
    description: 'Connect with fellow gamers for casual play, tournaments, and discussions about game design, esports, and the gaming industry.',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    memberCount: 156,
    category: 'social',
    meetingSchedule: 'Fridays, 5:00 PM - 9:00 PM',
    contactPerson: 'Ryan Kim',
    email: 'gaming@campus.edu'
  }
];