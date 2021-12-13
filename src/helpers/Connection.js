const connection = () => {

  let cookie = null;

  const customFetch = (endpoint, options) => {
    const fetchOptions = options;
    const defaultHeader = {
      accept: 'application/json',
      'Access-Control-Expose-Headers':'*',
    };

    const controller = new AbortController();
    fetchOptions.signal = controller.signal;

    fetchOptions.method = options.method || 'GET';
    fetchOptions.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;
    fetchOptions.credentials = 'include';
    if(sessionStorage.getItem('Cookie')) {
      fetchOptions.headers['Cookie'] = sessionStorage.getItem('Cookie');
    }

    fetchOptions.body = JSON.stringify(options.body) || false;
    if (!options.body) delete fetchOptions.body;
    setTimeout(() => controller.abort(), 10000);

    return fetch(endpoint, options)
      .then((res) => {
        if(res.ok){
          if(res.headers.has('Set-Cookie')) {            
            sessionStorage.setItem('Cookie', res.headers.get('Set-Cookie'));
            cookie = res.headers.get('Set-Cookie');
          }
          return Promise.resolve(res);
        } else {
          return Promise.reject({
            err: true,
            status: res.status || '00',
            statusText: res.statusText || 'Ocurrió un error',
          })
        }        
      }).catch(error => error);      
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    const customOptions = options;
    customOptions.method = 'POST';
    return customFetch(url, customOptions);
  };

  const put = (url, options = {}) => {
    const customOptions = options;
    customOptions.method = 'PUT';
    return customFetch(url, customOptions);
  };

  const del = (url, options = {}) => {
    const customOptions = options;
    customOptions.method = 'DELETE';
    return customFetch(url, customOptions);
  };

  return {
    get,
    post,
    put,
    del,
  };
};

export default connection;