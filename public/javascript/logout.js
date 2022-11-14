const logout = async() => {
    try {
        const wasLoggedIn = await new Authenticator().logout();
        if (!wasLoggedIn) {
          console.warn("User was not loggedin", wasLoggedIn)
        };
        
        process.exit(0);
        
    } catch (err) {
        console.error(err)
    }
};