export interface Project {
    billingClient: string;
    name: string;
    projectManager: string;
    status: string;
    billable: boolean;
    budget: number;
    budgetAlertPercentage: number;
    actualAmount: number;
    startDate: string;
    endDate: string;
    notes: string;
}