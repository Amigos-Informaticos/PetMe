const isAuth = () => {
     let isAuth = false;
     if(sessionStorage.getItem('token') && sessionStorage.getItem('id')) {
         isAuth = true;
     }
     return isAuth;
};

export {isAuth};