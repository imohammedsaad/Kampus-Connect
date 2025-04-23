import { formatDistance, format, isPast, isToday, addDays } from 'date-fns';

export const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'MMMM d, yyyy • h:mm a');
};

export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  
  if (isPast(date)) {
    if (isToday(date)) {
      return 'Today';
    }
    return `${formatDistance(date, now)} ago`;
  }
  
  if (isToday(date)) {
    return `Today at ${format(date, 'h:mm a')}`;
  }
  
  if (isToday(addDays(date, -1))) {
    return `Tomorrow at ${format(date, 'h:mm a')}`;
  }
  
  return `in ${formatDistance(date, now)}`;
};

export const getGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return 'Good Morning';
  } else if (hour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

export const getDayPeriod = (): 'morning' | 'afternoon' | 'evening' | 'night' => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return 'morning';
  } else if (hour < 18) {
    return 'afternoon';
  } else if (hour < 22) {
    return 'evening';
  } else {
    return 'night';
  }
};