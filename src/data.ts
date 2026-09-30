import { TrackingItem } from './types';

export const PRELOADED_TRACKING: TrackingItem[] = [
  {
    trackingId: 'MH20240901001',
    service: 'Logistics',
    location: 'Dhaka',
    status: 'In Progress',
    assignedTech: 'Engr. Kamrul Hasan',
    updates: [
      {
        timestamp: '2024-09-30 14:30',
        status: 'Assigned',
        note: 'Dispatcher team assigned. Vehicle #09-D loaded and dispatched from Jatrabari hub.',
        location: 'Dhaka'
      },
      {
        timestamp: '2024-09-30 10:15',
        status: 'Received',
        note: 'Booking received and confirmed. Ticket generated.',
        location: 'Dhaka'
      }
    ]
  },
  {
    trackingId: 'MH20240902002',
    service: 'Dispatch',
    location: 'Chittagong',
    status: 'Completed',
    assignedTech: 'Dispatch Crew A',
    updates: [
      {
        timestamp: '2024-09-29 18:45',
        status: 'Completed',
        note: 'Official servicing sign-off completed by client. Warranty seal applied.',
        location: 'Chittagong'
      },
      {
        timestamp: '2024-09-29 16:20',
        status: 'Inspection',
        note: 'Servicing actions finalized. Diagnostic test successful.',
        location: 'Chittagong'
      }
    ]
  },
  {
    trackingId: 'MH20240903003',
    service: 'Consultation',
    location: 'Sylhet',
    status: 'Assigned',
    assignedTech: 'Dispatch Crew B',
    updates: [
      {
        timestamp: '2024-09-28 09:00',
        status: 'Received',
        note: 'Consultation request received and queued.',
        location: 'Sylhet'
      }
    ]
  }
];
