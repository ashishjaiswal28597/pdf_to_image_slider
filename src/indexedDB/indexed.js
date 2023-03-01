// const dbName = "pdfs-db";
// const objectStoreName = "pdfs";

// // Open the database and define the object store
// const request = indexedDB.open(dbName, 1);

// request.onupgradeneeded = function(event) {
//   const db = event.target.result;
//   const objectStore = db.createObjectStore(objectStoreName, { keyPath: "id" });
//   objectStore.createIndex("name", "name", { unique: false });
//   objectStore.createIndex("date", "date", { unique: false });
// };

// request.onsuccess = function(event) {
//   const db = event.target.result;
//   const objectStore = db.transaction([objectStoreName], "readwrite").objectStore(objectStoreName);

//   // Add a PDF file to the object store
//   const pdfFile = { id: 1, name: "Sample PDF", date: new Date(), file: pdfBlob };
//   const addRequest = objectStore.add(pdfFile);

//   addRequest.onsuccess = function() {
//     console.log("PDF file added to IndexedDB");
//   };

//   addRequest.onerror = function() {
//     console.log("Failed to add PDF file to IndexedDB");
//   };

//   // Retrieve PDF files from the object store
//   const getRequest = objectStore.get(1);

//   getRequest.onsuccess = function() {
//     const pdfFile = getRequest.result;
//     console.log(`Retrieved PDF file: ${pdfFile.name}`);
//   };

//   getRequest.onerror = function() {
//     console.log("Failed to retrieve PDF file from IndexedDB");
//   };

//   const getAllRequest = objectStore.getAll();

//   getAllRequest.onsuccess = function() {
//     const pdfFiles = getAllRequest.result;
//     console.log(`Retrieved ${pdfFiles.length} PDF files from IndexedDB`);
//   };

//   getAllRequest.onerror = function() {
//     console.log("Failed to retrieve PDF files from IndexedDB");
//   };

//   // Delete a PDF file from the object store
//   const deleteRequest = objectStore.delete(1);

//   deleteRequest.onsuccess = function() {
//     console.log("PDF file deleted from IndexedDB");
//   };

//   deleteRequest.onerror = function() {
//     console.log("Failed to delete PDF file from IndexedDB");
//   };
// };

// request.onerror = function() {
//   console.log("Failed to open IndexedDB");
// };
