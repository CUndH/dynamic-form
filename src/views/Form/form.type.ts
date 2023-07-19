export interface DeviceDetail {
  ip: string;
  port: number;
  model: string;
  rackNumber?: string;
  slotNumber?: string;
  TSAPClient?: string;
  TSAPServer?: string;
  pollingPeriod: number;
}

export interface DotDetail {
  name: string;
}