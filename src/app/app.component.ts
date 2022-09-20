import { Component, ViewChild } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import {
  MonacoEditorComponent,
  MonacoEditorConstructionOptions,
  MonacoEditorLoaderService,
  MonacoStandaloneCodeEditor,
} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent;
  editorOptions: MonacoEditorConstructionOptions = {
    language: 'xml',
    roundedSelection: true,
    autoIndent: 'full',
  };
  code = this.getCode();

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {
    this.monacoLoaderService.isMonacoLoaded$
      .pipe(
        filter((isLoaded) => isLoaded),
        take(1)
      )
      .subscribe(() => {});
  }

  editorInit(editor: MonacoStandaloneCodeEditor) {}

  getCode() {
    return (
      // tslint:disable-next-line: max-line-length
      '<html><!-- // !!! Tokens can be inspected using F1 > Developer: Inspect Tokens !!! -->\n<head>\n	<!-- HTML comment -->\n	<style type="text/css">\n		/* CSS comment */\n	</style>\n	<script type="javascript">\n		// JavaScript comment\n	</' +
      'script>\n</head>\n<body></body>\n</html>'
    );
  }
}
