import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const userVerificationPublications = {
  verificationUsers: 'verificationUsers',
  verificationAdmins: 'verificationAdmins',
};

/**
 * The UserVerificationCollection.
 *
 */
class UserVerificationCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserVerificationCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      verification: {
        type: Boolean,
        defaultValue: false,
      },
      username: {
        type: String,
      },
      userID: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const UserVerification = new UserVerificationCollection();
