const CONSTANTS = {
    PAGINATION: {
      DEFAULT_PAGE: 1,
      DEFAULT_LIMIT: 10,
    },
    TOKEN_EXPIRACY: {
        ACCESS: process.env.TOKEN_EXPIRACY_ACCESS || '1h',
        REFRESH: process.env.TOKEN_EXPIRACY_REFRESH || '1d',
      },
  };
  
  export default CONSTANTS;