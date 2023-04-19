import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export const Footer = () => {
  return (
    <div className="text-white p-8 pb-4 bg-gray-700">
      <h2 className="mb-2">Contato</h2>
      <ul className="flex flex-col text-xs mb-4 gap-1">
        <li className="mb-2">4lex4andre@gmail.com</li>
        <li>
          <a href="https://linkedin.com/in/alexandremerched" className="flex items-center w-fit gap-1" target="_blank">
            <LinkedinLogo size={16} color='white' />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/artismyname" className="flex items-center w-fit gap-1" target="_blank">
            <GithubLogo size={16} color='white' />
            <span>GitHub</span>
          </a>
        </li>
      </ul>

      <h2 className="mb-2">Principais competências</h2>
      <ul className="flex flex-col text-xs gap-1 mb-4">
        <li>Desenvolvimento FullStack</li>
        <li>Suporte de TI</li>
      </ul>

      <h2 className="mb-2">Certificados</h2>
      <ul className="text-xs">
        <li>EFSET English Certificate 54/100 (B2 Upper Intermediate)</li>
      </ul>

      <hr className="border-white mt-7 mb-4 w-14" />

      <h2 className="mb-4">Tecnologias</h2>
      <h3 className="text-sm mb-1">Tenho Experiência</h3>
      <p className="text-xs mb-4">HTML5, JavaScript, CSS3, Git, GitHub, MongoDB, GraphQL, Tailwind, React Native, ReactJS, Expo, Office, Manutenção de Computadores.</p>

      <h3 className="text-sm mb-1">Estou Estudando</h3>
      <p className="text-xs mb-4">MySQL, Amazon Web Services, Django, Python, NextJS, Firebase, Google Cloud Platform, Node.JS, Java, PostgreSQL, Socket.io.</p>
    </div>
  )
}