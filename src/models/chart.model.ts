import mongoose, { model, Schema } from "mongoose";

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

const chartModel = () => {
    return model("graphData") || model("graphData", schema)
};

export default chartModel