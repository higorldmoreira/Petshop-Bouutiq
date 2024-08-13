<h1>Pet Boutique</h1>
<h2>Visão Geral do Projeto</h2>
<h3>Nome do Projeto:</h3>
<p>Pet Boutique</p>
<h3>Descrição:</h3>
<p>O site da Pet Boutique oferece uma plataforma online para um negócio especializado em serviços e produtos para animais de estimação. O objetivo principal do site é promover serviços como banho e tosa, atendimento veterinário, dog walker, creche pet, e também a venda de produtos premium para cães e gatos.</p>
<h3>Objetivo:</h3>
<p>Fornecer uma experiência online agradável e informativa que reflita a elegância e o cuidado da Pet Boutique, aumentando a visibilidade online e atraindo novos clientes.</p>
<h2>Estrutura de Arquivos e Pastas</h2>
<pre><code>
  / (Raiz do Projeto)
 ├── index.html                # Página principal
 ├── /assets                   # Pasta de ativos
 │   ├── /css                  # Estilos CSS
 │   │   └── style.css         # Arquivo principal de estilos
 │   ├── /img                  # Imagens e ícones
 │   │   └── favicon.png       # Favicon do site
 │   ├── /js                   # Scripts JavaScript
 │   │   └── script.js         # Arquivo principal de scripts
 │   └── /fonts                # Fontes personalizadas (se houver)
 ├── /docs                     # Documentação
 │   └── README.md             # Documento principal
 └── /vendor                   # Dependências de terceiros (Bootstrap, Font Awesome)
     ├── bootstrap/            # Bootstrap CSS e JS
     └── font-awesome/         # Font Awesome ícones
</code></pre>
<h2>Instruções de Configuração</h2>
<h3>Requisitos</h3>
<ul>
<li><strong>Editor de Código:</strong> Qualquer editor de texto (Visual Studio Code, Sublime Text, etc.).</li>
<li><strong>Navegador:</strong> Navegador moderno (Chrome, Firefox, Safari).</li>
<li><strong>Dependências:</strong> Bootstrap v5.3 e Font Awesome v6.4.0 (inclusos na pasta <code>vendor</code>).</li>
</ul>
<h3>Configuração Local</h3>
<ol>
<li><strong>Clone o repositório:</strong>
<pre><code>git clone https://github.com/usuario/pet-boutique.git</code></pre>
</li>
<li><strong>Navegue até a pasta do projeto:</strong>
<pre><code>cd pet-boutique</code></pre>
</li>
<li><strong>Abra o arquivo <code>index.html</code> no navegador:</strong> 
<p>Você pode abrir diretamente no navegador ou usar uma extensão de servidor local, como o Live Server no VS Code.</p>
</li>
</ol>
<h2>Estrutura do Código</h2>
<h3>HTML (<code>index.html</code>)</h3>
<ul>
<li><strong>Descrição:</strong> Contém a estrutura principal do site, incluindo cabeçalho, seções de serviços, marcas, e rodapé.</li>
<li><strong>Organização:</strong>
<ul>
<li><code>&lt;header&gt;</code>: Contém o logotipo e o banner principal.</li>
<li><code>&lt;main&gt;</code>: Contém as seções de serviços, marcas, e localização.</li>
<li><code>&lt;footer&gt;</code>: Contém links de redes sociais e informações de copyright.</li>
</ul>
</li>
</ul>

<h3>CSS (<code>style.css</code>)</h3>
<ul>
<li><strong>Descrição:</strong> Estilos personalizados do site.</li>
<li><strong>Organização:</strong>
<ul>
<li><strong>Global:</strong> Reseta estilos, fontes globais.</li>
<li><strong>Header:</strong> Estilos para cabeçalho e banner.</li>
<li><strong>Main Content:</strong> Estilos para as seções de serviços, marcas, e localização.</li>
<li><strong>Footer:</strong> Estilos para o rodapé.</li>
</ul>
</li>
</ul>

<h3>JavaScript (<code>script.js</code>)</h3>
<ul>
<li><strong>Descrição:</strong> Contém scripts para animações, preloader, e scroll suave.</li>
<li><strong>Funções Principais:</strong>
<ul>
<li><strong>Preloader:</strong> Remove o preloader após o carregamento da página.</li>
<li><strong>Scroll Suave:</strong> Implementa animação de rolagem suave ao clicar em âncoras.</li>
<li><strong>Animação de Fade-In:</strong> Adiciona animações de fade-in quando os elementos entram na viewport.</li>
</ul>
</li>
</ul>

<h2>Guia de Estilo</h2>

<h3>Convenções de Código</h3>

<ul>
<li><strong>HTML:</strong>
<ul>
<li>Use tags semânticas como <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>.</li>
<li>Indente o código usando 2 espaços.</li>
<li>Utilize comentários para seções e componentes principais.</li>
</ul>
</li>
<li><strong>CSS:</strong>
<ul>
<li>Nomes de classes em formato <code>kebab-case</code> (ex: <code>.box-topo</code>).</li>
<li>Agrupe propriedades relacionadas e use comentários para seções.</li>
<li>Use variáveis CSS para cores e fontes, se aplicável.</li>
</ul>
</li>
<li><strong>JavaScript:</strong>
<ul>
<li>Utilize <code>const</code> e <code>let</code> para declaração de variáveis.</li>
<li>Funções nomeadas e bem comentadas.</li>
<li>Evite globalizações; encapsule o código em funções ou use módulos.</li>
</ul>
</li>
</ul>

<h2>SEO e Acessibilidade</h2>

<h3>SEO</h3>
<ul>
<li><strong>Meta Tags:</strong> Títulos e descrições otimizados.</li>
<li><strong>URLs Amigáveis:</strong> Use URLs claras e descritivas.</li>
<li><strong>Imagens:</strong> Use atributos <code>alt</code> descritivos para todas as imagens.</li>
</ul>

<h3>Acessibilidade</h3>
<ul>
<li><strong>Imagens:</strong> Todas as imagens incluem <code>alt</code> text.</li>
<li><strong>Contraste de Cores:</strong> As cores de fundo e texto garantem legibilidade.</li>
<li><strong>Títulos:</strong> Estrutura lógica dos cabeçalhos (<code>h1</code>, <code>h2</code>, <code>h3</code>).</li>
</ul>

<h2>Manutenção e Atualizações</h2>

<h3>Futuras Melhorias</h3>
<ul>
<li><strong>Novos Recursos:</strong> Adicionar funcionalidades de e-commerce, blog, ou agendamento online.</li>
<li><strong>Atualizações de Dependências:</strong> Manter Bootstrap e Font Awesome atualizados.</li>
</ul>

<h3>Problemas Conhecidos</h3>
<ul>
<li><strong>Compatibilidade Cross-Browser:</strong> Testado em navegadores modernos; IE não é totalmente suportado.</li>
</ul>

<h3>Como Contribuir</h3>
<ol>
<li><strong>Fork o repositório.</strong></li>
<li><strong>Crie uma nova branch</strong> para sua feature ou bugfix.</li>
<li><strong>Faça um pull request</strong> com uma descrição clara das mudanças.</li>
</ol>

<h2>Contato</h2>
<p><strong>Desenvolvedor:</strong></p>
<ul>
<li><strong>Nome:</strong> Higor Moreira</li>
<li><strong>E-mail:</strong> higorldmoreira@gmail.com</li>
<li><strong>GitHub:</strong> <a href="https://github.com/higorldmoreira" target="_blank">github.com/higorldmoreira</a></li>
</ul>
</div>
