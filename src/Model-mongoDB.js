// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;
//
// const chatSchema = new Schema(
// 	{
// 		message: {
// 			type: String
// 		},
// 		userIp: {
// 			type: String
// 		},
// 		nickname: {
// 			type: String
// 		}
// 	},
// 	{
// 		timestamps: true
// 	}
// );
//
// const userSchema = new Schema(
// 	{
// 		userIp: {
// 			type: String
// 		},
// 		nickname: {
// 			type: String
// 		}
// 	},
// 	{
// 		timestamps: true
// 	}
// );
//
// let Chat = mongoose.model("theChat", chatSchema);
// let Users = mongoose.model("theUser", userSchema);
//
// module.exports = {
// 	Chat: Chat,
// 	Users:Users
// };