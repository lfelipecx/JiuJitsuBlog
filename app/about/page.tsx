import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <div className="px-4 py-5 sm:px-96 sm:py-40 flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl font-semibold">Sobre</h1>
      <p className="text-center text-lg">
        Meu nome é Luiz Felipe sou faixa roxa de jiu-jitsu e treino na equipe
        RojerãoJJ/Juquinha, sou de Brasília-DF, tenho 35 anos e treino a mais de 5 anos. Meu intuito é falar de jiu-jitsu e unir cada vez mais nossa comunidade e abrir portas para novos lutadores.
      </p>
      <div className="flex gap-5">
        <Link className="hover:text-gray-700" href="https://www.instagram.com/lfelipecx/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link className="hover:text-gray-700" href="https://x.com/Felipe_23_BfR" target="_blank">
          <TwitterIcon />
        </Link>
        <Link className="hover:text-gray-700" href="https://www.linkedin.com/in/lfelipecx/" target="_blank">
          <LinkedinIcon />
        </Link>
      </div>
    </div>
  );
};

export default About;
