
# Versão Mobile ComicGhost
Explicação sobre a organização do código, e os comando par rodar o capacitor

## Estrutura
A pasta ```www``` é a pasta principal, reune toda a estrutura, é ela quem a configuração do capacitor chama

#### ``` index.html ```
- arquivo principal, a partir dele deve ser possível navegar para outras páginas da aplicação
#### ``` assets/. ```
- todas as imagens da aplicação devem ficar nesse diretório
#### ``` css/. ```
- todo código de estilização para a aplicação
#### ``` js/. ```
- deve armazenar os códigos de interação com usuário e ações da tela


## Configurando o Capacitor
```
npm init -y
```

Instalar Capacitor
```bash
npm install @capacitor/core @capacitor/cli
```

Inicializar Capacitor, appId e appName do arquivo capacitor.config.json
```
npx cap init
```

Adicionando Plataforma Android
```
npm install @capacitor/android
npx cap add android
```
Obs: ``` npx cap sync ``` serve para sincronizar o Capacitor com as mudanças dos arquivos

## Execução 
* Executar com emulador/dispositivo (pelo Android Studio):
```
npx cap open android
```
* Executar no navegador
```
npx cap serve
```