function descargarArchivo() {
  var url = document.getElementById("fileUrl").value;
  if (url.trim() === "") {
    alert("Por favor, ingrese una URL válida.");
    return;
  }

  // Crear un enlace temporal para descargar el archivo
  var link = document.createElement("a");
  link.href = url;
  link.download = url.substring(url.lastIndexOf('/') + 1);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
