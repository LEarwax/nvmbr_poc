export interface IProject {
    projectID?: string;
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

export class Project {
    projectID?: string;
    billingClient?: string;
    name?: string;
    projectManager?: string;
    status?: string;
    billable?: boolean;
    budget?: number;
    budgetAlertPercentage?: number;
    actualAmount?: number;
    startDate?: string;
    endDate?: string;
    notes?: string;


    //TODO: Fix this so we don't need casting
    constructor(project: Project) {
        this.projectID = project.projectID,
        this.billingClient = project.billingClient,
        this.name = project.name,
        this.projectManager = project.projectManager,
        this.status = project.status,
        this.billable = Boolean(project.billable),
        this.budget = Number(project.budget),
        this.budgetAlertPercentage = Number(project.budgetAlertPercentage),
        this.actualAmount = Number(project.actualAmount),
        this.startDate = project.startDate,
        this.endDate = project.endDate,
        this.notes = project.notes
    }
}