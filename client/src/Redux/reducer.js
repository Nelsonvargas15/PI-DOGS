const initialState = {

  allDogs: [],
  dogs: [],
  temperaments:[],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DOG":
      
      return {
        ...state,
        allDogs: action.payload,
        dogs: action.payload
      }

    case 'GET_NAME_DOGS':
      return {
        ...state,
        dogs: action.payload
      }

    case "ORDER_BY_NAME":
      const orderArr =
        action.payload === "asc"
          ? [...state.allDogs].sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
          : [...state.allDogs].sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });

      return {
        ...state,
        dogs: orderArr,
      };
       
      case "GET_TEMPERAMENTS":
        return {
          ...state,
        temperaments:action.payload
        }

        // case "FLITRAR":
        //   return{
        //     ...state,
        //     dogs : filtro,
        //   }


    default: return {
      ...state
    }
  }
}





export default rootReducer;