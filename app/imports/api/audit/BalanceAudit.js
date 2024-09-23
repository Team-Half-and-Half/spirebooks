import { Mongo } from 'meteor/mongo';
import SimpleSchema from "simpl-schema";

class BalanceAudit {
    constructor() {
        this.name = 'BalanceAudit';
        this.collection = new Mongo.Collection(this.name);

        this.schema = new SimpleSchema({
            BalanceCollectionAudit: {
                type: AuditedBalanceCollection,
                optional: false,
            }
        })
        this.userPublicationName = `${this.name}.publication.user`;
        this.adminPublicationName = `${this.name}.publication.admin`;
    }
}

export const BalanceAudit = new BalanceAudit();
