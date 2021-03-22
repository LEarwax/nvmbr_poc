// export interface IClient {
//     clientID?: string;
//     name?: string;
//     dateCreated?: string;
//     status?: string;
//     email?: string;
//     website?: string; 
//     phone?: string;
//     fax?: string;
//     description?: string;
// }

export class Client {
    clientID: string;
    name: string;
    dateCreated: string;
    status: string;
    email: string;
    website: string;
    phone: string;
    fax: string;
    description: string;

    constructor(
        clientID: string,
        name: string, 
        dateCreated: string,
        status: string, 
        email: string, 
        website: string,
        phone: string,
        fax: string,
        description: string) { 
        this.clientID = clientID,
        this.name = name,
        this.dateCreated = dateCreated,
        this.status = status,
        this.email = email,
        this.website = website,
        this.phone = phone,
        this.fax = fax,
        this.description = description
    }
}

