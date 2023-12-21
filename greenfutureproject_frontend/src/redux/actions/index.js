export const GET_RACCOLTE = "GET_RACCOLTE";
export const CREATE_RACCOLTA = "CREATE_RACCOLTA";
export const MODIFY_RACCOLTA = "MODIFY_RACCOLTA";
export const DELETE_RACCOLTA = "DELETE_RACCOLTA";
export const GET_MATERIALI = "GET_MATERIALI";
export const CREATE_MATERIALE = "CREATE_MATERIALE";
export const MODIFY_MATERIALE = "MODIFY_MATERIALE";
export const DELETE_MATERIALE = "DELETE_MATERIALE";
export const SET_ADMIN_NAME = "SET_ADMIN_NAME";
export const SET_USER_NAME = "SET_USER_NAME";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER = "USER_REGISTER";
export const GET_USER_DATA = "GET_USER_DATA";

//Raccolte actions

export const getAllRaccolteAction = () => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3000/raccolte";

    console.log(endpoint);
    try {
      const resp = await fetch(endpoint);
      if (resp.ok) {
        const dataRaccolte = await resp.json();
        dispatch({ type: GET_RACCOLTE, payload: dataRaccolte });
      } else {
        alert("Errore qualcosa è andato storto");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createRaccoltaAction = savedRaccolta => {
    return async (dispatch, getState) => {
      const token = getState().auth.token;
      try {
        let resp = await fetch("http://localhost:3001/raccolte", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body:JSON.stringify(savedRaccolta),
        });
        if (resp.ok) {
          let dataRaccolta = await resp.json();
          dispatch({ type: CREATE_RACCOLTA, payload: dataRaccolta });
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("fetch loading finish");
      }
    };
  }

  export const deleteRaccoltaAction = index => ({ type: DELETE_RACCOLTA, payload: index });


  //Materiali actions

  export const getAllMaterialiAction = () => {
    return async (dispatch) => {
      const endpoint = "http://localhost:3000/materiali";
  
      console.log(endpoint);
      try {
        const resp = await fetch(endpoint);
        if (resp.ok) {
          const dataMateriali = await resp.json();
          dispatch({ type: GET_MATERIALI, payload: dataMateriali });
        } else {
          alert("Errore qualcosa è andato storto");
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const createMaterialeAction = savedMateriale => {
      return async (dispatch, getState) => {
        const token = getState().auth.token;
        try {
          let resp = await fetch("http://localhost:3001/materiali", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body:JSON.stringify(savedMateriale),
          });
          if (resp.ok) {
            let dataMateriale = await resp.json();
            dispatch({ type: CREATE_MATERIALE, payload: dataMateriale });
          } else {
            console.log("error");
          }
        } catch (error) {
          console.log(error);
        } finally {
          console.log("fetch loading finish");
        }
      };
    }
  
    export const deleteMaterialeAction = index => ({ type: DELETE_MATERIALE, payload: index });


    //Auth actions

    export const loginAction = (body) => {
        return async (dispatch) => {
          try {
            let resp = await fetch("http://localhost:3001/auth/login", {
              method: "POST",
              headers: {
                //Authorization: AUTHORIZATION,
                "Content-Type": "application/json",
              },
              body,
            });
            if (resp.ok) {
              let data = await resp.json();
              dispatch({ type: USER_LOGIN, payload: data.accessToken });
            } else {
              console.log("error");
            }
          } catch (error) {
            console.log(error);
          } finally {
            console.log("fetch loading finish");
          }
        };
      };
      
      export const registerAction = (body) => {
        return async (dispatch) => {
          try {
            let resp = await fetch("http://localhost:3001/auth/register", {
              method: "POST",
              headers: {
                //Authorization: AUTHORIZATION,
                "Content-Type": "application/json",
              },
              body,
            });
            if (resp.ok) {
              let data = await resp.json();
              dispatch({ type: USER_REGISTER, payload: data });
            } else {
              console.log("error");
            }
          } catch (error) {
            console.log(error);
          } finally {
            console.log("fetch loading finish");
          }
        };
      };
      
      export const getUserDataAction = () => {
        return async (dispatch, getState) => {
          const token = getState().auth.token;
          try {
            let resp = await fetch("http://localhost:3001/users/me", {
              //   method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              //   body,
            });
            if (resp.ok) {
              let data = await resp.json();
              dispatch({ type: GET_USER_DATA, payload: data });
            } else {
              console.log("error");
            }
          } catch (error) {
            console.log(error);
          } finally {
            console.log("fetch loading finish");
          }
        };
      };
      
      export const logoutAction = () => ({ type: USER_LOGOUT });


