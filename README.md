# Task App

## Principais Requisitos

- Interface Básica: Crie uma interface básica com um cabeçalho que exiba o título "Painel de Tarefas" e uma área onde as tarefas serão exibidas.

- Adicionar Tarefa: Forneça um campo de entrada de texto - input - um botão que permita ao usuário adicionar novas tarefas e um campo de opções onde o usuário possa classificar a prioridade da tarefa. Ao adicionar uma tarefa, ela deverá aparecer na lista seguindo as regras de listagem.

-  Lista de Tarefas: Exiba a lista de tarefas, cada uma com uma caixa de seleção que permita marcar a tarefa como concluída. A listagem deve ser exibida seguindo a ordem de prioridade de forma decrescente. As tarefas não concluídas devem ser exibidas com um estilo diferente das tarefas concluídas.

- Remover Tarefa: Ao lado de cada tarefa, adicione um botão de remoção que permita ao usuário remover a tarefa da lista. Não podem ser removidas tarefas que já estão concluídas.

- Editar Tarefa: Ao lado de cada tarefa, adicionar um botão que habilite a edição das informações da tarefa onde o campo de entrada de texto - input - deve exibir o texto atual, mas deve permitir sua alteração. Ao clicar fora do campo de entrada de texto, ou esse perder o foco, ou caso o usuário clique na tecla enter, a edição deve ser finalizada e os dados da tarefa atualizada.

- Filtros de Tarefas: Inclua um filtro com opções para mostrar apenas tarefas concluídas, não concluídas ou todas as tarefas; e um filtro com as opções das prioridades para mostrar apenas as tarefas que estão com a prioridade selecionada ou todas. Os filtros devem atuar em conjunto durante o processo de listagem das tarefas

- Responsividade: Certifique-se de que a interface seja responsiva e se ajuste bem em dispositivos móveis e desktops.

- Persistência de Dados: As tarefas devem ser mantidas mesmo após o usuário sair e voltar à aplicação, fica ao seu critério usar localstorage ou api externa. Porém deverá ser criado uma interface para se comunicar com a persistência, seja local ou externa.

## Bônus

Todos os Bônus serão executados

- Incluir esquema controle de acesso de usuário utilizando alguma estratégia de login, podendo ser ele de implementação pŕopria ou consumo de API externa, a exemplo via OAuth2 do Google, ou do Facebook ou do Github e afins. Importante que seja considerada a questão de segurança dos dados assim como a sua persistência. Ao usuário realizar o login na aplicação, todas as informações por ele realizadas em sua última sessão, as tarefas e seus estados, devem ser recuperados e exibidos conforme os critérios acima listados.

- A persistência das informações relacionadas às tarefas de um usuário pode ser realizadas via integração com API’s externas a solução pretendida. Poderão ser utilizadas API’s com a finalidade de testes, em que dados fictícios são fornecidos para atender as necessidades durante o desenvolvimento e validação da aplicação. Um exemplo desse tipo de API é a [mockapi.io](https://mockapi.io/). O objetivo é que toda a lógica das ações de criar, atualizar, excluir e listar tarefas sejam realizadas via API externa à aplicação, ficando a cargo da aplicação apenas a exibição, envio dos dados e a interação do usuário na gestão de suas tarefas, conforme os critérios anteriormente listados.

- Lançamento da aplicação na rede mundial de computadores e disponibilização do link público que aponta para a solução desenvolvida. Podem ser utilizadas plataformas gratuitas para esse fim como [vercel](https://vercel.com/) , [netlify](https://www.netlify.com), [heroku](https://www.heroku.com/) ou outra de seu conhecimento, não importando o domínio e a URL . Observação: Só será considerado esse item se o resultado apresentado no link público tenha sido fornecido e seja igual ao resultado apresentado durante a finalização do desafio.


## Instruções para executar - ambiente dev
