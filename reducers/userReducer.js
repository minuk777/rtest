export default function userReducer (state={
	user: {
		name:null,
		age:null,
	},
	myname:null
}, action) {
	switch(action.type) {
		case "FETCH_USER_INFO" : {
			state = {...state, myname: action.payload}
			break;
		}
	}
	return state;
};