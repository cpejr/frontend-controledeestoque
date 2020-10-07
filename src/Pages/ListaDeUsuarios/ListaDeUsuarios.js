import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./ListaDeUsuariosStyle";
import produtostyles from "../ListaDeProdutos/listaDeProdutosStyle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

let USERS = [
  {
    userName: "Arthur Lima",
    userType: "Manager",
  },
  {
    userName: "Izabela Brandt",
    userType: "Manager",
  },
  {
    userName: "João Trindade",
    userType: "Manager",
  },
  {
    userName: "Carol Batista",
    userType: "Manager",
  },
  {
    userName: "Raphael Souza",
    userType: "Admin",
  },
  {
    userName: "Elias Silva",
    userType: "Admin",
  },
  {
    userName: "Vinícius Morais",
    userType: "Admin",
  },
  {
    userName: "Lucas Milhorato",
    userType: "Employee",
  },
  {
    userName: "André Pinto",
    userType: "Employee",
  },
  {
    userName: "Bernardo Andrade",
    userType: "Employee",
  },
  {
    userName: "Lucas Chaia",
    userType: "Employee",
  },
];

export default function ListaDeUsuarios() {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(USERS);
  const filteredNames = users.filter((name) =>
    name.userName.toLocaleLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}
    >
      <input
        style={styles.inputField}
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={styles.userTypeHeader}>ADMINS</div>
      <div style={styles.userTypeContainer}>
        {filteredNames.map((user) => {
          if (user.userType === "Admin") {
            return (
              <ul
                style={styles.listitem}
                onClick={() => {
                  history.push({
                    pathname: "/usuario",
                    state: {
                      calledRoute: "usuario",
                      user: user,
                    },
                  });
                }}
              >
                <ul>{user.userName}</ul>
              </ul>
            );
          }
        })}
      </div>

      <div style={styles.userTypeHeader}>GERENTES</div>
      <div style={styles.userTypeContainer}>
        {filteredNames.map((user) => {
          if (user.userType === "Manager") {
            return (
              <ul
                style={styles.listitem}
                onClick={() => {
                  history.push({
                    pathname: "/usuario",
                    state: {
                      user: user,
                    },
                  });
                }}
              >
                <ul>{user.userName}</ul>
              </ul>
            );
          }
        })}
      </div>

      <div style={styles.userTypeHeader}>EMPREGADOS</div>
      <div style={styles.userTypeContainer}>
        {filteredNames.map((user) => {
          if (user.userType === "Employee") {
            return (
              <ul
                style={styles.listitem}
                onClick={() => {
                  history.push({
                    pathname: "/usuario",
                    state: {
                      user: user,
                    },
                  });
                }}
              >
                <ul>{user.userName}</ul>
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
}
