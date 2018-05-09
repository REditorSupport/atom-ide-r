const cp = require("child_process");
const net = require('net');
const { AutoLanguageClient } = require("atom-languageclient");

class RLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.r", "source.gfm.rmd"];
  }
  getLanguageName() {
    return "R";
  }
  getServerName() {
    return "rls";
  }
  getConnectionType() {
    return "socket";
  }
  startServerProcess(projectPath) {
    return new Promise((resolve, reject) => {
      let childProcess
      const server = net.createServer(socket => {
        // When the language server connects, grab socket, stop listening and resolve
        this.socket = socket
        server.close()
        resolve(childProcess)
      })
      server.listen(0, '127.0.0.1', () => {
        // Once we have a port assigned spawn the Language Server with the port
        console.log("listening at ", server.address().port);
        childProcess = this.spawnServer(projectPath, server.address().port);
      })
    })
  }
  spawnServer(projectPath, port) {
    let cmd;
    if (atom.config.get('core.debugLSP') == true) {
      cmd =`languageserver::run(debug=TRUE,port=${port})`;
    } else {
      cmd =`languageserver::run(port=${port})`;
    }
    const childProcess = cp.spawn(
      atom.config.get("ide-r.RPath"),
      [
        "--quiet", "--slave", "-e", cmd
      ],
      {
        cwd: projectPath,
        PATH: process.env.PATH
      });
    childProcess.on("error", err => {
      atom.notifications.addError(
        "Unable to start the R language server.",
        {
          dismissable: true,
          buttons: [
            {
              text: "Install Instructions",
              onDidClick: () =>
                atom.workspace.open("atom://config/packages/ide-r")
            }
          ],
          description:
            "This can occur if Atom cannot find R or the server is not installed.\n\n " +
            "Make sure you have both R and languageserver installed.\n"
        }
      )
    });
    childProcess.on("close", code => {
      console.log('[rls] connection close');
    });
    return childProcess;
  }

}

module.exports = new RLanguageClient();
