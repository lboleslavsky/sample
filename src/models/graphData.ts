import mongoose, { model, models, Schema } from "mongoose";

const schema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        reqired: true
    },
    text: {
        type: String,
        reqired: true
    }
})

const graphData = () => {
    return mongoose.models.graphData|| model("graphData", schema)
};

export default graphData