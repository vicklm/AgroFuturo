# Azle Hello World

-   [Installation](#installation)
-   [Deployment](#deployment)
-   [Examples](#examples)

Azle helps you to build secure decentralized/replicated servers in TypeScript or JavaScript on [ICP](https://internetcomputer.org/). The current replication factor is [13-40 times](https://dashboard.internetcomputer.org/subnets).

For more documentation please see [The Azle Book](https://demergent-labs.github.io/azle/).


Please remember that Azle is in beta and thus it may have unknown security vulnerabilities due to the following:

-   Azle is built with various software packages that have not yet reached maturity
-   Azle does not yet have multiple independent security reviews/audits
-   Azle does not yet have many live, successful, continuously operating applications deployed to ICP


AGROFUTURO es un sistema diseñado para optimizar los procesos en los ranchos ganaderos, agilizando el control de entradas y salidas del ganado, mejorando la gestión de la información y facilitando las transacciones dentro de los mismos ranchos con un enfoque en la movilidad.

Problemática y Enfoque
El sector ganadero en Aguascalientes se enfrenta a numerosos desafíos, desde problemas con los cultivos forrajeros hasta la competencia con importaciones y enfermedades. Entre estos desafíos, destaca la necesidad apremiante de mejorar el control del ganado, que impacta en la seguridad alimentaria, pérdidas económicas y la reputación del sector. AGROFUTURO busca resolver las dificultades relacionadas con el rastreo, la seguridad y la eficiencia en la gestión del ganado, mediante un sistema integral y adaptable a cualquier rancho.

Ventajas
Escalabilidad: AGROFUTURO es escalable en múltiples áreas de la operación ganadera.
Eficiencia: Permite identificar y corregir eficientemente errores.
Monetización mediante criptomonedas: Ofrece beneficios tanto para nosotros como proveedores, al permitir la monetización mediante criptomonedas.
Adaptabilidad: Es adaptable a diversos sectores y procesos.
Amplio alcance: Ofrece un amplio alcance y posibilidad de expansión según las necesidades.

Reportes por Entregar
Registro de existencias ganaderas
Movimientos de ganado
Registro de medicamentos y tratamientos
Registro de vacunaciones
Reportes de bienestar animal
Reportes de sanidad animal

Estrategia de Implementación
Análisis de requisitos y objetivos.
Selección de tecnología.
Planificación de la implementación.
Prueba y evaluación piloto.
Implementación gradual.
Monitoreo y ajuste.
Optimización continua.

Funciones
Identificación y solución eficiente de errores.
Transacciones.
Seguimiento de salud.
Registro de usuarios.
Control y gestión de ganado.

Instalación y Uso
Para instalar y utilizar AGROFUTURO, sigue los siguientes pasos:
Clonar el repositorio: git clone https://github.com/vicklm/AgroFuturo.git
Requisitos del Sistema: Asegúrate de cumplir con los requisitos del sistema especificados en la documentación.
Descarga: Descarga el paquete de instalación desde nuestro repositorio oficial.
Instalación: Sigue las instrucciones de instalación proporcionadas en el archivo README.md del repositorio.
Configuración: Configura AGROFUTURO según las necesidades de tu rancho ganadero.
Uso: Consulta la documentación para aprender cómo utilizar las diferentes funciones y características de AGROFUTURO. 

## Installation

> Windows is only supported through a Linux virtual environment of some kind, such as [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

On Ubuntu/WSL:

```bash
sudo apt-get install podman
```

On Mac:

```bash
brew install podman
```

It's recommended to use nvm and Node.js 20:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Restart your terminal and then run:

```bash
nvm install 20
```

Check that the installation went smoothly by looking for clean output from the following command:

```bash
node --version
```

Install the dfx command line tools for managing ICP applications:

```bash
DFX_VERSION=0.16.1 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

Check that the installation went smoothly by looking for clean output from the following command:

```bash
dfx --version
```

If after trying to run `dfx --version` you encounter an error such as `dfx: command not found`, you might need to add `$HOME/bin` to your path. Here's an example of doing this in your `.bashrc`:

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

## Deployment

```bash
npx azle new hello_world
cd hello_world

npm install

dfx start --clean --host 127.0.0.1:8000
```

In a separate terminal in the `hello_world` directory:

```bash
dfx deploy
```

If you are building an HTTP-based canister and would like your canister to autoreload on file changes (DO NOT deploy to mainnet with autoreload enabled):

```bash
AZLE_AUTORELOAD=true dfx deploy
```

If you have problems deploying see [Common deployment issues](https://demergent-labs.github.io/azle/deployment.html#common-deployment-issues).

View your frontend in a web browser at `http://[canisterId].localhost:8000`.

To obtain your application's [canisterId]:

```bash
dfx canister id backend
```

Communicate with your canister using any HTTP client library, for example using `curl`:

```bash
curl http://[canisterId].localhost:8000/db
curl -X POST -H "Content-Type: application/json" -d "{ \"hello\": \"world\" }" http://[canisterId].localhost:8000/db/update
```

## Examples

There are many Azle examples in the [examples directory](https://github.com/demergent-labs/azle/tree/main/examples). We recommend starting with the following:

-   [apollo_server](https://github.com/demergent-labs/azle/tree/main/examples/apollo_server)
-   [ethers](https://github.com/demergent-labs/azle/tree/main/examples/ethers)
-   [express](https://github.com/demergent-labs/azle/tree/main/examples/express)
-   [fs](https://github.com/demergent-labs/azle/tree/main/examples/fs)
-   [hello_world](https://github.com/demergent-labs/azle/tree/main/examples/hello_world)
-   [ic_evm_rpc](https://github.com/demergent-labs/azle/tree/main/examples/ic_evm_rpc)
-   [sqlite](https://github.com/demergent-labs/azle/tree/main/examples/sqlite)
-   [web_assembly](https://github.com/demergent-labs/azle/tree/main/examples/web_assembly)
