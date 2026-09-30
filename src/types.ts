export type TrackingStatus = 'Received' | 'Assigned' | 'In Progress' | 'Inspection' | 'Completed';

export interface TrackingHistory {
  timestamp: string;
  status: TrackingStatus;
  note: string;
  location: string;
}

export interface TrackingItem {
  trackingId: string;
  service: string;
  location: string;
  status: TrackingStatus;
  assignedTech: string;
  updates: TrackingHistory[];
}
