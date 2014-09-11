#Introduzione a docker



##Cos'è docker?

Prima definizione approssimativa: sistema di
virtualizzazione.  Non virtualizza l'hardware, ma la
userland.



##Perché è stato creato

Per risolvere il problema del deployare applicazioni.
docker standardizza un formato di container.

Lo sviluppatore si preoccupa di costruire un ambiente
all'interno del quale la sua applicazione gira.

Il sistemista prende il container creato e lo deploya sul
server.



##Le entità nel mondo docker

####Il container

È l'ambiente di isolamento. Ha un filesystem suo, processi
suoi, interfacce network sue etc.
È la "combinazione" di un'immagine e un processo.

####L'immagine

È un template read-only che descrive l'ambiente isolato.
Viene costruita attravero la compilazione di un
`Dockerfile`.

####Il Dockerfile

È una lista di istruzioni per costruire un'immagine.



##L'architettura di docker

####Il demone docker

Ascolta su un socket (unix o tcp) e "parla" HTTP.

Esempio: `GET /containers/json`

####docker cli

È l'interfaccia canonica sul demone.

Esempio: `docker ps`

####Il registro (pubblico) delle immagini

[hub.docker.com](https://hub.docker.com)



##Vantaggi e svantaggi

####Vantaggi
- Isolamento dei processi a basso costo
- Universalità degli ambienti creati

####Svantaggi
- Tecnologia immatura (v1.2.0)
- Ecosistema in sviluppo



##Esempio

Supponiamo che io voglia deployare un'applicazione node
"hello world". Escludendo una soluzione di tipo PaaS,
l'approccio tradizionale prevede i seguenti step:

1. creare una macchina virtuale
1. installare l'occorrente per far girare l'applicazione (in
   questo caso nodejs)
1. scaricare l'applicazione
1. farla partire

Supponiamo di voler far partire un'altra istanza
dell'applicazione, ma con una configurazione diversa.

Ci sono due modi:

- riutilizzare la macchina virtuale esistente
- creare un'altra macchina virtuale

Il più conveniente dal punto di vista della gestione è il
secondo, ma è un approccio costoso e lento.

Docker in buona sostanza rende questo approccio economico e
veloce.
