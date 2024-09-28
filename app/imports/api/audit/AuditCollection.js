import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// Audit collection for audited balance sheet
class AuditCollection {
  constructor() {
    this.name = 'AuditCollection';
    this.collection = new Mongo.Collection(this.name);

    /* In practice, this collection should save a copy of the document with who did it, when, and what they did */
    this.schema = new SimpleSchema({
      BalanceCollectionAudit: {
        collectionName: String,
        document: document,
        documentID: String,
        operation: {
          type: String,
          allowedStrings: ['Inserted new document', 'Deleted document', 'Modified existing document'],
        },
        user: String,
        timestamp: Date(),

      },
    });
    this.collection.attachSchema(this.schema);
    this.adminPublicationName = `${this.name}.publication.admin`;
  }

}

export const Audit = new AuditCollection();
