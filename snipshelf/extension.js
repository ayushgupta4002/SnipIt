// The module 'vscode' contains the VS Code extensibility API

// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

let ApiKey = "";
async function activate(context) {
  //@ts-ignore
  const secrets = context["secrets"]; //SecretStorage-object
  //Get a secret

  console.log('Congratulations, your extension "snipshelf" is now active!');


  
  let disposable1 = vscode.commands.registerCommand(
    "snipshelf.auth",
    async function () {
      const mySecret = await secrets.get("user");
      vscode.window
        .showInputBox({ prompt: "Enter your Api Key:", value:mySecret})
        .then((key) => {
          if (!key) return; // User canceled the input box
          authenticateUser(key)
            .then(async (resp) => {
              console.log(resp);
              vscode.window.showInformationMessage("auth success");
              await secrets.store("user", resp.API_token); //Save a secret
              await secrets.store("userName", resp.userName); //Save a secret


              // context.secrets.store('warehouse.ApiKey', key);
            })
            .catch((error) => {
              vscode.window.showErrorMessage(
                "Authentication failed: " + error.message
              );
            });
        });
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "snipshelf.helloWorld",
    async function () {
      const mySecret = await secrets.get("user");
      console.log("console from helloworld ~~" + mySecret)
      if (!mySecret) {
        vscode.window.showErrorMessage(
          "Authentication failed: Please use snip:auth command to authenticate again!  "
        );
        return;
      }
      vscode.window.showInformationMessage(
        "Hello World from Snipshelf!" 
      );
    }
  );

  let disposable3 = vscode.commands.registerCommand(
    "snipshelf.push",
    async function () {
      const mySecret = await secrets.get("user");
      const userName = await secrets.get("userName");

      console.log(mySecret);
      if (mySecret == undefined) {
        vscode.window.showErrorMessage(
          "Authentication failed: Please use snip:auth command to authenticate again!  "
        );
        return;
      }
      const editor = vscode.window.activeTextEditor;
      const selected = editor.selection;
      const text = editor.document.getText(selected);
      vscode.window
        .showInputBox({ prompt: "Enter your Name for snippet:" })
        .then((name) => {
          pushSnippet(text, userName, name)
            .then((resp) => {
              vscode.window.showInformationMessage(
                "Snippet Pushed Successfully!"
              );
            })
            .catch((error) => {
              vscode.window.showErrorMessage(error.message);
            });
        });

      // vscode.window.showInformationMessage(text);
    }
  );

  let disposable4 = vscode.commands.registerCommand(
    "snipshelf.pull",
    async function () {
      const editor = vscode.window.activeTextEditor; // Get the active text editor
      if (!editor) {
        vscode.window.showErrorMessage("No active text editor found.");
        return;
      }
     SnippetsData = fetchData();


      const menu = await vscode.window.showQuickPick(SnippetsData, {
        matchOnDetail: true,
      });
      if (menu == null) return;
      const selection = editor.selection;
      const newPosition = selection.end; // Get the end position of the current selection

      editor.edit((builder) => builder.insert(newPosition, menu.detail));
    }
  );
  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
  context.subscriptions.push(disposable3);
  context.subscriptions.push(disposable4);
}

function deactivate() {}

async function authenticateUser(key) {

  const bodyData = {
    token: key,
  };

  const res = await fetch(`http://localhost:3000/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  


  return new Promise(async(resolve, reject) => {
    if (res.status !== 200) {
      reject(new Error("Auth Failed"));
    } else {
      const data = res.json()
      resolve(data);
    }
  });
}

async function pushSnippet(text, userName , name) {
  const bodyData = {
    author: userName,
    snippet: text,
    name: name,
    description: "",
  };

  const res = await fetch(`http://localhost:3000/api/snippet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  return new Promise(async (resolve, reject) => {
    //   const data = await res.json();
    if (res.status !== 200) {
      reject(new Error("Error posting data"));
    } else {
      resolve();
    }
  });
}


async function fetchData() {
  const res = await fetch(`http://localhost:3000/api/snippet`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status != 200) {
    return;
  }
  const data = await res.json();
  const SnippetsData = data.map((data) => {
    return {
      label: data.name,
      detail: data.snippet,
    };
  });
  return SnippetsData;
}


module.exports = {
  activate,
  deactivate,
};
