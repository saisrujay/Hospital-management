const mongoose = require('mongoose');

const sequenceSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 },
  },
  { collection: 'sequence_counters' }
);

const SequenceCounter = mongoose.model('SequenceCounter', sequenceSchema);

module.exports = SequenceCounter;
