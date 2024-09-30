import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

const DataInputSchema = new SimpleSchema({
  year: {
    type: Number,
    defaultValue: 1,
    min: 1,
  },
  // Cash and Cash Equivalents
  pettyCash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
});

export const DataInputBridge = new SimpleSchema2Bridge(DataInputSchema);
