const initialState = {

  allDogs: [],
  dogs: [],
  temperaments: [],
  dogId :[],
  currentPage : 1 ,
  createdFilter :[]

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
        temperaments: action.payload
      }

    case "FILTER_DOGS_BY_TEMPERAMENT":
      const dogTemperament = state.allDogs.filter((dog) =>
        dog.temperament?.includes(action.payload) ? dog : null
          
      );
      
      return {

        ...state,
        dogs:
          action.payload === "AllTemperaments" ? state.allDogs : dogTemperament,
        };

       case "POST_DOGS":
        return{
          ...state,
        }

       case "EMPTY_DETAIL":      
        case "DOG_DETAIL":
          return {
            ...state,
            dogId: action.payload,
          };

          case "CHANGE_PAGE":
            return{
              ...state,
              currentPage: action.payload,
            }


            case "FILTER_DOG_CREATED":
      const createdFilter =
        action.payload === "Created"
          ? state.allDogs.filter((ele) => ele.createInDb)
          : state.allDogs.filter((ele) => !ele.createInDb);

      return {
        ...state,
        dogs: createdFilter,
      };


    default: return {
      ...state
    }
  }
}





export default rootReducer;