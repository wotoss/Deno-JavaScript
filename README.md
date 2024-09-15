# Treinamento em CRUD em JavaScript usando Deno - Material de estudo.

## Descrevendo
Estudamos a documentação O Deno é um ambiente de execução de JavaScript e TypeScrip. Nesta caso usamos Java Script.
Projeto foi feita parte de um CRUD.
Criada uma Lista armazenando na base de dados do seu navegador "localStorage".

Podemos cadastrar (tarefas) e tambem excluir esta tarefas.
Se expessionar o seu navegador verá a "manipulação" completa do seu armazenamento localStorage.


## Ao Usar localStorage é importante saber.
Este projeto demonstra o uso do `localStorage` no navegador Chrome para armazenar e recuperar dados localmente. O `localStorage` é uma API do navegador que permite armazenar dados persistentes no lado do cliente, mesmo após o fechamento do navegador, desde que seja o mesmo navegador e dispositivo.

## Como Funciona

- **Armazenamento Local (localStorage):** O `localStorage` é uma forma de salvar dados localmente no navegador. Ele mantém as informações salvas mesmo quando a aba ou o navegador é fechado, desde que você esteja utilizando o mesmo navegador (Chrome, por exemplo) e o mesmo dispositivo.
  
- **Persistência de Dados:** Se você desligar o computador e ligá-lo novamente, o `localStorage` ainda terá os dados que foram armazenados previamente, pois os dados são persistentes enquanto o navegador (no caso, o Chrome) não for desinstalado ou os dados do `localStorage` forem manualmente apagados.

- **Limitações do Navegador:** O `localStorage` é específico por navegador. Por exemplo:
  - Se os dados forem armazenados no Chrome, eles não estarão disponíveis no Firefox ou em outros navegadores.
  - Se você abrir outro navegador (como o Firefox ou Edge), os dados salvos no `localStorage` do Chrome não estarão presentes lá, pois cada navegador mantém seu próprio banco de dados local.

## Instalação 
Deno (opcional em sua maquina).
Mas pode abrir o projeto simplesmente que "o servidor subirá" sem maiores questionamento.

