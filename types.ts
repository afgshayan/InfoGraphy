
export interface Stats2024 {
  attacks: number;
  deaths2024: number;
  deaths2023: number;
  sharePercentage: number;
}

export interface HistoricalEvent {
  year: string;
  title: string;
  description: string;
}

export interface FinanceSource {
  title: string;
  amount?: string;
  description: string;
}
