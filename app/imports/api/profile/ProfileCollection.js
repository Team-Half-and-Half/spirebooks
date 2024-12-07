import SimpleSchema from 'simpl-schema';
import BaseCollection from '../base/BaseCollection';

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
}
