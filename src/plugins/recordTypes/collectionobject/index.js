import columns from './columns';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';
import optionLists from './optionLists';

export default () => (configContext) => ({
  idGenerators,
  optionLists,
  recordTypes: {
    collectionobject: {
      columns,
      messages,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
