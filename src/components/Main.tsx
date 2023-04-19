export const Main = () => {
  return (
    <div className="flex-1 bg-white p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-1">Alexandre Gomes Merched</h1>
          <p>Desenvolvedor FullStack | React e NodeJs | Aluno na Unimeta</p>
          <address className="text-gray-400 not-italic">Rio Branco, Acre, Brasil</address>
        </div>

        <img
          className="rounded-full w-32 h-32 object-cover"
          src="https://github.com/artismyname.png"
        />
      </div>

      <h2 className="my-2 text-xl">Experiência</h2>
      <h3>Royal Advice</h3>
      <p>Desenvolvedor De Programas Web e App Mobile</p>
      <p className="text-xs">novembro de 2020 - abril de 2023</p>
      <address className="text-xs text-gray-400 not-italic">Rio Branco, Acre, Brasil</address>

      <hr className="border-gray-700 my-6 w-14" />

      <h2 className="my-2 text-xl">Formação acadêmica</h2>
      <h3>Unimeta - Centro Universitário</h3>
      <p className="text-sm">Bacharelado, Tecnologia em Tecnologia da Informação/Sistemas da Informação</p>
      <p className="text-xs mt-1">fevereiro de 2020 - novembro de 2024</p>

      <h3 className="mt-6">Instituto Federal de Educação, Ciência e Tecnologia do Acre - IFAC</h3>
      <p className="text-sm">Ensino Médio Profissionalizante (Pós-médio), Gerenciamento de Sistemas,
        Redes e LAN/WAN</p>
      <p className="text-xs mt-1">fevereiro de 2017 - novembro de 2019</p>
    </div>
  )
}