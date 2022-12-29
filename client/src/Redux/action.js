import axios from "axios"

// export const getDogs = () => {
//   return async function(dispatch){
//     const data = await axios.get("http://localhost:3001/dogs");
//     return dispatch({
//         type : "GET_DOGS",
//         payload: data.data,
//     })
//   }
  
// }

export const getDogs = () => {
  return async (dispatch) => {
      let data = await axios.get("http://localhost:3001/dogs")
      
      return  dispatch({type: "GET_DOG", payload: data.data});
    };


}

export function getNameDogs (name){
  return async function (dispatch){
      try {
          var data = await axios.get(`http://localhost:3001/dogs?name=${name}`)
          return dispatch({
              type: 'GET_NAME_DOGS',
              payload: data.data
          })
      } catch (error) {
          console.log(error);
      }
  }
}

export function orderName (payload){
    return {
        type: "ORDER_BY_NAME",
        payload,
    }
}


export function getTemperaments(){
    return async function(dispatch){
        let data = await  axios.get("http://localhost:3001/temperaments")
        return dispatch ({
            type: "GET_TEMPERAMENTS",
            payload : data.data
        })
    }
}


export function getDogsByTemperament(payload) {
    return {
      type: "FILTER_DOGS_BY_TEMPERAMENT",
      payload,
    };
  }

  export function postCreateDog(payload) {
    console.log(payload)
    return async function () {
      const data = await axios.post("http://localhost:3001/dogs", payload);
      
      return data;
    };
  }

  export const getDogById = (id) => {
    return async (dispatch) => {
      let data = await axios.get(`http://localhost:3001/dogs/${id}`);
      return dispatch({ type: "DOG_DETAIL", payload: data.data });
    };
  };

  export const  emptyDetail = () => {
    return {
      type :"EMPTY_DETAIL",
      payload:[],
    }
  }
 
  export const ChangePage =(payload) => {
      return{
        type:"CHANGE_PAGE",
        payload: payload ++,
      }
  }
  export function filterCreated(payload) {
    // nuestro payload sera la opcion que elijamos
    // dependiendo del payload
    return {
      type: "FILTER_DOG_CREATED",
      payload,
    };
  }

