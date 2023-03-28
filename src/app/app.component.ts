import { Component, ViewChild } from '@angular/core';
import {
  MonacoEditorComponent,
  MonacoEditorConstructionOptions,
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
    language: 'html', // java, javascript, python, csharp, html, markdown, ruby
    theme: 'vs-dark', // vs, vs-dark, hc-black
    automaticLayout: true,
  };
  code = this.getCode();

  getCode() {
    return (
      '<html><!-- // !!! Tokens can be inspected using F1 > Developer: Inspect Tokens !!! -->\n<head>\n	<!-- HTML comment -->\n	<style type="text/css">\n		/* CSS comment */\n	</style>\n	<script type="javascript">\n		// JavaScript comment\n	</' +
      'script>\n</head>\n<body></body>\n</html>'
    );
  }
}
