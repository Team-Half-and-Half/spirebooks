import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// Audit collection for audited balance sheet
class BalanceAuditCollection {
  constructor() {
    this.name = 'BalanceAudit';
    this.collection = new Mongo.Collection(this.name);

    this.schema = new SimpleSchema({
      BalanceCollectionAudit: {
        collection: 'AuditedBalanceCollection',
        document: document,
        documentID: String,
        operation: {
          type: String,
          allowedStrings: ['insert', 'delete', 'modify'],
        },
        user: String,
        timestamp: Date(),

      },
    });
    this.collection.attachSchema(this.schema);
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const BalanceAudit = new BalanceAuditCollection();
