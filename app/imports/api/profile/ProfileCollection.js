import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import BaseProfileCollection from '../user/BaseProfileCollection';

export const profilesPublications = {
  profiles: 'Profiles',
  profilesAdmin: 'ProfilesAdmin',
};

class ProfileCollection extends BaseCollection {
  constructor() {
    super('Profile', new SimpleSchema({
      name: {
        type: String,
        optional: false,
      },
      owner: {
        type: String,
        optional: false,
      },
      modified: {
        type: Date,
        defaultValue: new Date(),
      },
      image: {
        type: String,
        defaultValue: 'https://cdn.prod.website-files.com/5fdaca5a4d51110c2f760a05/651ee756e790fe1817276c02_SpireLogo-2z-p-500.png',
      },
      members: {
        type: Array,
        optional: true,
      },
      'members.$': {
        type: String,
      },

    }));
  }

  /**
     * Defines a new profile.
     * @param name The name of the profile.
     * @param owner The owner of the profile.
     * @param image The optional image associated with the profile.
     * @return {String} The docID of the new profile document.
     */
  define({ name, owner, image }) {
    const docID = this._collection.insert({
      name,
      owner,
      image,
      members: [owner],
      modified: new Date(),
    });
    return docID;
  }

  /**
     * Updates the given profile document.
     * @param docID the id of the document to update.
     * @param name The name of the profile.
     * @param owner The owner of the profile.
     * @param image The optional image associated with the profile.
     */
  update(docID, { name, image }) {
    const updateData = {
      name,
      image,
      modified: new Date(),
    };
    this._collection.update(docID, { $set: updateData });
  }

  /** Adds a member to the collection
     * @param docID - The ID of the profile.
     * @param email - The email of user
     */
  addMember(docID, email) {
    const user = BaseProfileCollection.getID(email);
    this._collection.update(docID, {
      $push: { members: user },
    });
  }

  /** Removes a member to the collection
     * @param docID - The ID of the profile.
     * @param email - The email of user
     */
  removeMember(docID, email) {
    const user = BaseProfileCollection.getID(email);
    this._collection.update(docID, {
      $pull: { members: user },
    });
  }

  /**
     * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
     * @param { String | Object } name A document or docID in this collection.
     * @returns true
     */
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
     * Default publication method for entities.
     * It publishes the entire collection for admin and just the profile associated to an owner.
     */
  publish() {
    if (Meteor.isServer) {
      // get the AuditedFSCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(profilesPublications.profiles, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(profilesPublications.profilesAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
     * Subscription method for profiles owned by the current user.
     */
  subscribeProfile() {
    if (Meteor.isClient) {
      return Meteor.subscribe(profilesPublications.profiles);
    }
    return null;
  }

  /**
     * Subscription method for admin users.
     * It subscribes to the entire collection.
     */
  subscribeProfileAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(profilesPublications.profilesAdmin);
    }
    return null;
  }

  /**
     * Default implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or User.
     * This is used in the define, update, and removeIt Meteor methods associated with each class.
     * @param userId The userId of the logged in user. Can be null or undefined
     * @throws { Meteor.Error } If there is no logged in user, or the user is not an Admin or User.
     */
  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  /**
     * Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
     * @param docID
     * @return { name, owner, image, modified }
     */
  dumpOne(docID) {
    const { name, owner, image, modified } = this.findDoc(docID);
    return { name, owner, image, modified };
  }

}
/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Profile = new ProfileCollection();
