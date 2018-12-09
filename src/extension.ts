"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const changedVisibleTextEditorsListener = vscode.window.onDidChangeVisibleTextEditors(
    () => {
      const tab = vscode.window.activeTextEditor;
      if (tab) {
        vscode.commands.executeCommand(`editor.foldAllMarkerRegions`);
      }
    }
  );

  context.subscriptions.push(changedVisibleTextEditorsListener);
}

// this method is called when your extension is deactivated
export function deactivate() {}
