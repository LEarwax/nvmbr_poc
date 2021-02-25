export interface Project {
    client: string;
    name: string;
    projectManager: string;
    status: boolean;
    billable: boolean;
    startDate: Date;
    endDate: Date;
    budget: number;
    actual: number;
    alertPercentage: number;
}