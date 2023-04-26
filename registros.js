function gerarPdf() {
  const registros = document.querySelectorAll("#tbody-registros tr");
  const doc = new jsPDF();
  doc.text("Registros de Entregas", 10, 10);
  let y = 20;
  registros.forEach(registro => {
    const data = registro.querySelector(".data").textContent;
    const saida = registro.querySelector(".saida").textContent;
    const chegada = registro.querySelector(".chegada").textContent;
    const rota = registro.querySelector(".rota").textContent;
    const recusados = registro.querySelector(".recusados").textContent;
    const quebrados = registro.querySelector(".quebrados").textContent;
    const danificados = registro.querySelector(".danificados").textContent;
    const vencidos = registro.querySelector(".vencidos").textContent;
    const registroString = `${data} - Saída: ${saida} - Chegada: ${chegada} - Rota: ${rota} - Recusados: ${recusados} - Quebrados: ${quebrados} - Danificados: ${danificados} - Vencidos: ${vencidos}`;
    doc.text(registroString, 10, y);
    y += 10;
  });
  doc.save("registros.pdf");
}
