// export interface IProject {
//     projectID?: string;
//     billingClient: string;
//     name: string;
//     projectManager: string;
//     status: string;
//     billable: boolean;
//     budget: number;
//     budgetAlertPercentage: number;
//     actualAmount: number;
//     startDate: string;
//     endDate: string;
//     notes: string;
// }

export class Project {
    projectID: string;
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

    //TODO: Fix this so we don't need casting
    constructor(
        projectID: string,
        billingClient: string,
        name: string,
        projectManager: string,
        status: string,
        billable: boolean,
        budget: number,
        budgetAlertPercentage: number,
        actualAmount: number,
        startDate: string,
        endDate: string,
        notes: string) {
        this.projectID = projectID,
        this.billingClient = billingClient,
        this.name = name,
        this.projectManager = projectManager,
        this.status = status,
        this.billable = billable,
        this.budget = budget,
        this.budgetAlertPercentage = budgetAlertPercentage,
        this.actualAmount = actualAmount,
        this.startDate = startDate,
        this.endDate = endDate,
        this.notes = notes
    }
}