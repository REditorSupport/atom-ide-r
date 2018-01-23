const cp = require("child_process");
const { AutoLanguageClient } = require("atom-languageclient");

class PythonLanguageClient extends AutoLanguageClient {
  getGrammarScopes() {
    return ["source.r"];
  }
  getLanguageName() {
    return "R";
  }
  getServerName() {
    return "rls";
  }
  startServerProcess(projectPath) {
    const childProcess = cp.spawn(
        atom.config.get("ide-r.RPath"),
        [
            "--quiet", "--slave", "-e", "languageserver::run(debug=T)"
        ], {
            cwd: projectPath,
            PATH: process.env.PATH
    })
    childProcess.on("error", err =>
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
    );
    return childProcess;
  }
}

module.exports = new PythonLanguageClient();
