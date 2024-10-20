import { Schema, model } from 'mongoose';

export const MensajeSchema = Schema({

    from: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    message: {
        type: String,
        required: true
    }

}, {
    timestamps: true,
});

MensajeSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

export default model('Mensaje', MensajeSchema);