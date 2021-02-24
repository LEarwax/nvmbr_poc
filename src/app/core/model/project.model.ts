export class Project {
    constructor(
        public client: string,
        public name: string,
        public billable: boolean,
        public startDate: Date,
        // TODO: Status is a bool, make a type for it?
        public status: number,
        public budgetAmount: number,
        public actualAmount: number,
        public budgetThresholdPercentage: number,
        public description?: string, 
        public endDate?: Date,
        public projectManger?: String,
    ) { }
}