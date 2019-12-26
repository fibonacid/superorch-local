const Api = {
  /**
   * Login to a server
   *
   * @param url: address of the server
   * @param username: name for the user
   * @param password: key to connect to the server
   *
   */
  login: function(url, username, password) {},

  /**
   * Logout from the server
   */
  logout: function() {},

  /**
   * Create a document on the server
   *
   * @param data
   */
  createDocument: function(data) {},

  /**
   * Create a document on the server
   *
   * @param id
   * @param data
   */
  updateDocument: function(id, data) {}
};

export default Api;
