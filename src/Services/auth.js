export const TOKEN_KEY = "@ControleDeEstoque-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
  };
  export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
  };
export const user = {name: "lampinho", password: "cpejr123"};