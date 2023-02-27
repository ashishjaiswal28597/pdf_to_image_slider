import React, { useEffect } from "react";

const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const insertDataInIndexedDb = () => {
  //check for support
  if (!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }

  console.log(idb);

  const request = idb.open("test-db", 1);

  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error(event);
  };

  request.onupgradeneeded = function (event) {
    console.log(event);
    const db = request.result;

    if (!db.objectStoreNames.contains("userData")) {
      const objectStore = db.createObjectStore("userData", {
        keyPath: "id",
      });
    }
  };

  request.onsuccess = () => {
    console.log("Database opened successfully");
  };
};
const indexed = () => {
  
  useEffect(() => {
    insertDataInIndexedDb();
  }, []);
 
  return;
  <>

  </>;
};

export default indexed;
