import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./ListaDeUsuariosStyle";
import produtostyles from "../ListaDeProdutos/listaDeProdutosStyle";

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

  function isInFilteredNames(filteredNames, user) {
    let pin = 0;
    filteredNames.map((pessoa) => {
      if (pessoa.userName == user) {
        pin += 1;
      }
    });
    if (pin > 1) {
      return true;
    } else {
      return false;
    }
  }

  console.log(filteredNames);

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
              <div
                style={styles.userContainer}
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
                <div>{user.userName}</div>
              </div>
            );
          }
        })}
      </div>

      <div style={styles.userTypeHeader}>GERENTES</div>
      <div style={styles.userTypeContainer}>
        {filteredNames.map((user) => {
          if (user.userType === "Manager") {
            return (
              <div
                style={styles.userContainer}
                onClick={() => {
                  history.push({
                    pathname: "/usuario",
                    state: {
                      user: user,
                    },
                  });
                }}
              >
                <div>{user.userName}</div>
              </div>
            );
          }
        })}
      </div>

      <div style={styles.userTypeHeader}>EMPREGADOS</div>
      <div style={styles.userTypeContainer}>
        {filteredNames.map((user) => {
          if (user.userType === "Employee") {
            return (
              <div
                style={styles.userContainer}
                onClick={() => {
                  history.push({
                    pathname: "/usuario",
                    state: {
                      user: user,
                    },
                  });
                }}
              >
                <div>{user.userName}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
