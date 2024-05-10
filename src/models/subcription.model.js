import mongoose, { Schema } from "mongoose";

const subsCriptionSchema = new Schema({
    subsCriber:{
        type: Schema.Types.ObjectId,  // one who is subscribing
        ref: "User"
    },
    channles:{
        type:Schema.Types.ObjectId, // one to whom is subscriber is subscribing
        ref:"User"
    },
},
{
    timestamps:true
}
);

export const SubsCription = mongoose.model("SubsCription", subsCriptionSchema);