export class Client {
    constructor(
        public name: string,
        public address: string,
        public contactName: string,
        public notes?: string,
        public history?: string,
        public status?: string
    ) { }
}