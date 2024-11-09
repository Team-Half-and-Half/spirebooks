import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The DatabaseConfigurationCollection.
 *
 */
class DatabaseConfigurationCollection {
  constructor() {
    // The name of this collection.
    this.name = 'DatabaseConfigurationCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      databaseFileDateFormat: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const DatabaseConfiguration = new DatabaseConfigurationCollection();
